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

**24 Eylül 2026 — Sürüm 1.7.** Issue #2'nin **Tablo B'ye düşen kısmı bitti** (Tablo B v1.3).
Kurumlara gidecek metinlerdeki beş yanlış atıf, iddiayı doğrulayan birincil metin okunarak
düzeltildi:

| Düzeltme | Doğrulandığı kaynak |
|---|---|
| 6112'de yayın tanımı Md.2 değil **Md.3/1-ff**; "kamuya açık eş zamanlı içerik iletimi" ibaresi kanunda yok; tanım "bireysel iletişim hariç" içeriyor | arşivdeki RG metni |
| KTK'da "**73/c**" bent yok: yasak Md.73/1, ceza Md.73/2 (12/2/2026-7574/25), cihaz kullanımı Md.72, araç değişikliği Md.32 | mevzuat.gov.tr `1.5.2918.pdf` |
| Amatör Telsizcilik Yönetmeliği **18/3/2004-25406**'da yayımlandı, **18/7/2009-27292** ÖTSY Md.6 ile kaldırıldı | resmigazete.gov.tr `20090718-7` |
| KEGM Md.4/1-**e** amaç saymıyor (istasyon tanımı); amatörler için afet haberleşmesini tanımlayan bent **(a)** | arşivdeki RG metni |
| **2,4 GHz'de MFP'de amatör tahsisi yok** — "Amateur" yalnız ITU Bölge-1 sütununda | arşivdeki MFP s.93 |

Ayrıca GA-3'ün HAREC öncülü (Ek'te) doğrulanamadığı için şüpheli olarak işaretlendi.

**Sıradaki iş: issue #2'nin kalanı** — aynı düzeltmeler Analiz, Envanter, Sunum, Oy Pusulası ve
`maddeler.json`'da duruyor. Henüz birincil metinden okunmamış olanlar: Kıyı Kanunu "ilk 10 m"
(Md.4/5/6), milli parkların bakanlığı (2873 Md.2), Almanya TTDSG/TDDDG atfı, Part 90 §90.210
karşılaştırması, T/R 61-01'de "3 ay" sınırı. 5809 Md.51/40 önceki oturumda teyit edilmişti ve
Analiz'de duruyor. Öneri sırası: Tablo A (Analiz + Envanter), sonra Sunum/Oy Pusulası. Her belge
değişikliği sürüm numarası ve CHANGELOG kaydı ister (bkz. CLAUDE.md "Sürüm disiplini").

**3,4 ve 24 GHz için MFP kontrolü yarım kaldı.** 2019 baskısında 3400 MHz sayfalarında amatör
hiç geçmiyor, 10 GHz'de 10450-10452 aralığında tahsis var, 24 GHz'de bulunamadı. Güncel 2023
baskısı elde yok; Analiz'deki mikrodalga öncülü yazılırken bu bantlar tek tek 2023 baskısından
okunmalı.

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
