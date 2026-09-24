# Devir Notu

Son güncelleme: 25 Eylül 2026

## Nerede kalındı

**24 Eylül 2026 — Sürüm 1.8.** Issue #2'nin
**Tablo A'ya düşen kısmı bitti**: Analiz v1.2, Envanter v1.2, `maddeler.json` (GA-3, GA-BAND-3,
GA-AREDN `sorun` metinleri; `surum` 1.1), kaynak listesi, index, README, CHANGELOG. Ayrıntılı liste
CHANGELOG 1.8'de. Bu oturumda birincil metinden okunanlar: 5809 Md.39/40/51/59/60/63, 2813 künyesi
ve Md.26-36, 2873 Md.2, 3621 Md.4-6, 2918 Md.32/72/73, KEGM Yön. tam metni, FTM Teknik Ölçütler
2022 tam metni, T/R 61-01 (18.10.2024) ve T/R 61-02 (16.02.2024) tam metni, ECA CSV (ECA9), TDDDG
§5, 18 USC §2511, WTA 2006 s.48, 47 CFR §90.210 ve §97.307, BTK 27.11.2019 duyurusu (arşiv).

Issue'da olmayan ama bu sürümde düzeltilen bulgular: **Envanter FTM 2022'yi hâlâ "taslak"
gösteriyordu** (CLAUDE.md'deki bilinen hata, Envanter'e hiç işlenmemişti); **T/R 61-01'de "Tier"
yapısı yok**; **FTM Md.24 salt alıcıları muaf tutuyor**; **FTM Md.22 §8 ve KEGM Md.6/5-6 yabancı
amatör usulünü düzenliyor**; **röle-dernek bağı FTM Md.22 §12'de**; **KTK Md.73/1 eller serbest
istisnası içermiyor**; Şekil 1'deki etiketler (TAD 2021, MFP 2019, EU9, "2004'ten beri").

**24 Eylül 2026 — Sürüm 1.9.** Kullanıcının kararıyla Tablo B'deki GA-BAND-1 talebi yeniden
ifade edildi (v1.4): "Tier 1/Tier 2" yerine "Yönetmeliğin CEPT T/R 61-01 ile uyumlu kapsamlı
güncellenmesi". Yeniden ifade **bilerek dar**: HAREC eşlemesi gibi ayrıntılar GA-3'ün konusu ve
GA-3 toplulukça reddedildi; GA-BAND-1'e bunlar eklenirse reddedilen içerik başka kapıdan girmiş olur.
`maddeler.json` D açıklaması da düzeltildi; sayım raporu ve ham veri dokunulmadı. Aynı sürümde Tablo B'de
kalan TAD 2021/EU9/Tablo 25-1/FTM Taslak ifadeleri Tablo A ile eşitlendi.

Aynı sürümde, kullanıcı onayıyla **GA-AREDN ve GA-DIG** öncülleri de düzeltildi. TAD (2018)
okununca TAD08-01-06'nın tahsisi bulunan mikrodalga bantlarını zaten tanımladığı görüldü (A/B,
75 W / 400 W p.e.p., 21 emisyon tipi; veri ve geniş bantlı sayısal emisyon yok). **Tablo A v1.2 bu konuda
yanlış bir ifadeyi korumuştu**, v1.3'te düzeltildi. Ders: eski metinden devralınan bir öncülü, yeni
yazılan cümlenin içinde de birincil metinden okumadan bırakmayın.

**25 Eylül 2026 — Sürüm 1.10.** GA-BAND-3 düzeltildi (Tablo B v1.5, Tablo A v1.4). Kullanıcı
"2,4 GHz'de tahsis olması lazım, defalarca geçmiştik" dedi; güncel MFP (BTK sitesi, 2023 baskısı)
**sayfa konumlarıyla** yeniden okundu ve **2,4 GHz'de ulusal amatör tahsisi olmadığı kesinleşti**:
s.93, 2300-2450 MHz satırında ITU sütunundaki "Amateur"un hizasında Milli Plan sütununda "HAVA
MOBİL" yazıyor. Bu konu bir daha açılırsa aynı sayfaya bakın; tartışmayı yeniden başlatmayın.
Aynı okumada MFP'nin amatöre verdiği 5,7 / 10 / 24 GHz aralıklarının TAD ve FTM'den geniş olduğu
görüldü (açık aralıklar: 5670-5820 MHz, 10000-10450 / 10452-10500 MHz, 24050-24250 MHz). GA-BAND-3
talebi bu aralıklara yöneltildi; 3,4/10/24 GHz MFP teyidi kapandı.

**Sıradaki iş:**
1. **Issue #2'nin kalanı: Sunum (.pptx) ve Oy Pusulası (.docx), ikisi de v1.3.** Tablo A'daki
   düzeltmelerin aynıları büyük olasılıkla buralarda da duruyor. `araclar/ooxml_metin.py` pptx için
   `Doc(xml, "a:p", "a:t")` ile kullanılabilir.
2. Issue #2 GitHub'da henüz kapatılmadı; Sunum/Oy Pusulası bitince kapatılabilir.

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

