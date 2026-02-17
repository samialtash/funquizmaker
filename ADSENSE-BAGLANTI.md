# AdSense / ads.txt – "Connection timed out" çözümü

## Yapılan değişiklik (kod)

- **ads.txt** artık **statik dosya** olarak sunuluyor (API route yok).
- Böylece serverless "cold start" olmuyor; istek doğrudan CDN’den cevaplanıyor ve zaman aşımı riski azalıyor.

## Senin kontrol etmen gerekenler

### 1. Vercel Firewall (WAF)
- **Vercel Dashboard** → Projen → **Settings** → **Firewall**
- **Attack Challenge Mode** veya **WAF** açıksa, bazı botlar / ölçüm siteleri engellenebilir.
- Mümkünse Google / AdSense için kural gevşet veya test için geçici kapat.

### 2. Domain ve DNS
- **Custom domain** kullanıyorsan: **Vercel** → **Settings** → **Domains**’te domain doğru ve "Verified" görünmeli.
- DNS’te A/CNAME kayıtları Vercel’in verdiği değerlere yönlenmeli (propagation 24–48 saat sürebilir).
- `https://SENİN-DOMAIN.com/ads.txt` adresini tarayıcıda aç; sadece `google.com, pub-...` satırı görünmeli.

### 3. Farklı ağlardan test
- Mobil veri ile dene (Wi‑Fi’den farklı).
- Başka bir cihaz veya "Gizli pencere" ile dene.
- [Google’ın ads.txt troubleshooter](https://support.google.com/adsense/troubleshooter/9556696) ile kontrol et.

### 4. HTTP status / ölçüm siteleri
- Bazı siteler kısa timeout (5–10 sn) kullanır; bazen kendi sunucularından erişim de kısıtlı olabilir.
- Önemli olan: **Tarayıcıdan** ve **Google’ın araçlarından** erişimin çalışması.
- Tarayıcıda `https://SENİN-DOMAIN.com/ads.txt` açılıyorsa, AdSense tarafı da genelde erişebilir.

### 5. Vercel bölge / limit
- Proje **pause** veya **limit**e takılmamış olmalı (Dashboard’da kontrol et).
- Gerekirse farklı bir "HTTP status" aracı dene (örn. uptimerobot, pingdom).

---

**Özet:** Kod tarafında ads.txt statik; timeout büyük ihtimalle ağ, firewall veya DNS kaynaklı. Yukarıdaki adımları tek tek kontrol et.
