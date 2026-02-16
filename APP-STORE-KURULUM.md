# Quiz Oyunu – App Store’a Yükleme Rehberi

Bu rehber, uygulamanızı Apple App Store’a yüklemeniz için gereken adımları özetler.

---

## Ön koşullar

| Gereksinim | Açıklama |
|------------|----------|
| **Apple Developer Program** | Yıllık **99 USD**. [developer.apple.com](https://developer.apple.com/programs/) üzerinden kayıt. Onay 24–48 saat sürebilir. |
| **Mac bilgisayar** | iOS uygulaması sadece **macOS** üzerinde derlenir. Windows’ta Xcode çalışmaz. |
| **Xcode** | Mac’te App Store’dan **Xcode** (en güncel sürüm) kurulu olmalı. |

> **Not:** Şu an Windows kullanıyorsanız, iOS build ve App Store yüklemesi için bir Mac’e (kendi Mac’iniz, arkadaş veya Mac in the Cloud gibi bir hizmet) ihtiyacınız var.

---

## Adım 1: Proje hazırlığı (bu bilgisayarda)

- [ ] `package.json` içinde **version** değerini güncelleyin (örn. `1.0.0` → `1.0.1`).
- [ ] `capacitor.config.json` içindeki **appId**’yi Apple’da kullanacağınız Bundle ID ile aynı yapın (örn. `com.quizoyunu.app` – genelde küçük harf, nokta ile).
- [ ] Uygulama **isim**, **açıklama** ve **gizlilik** metinlerini App Store kurallarına uygun hazırlayın (aşağıda örnek var).

---

## Adım 2: Mac’te iOS projesi oluşturma

1. Projeyi Mac’e kopyalayın (Git ile clone veya dosya kopyalama).
2. Terminal’de proje klasörüne girin:
   ```bash
   cd /path/to/QuizApp
   ```
3. Bağımlılıkları ve iOS platformunu ekleyin:
   ```bash
   npm install
   npx cap add ios
   ```
4. Web dosyalarını iOS projesine kopyalayın:
   ```bash
   npx cap sync ios
   ```
5. Xcode’da açın:
   ```bash
   npx cap open ios
   ```

---

## Adım 3: Xcode ayarları

1. Sol taraftan **App** projesini seçin → **Signing & Capabilities** sekmesi.
2. **Team:** Apple Developer hesabınızla giriş yapın ve takımınızı seçin.
3. **Bundle Identifier:** App Store Connect’te oluşturacağınız uygulama ile aynı olmalı (örn. `com.quizoyunu.app`).
4. **Version** ve **Build** numarasını ayarlayın:
   - **Version** = Kullanıcıya görünen sürüm (örn. `1.0.0`).
   - **Build** = Her yüklemede artan sayı (örn. `1`, `2`, `3`…).

---

## Adım 4: App Store Connect’te uygulama kaydı

1. [App Store Connect](https://appstoreconnect.apple.com) → **My Apps** → **+** → **New App**.
2. Doldurulacaklar:
   - **Platform:** iOS  
   - **Name:** Quiz Oyunu (veya mağazada görünmesini istediğiniz isim)  
   - **Primary Language:** Türkçe veya İngilizce  
   - **Bundle ID:** Xcode’daki Bundle Identifier ile aynı (örn. `com.quizoyunu.app`)  
   - **SKU:** Benzersiz bir kod (örn. `quiz-oyunu-2025`)

---

## Adım 5: Uygulama bilgileri (App Store’da görünecek)

Aşağıdakileri App Store Connect’te ilgili alanlara yazın. İsterseniz kendi metinlerinizle değiştirebilirsiniz.

### Uygulama adı (30 karakter)
```
Quiz Oyunu
```

### Alt başlık (30 karakter)
```
Kendi quizlerinizi oluşturun
```

### Açıklama (Türkçe örnek)
```
Kendi sorularınızla quiz oluşturun, arkadaşlarınızla veya kendiniz oynayın.

• Quiz oyna: Hazır quizlerden birini seçin, tam ekran cevaplayın.
• Quiz oluştur: Toplu yapıştırma ile çok sayıda soru ekleyin; sistem soruları ve 5 şıkkı otomatik algılar.
• Manuel soru ekleme ve düzenleme.
• Sorular tarayıcıda yerel saklanır; sunucu gerekmez.
• Yedekleme: Quizleri dışa aktarıp başka cihaza içe aktarabilirsiniz.
• İngilizce ve Türkçe arayüz.
• Ses efektleri ve tam ekran modu.
```

### Anahtar kelimeler (100 karakter, virgülle ayrılmış)
```
quiz,test,soru,cevap,eğitim,trivia,oyun
```

### Gizlilik politikası URL’si
- Uygulama veri toplamıyorsa bile Apple genelde bir URL ister.  
- Basit bir sayfa oluşturup “Bu uygulama kişisel veri toplamaz.” yazıp URL’yi buraya ekleyebilirsiniz.  
- GitHub Pages, kendi siteniz veya bir gizlilik politikası oluşturucu kullanabilirsiniz.

### Kategori
Öneri: **Eğitim** veya **Eğlence**.

### Yaş sınıfı
Genelde **4+** uygundur (şiddet/olgun içerik yok).

---

## Adım 6: Görseller

### Uygulama ikonu
- **1024x1024 px**, PNG, köşeleri yuvarlatılmamış (Apple kendisi maskeler).
- Şu an `logoquiz.png` var; 1024x1024 değilse bu boyutta yeni bir ikon hazırlayın.
- Xcode’da **App** → **Assets.xcassets** → **AppIcon** içine sürükleyin.

### Ekran görüntüleri (screenshot)
Apple’ın istediği cihaz boyutları zaman zaman değişir. Güncel listeyi [App Store Connect Yardım](https://help.apple.com/app-store-connect/#/devd274dd925) veya Xcode Organizer’da görürsünüz. Örnek:
- **6.7" (iPhone 15 Pro Max):** 1290 x 2796 px  
- **6.5" (iPhone 14 Plus):** 1284 x 2778 px  
- **5.5" (iPhone 8 Plus):** 1242 x 2208 px  

Simülatörde veya gerçek cihazda uygulamayı açıp ekran görüntüsü alın (Cmd+S simülatörde). En az bir set (örn. 6.7") doldurmanız yeterli; diğerleri opsiyonel.

---

## Adım 7: Build oluştururken dikkat

- Cihazı **Generic iOS Device** (veya gerçek cihaz) seçin; simülatör seçiliyse Archive oluşmaz.
- Menü: **Product** → **Archive**.
- Archive tamamlanınca **Organizer** açılır → **Distribute App** → **App Store Connect** → **Upload**.

---

## Adım 8: İnceleme için gönderme

1. App Store Connect’te uygulamanızı açın.
2. Yüklediğiniz **build**’i seçin.
3. **Pricing and Availability:** Ücretsiz seçin (veya fiyat belirleyin).
4. **App Privacy:** Veri toplamıyorsanız “Data Not Collected” ile işaretleyin.
5. **Review Information:** İnceleme için iletişim e-postası ve gerekirse demo hesabı.
6. Tüm alanlar dolu ve build seçili olduğunda **Submit for Review**’e tıklayın.

---

## Kısa kontrol listesi

- [ ] Apple Developer Program üyeliği (99 USD/yıl)
- [ ] Mac + Xcode
- [ ] `npm install` ve `npx cap add ios` + `npx cap sync ios`
- [ ] Xcode’da imzalama (Team, Bundle ID)
- [ ] App Store Connect’te uygulama oluşturuldu
- [ ] İsim, açıklama, anahtar kelimeler, kategori, yaş
- [ ] Gizlilik politikası URL’si
- [ ] 1024x1024 ikon
- [ ] Ekran görüntüleri (en az bir cihaz boyutu)
- [ ] Archive → Upload
- [ ] Submit for Review

İnceleme genelde 24–48 saat içinde sonuçlanır. Red gelirse e-postadaki açıklamaya göre düzeltip tekrar gönderirsiniz.

Takıldığınız bir adım olursa (örn. Bundle ID, imzalama hatası, ekran görüntüsü boyutları) hangi adım olduğunu yazarsanız, o adımı birlikte netleştirebiliriz.
