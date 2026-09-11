# Uzlaşı Oylaması — Sayım Raporu

**Sürüm 1.0 · 11 Eylül 2026**

Oylama 9 Ağustos 2026'da açıldı, toplantı sunumunda duyurulan takvim uyarınca **8 Eylül 2026
Salı 23:59 (TSİ)** itibarıyla kapatıldı. Bu rapor kapanış anındaki ham veriden üretilmiştir.
Ham veri, zaman damgalarıyla birlikte `Uzlasi_Oylamasi_Ham_Veri.csv` dosyasında yayımlanmıştır;
buradaki her sayı o dosyadan yeniden hesaplanabilir.

## Sonuç nasıl okunmalı

- **Bu oylama bağlayıcı değildir.** Sonuç camianın eğilimini gösteren bir yoklamadır; hiçbir
  kurumu, derneği veya kişiyi bağlamaz.
- **Sayılar kişi değil oy sayısıdır.** Kimlik istenmediği ve IP saklanmadığı için mükerrer oy
  teknik olarak engellenmemiştir; bu, gizliliği korumak adına baştan verilmiş bir karardı.
  Verideki mükerrer izler için aşağıdaki *Mükerrer oy incelemesi* bölümüne bakınız.
- **Bir maddede birden fazla seçenek işaretlenebiliyordu**; seçenek oylarının toplamı o maddeye
  katılan pusula sayısını aşabilir.
- **Kısmi oy geçerliydi**; hiçbir pusula her maddeyi oylamak zorunda değildi.

## Katılım

| | |
|---|---|
| Toplam pusula | 50 |
| Toplam oy satırı | 1117 |
| Madde başına katılım | 41–49 pusula |
| Oylanan madde | 22 / 22 |
| Serbest görüş (E) | 62 not, 13 pusuladan |

## Sayım usulü

Sunumda duyurulan usul uygulanmıştır: her gri alan için seçenekler ayrı ayrı sayılır, en çok
işaretlenen seçenek *topluluk tercihi* olarak kaydedilir, yakın sonuçlarda her iki görüş de
rapora yazılır, “E” ile bildirilen serbest görüşler rapora aynen eklenir.

Usulde “yakın sonuç”un eşiği tanımlanmamıştı. Sayım aşamasında şu ölçüt benimsenmiştir:
**birinci ve ikinci seçenek arasındaki fark, o maddeye katılan pusula sayısının %5'inden azsa
sonuç yakın sayılır.** Ölçüt sayımdan önce ilan edilmediği için burada açıkça yazılmaktadır;
ham veri yayımlandığından farklı bir eşikle yeniden sayım yapmak isteyen herkes yapabilir.

## Madde madde sonuçlar

Yakın çıkan maddelerde iki tercih birlikte yazılmıştır.