0. **Issue #2 — Sunum ve Oy Pusulası.** Tablo A ve B bitti; yukarıya bak.
1. **Kurum başvuruları** Tablo B v1.5'teki taslaklarla yapılacak ve süreç kamuya açık izlenecek.
   Bilinen öncül sorunları giderildi. Yine de Taslak 2 gerekçesinde iki cümleye bakılmalı:
   "915 MHz yasa dışı" (aşağıda 4. madde) ve "salt dinleme serbestisi kodifiye edilmemiş, satıcılar
   dayanaksız RX kısıtlaması uyguluyor". İkincisi FTM Md.24'ün salt alıcıları muaf tuttuğunu anmıyor.
2. **Sunum ve Oy Pusulası hâlâ v1.3** ve oylamayı açık anlatıyor. Bir daha dağıtılacaksa
   kapanış durumuna göre gözden geçirilmeli.
3. **Tablo A'da §6 hâlâ "22 talep" diyor.** GA-3 ve GA-RX/Kanal'ın talebe dönüştürülmediği bilgisi
   Tablo A'ya işlenmedi; sorun tespitini anlattığı için tutarsızlık sayılmadı.
4. **Birincil metinden okunmamış, belgede iddia olarak duran noktalar:**
   - ARRL "45 Baofeng'in %9'u" rakamı bir blog yorumundan; QST Ocak 2020 metni okunmadı.
   - KTK'da eller serbest kullanıma ilişkin yönetmelik (Karayolları Trafik Yönetmeliği) hükmü incelenmedi.
   - GA-LORA "915 MHz Türkiye'de yasa dışı": FTM Tablo 1 sıra 24a/24b'de 917,3-919,4 MHz veri
     şebekesi KET kayıtları var. İddia yeniden ifade edilmeli ama yeni ifade de doğrulanmalı.
   - GA-5/GA-DIG "FT8 emisyon tipi listesinde yok": Tablo 26-1, modları ada göre değil ITU sınıfına
     göre (J2D, F1D gibi) sayıyor; FT8 bu sınıflardan birine girebilir. Öncül tartışmalı, dokunulmadı.
   - `maddeler.json` GA-RX seçeneği "5809'a salt alım muafiyeti eklensin" diyor; muafiyet zaten FTM
     Md.24'te var. Oylanmış seçenek olduğu için değiştirilmedi.
   - T/R 61-01 Ek 2'de Türkiye satırı Monako'nunla aynı 11 ve 12 numaralı dipnotları taşıyor
     (dipnot 12: "HF bantları için Mors yeterliliği gerekir"). Türkiye için kasıtlı mı, yazım hatası mı, bilinmiyor.

## Tuzaklar

- **Office belgelerini düzenlemek:** python-docx/openpyxl yok, LibreOffice yok. `araclar/ooxml_metin.py`
  ham XML'de paragraf metnini bütün olarak arar ve biçimi korur; her kalem için beklenen eşleşme
  sayısı verin, tutmazsa hiçbir şey yazılmaz. İki tuzak yaşandı: (1) `<w:p .../>` gibi kendiliğinden
  kapanan boş paragraflar yığını bozuyordu (düzeltildi); (2) xlsx'te `sharedStrings` dizgeleri
  hücreler arasında paylaşılır: Envanter'deki "Taslak" hem 16. satırda hem lejantta kullanılıyordu.
  Hücreye özgü düzenlemede hücreye yeni `<si>` atanmalı, dizgenin kendisi değiştirilmemeli.
- **Şekiller PNG olarak gömülü**; kaynak SVG'ler `_shared/amator-radyo-mevzuat-arsivi/gorseller/`
  altında. Yeniden çizim: SVG'yi bir HTML'e `<img>` olarak koyup
  `msedge --headless=new --force-device-scale-factor=2.5 --window-size=680,668 --screenshot=...`
  (Şekil 1 için; özgün PNG 1700×1670).
- **Birincil kaynağa erişim:** mevzuat.gov.tr WebFetch'te sertifika hatası veriyor; yerleşik
  tarayıcıda `mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=<no>&MevzuatTertip=5`
  açıp `document.body.innerText` okumak çalışıyor. CEPT docdb için de WebFetch başarısız;
  `curl -L https://docdb.cept.org/download/<id>` ile inen PDF Read aracıyla okunabiliyor (poppler
  yok ama `pages` verilmeden 46 sayfalık FTM de okundu). eCFR engelli; law.cornell.edu kullanın.
  ECA tablosu için EFIS'in CSV indirmesi (`reports/ReportDownloader?reportid=3`) tarayıcıdan `fetch` ile okunabiliyor.
- **MFP'yi okumak:** Planın sütunları "ITU Bölge-1 Planı" (İngilizce) ve "Milli Plan" (Türkçe).
  Ulusal amatör tahsisi "Amatör/AMATÖR" diye yazılır; "Amateur" aramak yalnız ITU sütununu bulur.
  Metin sırası sütunları karıştırdığı için hücreyi **x konumuyla** okuyun (2023 baskısında ITU
  sütunu x≈132, Milli Plan x≈248; bant etiketi satırın ortasına yakın durur). Yöntem: yerleşik
  tarayıcıda btk.gov.tr/milli-frekans-plani açıkken pdf.js'i
  `import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.4.168/build/pdf.min.mjs')` ile yükleyip PDF'i aynı
  kökenden `fetch` etmek; `getTextContent()` öğelerinin `transform[4]` (x) ve `transform[5]` (y)
  değerleri. Canvas'a çizmek 45 sn sınırını aşıyor; gerekirse ekran görüntüsü yeterli.
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
