import type { KanaCard } from '../types';

export const hiraganaCards: KanaCard[] = [
  // あ行 (a-row)
  {
    id: 'a', kana: 'あ', romaji: 'a', row: 'あ行',
    type: 'hiragana',
    words: [
      { word: 'ありがとう', reading: 'arigatou', meaning: 'thank you' },
      { word: 'あめ', reading: 'ame', meaning: 'rain / candy' },
      { word: 'あさ', reading: 'asa', meaning: 'morning' },
      { word: 'あたま', reading: 'atama', meaning: 'head' },
      { word: 'あお', reading: 'ao', meaning: 'blue' },
    ],
  },
  {
    id: 'i', kana: 'い', romaji: 'i', row: 'あ行',
    type: 'hiragana',
    words: [
      { word: 'いりぐち', reading: 'iriguchi', meaning: 'entrance' },
      { word: 'いぬ', reading: 'inu', meaning: 'dog' },
      { word: 'いえ', reading: 'ie', meaning: 'house' },
      { word: 'いす', reading: 'isu', meaning: 'chair' },
      { word: 'いろ', reading: 'iro', meaning: 'color' },
    ],
  },
  {
    id: 'u', kana: 'う', romaji: 'u', row: 'あ行',
    type: 'hiragana',
    words: [
      { word: 'うみ', reading: 'umi', meaning: 'sea / ocean' },
      { word: 'うた', reading: 'uta', meaning: 'song' },
      { word: 'うで', reading: 'ude', meaning: 'arm' },
      { word: 'うし', reading: 'ushi', meaning: 'cow' },
      { word: 'うえ', reading: 'ue', meaning: 'above / up' },
    ],
  },
  {
    id: 'e', kana: 'え', romaji: 'e', row: 'あ行',
    type: 'hiragana',
    words: [
      { word: 'えき', reading: 'eki', meaning: 'train station' },
      { word: 'えん', reading: 'en', meaning: 'yen' },
      { word: 'えいが', reading: 'eiga', meaning: 'movie' },
      { word: 'えほん', reading: 'ehon', meaning: 'picture book' },
      { word: 'えがお', reading: 'egao', meaning: 'smile' },
    ],
  },
  {
    id: 'o', kana: 'お', romaji: 'o', row: 'あ行',
    type: 'hiragana',
    words: [
      { word: 'おみやげ', reading: 'omiyage', meaning: 'souvenir' },
      { word: 'おちゃ', reading: 'ocha', meaning: 'green tea' },
      { word: 'おかあさん', reading: 'okaasan', meaning: 'mother' },
      { word: 'おとこ', reading: 'otoko', meaning: 'man / male' },
      { word: 'おんがく', reading: 'ongaku', meaning: 'music' },
    ],
  },

  // か行 (ka-row)
  {
    id: 'ka', kana: 'か', romaji: 'ka', row: 'か行',
    type: 'hiragana',
    words: [
      { word: 'かばん', reading: 'kaban', meaning: 'bag / luggage' },
      { word: 'かさ', reading: 'kasa', meaning: 'umbrella' },
      { word: 'かぜ', reading: 'kaze', meaning: 'wind / cold' },
      { word: 'かみ', reading: 'kami', meaning: 'hair / paper / god' },
      { word: 'かいもの', reading: 'kaimono', meaning: 'shopping' },
    ],
  },
  {
    id: 'ki', kana: 'き', romaji: 'ki', row: 'か行',
    type: 'hiragana',
    words: [
      { word: 'きっぷ', reading: 'kippu', meaning: 'ticket' },
      { word: 'き', reading: 'ki', meaning: 'tree' },
      { word: 'きもの', reading: 'kimono', meaning: 'kimono' },
      { word: 'きのう', reading: 'kinou', meaning: 'yesterday' },
      { word: 'きって', reading: 'kitte', meaning: 'stamp' },
    ],
  },
  {
    id: 'ku', kana: 'く', romaji: 'ku', row: 'か行',
    type: 'hiragana',
    words: [
      { word: 'くうこう', reading: 'kuukou', meaning: 'airport' },
      { word: 'くつ', reading: 'kutsu', meaning: 'shoes' },
      { word: 'くも', reading: 'kumo', meaning: 'cloud' },
      { word: 'くに', reading: 'kuni', meaning: 'country' },
      { word: 'くち', reading: 'kuchi', meaning: 'mouth' },
    ],
  },
  {
    id: 'ke', kana: 'け', romaji: 'ke', row: 'か行',
    type: 'hiragana',
    words: [
      { word: 'けしき', reading: 'keshiki', meaning: 'scenery / view' },
      { word: 'けが', reading: 'kega', meaning: 'injury' },
      { word: 'けいたい', reading: 'keitai', meaning: 'mobile phone' },
      { word: 'けっこん', reading: 'kekkon', meaning: 'marriage' },
      { word: 'けさ', reading: 'kesa', meaning: 'this morning' },
    ],
  },
  {
    id: 'ko', kana: 'こ', romaji: 'ko', row: 'か行',
    type: 'hiragana',
    words: [
      { word: 'ここ', reading: 'koko', meaning: 'here / this place' },
      { word: 'こども', reading: 'kodomo', meaning: 'child' },
      { word: 'こえ', reading: 'koe', meaning: 'voice' },
      { word: 'こめ', reading: 'kome', meaning: 'rice (uncooked)' },
      { word: 'こうえん', reading: 'kouen', meaning: 'park' },
    ],
  },

  // さ行 (sa-row)
  {
    id: 'sa', kana: 'さ', romaji: 'sa', row: 'さ行',
    type: 'hiragana',
    words: [
      { word: 'さいふ', reading: 'saifu', meaning: 'wallet' },
      { word: 'さかな', reading: 'sakana', meaning: 'fish' },
      { word: 'さくら', reading: 'sakura', meaning: 'cherry blossom' },
      { word: 'さとう', reading: 'satou', meaning: 'sugar' },
      { word: 'さむい', reading: 'samui', meaning: 'cold (weather)' },
    ],
  },
  {
    id: 'si', kana: 'し', romaji: 'shi', row: 'さ行',
    type: 'hiragana',
    words: [
      { word: 'しんかんせん', reading: 'shinkansen', meaning: 'bullet train' },
      { word: 'しお', reading: 'shio', meaning: 'salt' },
      { word: 'しごと', reading: 'shigoto', meaning: 'work / job' },
      { word: 'しんぶん', reading: 'shinbun', meaning: 'newspaper' },
      { word: 'しろ', reading: 'shiro', meaning: 'white / castle' },
    ],
  },
  {
    id: 'su', kana: 'す', romaji: 'su', row: 'さ行',
    type: 'hiragana',
    words: [
      { word: 'すし', reading: 'sushi', meaning: 'sushi' },
      { word: 'すいか', reading: 'suika', meaning: 'watermelon' },
      { word: 'すなお', reading: 'sunao', meaning: 'obedient / honest' },
      { word: 'すき', reading: 'suki', meaning: 'like / favourite' },
      { word: 'すずしい', reading: 'suzushii', meaning: 'cool (weather)' },
    ],
  },
  {
    id: 'se', kana: 'せ', romaji: 'se', row: 'さ行',
    type: 'hiragana',
    words: [
      { word: 'せかい', reading: 'sekai', meaning: 'world' },
      { word: 'せんせい', reading: 'sensei', meaning: 'teacher' },
      { word: 'せなか', reading: 'senaka', meaning: 'back (body)' },
      { word: 'せんたく', reading: 'sentaku', meaning: 'laundry' },
      { word: 'せき', reading: 'seki', meaning: 'seat / cough' },
    ],
  },
  {
    id: 'so', kana: 'そ', romaji: 'so', row: 'さ行',
    type: 'hiragana',
    words: [
      { word: 'そと', reading: 'soto', meaning: 'outside' },
      { word: 'そら', reading: 'sora', meaning: 'sky' },
      { word: 'そば', reading: 'soba', meaning: 'buckwheat noodles / nearby' },
      { word: 'そうじ', reading: 'souji', meaning: 'cleaning' },
      { word: 'そふ', reading: 'sofu', meaning: 'grandfather' },
    ],
  },

  // た行 (ta-row)
  {
    id: 'ta', kana: 'た', romaji: 'ta', row: 'た行',
    type: 'hiragana',
    words: [
      { word: 'たびびと', reading: 'tabibito', meaning: 'traveler' },
      { word: 'たまご', reading: 'tamago', meaning: 'egg' },
      { word: 'たなか', reading: 'tanaka', meaning: 'Tanaka (surname)' },
      { word: 'たてもの', reading: 'tatemono', meaning: 'building' },
      { word: 'たのしい', reading: 'tanoshii', meaning: 'fun / enjoyable' },
    ],
  },
  {
    id: 'ti', kana: 'ち', romaji: 'chi', row: 'た行',
    type: 'hiragana',
    words: [
      { word: 'ちず', reading: 'chizu', meaning: 'map' },
      { word: 'ちかてつ', reading: 'chikatetsu', meaning: 'subway' },
      { word: 'ちから', reading: 'chikara', meaning: 'strength / power' },
      { word: 'ちち', reading: 'chichi', meaning: 'father' },
      { word: 'ちかい', reading: 'chikai', meaning: 'close / near' },
    ],
  },
  {
    id: 'tu', kana: 'つ', romaji: 'tsu', row: 'た行',
    type: 'hiragana',
    words: [
      { word: 'つぎ', reading: 'tsugi', meaning: 'next (stop)' },
      { word: 'つくえ', reading: 'tsukue', meaning: 'desk' },
      { word: 'つき', reading: 'tsuki', meaning: 'moon / month' },
      { word: 'つめたい', reading: 'tsumetai', meaning: 'cold (to touch)' },
      { word: 'つり', reading: 'tsuri', meaning: 'fishing' },
    ],
  },
  {
    id: 'te', kana: 'て', romaji: 'te', row: 'た行',
    type: 'hiragana',
    words: [
      { word: 'てがみ', reading: 'tegami', meaning: 'letter / postcard' },
      { word: 'て', reading: 'te', meaning: 'hand' },
      { word: 'てんき', reading: 'tenki', meaning: 'weather' },
      { word: 'てんぷら', reading: 'tenpura', meaning: 'tempura' },
      { word: 'てつだう', reading: 'tetsudau', meaning: 'to help' },
    ],
  },
  {
    id: 'to', kana: 'と', romaji: 'to', row: 'た行',
    type: 'hiragana',
    words: [
      { word: 'とりい', reading: 'torii', meaning: 'shrine gate' },
      { word: 'とけい', reading: 'tokei', meaning: 'clock / watch' },
      { word: 'とり', reading: 'tori', meaning: 'bird' },
      { word: 'ともだち', reading: 'tomodachi', meaning: 'friend' },
      { word: 'としょかん', reading: 'toshokan', meaning: 'library' },
    ],
  },

  // な行 (na-row)
  {
    id: 'na', kana: 'な', romaji: 'na', row: 'な行',
    type: 'hiragana',
    words: [
      { word: 'なりたくうこう', reading: 'narita kuukou', meaning: 'Narita Airport' },
      { word: 'なまえ', reading: 'namae', meaning: 'name' },
      { word: 'なか', reading: 'naka', meaning: 'inside / middle' },
      { word: 'なつ', reading: 'natsu', meaning: 'summer' },
      { word: 'なに', reading: 'nani', meaning: 'what' },
    ],
  },
  {
    id: 'ni', kana: 'に', romaji: 'ni', row: 'な行',
    type: 'hiragana',
    words: [
      { word: 'にほん', reading: 'nihon', meaning: 'Japan' },
      { word: 'にく', reading: 'niku', meaning: 'meat' },
      { word: 'にわ', reading: 'niwa', meaning: 'garden' },
      { word: 'にもつ', reading: 'nimotsu', meaning: 'luggage' },
      { word: 'にちようび', reading: 'nichiyoubi', meaning: 'Sunday' },
    ],
  },
  {
    id: 'nu', kana: 'ぬ', romaji: 'nu', row: 'な行',
    type: 'hiragana',
    words: [
      { word: 'ぬの', reading: 'nuno', meaning: 'cloth / fabric' },
      { word: 'ぬま', reading: 'numa', meaning: 'swamp / marsh' },
      { word: 'ぬりえ', reading: 'nurie', meaning: 'coloring picture' },
      { word: 'ぬいぐるみ', reading: 'nuigurumi', meaning: 'stuffed animal' },
      { word: 'ぬく', reading: 'nuku', meaning: 'to pull out' },
    ],
  },
  {
    id: 'ne', kana: 'ね', romaji: 'ne', row: 'な行',
    type: 'hiragana',
    words: [
      { word: 'ねだん', reading: 'nedan', meaning: 'price / cost' },
      { word: 'ねこ', reading: 'neko', meaning: 'cat' },
      { word: 'ねむい', reading: 'nemui', meaning: 'sleepy' },
      { word: 'ねつ', reading: 'netsu', meaning: 'fever / heat' },
      { word: 'ねんれい', reading: 'nenrei', meaning: 'age' },
    ],
  },
  {
    id: 'no', kana: 'の', romaji: 'no', row: 'な行',
    type: 'hiragana',
    words: [
      { word: 'のりば', reading: 'noriba', meaning: 'boarding platform' },
      { word: 'のみもの', reading: 'nomimono', meaning: 'drink / beverage' },
      { word: 'のど', reading: 'nodo', meaning: 'throat' },
      { word: 'のはら', reading: 'nohara', meaning: 'field / meadow' },
      { word: 'のこり', reading: 'nokori', meaning: 'remainder / leftover' },
    ],
  },

  // は行 (ha-row)
  {
    id: 'ha', kana: 'は', romaji: 'ha', row: 'は行',
    type: 'hiragana',
    words: [
      { word: 'はくぶつかん', reading: 'hakubutsukan', meaning: 'museum' },
      { word: 'はな', reading: 'hana', meaning: 'flower / nose' },
      { word: 'はし', reading: 'hashi', meaning: 'chopsticks / bridge' },
      { word: 'はる', reading: 'haru', meaning: 'spring (season)' },
      { word: 'はやい', reading: 'hayai', meaning: 'fast / early' },
    ],
  },
  {
    id: 'hi', kana: 'ひ', romaji: 'hi', row: 'は行',
    type: 'hiragana',
    words: [
      { word: 'ひこうき', reading: 'hikouki', meaning: 'airplane' },
      { word: 'ひと', reading: 'hito', meaning: 'person' },
      { word: 'ひる', reading: 'hiru', meaning: 'noon / daytime' },
      { word: 'ひだり', reading: 'hidari', meaning: 'left (direction)' },
      { word: 'ひかり', reading: 'hikari', meaning: 'light' },
    ],
  },
  {
    id: 'hu', kana: 'ふ', romaji: 'fu', row: 'は行',
    type: 'hiragana',
    words: [
      { word: 'ふじさん', reading: 'fujisan', meaning: 'Mt. Fuji' },
      { word: 'ふゆ', reading: 'fuyu', meaning: 'winter' },
      { word: 'ふく', reading: 'fuku', meaning: 'clothes' },
      { word: 'ふろ', reading: 'furo', meaning: 'bath' },
      { word: 'ふとん', reading: 'futon', meaning: 'futon / bedding' },
    ],
  },
  {
    id: 'he', kana: 'へ', romaji: 'he', row: 'は行',
    type: 'hiragana',
    words: [
      { word: 'へや', reading: 'heya', meaning: 'room / hotel room' },
      { word: 'へた', reading: 'heta', meaning: 'unskillful / bad at' },
      { word: 'へん', reading: 'hen', meaning: 'strange / area' },
      { word: 'へいわ', reading: 'heiwa', meaning: 'peace' },
      { word: 'へいじつ', reading: 'heijitsu', meaning: 'weekday' },
    ],
  },
  {
    id: 'ho', kana: 'ほ', romaji: 'ho', row: 'は行',
    type: 'hiragana',
    words: [
      { word: 'ほてる', reading: 'hoteru', meaning: 'hotel' },
      { word: 'ほん', reading: 'hon', meaning: 'book' },
      { word: 'ほし', reading: 'hoshi', meaning: 'star' },
      { word: 'ほど', reading: 'hodo', meaning: 'degree / extent' },
      { word: 'ほうそう', reading: 'housou', meaning: 'broadcast' },
    ],
  },

  // ま行 (ma-row)
  {
    id: 'ma', kana: 'ま', romaji: 'ma', row: 'ま行',
    type: 'hiragana',
    words: [
      { word: 'まち', reading: 'machi', meaning: 'town / city' },
      { word: 'まど', reading: 'mado', meaning: 'window' },
      { word: 'まいにち', reading: 'mainichi', meaning: 'every day' },
      { word: 'まえ', reading: 'mae', meaning: 'front / before' },
      { word: 'まつり', reading: 'matsuri', meaning: 'festival' },
    ],
  },
  {
    id: 'mi', kana: 'み', romaji: 'mi', row: 'ま行',
    type: 'hiragana',
    words: [
      { word: 'みち', reading: 'michi', meaning: 'road / path' },
      { word: 'みず', reading: 'mizu', meaning: 'water' },
      { word: 'みみ', reading: 'mimi', meaning: 'ear' },
      { word: 'みなみ', reading: 'minami', meaning: 'south' },
      { word: 'みどり', reading: 'midori', meaning: 'green' },
    ],
  },
  {
    id: 'mu', kana: 'む', romaji: 'mu', row: 'ま行',
    type: 'hiragana',
    words: [
      { word: 'むりょう', reading: 'muryou', meaning: 'free of charge' },
      { word: 'むし', reading: 'mushi', meaning: 'insect' },
      { word: 'むすこ', reading: 'musuko', meaning: 'son' },
      { word: 'むら', reading: 'mura', meaning: 'village' },
      { word: 'むかし', reading: 'mukashi', meaning: 'old times / the past' },
    ],
  },
  {
    id: 'me', kana: 'め', romaji: 'me', row: 'ま行',
    type: 'hiragana',
    words: [
      { word: 'めいさん', reading: 'meisan', meaning: 'local specialty' },
      { word: 'め', reading: 'me', meaning: 'eye' },
      { word: 'めがね', reading: 'megane', meaning: 'glasses' },
      { word: 'めにゅー', reading: 'menyuu', meaning: 'menu' },
      { word: 'めざましどけい', reading: 'mezamashi dokei', meaning: 'alarm clock' },
    ],
  },
  {
    id: 'mo', kana: 'も', romaji: 'mo', row: 'ま行',
    type: 'hiragana',
    words: [
      { word: 'もみじ', reading: 'momiji', meaning: 'autumn leaves' },
      { word: 'もの', reading: 'mono', meaning: 'thing / object' },
      { word: 'もり', reading: 'mori', meaning: 'forest' },
      { word: 'もち', reading: 'mochi', meaning: 'rice cake' },
      { word: 'もんだい', reading: 'mondai', meaning: 'problem / question' },
    ],
  },

  // や行 (ya-row)
  {
    id: 'ya', kana: 'や', romaji: 'ya', row: 'や行',
    type: 'hiragana',
    words: [
      { word: 'やど', reading: 'yado', meaning: 'inn / lodging' },
      { word: 'やさい', reading: 'yasai', meaning: 'vegetable' },
      { word: 'やすみ', reading: 'yasumi', meaning: 'rest / holiday' },
      { word: 'やま', reading: 'yama', meaning: 'mountain' },
      { word: 'やきとり', reading: 'yakitori', meaning: 'grilled chicken skewer' },
    ],
  },
  {
    id: 'yu', kana: 'ゆ', romaji: 'yu', row: 'や行',
    type: 'hiragana',
    words: [
      { word: 'ゆうびんきょく', reading: 'yuubinkyoku', meaning: 'post office' },
      { word: 'ゆき', reading: 'yuki', meaning: 'snow' },
      { word: 'ゆめ', reading: 'yume', meaning: 'dream' },
      { word: 'ゆびわ', reading: 'yubiwa', meaning: 'ring (jewelry)' },
      { word: 'ゆっくり', reading: 'yukkuri', meaning: 'slowly' },
    ],
  },
  {
    id: 'yo', kana: 'よ', romaji: 'yo', row: 'や行',
    type: 'hiragana',
    words: [
      { word: 'よやく', reading: 'yoyaku', meaning: 'reservation / booking' },
      { word: 'よる', reading: 'yoru', meaning: 'night' },
      { word: 'よみかた', reading: 'yomikata', meaning: 'how to read' },
      { word: 'よこ', reading: 'yoko', meaning: 'side / horizontal' },
      { word: 'ようふく', reading: 'youfuku', meaning: 'western clothes' },
    ],
  },

  // ら行 (ra-row)
  {
    id: 'ra', kana: 'ら', romaji: 'ra', row: 'ら行',
    type: 'hiragana',
    words: [
      { word: 'らくご', reading: 'rakugo', meaning: 'traditional comedy' },
      { word: 'らいねん', reading: 'rainen', meaning: 'next year' },
      { word: 'らいしゅう', reading: 'raishuu', meaning: 'next week' },
      { word: 'らんち', reading: 'ranchi', meaning: 'lunch' },
      { word: 'らく', reading: 'raku', meaning: 'easy / comfortable' },
    ],
  },
  {
    id: 'ri', kana: 'り', romaji: 'ri', row: 'ら行',
    type: 'hiragana',
    words: [
      { word: 'りょかん', reading: 'ryokan', meaning: 'traditional inn' },
      { word: 'りんご', reading: 'ringo', meaning: 'apple' },
      { word: 'りょうり', reading: 'ryouri', meaning: 'cooking / cuisine' },
      { word: 'りゆう', reading: 'riyuu', meaning: 'reason' },
      { word: 'りっぱ', reading: 'rippa', meaning: 'splendid / fine' },
    ],
  },
  {
    id: 'ru', kana: 'る', romaji: 'ru', row: 'ら行',
    type: 'hiragana',
    words: [
      { word: 'るすばん', reading: 'rusuban', meaning: 'house-sitting' },
      { word: 'るーむ', reading: 'ruumu', meaning: 'room (loanword)' },
      { word: 'るいじ', reading: 'ruiji', meaning: 'similar' },
      { word: 'るす', reading: 'rusu', meaning: 'absence from home' },
      { word: 'るーと', reading: 'ruuto', meaning: 'route (loanword)' },
    ],
  },
  {
    id: 're', kana: 'れ', romaji: 're', row: 'ら行',
    type: 'hiragana',
    words: [
      { word: 'れっしゃ', reading: 'ressha', meaning: 'train / railway' },
      { word: 'れいぞうこ', reading: 'reizouko', meaning: 'refrigerator' },
      { word: 'れんらく', reading: 'renraku', meaning: 'contact / communication' },
      { word: 'れきし', reading: 'rekishi', meaning: 'history' },
      { word: 'れすとらん', reading: 'resutoran', meaning: 'restaurant' },
    ],
  },
  {
    id: 'ro', kana: 'ろ', romaji: 'ro', row: 'ら行',
    type: 'hiragana',
    words: [
      { word: 'ろせんず', reading: 'rosenzu', meaning: 'route map' },
      { word: 'ろうか', reading: 'rouka', meaning: 'hallway / corridor' },
      { word: 'ろくおん', reading: 'rokuon', meaning: 'recording' },
      { word: 'ろじ', reading: 'roji', meaning: 'alley / lane' },
      { word: 'ろうじん', reading: 'roujin', meaning: 'elderly person' },
    ],
  },

  // わ行 (wa-row) — ゐ and ゑ removed (archaic)
  {
    id: 'wa', kana: 'わ', romaji: 'wa', row: 'わ行',
    type: 'hiragana',
    words: [
      { word: 'わしょく', reading: 'washoku', meaning: 'Japanese cuisine' },
      { word: 'わたし', reading: 'watashi', meaning: 'I / me' },
      { word: 'わかい', reading: 'wakai', meaning: 'young' },
      { word: 'わらう', reading: 'warau', meaning: 'to laugh / smile' },
      { word: 'わすれる', reading: 'wasureru', meaning: 'to forget' },
    ],
  },
  {
    id: 'wo', kana: 'を', romaji: 'wo', row: 'わ行',
    type: 'hiragana',
    words: [
      { word: 'バスをまつ', reading: 'basu wo matsu', meaning: 'wait for the bus' },
      { word: 'みずをのむ', reading: 'mizu wo nomu', meaning: 'drink water' },
      { word: 'ほんをよむ', reading: 'hon wo yomu', meaning: 'read a book' },
      { word: 'うたをうたう', reading: 'uta wo utau', meaning: 'sing a song' },
      { word: 'てがみをかく', reading: 'tegami wo kaku', meaning: 'write a letter' },
    ],
  },

  // ん (n)
  {
    id: 'n', kana: 'ん', romaji: 'n', row: 'ん',
    type: 'hiragana',
    words: [
      { word: 'おんせん', reading: 'onsen', meaning: 'hot spring' },
      { word: 'でんしゃ', reading: 'densha', meaning: 'train' },
      { word: 'てんき', reading: 'tenki', meaning: 'weather' },
      { word: 'みんな', reading: 'minna', meaning: 'everyone' },
      { word: 'ほんや', reading: 'honya', meaning: 'bookstore' },
    ],
  },
];

// Group cards by row for the progress grid
export const hiraganaRows = [
  'あ行', 'か行', 'さ行', 'た行', 'な行',
  'は行', 'ま行', 'や行', 'ら行', 'わ行', 'ん',
];
