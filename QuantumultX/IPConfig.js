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

var title = flags.get(obj['countryCode']) + ' ' + obj['regionName'];
var subtitle = emojis[getRandomInt(emojis.length)] + ' ' + obj['as'] + ' ' + obj['query'];
var ip = obj['query'];
var description = obj['countryCode'] + '-' + obj['city'] + '\n' + obj['as'] + '\n' + obj['query'];

$done({title, subtitle, ip, description});