| Kod | Gri alan | A | B | C | D | E | Katılım | Topluluk tercihi |
|---|---|--:|--:|--:|--:|--:|--:|---|
| `GA-1` | Kapsamlı Tek Amatör Telsizcilik Yönetmeliği ('Part 97 TR') | 3 | 1 | 8 | 39 | 3 | 49 | **D** Mevzuat Değişikliği |
| `GA-6` | Anten Kurulumu ve Kat Mülkiyeti (KMK) Çatışması | 3 | 4 | 9 | 37 | 1 | 46 | **D** Mevzuat Değişikliği |
| `GA-3` | CEPT T/R 61-01/61-02: Yurt Dışı Operasyon ve B/C Sınıfı Boşluğu | 35 | 1 | 4 | 4 | 1 | 45 | **A** Mevcut Durumu Koru |
| `GA-ENFORC` | Röle Mandalcılığı ve Uygulama Asimetrisi | 4 | 6 | 3 | 34 | 3 | 45 | **D** Mevzuat Düzenlemesi |
| `GA-RX` | Alıcı Cihaz (RX) ile Dinleme Serbestisi | 7 | 2 | 4 | 33 | 4 | 47 | **D** Mevzuat Değişikliği |
| `GA-4` | Yurt Dışı Geçici Cihaz Çıkışı (Gümrük) | 4 | 1 | 8 | 32 | 4 | 43 | **D** Mevzuat/Prosedür Düzenlemesi |
| `GA-CALL` | Bölge Değişikliğinde Çağrı İşareti ve Taşınabilirlik | 11 | 1 | 3 | 32 | 3 | 46 | **D** Mevzuat Değişikliği |
| `GA-BAND-3` | Mikrodalga Bantları (2,4 / 5,7 / 10 / 24 GHz) — MFP Var, TAD Yok | 8 | 2 | 5 | 31 | 2 | 41 | **D** Öncelikli 2,4 GHz TAD |
| `GA-NODE` | Remote Telsiz Nodu ve İnternet-RF Köprüsü (EchoLink, WebSDR) | 4 | 7 | 3 | 30 | 6 | 45 | **D** FTM'ye Düzenleme |
| `GA-ARAC` | Araçta Amatör Telsiz Kullanımı | 6 | 2 | 11 | 30 | 5 | 46 | **D** KTK/FTM Net Düzenleme |
| `GA-CIHAZ` | Cihaz Uygunluğu, Piyasa Gözetimi ve Devir Kaydı | 8 | 2 | 6 | 30 | 3 | 45 | **D** Mevzuat/Prosedür |
| `GA-EMCOMM` | Afet Haberleşmesi: AFAD ile Resmî Protokol (MOU) | 5 | 1 | 11 | 30 | 7 | 45 | **D** Kapsam ve Tanım Talebi |
| `GA-BAND-2` | 4m Bandı (70–70,5 MHz) — Türkiye'de Tahsis Yok | 3 | 6 | 17 | 28 | 1 | 44 | **D** ERC/REC 25-10 Çerçevesinde Müzakere |
| `GA-LORA` | LoRa / Meshtastic / LoRa-APRS — 433/868/915 MHz | 8 | 2 | 5 | 28 | 3 | 43 | **D** LoRa-APRS TX Muafiyeti |
| `GA-POC` | POC Cihazları ve Amatör Telsiz Tanımının Yanlış Kullanımı | 7 | 9 | 27 | 4 | 2 | 45 | **C** BTK Sektör Uyarısı |
| `GA-DIG` | Dijital Modlar — FT8, Winlink, APRS (Şifreleme mi?) | 9 | 2 | 8 | 27 | 3 | 44 | **D** FTM'ye Açık Protokol Listesi |
| `GA-CROSS` | Bireysel Cross-Band ve Geçici Röle İşletimi | 10 | 4 | 11 | 25 | 3 | 45 | **D** FTM Değişikliği |
| `GA-BAND-1` | A/B/C Sınıfı Yetki Tablosu Belirsizliği | 2 | 2 | 23 | 25 | 3 | 45 | **D** CEPT T/R 61-01 Uyum / **C** KEGM Resmi Tablo Talebi — yakın |
| `GA-POTA` | Park Aktivasyonu (POTA) — Arazi Kullanım İzinleri | 3 | 5 | 19 | 24 | 4 | 43 | **D** BTK Tebliğ Talebi |
| `GA-AREDN` | AREDN Amatör Mesh Ağı (2,4 / 5,8 GHz) | 13 | 4 | 24 | 6 | 2 | 41 | **C** TAD Parametre Talebi |
| `GA-SK` | Silent Key, Çağrı İşareti Yaşam Döngüsü ve Vesayet | 22 | 1 | 2 | 21 | 1 | 45 | **A** Mevcut Durumu Koru / **D** Mevzuat Düzenlemesi — yakın |
| `GA-RX/Kanal` | Kanal Hafızasına Yetkisiz Frekans Kaydetme | 21 | 5 | 6 | 15 | 5 | 45 | **A** Kişisel Sorumluluk |

### Yakın çıkan maddeler

- **`GA-BAND-1` — A/B/C Sınıfı Yetki Tablosu Belirsizliği**: D (25) ile C (23) arasında 2 oy fark var. Tek tercihe indirgenmemiş;
  *CEPT T/R 61-01 Uyum* ve *KEGM Resmi Tablo Talebi* birlikte kaydedilmiştir.
- **`GA-SK` — Silent Key, Çağrı İşareti Yaşam Döngüsü ve Vesayet**: A (22) ile D (21) arasında 1 oy fark var. Tek tercihe indirgenmemiş;
  *Mevcut Durumu Koru* ve *Mevzuat Düzenlemesi* birlikte kaydedilmiştir.

## Mükerrer oy incelemesi

Kimlik toplanmadığı için mükerrer oy engellenemiyordu. Ham veride, **oy deseni birbirinin aynısı
olan 3 pusula çifti** bulunmaktadır:

| Gönderim (TSİ) | Oyladığı madde | Arada geçen süre |
|---|--:|---|
| 09.08 14:33:20 → 14:57:36 | 22 | 24 dk 16 sn |
| 09.08 16:41:45 → 16:42:23 | 22 | 0 dk 37 sn |
| 13.08 10:12:43 → 10:13:43 | 19 | 0 dk 59 sn |

