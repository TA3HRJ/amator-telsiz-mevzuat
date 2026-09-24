# Amatör Telsizcilik Mevzuatı — İnceleme ve Öneri Çalışması

**Sürüm 1.8 · 24 Eylül 2026**

**Yayın sayfası:** <https://ta3hrj.github.io/amator-telsiz-mevzuat/> — belgelerin indirme sayfası ve uzlaşı oylaması.

Türkiye'de amatör telsizciliğe (amatör radyoculuğa) gönül vermiş kişilerin **bireysel iyi niyetiyle** ve **camiaya katkı
amacıyla** yürüttüğü, tarafsız bir mevzuat inceleme çalışması. Amatör telsizciliğe ilişkin dağınık
mevzuat tek yerde derlenmiş; uygulamada belirsizlik yaratan **sorunlu konular (gri alanlar)**,
**IARU/CEPT boşlukları** ve bunların kurumlar nezdinde çözümüne yönelik **talepler** belgelenmiştir.

Bu çalışma herhangi bir kurumun veya derneğin resmî görüşünü temsil etmez; amacı camiaya açık,
tartışmaya ve oylamaya elverişli bir zemin sunmaktır.

> ### Sürüm notu
>
> Belgeler 1 Temmuz 2026'daki ilk yayından sonra birkaç kez düzeltildi. O dönemde dosya adları
> değişmediği için erken indirenler güncellemeleri fark edemedi; 7 Ağustos'tan itibaren içerik
> değiştiğinde sürüm numarası da değişiyor.
>
> Temmuz'da indirdiyseniz güncel sürümü almanızı öneririz. Düzeltmelerin en önemlisi şudur:
> **FTM Teknik Ölçütler 2022'den beri yürürlüktedir**, ilk sürümlerde "henüz yürürlüğe girmemiş
> taslak" sayılıyordu. Ayrıca GA-BAND-1, GA-SK, GA-EMCOMM, GA-NODE ve GA-5/GA-DIG bölümleri
> birincil kaynaklara göre yeniden yazıldı, GA-RX/Kanal talebi eklendi.
>
> Ayrıntılar: [CHANGELOG.md](CHANGELOG.md)

## Uzlaşı oylaması sonucu

22 gri alanın tamamı için yürütülen çevrim içi uzlaşı oylaması 9 Ağustos 2026'da açıldı ve
8 Eylül 2026'da kapandı. **50 pusula**, **1117 oy satırı**; madde başına katılım 41–49 pusula.
Ayrıca 13 pusuladan 62 serbest görüş geldi ve tamamı rapora olduğu gibi girdi.

Oylama **bağlayıcı değildir**. Kimlik, çağrı işareti veya e-posta istenmediği ve IP saklanmadığı
için mükerrer oy teknik olarak engellenememiştir; sonuçlar "kaç kişi" değil **"kaç oy"** olarak
okunmalıdır. Ham veride oy deseni birebir aynı üç pusula çifti bulunmuştur — sayım raporunda
ayrı bir bölüm olarak incelenmiştir.

- [Sayım raporu](Uzlasi_Oylamasi_Sayim_Raporu_v1.0.md) — madde madde sonuçlar, sayım usulü,
  mükerrer oy incelemesi ve serbest görüşlerin tam metni
- [Ham veri (CSV)](Uzlasi_Oylamasi_Ham_Veri.csv) — zaman damgalı, kimlik içermez

**İki maddede sonuç yakın çıktı** ve tek tercihe indirgenmedi: `GA-SK` (Silent Key ve çağrı
işareti vesayeti) ile `GA-BAND-1` (sınıf yetki tablosu). GA-SK, mükerrer şüphesi taşıyan pusulalar
çıkarıldığında berabere kalmaktadır.

### Sonuçların Tablo B'ye etkisi

Kurumlara gidecek talep yazıları oylama sonucuna göre yeniden düzenlendi (Tablo B v1.2):

| Gri alan | Topluluk tercihi | Talep yazısına etkisi |
|---|---|---|
| `GA-3` | Mevcut durumu koru (35 / 4) | Başvurudan çıkarıldı, Ek'e alındı |
| `GA-RX/Kanal` | Mevcut durumu koru (21 / 15) | Başvurudan çıkarıldı, Ek'e alındı |
| `GA-SK` | Başa baş (22 / 21) | Mevzuat değişikliği yerine açıklama talebi |
| `GA-ARAC`, `GA-LORA` | Mevzuat değişikliği | Kılavuz talebinden düzenleme talebine yükseltildi |
| `GA-AREDN` | Yazılı görüş | Düzenleme talebinden teknik parametre talebine indirildi |
| `GA-BAND-1` | Yakın (25 / 23) | İki talep birlikte iletiliyor |

