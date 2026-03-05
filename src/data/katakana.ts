import type { KanaCard } from '../types';

export const katakanaCards: KanaCard[] = [
    // ア行 (a-row)
    {
        id: 'k_a', kana: 'ア', romaji: 'a', row: 'ア行', type: 'katakana',
        words: [{ word: 'アイス', reading: 'aisu', meaning: 'ice cream' }],
    },
    {
        id: 'k_i', kana: 'イ', romaji: 'i', row: 'ア行', type: 'katakana',
        words: [{ word: 'インク', reading: 'inku', meaning: 'ink' }],
    },
    {
        id: 'k_u', kana: 'ウ', romaji: 'u', row: 'ア行', type: 'katakana',
        words: [{ word: 'ウエイター', reading: 'ueitaa', meaning: 'waiter' }],
    },
    {
        id: 'k_e', kana: 'エ', romaji: 'e', row: 'ア行', type: 'katakana',
        words: [{ word: 'エンジン', reading: 'enjin', meaning: 'engine' }],
    },
    {
        id: 'k_o', kana: 'オ', romaji: 'o', row: 'ア行', type: 'katakana',
        words: [{ word: 'オートバイ', reading: 'ootobai', meaning: 'motorcycle' }],
    },

    // カ行 (ka-row)
    {
        id: 'k_ka', kana: 'カ', romaji: 'ka', row: 'カ行', type: 'katakana',
        words: [{ word: 'カメラ', reading: 'kamera', meaning: 'camera' }],
    },
    {
        id: 'k_ki', kana: 'キ', romaji: 'ki', row: 'カ行', type: 'katakana',
        words: [{ word: 'キッチン', reading: 'kitchin', meaning: 'kitchen' }],
    },
    {
        id: 'k_ku', kana: 'ク', romaji: 'ku', row: 'カ行', type: 'katakana',
        words: [{ word: 'クラス', reading: 'kurasu', meaning: 'class' }],
    },
    {
        id: 'k_ke', kana: 'ケ', romaji: 'ke', row: 'カ行', type: 'katakana',
        words: [{ word: 'ケーキ', reading: 'keeki', meaning: 'cake' }],
    },
    {
        id: 'k_ko', kana: 'コ', romaji: 'ko', row: 'カ行', type: 'katakana',
        words: [{ word: 'コーヒー', reading: 'koohii', meaning: 'coffee' }],
    },

    // サ行 (sa-row)
    {
        id: 'k_sa', kana: 'サ', romaji: 'sa', row: 'サ行', type: 'katakana',
        words: [{ word: 'サラダ', reading: 'sarada', meaning: 'salad' }],
    },
    {
        id: 'k_si', kana: 'シ', romaji: 'shi', row: 'サ行', type: 'katakana',
        words: [{ word: 'シャツ', reading: 'shatsu', meaning: 'shirt' }],
    },
    {
        id: 'k_su', kana: 'ス', romaji: 'su', row: 'サ行', type: 'katakana',
        words: [{ word: 'スポーツ', reading: 'supootsu', meaning: 'sports' }],
    },
    {
        id: 'k_se', kana: 'セ', romaji: 'se', row: 'サ行', type: 'katakana',
        words: [{ word: 'センター', reading: 'sentaa', meaning: 'center' }],
    },
    {
        id: 'k_so', kana: 'ソ', romaji: 'so', row: 'サ行', type: 'katakana',
        words: [{ word: 'ソフト', reading: 'sofuto', meaning: 'soft' }],
    },

    // タ行 (ta-row)
    {
        id: 'k_ta', kana: 'タ', romaji: 'ta', row: 'タ行', type: 'katakana',
        words: [{ word: 'タクシー', reading: 'takushii', meaning: 'taxi' }],
    },
    {
        id: 'k_ti', kana: 'チ', romaji: 'chi', row: 'タ行', type: 'katakana',
        words: [{ word: 'チーム', reading: 'chiimu', meaning: 'team' }],
    },
    {
        id: 'k_tu', kana: 'ツ', romaji: 'tsu', row: 'タ行', type: 'katakana',
        words: [{ word: 'ツアー', reading: 'tsuaa', meaning: 'tour' }],
    },
    {
        id: 'k_te', kana: 'テ', romaji: 'te', row: 'タ行', type: 'katakana',
        words: [{ word: 'テスト', reading: 'tesuto', meaning: 'test' }],
    },
    {
        id: 'k_to', kana: 'ト', romaji: 'to', row: 'タ行', type: 'katakana',
        words: [{ word: 'トイレ', reading: 'toire', meaning: 'toilet' }],
    },

    // ナ行 (na-row)
    {
        id: 'k_na', kana: 'ナ', romaji: 'na', row: 'ナ行', type: 'katakana',
        words: [{ word: 'ナイフ', reading: 'naifu', meaning: 'knife' }],
    },
    {
        id: 'k_ni', kana: 'ニ', romaji: 'ni', row: 'ナ行', type: 'katakana',
        words: [{ word: 'ニュース', reading: 'nyuusu', meaning: 'news' }],
    },
    {
        id: 'k_nu', kana: 'ヌ', romaji: 'nu', row: 'ナ行', type: 'katakana',
        words: [{ word: 'ヌードル', reading: 'nuudoru', meaning: 'noodle' }],
    },
    {
        id: 'k_ne', kana: 'ネ', romaji: 'ne', row: 'ナ行', type: 'katakana',
        words: [{ word: 'ネクタイ', reading: 'nekutai', meaning: 'necktie' }],
    },
    {
        id: 'k_no', kana: 'ノ', romaji: 'no', row: 'ナ行', type: 'katakana',
        words: [{ word: 'ノート', reading: 'nooto', meaning: 'notebook' }],
    },

    // ハ行 (ha-row)
    {
        id: 'k_ha', kana: 'ハ', romaji: 'ha', row: 'ハ行', type: 'katakana',
        words: [{ word: 'ハム', reading: 'hamu', meaning: 'ham' }],
    },
    {
        id: 'k_hi', kana: 'ヒ', romaji: 'hi', row: 'ハ行', type: 'katakana',
        words: [{ word: 'ビール', reading: 'biiru', meaning: 'beer' }],
    },
    {
        id: 'k_hu', kana: 'フ', romaji: 'fu', row: 'ハ行', type: 'katakana',
        words: [{ word: 'フィルム', reading: 'firumu', meaning: 'film' }],
    },
    {
        id: 'k_he', kana: 'ヘ', romaji: 'he', row: 'ハ行', type: 'katakana',
        words: [{ word: 'ペン', reading: 'pen', meaning: 'pen' }],
    },
    {
        id: 'k_ho', kana: 'ホ', romaji: 'ho', row: 'ハ行', type: 'katakana',
        words: [{ word: 'ホテル', reading: 'hoteru', meaning: 'hotel' }],
    },

    // マ行 (ma-row)
    {
        id: 'k_ma', kana: 'マ', romaji: 'ma', row: 'マ行', type: 'katakana',
        words: [{ word: 'マッチ', reading: 'matchi', meaning: 'match' }],
    },
    {
        id: 'k_mi', kana: 'ミ', romaji: 'mi', row: 'マ行', type: 'katakana',
        words: [{ word: 'ミルク', reading: 'miruku', meaning: 'milk' }],
    },
    {
        id: 'k_mu', kana: 'ム', romaji: 'mu', row: 'マ行', type: 'katakana',
        words: [{ word: 'ムード', reading: 'muudo', meaning: 'mood' }],
    },
    {
        id: 'k_me', kana: 'メ', romaji: 'me', row: 'マ行', type: 'katakana',
        words: [{ word: 'メロン', reading: 'meron', meaning: 'melon' }],
    },
    {
        id: 'k_mo', kana: 'モ', romaji: 'mo', row: 'マ行', type: 'katakana',
        words: [{ word: 'モデル', reading: 'moderu', meaning: 'model' }],
    },

    // ヤ行 (ya-row)
    {
        id: 'k_ya', kana: 'ヤ', romaji: 'ya', row: 'ヤ行', type: 'katakana',
        words: [{ word: 'ヤシ', reading: 'yashi', meaning: 'palm tree' }],
    },
    {
        id: 'k_yu', kana: 'ユ', romaji: 'yu', row: 'ヤ行', type: 'katakana',
        words: [{ word: 'ユニフォーム', reading: 'yunifoomu', meaning: 'uniform' }],
    },
    {
        id: 'k_yo', kana: 'ヨ', romaji: 'yo', row: 'ヤ行', type: 'katakana',
        words: [{ word: 'ヨーグルト', reading: 'yooguruto', meaning: 'yogurt' }],
    },

    // ら行 (ra-row)
    {
        id: 'k_ra', kana: 'ラ', romaji: 'ra', row: 'ラ行', type: 'katakana',
        words: [{ word: 'ラジオ', reading: 'rajio', meaning: 'radio' }],
    },
    {
        id: 'k_ri', kana: 'リ', romaji: 'ri', row: 'ラ行', type: 'katakana',
        words: [{ word: 'リンゴ (archaic for katakana context)', reading: 'ringo', meaning: 'apple' }],
    },
    {
        id: 'k_ru', kana: 'ル', romaji: 'ru', row: 'ラ行', type: 'katakana',
        words: [{ word: 'ルール', reading: 'ruuru', meaning: 'rule' }],
    },
    {
        id: 'k_re', kana: 'レ', romaji: 're', row: 'ラ行', type: 'katakana',
        words: [{ word: 'レストラン', reading: 'resutoran', meaning: 'restaurant' }],
    },
    {
        id: 'k_ro', kana: 'ロ', romaji: 'ro', row: 'ラ行', type: 'katakana',
        words: [{ word: 'ロケット', reading: 'roketto', meaning: 'rocket' }],
    },

    // わ行 (wa-row)
    {
        id: 'k_wa', kana: 'ワ', romaji: 'wa', row: 'ワ行', type: 'katakana',
        words: [{ word: 'ワイン', reading: 'wain', meaning: 'wine' }],
    },
    {
        id: 'k_wi', kana: 'ヰ', romaji: 'wi', row: 'ワ行', type: 'katakana',
        words: [{ word: 'ヰ (archaic)', reading: 'wi', meaning: 'archaic' }],
    },
    {
        id: 'k_we', kana: 'ヱ', romaji: 'we', row: 'ワ行', type: 'katakana',
        words: [{ word: 'ヱ (archaic)', reading: 'we', meaning: 'archaic' }],
    },
    {
        id: 'k_wo', kana: 'ヲ', romaji: 'wo', row: 'ワ行', type: 'katakana',
        words: [{ word: 'ヲ (archaic usage)', reading: 'wo', meaning: 'archaic' }],
    },

    // ン (n)
    {
        id: 'k_n', kana: 'ン', romaji: 'n', row: 'ン', type: 'katakana',
        words: [{ word: 'パン', reading: 'pan', meaning: 'bread' }],
    },
];

export const katakanaRows = [
    'ア行', 'カ行', 'サ行', 'タ行', 'ナ行',
    'ハ行', 'マ行', 'ヤ行', 'ラ行', 'ワ行', 'ン',
];
