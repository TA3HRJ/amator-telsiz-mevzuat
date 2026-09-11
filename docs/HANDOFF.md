# Devir Notu

Son güncelleme: 11 Eylül 2026

## Nerede kalındı

Uzlaşı oylaması **kapandı ve sonuçları yayımlandı**. Sıradaki iş Tablo B dilekçelerinin
topluluk tercihlerine göre güncellenmesi.

- Oylama 9 Ağustos'ta açıldı, duyurulan takvim uyarınca **8 Eylül 2026 23:59 (TSİ)** kapatıldı.
  Kapatma, Cloudflare'de `OYLAMA_ACIK` değişkeninin `0` yapılmasıyla yapıldı.
- **50 pusula, 1117 oy satırı, 22 maddenin tamamı.** Madde başına katılım 41–49.
  13 pusuladan 62 serbest görüş (E) geldi.
- Yayımlananlar: `Uzlasi_Oylamasi_Sayim_Raporu_v1.0.md` ve `Uzlasi_Oylamasi_Ham_Veri.csv`.
  Ham veri yayını oylama açılırken verilmiş bir sözdü.
- Raporu üreten betik depoda tutulmuyor; sayıların nasıl hesaplandığı raporun "Sayım usulü"
  bölümünde yazılı ve ham veriden yeniden hesaplanabilir.

## Açık kalanlar

1. **Tablo B dilekçeleri** topluluk tercihlerine göre güncellenecek, sonra kurum başvuruları.
2. **GA-SK'de tek bir tercihe dayanılamaz** — aşağıdaki tuzağa bakın. Dilekçe yazılırken
   A ve D birlikte işlenmeli.
3. **Sunum ve Oy Pusulası hâlâ v1.3** ve oylamayı açık anlatıyor. Bir daha dağıtılacaksa
   kapanış durumuna göre gözden geçirilmeli.

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
