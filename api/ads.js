// Vercel serverless: /ads.txt isteği bu API'ye yönlendirilir, böylece her zaman doğru metin döner (AdSense için)
const adsContent = `# Google AdSense - Authorized Digital Sellers
# https://support.google.com/adsense/answer/7532444
google.com, pub-1484572525060728, DIRECT, f08c47fec0942fa0
`;

module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.status(200).send(adsContent.trim());
};
