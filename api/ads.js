// Vercel serverless: /ads.txt - AdSense tam olarak bu formatta bekliyor (satır sonu newline, tek veri satırı)
// https://support.google.com/adsense/answer/7532444
const ADS_LINE = 'google.com, pub-1484572525060728, DIRECT, f08c47fec0942fa0';

module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  // Dosya sonunda mutlaka newline olsun (AdSense bazı kontrollerde bunu arıyor)
  res.status(200).send(ADS_LINE + '\n');
};
