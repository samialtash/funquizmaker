# AdSense’te Reklamları Nasıl Görürsünüz?

## 1. Sitede reklamların görünmesi

- Siteyi **masaüstü tarayıcıda** açın (mobilde yan reklamlar yok).
- Ekran genişliği **en az 1280px** olsun (pencereyi büyütün).
- **Ana sayfada** (quizatime.com veya localhost) sol ve sağda 200x650 reklam alanları görünür.
- Bazen reklam hemen dolmaz; sayfayı yenileyin veya birkaç dakika bekleyin.
- Hesabınız “yayıncı onayı” aşamasındaysa veya trafik azsa reklam boş kalabilir; bu normaldir.

## 2. AdSense panelinde nerede görünür?

1. **adsense.google.com** → Giriş yapın.
2. **Reklamlar** (veya “Reklam birimleri”) menüsüne girin.
3. **Reklam birimleri** listesinde `4606573078` slot ID’li birimi görürsünüz.
4. Bu birime tıklayınca:
   - Hangi sayfada kullanıldığı (site URL’niz),
   - Gösterim (impression) ve tıklama sayıları,
   - Tahmini kazanç
   gibi bilgileri görürsünüz.

## 3. Yeni reklam birimi oluşturmak (isteğe bağlı)

Sol ve sağ için **ayrı** birim isterseniz:

1. AdSense → **Reklamlar** → **Reklam birimleri**.
2. **Reklam birimi ekle** / **Yeni reklam birimi**.
3. Tür: **Görüntülü reklam** (Display).
4. Ad: örn. "Ana sayfa sol", "Ana sayfa sağ".
5. Boyut: **Özel** veya **200x650** (varsa) seçin; yoksa “Çoklu boyut” veya “Dikey” seçeneklerine bakın.
6. Kaydedin; size bir **Reklam birimi kimliği** (slot ID, örn. 1234567890) verilir.
7. Bu ID’yi sitede kullanın:
   - `index.html` içinde sol reklam için `data-ad-slot="BURAYA_SOL_ID"`.
   - Sağ reklam için `data-ad-slot="BURAYA_SAG_ID"`.

## 4. Verileri nerede görürsünüz?

- **Raporlar** (veya “Performans”) bölümünde:
  - **Gösterimler**: Reklamın kaç kez gösterildiği.
  - **Tıklanma**: Kaç tıklama aldığı.
  - **Tahmini kazanç**: Gelir tahmini.
- Raporlarda **“Reklam birimine göre”** veya **“Reklam boyutuna göre”** filtreleyerek 200x650 veya ilgili slot’u seçebilirsiniz (AdSense arayüzüne göre menü adları değişebilir).

## 5. Reklam çıkmıyorsa

- **Yayıncı onayı** tamamlanmış mı kontrol edin.
- **Reklam birimi** “Etkin” mi bakın.
- Tarayıcıda **reklam engelleyici** kapalı olsun.
- **Geliştirici araçları** (F12) → Console’da AdSense ile ilgili hata var mı bakın.
- Birkaç gün trafik ve zaman verin; düşük trafikte reklam bazen boş kalır.

Özet: Reklamları **sitede** masaüstünde ana sayfada sol/sağda görürsünüz; **AdSense’te** ise Reklamlar → Reklam birimleri ve Raporlar bölümünden takip edersiniz.