Toplulukça reddedilen talepler silinmedi; Tablo B'nin sonundaki **"Topluluk Tercihi Nedeniyle
Başvuruya Dönüştürülmeyen Talepler"** ekinde oy sonuçları ve gerekçeleriyle birlikte duruyor.
Kuruma giden talep sayısı 22'den 20'ye indi.

## İçindekiler

| Belge | Açıklama |
|-------|----------|
| **Tablo A — Mevzuat Analizi (v1.2)** | Gri alanlar, IARU/CEPT eksikleri, karşılaştırmalı analiz, herkes için özet; madde atıfları birincil metinlerden doğrulandı |
| **Tablo A — Mevzuat Envanteri (v1.2)** | 24 maddelik mevzuat envanteri + resmî kaynak linkleri + gri alanlar tablosu |
| **Tablo B — Kurumlara Talep Yazıları (v1.3, taslak)** | Uzlaşı oylaması sonuçlarına göre revize, madde atıfları birincil metinlerden doğrulandı; kuruma giden 20 talep + örnek başvuru taslakları |
| **Uzlaşı Oy Pusulası (v1.3)** | Her gri alan için topluluk oylama pusulası (A/B/C/D/E) |
| **index.html** | İndirme sayfası — yayında: [ta3hrj.github.io/amator-telsiz-mevzuat](https://ta3hrj.github.io/amator-telsiz-mevzuat/) |
| **oylama.html** | Uzlaşı oylaması — [oylama sayfası](https://ta3hrj.github.io/amator-telsiz-mevzuat/oylama.html) |
| **Uzlaşı Oylaması — Sayım Raporu (v1.0)** | 50 pusulanın madde madde sonucu, sayım usulü ve topluluk tercihleri |
| **Uzlaşı Oylaması — Ham Veri (CSV)** | Tüm oyların zaman damgalı ham dökümü; kimlik içermez |

> **Toplantı sunumu (38 slayt):** çevrim içi Ulusal Değerlendirme Toplantısı için hazırlanmıştır —
> açılış ve gerekçe slaytları, 22 gri alan için oylama slaytları ve tıklanabilir bir terim sözlüğü içerir.
> Sunum dosyasını PowerPoint'te **Slayt Gösterisi** modunda açarsanız "? Sözlük" butonları çalışır.

## Kapsanan gri alanlar (özet)
Ruhsatsız kullanım zinciri, belge sınıfı yetki tablosu, CEPT/HAREC, dijital modlar ve SDR, RX (dinleme)
serbestisi, internet-RF köprüleri, röle/cross-band, POC cihazları, anten & kat mülkiyeti, araçta
kullanım, POTA arazi izinleri, AREDN mesh, LoRa/Meshtastic, gümrük geçici çıkış, cihaz uygunluğu ve piyasa gözetimi (GA-CIHAZ), **afet haberleşmesinde amatörün rolü ve kapsam tanımı (GA-EMCOMM)**, **Silent Key & çağrı
işareti vesayeti (GA-SK)** ve **bölge değişiminde çağrı işareti taşınabilirliği (GA-CALL)**.

## Yöntem
Tüm dayanaklar birincil kaynaklara (mevzuat.gov.tr, Resmî Gazete, BTK, KEGM, ITU, CEPT) bağlanmıştır.
Taslaklar Claude (Anthropic) yapay zekâsı desteğiyle hazırlanmış; kapsamlı hata analizi, birincil kaynak doğrulaması ve son düzenlemeler insan gözetimiyle yapılmıştır.

## İlgili çalışma

Aynı camiaya yönelik sınav hazırlık seti ayrı bir repoda yayımlanmaktadır:
[github.com/TA3HRJ/amator-telsiz-egitimi](https://github.com/TA3HRJ/amator-telsiz-egitimi)

## Katkı
Düzeltme ve öneriler için Issue/Pull Request açabilirsiniz. Amaç camia yararına açık ve doğru bir kaynak.

## Sorumluluk Reddi
Taslak niteliğindedir; hata/eksik içerebilir. **Hukuki tavsiye değildir**; resmî işlemden önce birincil
kaynaklardan doğrulayın. 7 Ağustos 2026 itibarıyla geçerli mevzuata göredir. Ticari amaç taşımaz, kişisel
veri içermez. Not: IARU Bölge 1 Türkiye üyesi kuruluş TRAC'tır (bilgi amaçlı); bu çalışma herhangi bir
derneğe rol atfetmez ve resmî bir TRAC yayını değildir.
