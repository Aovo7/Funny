if ($response.statusCode != 200) {
  $done(Null);
}

var flags = new Map([
  ["JP", "🇯🇵"], ["US", "🇺🇸"], ["CN", "🇨🇳"], ["SG", "🇸🇬"], ["HK", "🇭🇰"],
  ["TW", "🇨🇳"], ["KR", "🇰🇷"], ["DE", "🇩🇪"], ["GB", "🇬🇧"], ["RU", "🇷🇺"],
  ["FR", "🇫🇷"], ["IN", "🇮🇳"], ["CA", "🇨🇦"], ["AU", "🇦🇺"], ["MY", "🇲🇾"]
]);

var obj = JSON.parse($response.body);

// 字段提取
var countryCode = obj['countryCode'] || 'XX';
var regionName  = obj['regionName'] || '未知区域';
var city        = obj['city'] || '未知城市';
var asn         = obj['as'] || '未知运营商';
var isp         = obj['isp'] || '未知ISP';
var ip          = obj['query'] || '0.0.0.0';

// 构造信息面板内容
var title = (flags.get(countryCode) || '🌐') + ' ' + regionName;
var subtitle = asn;
var description = `${countryCode}-${city}\n${isp}\n${asn}\n${ip}`;

$done({ title, subtitle, ip, description });
