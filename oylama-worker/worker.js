/**
 * Uzlasi Oylamasi — Cloudflare Worker API
 * Kimlik yok, oturum yok, IP saklanmaz. Sadece oy sayilir.
 *
 * Uc uc nokta:
 *   POST /oy      { pusula: "uuid", oylar: [{kod,secim}], notlar: [{kod,metin}] }
 *   GET  /sonuc   -> { toplam_pusula, maddeler: { GA-1: {A:12,B:3,...}, ... } }
 *   GET  /ham     -> CSV (oylama kapandiktan sonra)
 */

const IZIN_VERILEN = [
  "https://ta3hrj.github.io",
  "http://localhost:8080",
];

function cors(origin) {
  const o = IZIN_VERILEN.includes(origin) ? origin : IZIN_VERILEN[0];
  return {
    "Access-Control-Allow-Origin": o,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

const json = (veri, origin, kod = 200) =>
  new Response(JSON.stringify(veri), {
    status: kod,
    headers: { "Content-Type": "application/json; charset=utf-8", ...cors(origin) },
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors(origin) });
    }

    // ---------- OY GONDER ----------
    if (url.pathname === "/oy" && request.method === "POST") {
      if (env.OYLAMA_ACIK !== "1") {
        return json({ hata: "Oylama kapali." }, origin, 403);
      }

      let govde;
      try {
        govde = await request.json();
      } catch {
        return json({ hata: "Gecersiz istek." }, origin, 400);
      }

      // Turnstile dogrulamasi (token varsa)
      if (env.TURNSTILE_SECRET) {
        const t = govde.turnstile;
        if (!t) return json({ hata: "Dogrulama eksik." }, origin, 400);
        const dogrula = await fetch(
          "https://challenges.cloudflare.com/turnstile/v0/siteverify",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ secret: env.TURNSTILE_SECRET, response: t }),
          }
        ).then((r) => r.json());
        if (!dogrula.success) return json({ hata: "Dogrulama basarisiz." }, origin, 403);
      }

      const pusula = String(govde.pusula || "").slice(0, 64);
      const oylar = Array.isArray(govde.oylar) ? govde.oylar.slice(0, 200) : [];
      const notlar = Array.isArray(govde.notlar) ? govde.notlar.slice(0, 30) : [];

      if (!pusula || oylar.length === 0) {
        return json({ hata: "Bos pusula." }, origin, 400);
      }

      // Ayni pusula numarasi daha once kullanildiysa reddet (kazara cift gonderim)
      const varMi = await env.DB.prepare("SELECT 1 FROM oy WHERE pusula = ? LIMIT 1")
        .bind(pusula).first();
      if (varMi) return json({ hata: "Bu pusula zaten gonderilmis." }, origin, 409);

      const zaman = new Date().toISOString();
      const ifadeler = [];

      for (const o of oylar) {
        const kod = String(o.kod || "").slice(0, 24);
        const secim = String(o.secim || "").slice(0, 1).toUpperCase();
        if (!kod || !"ABCDE".includes(secim)) continue;
        ifadeler.push(
          env.DB.prepare(
            "INSERT INTO oy (pusula, ga_kodu, secim, zaman) VALUES (?,?,?,?)"
          ).bind(pusula, kod, secim, zaman)
        );
      }

      for (const n of notlar) {
        const kod = String(n.kod || "").slice(0, 24);
        const metin = String(n.metin || "").trim().slice(0, 1000);
        if (!kod || !metin) continue;
        ifadeler.push(
          env.DB.prepare(
            "INSERT INTO not_metni (pusula, ga_kodu, metin, zaman) VALUES (?,?,?,?)"
          ).bind(pusula, kod, metin, zaman)
        );
      }

      if (ifadeler.length === 0) return json({ hata: "Gecerli oy yok." }, origin, 400);
      await env.DB.batch(ifadeler);
      return json({ tamam: true, sayi: ifadeler.length }, origin);
    }

    // ---------- CANLI SONUC ----------
    if (url.pathname === "/sonuc" && request.method === "GET") {
      const { results } = await env.DB.prepare(
        "SELECT ga_kodu, secim, COUNT(*) AS adet FROM oy GROUP BY ga_kodu, secim"
      ).all();

      const toplam = await env.DB.prepare(
        "SELECT COUNT(DISTINCT pusula) AS n FROM oy"
      ).first();

      const maddeler = {};
      for (const r of results) {
        (maddeler[r.ga_kodu] ||= {})[r.secim] = r.adet;
      }

      // Her madde icin kac pusulanin o maddeyi oyladigi
      const { results: kat } = await env.DB.prepare(
        "SELECT ga_kodu, COUNT(DISTINCT pusula) AS n FROM oy GROUP BY ga_kodu"
      ).all();
      const katilim = {};
      for (const r of kat) katilim[r.ga_kodu] = r.n;

      return json(
        { toplam_pusula: toplam?.n || 0, maddeler, katilim, acik: env.OYLAMA_ACIK === "1" },
        origin
      );
    }

    // ---------- HAM VERI (CSV) ----------
    if (url.pathname === "/ham" && request.method === "GET") {
      const { results } = await env.DB.prepare(
        "SELECT pusula, ga_kodu, secim, zaman FROM oy ORDER BY zaman, pusula"
      ).all();
      const satirlar = ["pusula,ga_kodu,secim,zaman"];
      for (const r of results) {
        satirlar.push(`${r.pusula},${r.ga_kodu},${r.secim},${r.zaman}`);
      }
      return new Response(satirlar.join("\n"), {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": 'attachment; filename="uzlasi_oylama_ham.csv"',
          ...cors(origin),
        },
      });
    }

    return json({ hata: "Bulunamadi." }, origin, 404);
  },
};
