# AdSense / ads.txt – "Connection timed out" çözümü

## Yapılan değişiklik (kod)

- **ads.txt** artık **statik dosya** olarak sunuluyor (API route yok).
- Böylece serverless "cold start" olmuyor; istek doğrudan CDN’den cevaplanıyor ve zaman aşımı riski azalıyor.

## Google AdSense videosundaki 6 madde (crawler ads.txt bulabilsin)

| # | Öneri | Durum |
|---|--------|--------|
| 1 | Dosya erişilebilir olmalı (404/500 olmamalı) | OK: Kökte ads.txt + Vercel /api/ads ile 200 OK |
| 2 | Kök alan adından erişilebilmeli (domain.com/ads.txt) | OK: quizatime.com/ads.txt sunuluyor |
| 3 | robots.txt taramaya izin vermeli | OK: robots.txt eklendi, Allow: / (ads.txt engellenmiyor) |
| 4 | HTTP 200 OK dönmeli | OK: API ve statik dosya 200 döndürüyor |
| 5 | Biçim hatası / geçersiz karakter olmamalı | OK: Tek satır düz metin, UTF-8 |
| 6 | Hem HTTP hem HTTPS'ten erişilebilmeli | Host'ta HTTP->HTTPS yönlendirmesi olmalı (Vercel varsayılan yapar) |

**Kontrol et:** https://quizatime.com/ads.txt ve https://www.quizatime.com/ads.txt (www kullanıyorsan) 200 ile açılmalı. http://... açıldığında HTTPS'e yönlenmeli.

## AdSense "ads.txt bulunamadı" diyorsa (dosya açılıyor ama algılamıyor)

1. **Domain eşleşmesi (www / non-www)**  
   AdSense'te site tam olarak hangi adresle ekli? (`https://quizatime.com` mi, `https://www.quizatime.com` mi?)  
   - `quizatime.com` ekliyse → `https://quizatime.com/ads.txt` çalışmalı.  
   - `www.quizatime.com` ekliyse → `https://www.quizatime.com/ads.txt` de aynı içeriği göstermeli.  
   İkisini de tarayıcıda açıp sadece `google.com, pub-...` satırının göründüğünden emin ol.

2. **Google'ın araçlarıyla kontrol**  
   [AdSense ads.txt troubleshooter](https://support.google.com/adsense/troubleshooter/9556696) sayfasında domain'i yazıp "Test" et. Sonuç hâlâ "bulunamadı" ise 24–48 saat sonra tekrar dene.

3. **AdSense'te yeniden kontrol**  
   AdSense → Siteler → ilgili site → ads.txt uyarısının yanında "Yeniden dene" / "Recheck" varsa tıkla.

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
