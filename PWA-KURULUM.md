# Quiz Uygulamasını Telefon / Bilgisayara Kurma (PWA)

Bu proje **PWA (Progressive Web App)** olarak ayarlandı. Tarayıcıdan "Uygulama olarak yükle" ile kurulabilir.

## Nasıl kurulur?

### Bilgisayar (Chrome / Edge)
1. Uygulamayı tarayıcıda açın (`index.html` veya sunucu adresi).
2. Adres çubuğunun sağında **yükle / kur** ikonuna tıklayın.
3. "Yükle" veya "Kur" deyin.
4. Uygulama masaüstünde veya uygulamalar listesinde açılır.

### Android (Chrome)
1. Siteyi Chrome'da açın.
2. Menü (⋮) → **"Ana ekrana ekle"** veya **"Uygulamayı yükle"**.
3. İsim verip ekleyin; ana ekranda uygulama simgesi oluşur.

### iPhone / iPad (Safari)
1. Siteyi Safari'de açın.
2. Paylaş butonuna basın → **"Ana Ekrana Ekle"**.
3. İsim verip ekleyin; ana ekranda simge çıkar.

## Dosyalar
- **manifest.json** – Uygulama adı, tema rengi, tam ekran modu.
- **sw.js** – Service worker; sayfaları önbelleğe alır, çevrimdışı çalışmaya yardımcı olur.
- **index.html** – Manifest ve PWA meta etiketleri eklendi.

## İkon eklemek (isteğe bağlı)
Daha iyi bir kurulum deneyimi için:
1. `icons` klasörü oluşturun.
2. `icon-192.png` (192x192) ve `icon-512.png` (512x512) ekleyin.
3. `manifest.json` içinde `"icons": []` kısmını bu dosyalara göre güncelleyin.

## Sunucudan açmak
Dosyayı doğrudan açmak (`file://`) yerine bir **HTTP sunucusu** ile açarsanız kurulum daha güvenilir çalışır:
- VS Code: "Live Server" eklentisi.
- Node: `npx serve .` (klasörde çalıştırın).
- Python: `python -m http.server 8000`

Sonra tarayıcıda `http://localhost:8000` adresini açıp yukarıdaki adımlarla uygulamayı kurun.
