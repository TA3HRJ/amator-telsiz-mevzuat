# Amatör Telsizcilik — Türkiye Mevzuat Analizi ve Talep Çalışması

**Sürüm 1.3 · 7 Ağustos 2026**

Türkiye'de amatör telsizciliğe (amatör radyoculuğa) gönül vermiş kişilerin **bireysel iyi niyetiyle** ve **camiaya katkı
amacıyla** yürüttüğü, tarafsız bir mevzuat inceleme çalışması. Amatör telsizciliğe ilişkin dağınık
mevzuat tek yerde derlenmiş; uygulamada belirsizlik yaratan **sorunlu konular (gri alanlar)**,
**IARU/CEPT boşlukları** ve bunların kurumlar nezdinde çözümüne yönelik **talepler** belgelenmiştir.

Bu çalışma herhangi bir kurumun veya derneğin resmî görüşünü temsil etmez; amacı camiaya açık,
tartışmaya ve oylamaya elverişli bir zemin sunmaktır.

> ### ⚠ Daha önce indirdiyseniz
>
> Belgeler 1 Temmuz 2026 tarihli ilk yayından bu yana birkaç kez düzeltildi; ancak dosya adları
> `v1.0` olarak kaldığı için **daha önce indirenler değişiklikleri fark edemedi.** 7 Ağustos 2026
> itibarıyla dosyalar **v1.1** olarak yeniden adlandırıldı. Bundan sonra içerik değiştiğinde sürüm
> numarası da değişecektir.
>
> **Elinizde v1.0 varsa aşağıdaki düzeltmeler sizde yok** — bir kuruma başvuru yapmadan önce v1.1'i indirin:
>
> - **FTM Teknik Ölçütler bir taslak değil, yürürlükteki düzenlemedir.** v1.0 metinleri Md.22'yi
>   "henüz yürürlüğe girmemiş taslak" sayıyor ve BTK'dan yürürlüğe konmasını talep ediyordu. Metin
>   **BTK Kurul Kararı 23.09.2022 (2022/İK-SYD/245)** ile onaylanmıştır, 2022'den beri yürürlüktedir.
> - **GA-BAND-1:** "Sınıf bazlı yetki tablosu yayımlanmamıştır" tespiti hatalıydı; tablo FTM Teknik
>   Ölçütler **Tablo 25**'te mevcuttur.
> - **GA-SK:** "Vesayet yolu tanımsız" öncülü **KEGM Yönetmeliği Md.7/2** ile çelişiyordu; yeniden yazıldı.
> - **GA-EMCOMM:** "AFAD ile protokol yok" düz iddiası, birincil kaynağa dayalı çerçeveyle değiştirildi.
> - **GA-NODE, GA-5 / GA-DIG:** Md.22 §12–§13 karşısında aşırı iddialı tespitler düzeltildi.
> - **Kapsam:** GA-RX/Kanal talebi eklendi (21 → 22); Toplantı Sunumu yayına girdi.
>
> Tam liste: [CHANGELOG.md](CHANGELOG.md)

## İçindekiler

| Belge | Açıklama |
|-------|----------|
| **Tablo A — Mevzuat Analizi (v1.1)** | Gri alanlar, IARU/CEPT eksikleri, karşılaştırmalı analiz, herkes için özet |
| **Tablo A — Mevzuat Envanteri (v1.1)** | 24 maddelik mevzuat envanteri + resmî kaynak linkleri + gri alanlar tablosu |
| **Tablo B — Kurumlara Talep Yazıları (v1.1, taslak)** | 22 talebin matrisi + kuruma göre örnek başvuru taslakları |
| **Uzlaşı Oy Pusulası (v1.3)** | Her gri alan için topluluk oylama pusulası (A/B/C/D/E) |
| **index.html** | İndirme sayfası (GitHub Pages ile yayımlanabilir) |

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