Çiftlerin 19–22 maddede birebir aynı seçenekleri taşıması ve çoğunun bir dakika arayla
gönderilmesi kazara çift gönderime işaret eder; bir çiftte serbest görüş metinleri de birebir
aynıdır. Kimlik verisi olmadığı için bu **kanıt değil, güçlü belirtidir**.

Sonuçlar, ilan edilen usul gereği (“kaç kişi değil kaç oy”) **bütün pusulalar sayılarak**
verilmiştir. Kopya sayılabilecek pusulalar çıkarıldığında (50 → 47 pusula) yirmi bir maddede
topluluk tercihi değişmemektedir. Tek istisna:

- **`GA-SK`**: tüm pusulalarla A:22 / D:21; kopyalar çıkarıldığında D:20 / A:20 ile **berabere**
  kalmaktadır. Madde zaten yakın sonuç sayıldığı ve her iki görüş birlikte kaydedildiği için
  raporun sonucu değişmez; ancak bu maddede tek bir topluluk tercihinden söz edilemeyeceği
  özellikle belirtilmelidir.

## Süre sonrası gelen pusula

Kapatma anahtarı Worker üzerinde elle çevrildiği için sistem, ilan edilen süre dolduktan sonra
**1 pusula** daha kabul etmiştir (en geç: 09.09.2026 01:08 TSİ, sınırdan 68 dakika sonra).

Bu pusula sayıma **dahil edilmiştir**: oylama bağlayıcı değildir, ham veri zaman damgalarıyla
yayımlanmaktadır ve pusula çıkarıldığında hiçbir maddede topluluk tercihi değişmemektedir.

## E — Serbest görüşler

“E — Diğer görüş” ile 13 pusuladan toplam 62 serbest metin gelmiştir. Metinler **olduğu gibi**
aktarılmıştır; yazım ve noktalama düzeltilmemiştir. Yayımdan önce kişisel bilgi taraması
yapılmış; isim, çağrı işareti, e-posta veya telefon numarası bulunmamıştır.

**Bir pusula, 22 maddenin tamamına aynı metni bırakmıştır.** Metin, her madde başlığının altında
yirmi iki kez tekrarlanmak yerine burada bir kez verilmektedir:

> Aklınızı mı şaşırdınız? Hangi memlekette yaşıyoruz? Sakın bu çalışmayı devam ettirmeyin ve hiç bir yetkiliye konuyu aktarmayın. Elimdekilerden de oluruz. Başımızı derde sokacaksınız!!!!

*(Gönderim: 18.08.2026 23:20 TSİ — 22 maddenin tamamına.)*

Kalan görüşler madde madde aşağıdadır.

### `GA-1` — Kapsamlı Tek Amatör Telsizcilik Yönetmeliği ('Part 97 TR')

> Yazılı görüş talep edilmeli ve öncelikle buna dair bir cevap alınmalı. Sonrasında en önemli şey, dağınık mevzuatın yarattığı karmaşıklık da göz önünde bulundurularak mevcut durumdaki hakların gözetilmesi. Spesifik olarak web-sdr konusunda mesela belirsizlik var, bu yayının Türkiye'de yapılamamasını gözeterek haklarımızın korunup genişletilmesi fikrindeyim. Özetle öncelikle yetkili kurumlardan yazılı cevap almamız daha güvenli ve adım adım gitmemiz açısından daha faydalı olacaktır süreç açısından.

> Nispeten yeni bir amatör telsizci olarak tek yerden kanunlara ve haklarımıza erişimin kolay olması tüm amatörler için iyi olacaktır.

### `GA-RX` — Alıcı Cihaz (RX) ile Dinleme Serbestisi

> Bir emek verilmiş ama karşılığı olmayan sadece iyiniyet üzerine yapılmış bir çalışma oturuma katıldım ben izledim.

> hangi bantların ve frekansların dinleneceği, kimlerin dinleyeceği veya dinleyemeyeceği -radyo amatörü, swl belgesi sahibi veya sıradan vatandaş- bunların sınırlarının çizilmesi gerekli. herhangi bir amatör, herhangi bir derneğe veya kulübü takip etmek zorunda olmamalı ve dernek ve kulüpler kendilerine bu mevzuat üzerinden güç devşirmemeli. güç her zaman yozlaştırır.

> Bir karakolun saldırılara karşı korunması gibi frekansın korunması da devletin görevi olmalı, amatörlükle alakası olmayan biri de açık frekansı dinleyebilir. Devlet önemli görüşmelerinin olduğu kanallarını kriptolu yapsın kimse zan altında kalmasın istediğimiz frekansı dinleyebilelim.

