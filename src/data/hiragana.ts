import type { KanaCard } from '../types';

export const hiraganaCards: KanaCard[] = [
  // あ行 (a-row)
  {
    id: 'a', kana: 'あ', romaji: 'a', row: 'あ行',
    type: 'hiragana',
    words: [{ word: 'ありがとう', reading: 'arigatou', meaning: 'thank you' }],
  },
  {
    id: 'i', kana: 'い', romaji: 'i', row: 'あ行',
    type: 'hiragana',
    words: [{ word: 'いりぐち', reading: 'iriguchi', meaning: 'entrance' }],
  },
  {
    id: 'u', kana: 'う', romaji: 'u', row: 'あ行',
    type: 'hiragana',
    words: [{ word: 'うみ', reading: 'umi', meaning: 'sea / ocean' }],
  },
  {
    id: 'e', kana: 'え', romaji: 'e', row: 'あ行',
    type: 'hiragana',
    words: [{ word: 'えき', reading: 'eki', meaning: 'train station' }],
  },
  {
    id: 'o', kana: 'お', romaji: 'o', row: 'あ行',
    type: 'hiragana',
    words: [{ word: 'おみやげ', reading: 'omiyage', meaning: 'souvenir' }],
  },

  // か行 (ka-row)
  {
    id: 'ka', kana: 'か', romaji: 'ka', row: 'か行',
    type: 'hiragana',
    words: [{ word: 'かばん', reading: 'kaban', meaning: 'bag / luggage' }],
  },
  {
    id: 'ki', kana: 'き', romaji: 'ki', row: 'か行',
    type: 'hiragana',
    words: [{ word: 'きっぷ', reading: 'kippu', meaning: 'ticket' }],
  },
  {
    id: 'ku', kana: 'く', romaji: 'ku', row: 'か行',
    type: 'hiragana',
    words: [{ word: 'くうこう', reading: 'kuukou', meaning: 'airport' }],
  },
  {
    id: 'ke', kana: 'け', romaji: 'ke', row: 'か行',
    type: 'hiragana',
    words: [{ word: 'けしき', reading: 'keshiki', meaning: 'scenery / view' }],
  },
  {
    id: 'ko', kana: 'こ', romaji: 'ko', row: 'か行',
    type: 'hiragana',
    words: [{ word: 'ここ', reading: 'koko', meaning: 'here / this place' }],
  },

  // さ行 (sa-row)
  {
    id: 'sa', kana: 'さ', romaji: 'sa', row: 'さ行',
    type: 'hiragana',
    words: [{ word: 'さいふ', reading: 'saifu', meaning: 'wallet' }],
  },
  {
    id: 'si', kana: 'し', romaji: 'shi', row: 'さ行',
    type: 'hiragana',
    words: [{ word: 'しんかんせん', reading: 'shinkansen', meaning: 'bullet train' }],
  },
  {
    id: 'su', kana: 'す', romaji: 'su', row: 'さ行',
    type: 'hiragana',
    words: [{ word: 'すし', reading: 'sushi', meaning: 'sushi' }],
  },
  {
    id: 'se', kana: 'せ', romaji: 'se', row: 'さ行',
    type: 'hiragana',
    words: [{ word: 'せかい', reading: 'sekai', meaning: 'world' }],
  },
  {
    id: 'so', kana: 'そ', romaji: 'so', row: 'さ行',
    type: 'hiragana',
    words: [{ word: 'そと', reading: 'soto', meaning: 'outside' }],
  },

  // た行 (ta-row)
  {
    id: 'ta', kana: 'た', romaji: 'ta', row: 'た行',
    type: 'hiragana',
    words: [{ word: 'たびびと', reading: 'tabibito', meaning: 'traveler' }],
  },
  {
    id: 'ti', kana: 'ち', romaji: 'chi', row: 'た行',
    type: 'hiragana',
    words: [{ word: 'ちず', reading: 'chizu', meaning: 'map' }],
  },
  {
    id: 'tu', kana: 'つ', romaji: 'tsu', row: 'た行',
    type: 'hiragana',
    words: [{ word: 'つぎ', reading: 'tsugi', meaning: 'next (stop)' }],
  },
  {
    id: 'te', kana: 'て', romaji: 'te', row: 'た行',
    type: 'hiragana',
    words: [{ word: 'てがみ', reading: 'tegami', meaning: 'letter / postcard' }],
  },
  {
    id: 'to', kana: 'と', romaji: 'to', row: 'た行',
    type: 'hiragana',
    words: [{ word: 'とりい', reading: 'torii', meaning: 'shrine gate' }],
  },

  // な行 (na-row)
  {
    id: 'na', kana: 'な', romaji: 'na', row: 'な行',
    type: 'hiragana',
    words: [{ word: 'なりたくうこう', reading: 'narita kuukou', meaning: 'Narita Airport' }],
  },
  {
    id: 'ni', kana: 'に', romaji: 'ni', row: 'な行',
    type: 'hiragana',
    words: [{ word: 'にほん', reading: 'nihon', meaning: 'Japan' }],
  },
  {
    id: 'nu', kana: 'ぬ', romaji: 'nu', row: 'な行',
    type: 'hiragana',
    words: [{ word: 'ぬの', reading: 'nuno', meaning: 'cloth / fabric' }],
  },
  {
    id: 'ne', kana: 'ね', romaji: 'ne', row: 'な行',
    type: 'hiragana',
    words: [{ word: 'ねだん', reading: 'nedan', meaning: 'price / cost' }],
  },
  {
    id: 'no', kana: 'の', romaji: 'no', row: 'な行',
    type: 'hiragana',
    words: [{ word: 'のりば', reading: 'noriba', meaning: 'boarding platform' }],
  },

  // は行 (ha-row)
  {
    id: 'ha', kana: 'は', romaji: 'ha', row: 'は行',
    type: 'hiragana',
    words: [{ word: 'はくぶつかん', reading: 'hakubutsukan', meaning: 'museum' }],
  },
  {
    id: 'hi', kana: 'ひ', romaji: 'hi', row: 'は行',
    type: 'hiragana',
    words: [{ word: 'ひこうき', reading: 'hikouki', meaning: 'airplane' }],
  },
  {
    id: 'hu', kana: 'ふ', romaji: 'fu', row: 'は行',
    type: 'hiragana',
    words: [{ word: 'ふじさん', reading: 'fujisan', meaning: 'Mt. Fuji' }],
  },
  {
    id: 'he', kana: 'へ', romaji: 'he', row: 'は行',
    type: 'hiragana',
    words: [{ word: 'へや', reading: 'heya', meaning: 'room / hotel room' }],
  },
  {
    id: 'ho', kana: 'ほ', romaji: 'ho', row: 'は行',
    type: 'hiragana',
    words: [{ word: 'ほてる', reading: 'hoteru', meaning: 'hotel' }],
  },

  // ま行 (ma-row)
  {
    id: 'ma', kana: 'ま', romaji: 'ma', row: 'ま行',
    type: 'hiragana',
    words: [{ word: 'まち', reading: 'machi', meaning: 'town / city' }],
  },
  {
    id: 'mi', kana: 'み', romaji: 'mi', row: 'ま行',
    type: 'hiragana',
    words: [{ word: 'みち', reading: 'michi', meaning: 'road / path' }],
  },
  {
    id: 'mu', kana: 'む', romaji: 'mu', row: 'ま行',
    type: 'hiragana',
    words: [{ word: 'むりょう', reading: 'muryou', meaning: 'free of charge' }],
  },
  {
    id: 'me', kana: 'め', romaji: 'me', row: 'ま行',
    type: 'hiragana',
    words: [{ word: 'めいさん', reading: 'meisan', meaning: 'local specialty' }],
  },
  {
    id: 'mo', kana: 'も', romaji: 'mo', row: 'ま行',
    type: 'hiragana',
    words: [{ word: 'もみじ', reading: 'momiji', meaning: 'autumn leaves' }],
  },

  // や行 (ya-row)
  {
    id: 'ya', kana: 'や', romaji: 'ya', row: 'や行',
    type: 'hiragana',
    words: [{ word: 'やど', reading: 'yado', meaning: 'inn / lodging' }],
  },
  {
    id: 'yu', kana: 'ゆ', romaji: 'yu', row: 'や行',
    type: 'hiragana',
    words: [{ word: 'ゆうびんきょく', reading: 'yuubinkyoku', meaning: 'post office' }],
  },
  {
    id: 'yo', kana: 'よ', romaji: 'yo', row: 'や行',
    type: 'hiragana',
    words: [{ word: 'よやく', reading: 'yoyaku', meaning: 'reservation / booking' }],
  },

  // ら行 (ra-row)
  {
    id: 'ra', kana: 'ら', romaji: 'ra', row: 'ら行',
    type: 'hiragana',
    words: [{ word: 'らくご', reading: 'rakugo', meaning: 'traditional comedy' }],
  },
  {
    id: 'ri', kana: 'り', romaji: 'ri', row: 'ら行',
    type: 'hiragana',
    words: [{ word: 'りょかん', reading: 'ryokan', meaning: 'traditional inn' }],
  },
  {
    id: 'ru', kana: 'る', romaji: 'ru', row: 'ら行',
    type: 'hiragana',
    words: [{ word: 'るすばん', reading: 'rusuban', meaning: 'house-sitting' }],
  },
  {
    id: 're', kana: 'れ', romaji: 're', row: 'ら行',
    type: 'hiragana',
    words: [{ word: 'れっしゃ', reading: 'ressha', meaning: 'train / railway' }],
  },
  {
    id: 'ro', kana: 'ろ', romaji: 'ro', row: 'ら行',
    type: 'hiragana',
    words: [{ word: 'ろせんず', reading: 'rosenzu', meaning: 'route map' }],
  },

  // わ行 (wa-row)
  {
    id: 'wa', kana: 'わ', romaji: 'wa', row: 'わ行',
    type: 'hiragana',
    words: [{ word: 'わしょく', reading: 'washoku', meaning: 'Japanese cuisine' }],
  },
  {
    id: 'wi', kana: 'ゐ', romaji: 'wi', row: 'わ行',
    type: 'hiragana',
    words: [{ word: 'ゐ (古語)', reading: 'wi (archaic)', meaning: 'archaic character' }],
  },
  {
    id: 'we', kana: 'ゑ', romaji: 'we', row: 'わ行',
    type: 'hiragana',
    words: [{ word: 'ゑ (古語)', reading: 'we (archaic)', meaning: 'archaic character' }],
  },
  {
    id: 'wo', kana: 'を', romaji: 'wo', row: 'わ行',
    type: 'hiragana',
    words: [{ word: 'バスをまつ', reading: 'basu wo matsu', meaning: 'wait for the bus' }],
  },

  // ん (n)
  {
    id: 'n', kana: 'ん', romaji: 'n', row: 'ん',
    type: 'hiragana',
    words: [{ word: 'おんせん', reading: 'onsen', meaning: 'hot spring' }],
  },
];

// Group cards by row for the progress grid
export const hiraganaRows = [
  'あ行', 'か行', 'さ行', 'た行', 'な行',
  'は行', 'ま行', 'や行', 'ら行', 'わ行', 'ん',
];
