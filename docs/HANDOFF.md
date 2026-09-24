# Devir Notu

Son güncelleme: 24 Eylül 2026

## Nerede kalındı

**24 Eylül 2026 — Sürüm 1.6.** Buğra Canata'nın (@bcanata) 20 Ağustos'tan beri bekleyen PR #1'i
birleştirildi (`b122c0b`, rebase ile, commit onun adıyla), ardından `0cfbb48` CHANGELOG'u ve
sürüm rozetlerini 1.6'ya çekti. PR'a teşekkür yorumu yazıldı. PR yalnız düz metin dosyalarını
düzeltti (`maddeler.json`, `index.html`, `Resmi_Kaynaklar_Linkler.md`): mülga 2813 Md.36 → 5809
Md.39, TAD 2018, MFP 2023, KTK Md.32, T/R 61-01 güncel baskısı, KEGM ücret tarifesi. Her biri
birleştirmeden önce birincil metinden teyit edildi (mevzuat.gov.tr PDF'leri, BTK TAD ve MFP
PDF'leri, CEPT docdb). GA-BAND-2 D etiketi oylanmış haliyle değişti; Sayım Raporu ve ham veri
**bilerek** değiştirilmedi, fark CHANGELOG'da yazılı.

**Sıradaki iş: issue #2** — aynı denetimin Office belgelerine (Analiz, Envanter, Tablo B, Sunum,
Oy Pusulası) ilişkin 22 maddelik kontrol listesi. **Kurum başvurularından önce yapılmalı**,
çünkü "Kritik" bölümündeki yanlış madde atıflarının bazıları Tablo B talep yazılarında:
5809 Md.51 (aslında kişisel veriler, 2014'te AYM iptal; spektrum izleme Md.40), KTK "73/c"
(böyle bent yok; telefon yasağı 73/1, cihaz kullanımı başlığı Md.72), Kıyı Kanunu "ilk 10 m",
milli parkların bakanlığı (2873 Md.2: Tarım ve Orman). 5809 Md.51/40 ve KTK Md.72/73 teyit
edildi; diğerleri henüz birincil metinden okunmadı. KTK Md.73/2 **12 Şubat 2026'da değişti**
(7574/25, ceza 5.000 TL) — GA-ARAC'a yansıtılmalı. Öneri sırası: önce Tablo B'deki kritik
atıflar, sonra Tablo A, en son Sunum/Oy Pusulası. Her belge değişikliği sürüm numarası ve
CHANGELOG kaydı ister (bkz. CLAUDE.md "Sürüm disiplini").

Önceki durum (11 Eylül):

Uzlaşı oylaması **kapandı, sonuçları yayımlandı ve Tablo B talep yazıları bu sonuçlara göre
yeniden düzenlendi (v1.2)**. Sıradaki iş kurum başvurularının yapılması.

Tablo B v1.2'de ne değişti: GA-3 ve GA-RX/Kanal talepleri (toplulukça "mevcut durumu koru"
oylandı) başvuru metninden çıkarılıp belgenin sonundaki Ek'e alındı — Taslak 12 tümüyle kalktı.
GA-SK açıklama talebine çevrildi. GA-ARAC ve GA-LORA düzenleme talebine yükseltildi, GA-AREDN
yazılı görüşe indirildi, GA-BAND-1'de iki talep birlikte iletiliyor. Kuruma giden talep 22'den
20'ye indi.

- Oylama 9 Ağustos'ta açıldı, duyurulan takvim uyarınca **8 Eylül 2026 23:59 (TSİ)** kapatıldı.
  Kapatma, Cloudflare'de `OYLAMA_ACIK` değişkeninin `0` yapılmasıyla yapıldı.
- **50 pusula, 1117 oy satırı, 22 maddenin tamamı.** Madde başına katılım 41–49.
  13 pusuladan 62 serbest görüş (E) geldi.
