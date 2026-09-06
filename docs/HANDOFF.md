# Devir Notu

Son güncelleme: 6 Eylül 2026

## Nerede kalındı

Uzlaşı oylaması **hâlâ açık** ve kapanışa hazırlanıyor.

- 6 Eylül 2026 itibarıyla **44 pusula / 965 oy satırı**.
- Sunum v1.3 slayt 32'de duyurulan takvim: toplantı (09.08.2026) + 2 hafta → kapanış. Yani
  söz verilen tarih ~23 Ağustos'tu; **iki hafta gecikildi**.
- Katılım tükendi: pusulaların 25'i toplantı günü, 16'sı 10–18 Ağustos arasında geldi.
  23 Ağustos'tan sonra toplam **3 pusula** (29 Ağu, 4 Eyl, 5 Eyl).
- Sonuçlar oturmuş: 22 maddenin 20'sinde lider seçenek 9+ farkla önde. Yakın olan ikisi
  **GA-BAND-1** (D:21 / C:20) ve **GA-SK** (A:20 / D:17) — sayım usulü gereği bu iki maddede
  her iki görüş de rapora yazılacak. Kalan katılım hacmi bunu değiştirecek düzeyde değil.

**6 Eylül'de yapılan:** siteye "Son 48 saat" duyurusu kondu — kapanış
**8 Eylül 2026 Salı 23:59 (TSİ)**. README'ye yayın sayfası bağlantısı eklendi (GitHub'ın
Deployments bölümü mobil arayüzde görünmüyor). Commit `f3c90eb`, yayında.

## Açık kalanlar

1. **Kapatma.** Cloudflare Dashboard → Workers & Pages → `uzlasi-oylama` → Settings →
   Variables and Secrets → `OYLAMA_ACIK`: `1` → `0` → Deploy. Doğrulama:
   `curl -s .../sonuc | grep -o '"acik":[a-z]*'` → `false`, ve `/oy` POST'u 403 dönmeli.
2. **Ham veri + sayım raporu yayını.** Sayfalarda söz verildi ("kapandığında CSV olarak
   paylaşılacaktır"). CSV `/ham` ucundan, notlar D1 konsolundan alınacak (aşağıya bakın).
3. **Tablo B dilekçelerinin topluluk tercihine göre güncellenmesi** (takvimde +3 hafta).
4. **CHANGELOG v1.4** — kapanış, sonuçlar ve ham veri yayını tek kayıtta yazılacak.
   Bilinçli olarak kapanışa bırakıldı.

## Tuzaklar

- **Oylama durumu tek kaynaktan okunur.** `index.html` ve `oylama.html` açık/kapalı bilgisini
  Worker'daki `OYLAMA_ACIK`'tan alır; HTML'e sabit "açık" ibaresi yazılmaz. "Son 48 saat"
  kutuları da bu yüzden `hidden` başlar ve yalnızca `acik:true` ise açılır — kapatınca
  kendiliğinden kalkarlar. Sabit metin yazarsanız bu tasarım bozulur.
- **`/ham` kapalılık kontrolü yapmıyor.** `worker.js` başlığında ve CLAUDE.md'de "yalnızca
  oylama kapandıktan sonra" yazıyor ama uçta `OYLAMA_ACIK` kontrolü yok; CSV oylama açıkken de
  indirilebiliyor. Kimlik verisi olmadığı için zararsız, ama söz ile kod uyuşmuyor.
- **E görüşleri `/ham` içinde yok.** CSV yalnız `oy` tablosunu veriyor; serbest metinler
  `not_metni` tablosunda (14 pusulada 69 E oyu). D1 konsolundan çekilecek:
  `SELECT ga_kodu, metin, zaman FROM not_metni ORDER BY ga_kodu, zaman;`
  `sema.sql`'in kendi notu gereği yayımdan önce kişisel bilgi (isim, çağrı işareti, e-posta)
  taraması şart.
- **`wrangler.toml` depoda yok** — Worker dashboard'dan deploy edilmiş görünüyor. İleride
  `wrangler deploy` kullanılırsa `[vars]` bloğu dashboard'daki `OYLAMA_ACIK` değerini ezer;
  o durumda değeri dosyaya da yazmak gerekir.
