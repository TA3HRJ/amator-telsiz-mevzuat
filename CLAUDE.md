# amator-telsiz-mevzuat

Türkçe konuş. Kullanıcı Türkçe çalışıyor.

Türkiye'de amatör telsizciliğe ilişkin dağınık mevzuatın derlendiği, gri alanların ve IARU/CEPT
boşluklarının belgelendiği tarafsız inceleme çalışması. Depo: `TA3HRJ/amator-telsiz-mevzuat`

Belge projesi + küçük bir oylama uygulaması. Çıktılar `.docx`, `.xlsx`, `.pptx`;
`index.html` yayın sayfası, `oylama.html` uzlaşı oylaması arayüzü.

## Tarafsızlık kısıtı — en önemli kural

Çalışma **hiçbir kurumun veya derneğin resmî görüşünü temsil etmez**; amacı camiaya açık,
tartışmaya ve oylamaya elverişli bir zemin sunmaktır. Metin üretirken veya düzenlerken taraf
tutan, bir kurumu suçlayan ya da sonucu peşinen veren ifade kullanma. Bir iddia birincil kaynağa
(Resmî Gazete, ITU/CEPT metni) dayanmıyorsa iddia olarak işaretlenir.

## Oylama altyapısı

`oylama-worker/` bir Cloudflare Worker'dır:

```
POST /oy      { pusula: "uuid", oylar: [{kod,secim}], notlar: [{kod,metin}] }
GET  /sonuc   -> { toplam_pusula, maddeler: { GA-1: {A:12,B:3,...}, ... } }
GET  /ham     -> CSV (yalnızca oylama kapandıktan sonra)
```

Tasarım gereği **kimlik yok, oturum yok, IP saklanmıyor** — sadece oy sayılıyor. Bu bir eksik
değil, bilinçli bir karar; kişi tanımlayıcı bir alan ekleme. CORS izinli kaynaklar `worker.js`
içinde `IZIN_VERILEN` dizisinde sabit.

Şema: `oylama-worker/sema.sql`. Madde kodları (`GA-*`) `maddeler.json`'da tanımlı ve belgelerle
eşleşmek zorunda.

## Sürüm disiplini

Dosya adları sürüm taşır (`_v1.1`, `_v1.3`). İçerik değişince sürüm de değişir; Temmuz 2026'da
dosya adı sabit kalıp içerik değiştiği için erken indirenler güncellemeleri kaçırmıştı.
Değişiklikler `CHANGELOG.md`'ye işlenir.

Düzeltilen en önemli hata: **FTM Teknik Ölçütler 2022'den beri yürürlüktedir** — ilk sürümlerde
"henüz yürürlüğe girmemiş taslak" sayılıyordu.

## Notlar

- Birincil kaynak bağlantıları `Resmi_Kaynaklar_Linkler.md` dosyasında toplu halde.
- Mevzuatın ham PDF arşivi `_shared/amator-radyo-mevzuat-arsivi/` altında.

## Oturum sonu

Anlamlı bir iş yaptıysan — bir karar verildi, bir şey kırılıp düzeldi, bir varsayım ölçüldü —
bitirmeden önce `docs/HANDOFF.md`'yi güncelle: nerede kalındı, ne açık kaldı, hangi tuzağa
düşüldü ve neden. Dosya yoksa oluştur.

Sohbet geçmişi kalıcı değildir. Repoda yazılı olmayan her şey oturumla birlikte gider.

## Git kimliği

Bu depoda kimlik **yerel** olarak ayarlı (`.git/config`); makinede global `.gitconfig` yok
ve olmamalı:

```
user.name  = TA3HRJ
user.email = TA3HRJ@users.noreply.github.com
```

Yerel olması kasıtlı — klasör başka bir makineye taşındığında commit atmak için hiçbir
kurulum gerekmiyor. Özel e-posta adresi kullanma; noreply adresi hem gerçek adresi gizler
hem de commit'lerin GitHub hesabına düzgün atfedilmesini sağlar.