- Yayımlananlar: `Uzlasi_Oylamasi_Sayim_Raporu_v1.0.md` ve `Uzlasi_Oylamasi_Ham_Veri.csv`.
  Ham veri yayını oylama açılırken verilmiş bir sözdü.
- Raporu üreten betik depoda tutulmuyor; sayıların nasıl hesaplandığı raporun "Sayım usulü"
  bölümünde yazılı ve ham veriden yeniden hesaplanabilir.

## Açık kalanlar

0. **Issue #2 — Office belgelerindeki olgusal düzeltmeler.** Kurum başvurularından önce; yukarıya bak.
1. **Kurum başvuruları** Tablo B v1.2'deki taslaklarla yapılacak ve süreç kamuya açık izlenecek.
2. **Sunum ve Oy Pusulası hâlâ v1.3** ve oylamayı açık anlatıyor. Bir daha dağıtılacaksa
   kapanış durumuna göre gözden geçirilmeli.
3. **Tablo A (Analiz, Envanter) hâlâ v1.1.** GA-3 ve GA-RX/Kanal'ın artık talebe
   dönüştürülmediği bilgisi oraya işlenmedi; Tablo A sorun tespitini anlatmaya devam ediyor,
   bu tutarsızlık değil, ama bir daha elden geçirilirse not düşülebilir.

## Tuzaklar

- **GA-SK sonucu kırılgan.** Ham veride oy deseni birebir aynı üç pusula çifti var (ikisi bir
  dakikadan kısa arayla gönderilmiş, birinde serbest görüş metinleri de aynı). Kimlik
  toplanmadığı için mükerrer oy kanıtlanamıyor, bu yüzden sonuçlar bütün pusulalarla verildi.
  Ama bu çiftler çıkarılırsa GA-SK **A:22/D:21 yerine A:20/D:20 ile berabere kalıyor**.
  Diğer 21 maddede hiçbir değişiklik yok. Raporda ayrı bölüm olarak yazılı.
- **Süre sonrası bir pusula kabul edildi.** Kapatma anahtarı elle çevrildiği için sistem,
  ilan edilen sınırdan 68 dakika sonra bir pusula daha aldı. Sayıma dahil edildi; çıkarılması
  hiçbir maddede tercihi değiştirmiyor. Bir daha oylama yapılırsa kapanış saatinin otomatik
  olması gerekir.
- **Bir pusula 22 maddenin tamamına aynı metni bıraktı.** Çalışmanın durdurulmasını isteyen bu
  metin, taahhüt gereği rapora aynen girdi ama yirmi iki kez tekrarlanmadı; bir kez, gönderim
  zamanıyla verildi. Benzer durumda aynı yol izlenmeli.
- **Oylama durumu tek kaynaktan okunur.** `index.html` ve `oylama.html` açık/kapalı bilgisini
  Worker'daki `OYLAMA_ACIK`'tan alır. Sayfaların **statik metni kapalı durumu anlatır**, JS
  yalnızca açıkken davet metnine çevirir. HTML'e sabit "oylama açık" yazmayın.
- **`/ham` kapalılık kontrolü yapmıyor.** `worker.js` başlığında ve CLAUDE.md'de "yalnızca
  oylama kapandıktan sonra" yazıyor ama uçta `OYLAMA_ACIK` kontrolü yok. Oylama artık kapalı
  olduğu için pratik sonucu kalmadı; yeni bir oylama açılırsa düzeltilmeli.
- **E görüşleri `/ham` içinde yok.** CSV yalnız `oy` tablosunu veriyor. Serbest metinler
  `not_metni` tablosunda ve ancak D1 konsolundan alınabiliyor:
  `SELECT ga_kodu, metin, zaman FROM not_metni ORDER BY ga_kodu, zaman;`
- **`wrangler.toml` depoda yok** — Worker dashboard'dan yönetiliyor. `wrangler deploy`
  kullanılırsa `[vars]` bloğu dashboard'daki `OYLAMA_ACIK` değerini ezer.
