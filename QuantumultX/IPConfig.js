if ($response.statusCode != 200) {
  $done(Null);
}

const emojis = ['🍓','🥑','🍉','🥦','🍍','🍋','🫐'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var flags = new Map([
  ["JP", "🇯🇵"], ["US", "🇺🇸"], ["CN", "🇨🇳"], ["SG", "🇸🇬"], ["HK", "🇭🇰"],
  ["TW", "🇨🇳"], ["KR", "🇰🇷"], ["DE", "🇩🇪"], ["GB", "🇬🇧"], ["RU", "🇷🇺"],
  ["FR", "🇫🇷"], ["IN", "🇮🇳"], ["CA", "🇨🇦"], ["AU", "🇦🇺"], ["MY", "🇲🇾"]
]);

var obj = JSON.parse($response.body);

var country = obj['countryCode'] || 'XX';
var city = obj['city'] || '未知城市';
var region = obj['regionName'] || '未知区域';
var as = obj['as'] || '未知运营商';
var ip = obj['query'] || '0.0.0.0';

var title = (flags.get(country) || '🌐') + ' ' + region;
var subtitle = emojis[getRandomInt(emojis.length)] + ' ' + as + ' ' + ip;
var description = country + '-' + city + '\n' + as + '\n' + ip;

$done({title, subtitle, ip, description});