### `GA-RX/Kanal` — Kanal Hafızasına Yetkisiz Frekans Kaydetme

> 3. soru ile paralel bir soru. yukarıda frekansları dinleme serbestisi gelirse zaten bu soru anlamsızlaşır, ta ki kanal hafızasına kaydedilen her frekansta tx yapılabiliyor olmasına kadar. eğer teknik olarak (yazılımla) tx yapılabilme sınırlandırılıyor ve basit müdahalelerle (tuş kombinasyonu, menüden açma vs.) tx açılabiliyorsa, bu durumda kullanıcı aleyhinde kullanılabilir ve kullanılmalı da. fakat sadece dinleme yapılabiliyor pozisyondaysa 3. maddeye bakılmalı. her halükarda mevcut durum değişmeli. zaten şu anda yaptığımız görüşmeler bile mevcut durumun yetersizliğini kanıtlıyor. her şey net olmalı ve sınırlar çizilmeli.

> Para cezası kesilmesi
>
> *(Aynı metin bir dakika arayla iki kez gönderilmiştir; mükerrer oy incelemesine bakınız.)*

> Benim KTM belgem de var, 156.800 mhz vhf den dinleme yapabilmeliyim.

### `GA-NODE` — Remote Telsiz Nodu ve İnternet-RF Köprüsü (EchoLink, WebSDR)

> Bu maddeler kesınlıkle yenıden degerlendırmelı.

> Bu konuda yetkili kurumlarla haklarımıızın savunluacağı şekilde bilgilendirme yapıılmalı ve haklarımızın korunacağı şekilde bilgi talep edilmeli.

> Bu konu Rtük le ilgili. BTK ile hiç ilgisi yok. Bu konunun kaşınması boşa uğraş.

> sadece zorunlu hallerde bağlanmalı
>
> *(Aynı metin bir dakika arayla iki kez gönderilmiştir; mükerrer oy incelemesine bakınız.)*

### `GA-CROSS` — Bireysel Cross-Band ve Geçici Röle İşletimi

> Bu maddeler ozellıkle farklı hobılerde amator frekansları kullanan ve kros yapanlar ıcın tekrar duznelenmelı

> Crossband röle değildir, enterfere ve diğer iletişim kesilmediği sürece bireyler kullanabilmeli, sorun yaratırsa kişiye sorumluluk verilmeli ceza verilmeli.

### `GA-POC` — POC Cihazları ve Amatör Telsiz Tanımının Yanlış Kullanımı

> POC Tarzı uygulamalar son gelen haberlerde Amerikada yasaklanma söz konusu olmuştur. Ülkemizdede amatör telsizcilik ile alakası olduğunu düşünmüyorum.

> bu cihazları alan veya kullanan kişilerin dernek ve kulüplerle zaten işi yok. dernek ve kulüpleri takip etmiyorlar.

### `GA-DIG` — Dijital Modlar — FT8, Winlink, APRS (Şifreleme mi?)

> bu yen ımodlar acılen kanun ve yonetmelıklere konulmalı

### `GA-ENFORC` — Röle Mandalcılığı ve Uygulama Asimetrisi

> Bu konuya ilişkin düzenleme mevcut. Ancak kurallar uygulanmıyor ve uymayanlara herhangi bir müeyyide uygulanmıyor. İlgili kurumlarca tespitin yapılması ve cezaların uygulanması sağlanmalı.

> Röleyi kasten bloke eden için cezai yaptırımlar, para cezası, varsa belge iptali, kamu yararına çalışma gibi cezalar eklenmeli. röle sorumluluğu (kurulumu ve işletilmesi) bir derneğe ait olsa bile rölenin asıl sahibinin ve röle kullanımının tüm amatörlere ait olduğu açıkça belirtilmeli, yeni amatörlerin röle kullanmaktaki çekingenliğini ortadan kaldırılması için tedbirler alınarak tüm amatörlerin bantları kullanmaları sağlanmalıdır. röle kullanımının nasıl suistimal edilebileceği hakkında tartışmalı ve bunu önleyici tedbirler alınmalıdır.

### `GA-BAND-1` — A/B/C Sınıfı Yetki Tablosu Belirsizliği

> Bu madde sıfırdan tekrar degerlendırılmelı ve duzenlenmelıdır.

### `GA-ARAC` — Araçta Amatör Telsiz Kullanımı

> Net düzenleme sonrası kolluk kuvvetleri düzenli olarak aylık bilgilendirmeli ve yeni kimlikler kendilerine tanıtılmalıdır.

