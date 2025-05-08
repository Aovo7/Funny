if ($response.statusCode !== 200) {
  $done(null);
}

function toFlag(code) {
  const cc = code.toUpperCase();
  const offset = 0x1f1e6;
  const res = [...cc].map(c => String.fromCodePoint(offset + c.charCodeAt(0) - 65)).join('');
  return res === '🇹🇼' ? '🇨🇳' : res;
}

const data = JSON.parse($response.body);

const title = `${toFlag(data.countryCode)} ${data.regionName}`;
const subtitle = `${data.as}`;
const ip = data.query;
const description = `${data.countryCode}-${data.city}\n${data.timezone}\n${data.query}\n经度:${data.lon} 纬度:${data.lat}\n${data.isp || ''}${data.org ? '\n' + data.org : ''}`;

$done({ title, subtitle, ip, description });