> Yapılan son çalışmalar ile araca telsiz anteni kurulumu sorun olmaktan çıktı. Araçta telsiz kullanımında dikkat edilecek tek husus "SÜRÜŞ ESNASINDA HABERLEŞME CİHAZI KULLANILAMAZ" maddesi uygulanır.

> cep telefonu için yasalar neyse telsiz için de o olmalı.

> El telsizi de olsa mike kullanılabilir.

### `GA-POTA` — Park Aktivasyonu (POTA) — Arazi Kullanım İzinleri

> c veya d yapılırsa b otomatik olarak zaten yapılacaktır.

> Anten kurmanın fotoğraf için tripod kurmaktan farkı yoktur, izne tabi olmamalı

### `GA-LORA` — LoRa / Meshtastic / LoRa-APRS — 433/868/915 MHz

> bu frekans bandıyla ilgili çalışmalar hakkında bilgim yok

### `GA-4` — Yurt Dışı Geçici Cihaz Çıkışı (Gümrük)

> Bu konu sadece telsiz için geçerli değil. Cep telefonu bilgisayar fotoğraf makinadı içinde geçerli. Konu genele özgü ve gümrük mevzuatı mevzuu. Hiç kaşımayın

> Gidenler EK-71'i kullanabilir. Getirenler için de aslında Gümrük Kanunuda yolcu yanında getirilecek cihazlar olarak müsaade ediliyor. Konu günümüz şartlarına uygun olarak güncellenip, ilgili yerlerdeki personele de tebliğ edilip kullanıma devam edilebilir.

### `GA-SK` — Silent Key, Çağrı İşareti Yaşam Döngüsü ve Vesayet

> 2. bölge amatörleri sayısı oldukça fazla. duruma manevi olarak bakılmamalı, örn. tx2x kullanıcısı xx kişisi vefat etti ise, çağrı işareti boşa çıkmalı.

> bir istasyon SK olduktan sonra belirli bir süre çağrı işareti kimseye verilmeyebilir (10-15yıl) veya yakınlarına tahsis edilmesi kolaylaştırılabilir fakat kalıcı olarak kimseye tahsis edilmemesi doğru değil. belirli bir yılı geçtikten sonra başkaları talep edebilmeli.

### `GA-CALL` — Bölge Değişikliğinde Çağrı İşareti ve Taşınabilirlik

> Bu madde tam anlasılmamıs durumdadır. adres ıle cagrı ısraetı degısmez bu konu netlestırılmelıdır.

### `GA-CIHAZ` — Cihaz Uygunluğu, Piyasa Gözetimi ve Devir Kaydı

> Mevcut düzenlemelerde bu konuya ilişkin gerekli düzenlemeler yapılmış durumda. Konu ilgili kuruma müracaat edilerek uygunsuz cihazların satışı ve devrinin engellenmesi sağlanmalı.

> devir bildirimi güzel fakat sadece bildirim yapılacak bir sistem kurulumu gerekecektir ve devlet bunu kısa süre içerisinde paraya çevrilecek bir yolunu bulacak ve devir tahsis ücreti/harcı gibi ek maliyetler getirecektir.

### `GA-EMCOMM` — Afet Haberleşmesi: AFAD ile Resmî Protokol (MOU)

> Bu konu cok acıl detaylanmalıdır. Bu konuda sadece TRAC ve AFAD arası protokoller tum amatorlerı baglamamamlı Amator Telsızcılık afatecılıkd eıgldır . Bu ayrım net olmalıdır.

> Amatör telsizcilerin AFET durumunda belirlenmiş görev ve sorumluluklarla olabildiğince entegre olmasına dair tüm çalışmaları destekliyorum.

> kimse kendine amatör telsizcilik üzerinden bir paye ve güç devşirmesin . polisçilik ve afetçilikten gına geldi artık. gerekirse afet haberleşme planında "çözüm ortağı sayılmasın" afetçiler kendi başlarına amatör lisans alıp afetçiliğine devam etsin. amatörlüğün afetçilikle beraber anılması "bence" doğru değil.

> Telefon çekmeyen yerlerde acil kullanım için marin band gibi frekans tahsis edilsin

## Sonraki adım

Tablo B'deki kurum talep yazıları bu raporda kaydedilen topluluk tercihlerine göre güncellenecek
ve kurum başvuruları yapılacaktır. Yakın çıkan maddelerde her iki görüş de başvuru metnine
yansıtılır; `GA-SK` için mükerrer oy incelemesindeki beraberlik durumu göz önünde bulundurulur.
