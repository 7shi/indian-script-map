export interface ScriptData {
  id: string
  name: string
  localName?: string
  parent?: string
  period: string
  regions: string[]
  type: string
  direction: string
  description?: string
  languages?: string[]
  sample?: string
}

export const scriptData: ScriptData[] = [
  // Root
  {
    id: 'brahmi',
    name: 'ブラーフミー文字',
    localName: 'Brahmi',
    period: '紀元前3世紀',
    regions: ['インド北西部'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'インド系文字の共通祖先とされる古代文字。アショーカ王の碑文などに使用された。',
    languages: ['プラークリット語'],
    sample: '𑀩𑁆𑀭𑀸𑀳𑁆𑀫𑀻'
  },

  // === Northern Brahmic ===
  {
    id: 'gupta',
    name: 'グプタ文字',
    localName: 'Gupta',
    parent: 'brahmi',
    period: '4-6世紀',
    regions: ['北インド'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'グプタ朝時代に発達した文字。現代の多くのインド系文字の祖先。',
    languages: ['サンスクリット語'],
    sample: 'गुप्त'
  },

  // Sharada branch
  {
    id: 'sharada',
    name: 'シャーラダー文字',
    localName: 'Sharada',
    parent: 'gupta',
    period: '8-12世紀',
    regions: ['カシミール', 'パンジャーブ'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'カシミール地方で発達した文字。多くの北西インド系文字の祖先。',
    languages: ['サンスクリット語', 'カシミール語'],
    sample: '𑇡𑇟𑇲𑇟𑇣𑇟'
  },

  // Landa scripts
  {
    id: 'landa',
    name: 'ランダー文字',
    localName: 'Landa',
    parent: 'sharada',
    period: '16-19世紀',
    regions: ['パンジャーブ', 'シンド'],
    type: 'アブギダ',
    direction: '左→右',
    description: '商業取引に使用された簡略化された文字群の総称。',
    languages: ['パンジャーブ語', 'シンド語'],
    sample: 'ਲੰਡਾ'
  },

  {
    id: 'gurmukhi',
    name: 'グルムキー文字',
    localName: 'ਗੁਰਮੁਖੀ',
    parent: 'landa',
    period: '16世紀～現在',
    regions: ['パンジャーブ'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'パンジャーブ語とシーク教の聖典で使用される。',
    languages: ['パンジャーブ語'],
    sample: 'ਗੁਰਮੁਖੀ'
  },

  {
    id: 'khojki',
    name: 'ホージキー文字',
    localName: 'Khojki',
    parent: 'landa',
    period: '16-20世紀',
    regions: ['シンド', 'グジャラート'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ホージャ・コミュニティで使用された商業文字。',
    languages: ['シンド語'],
    sample: '𑈀𑈁𑈂'
  },

  {
    id: 'multani',
    name: 'ムルターニー文字',
    localName: 'Multani',
    parent: 'landa',
    period: '18-20世紀',
    regions: ['パンジャーブ', 'シンド'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ムルターン地方の商業文字。',
    languages: ['サライキ語'],
    sample: '𑊀𑊁𑊂'
  },

  {
    id: 'takri',
    name: 'タークリー文字',
    localName: 'Takri',
    parent: 'sharada',
    period: '16-20世紀',
    regions: ['ヒマチャル・プラデーシュ', 'ジャンムー・カシミール'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ヒマラヤ山麓地域で使用された文字群。',
    languages: ['ドーグリー語', 'チャンバ語'],
    sample: '𑚃𑚭𑚊𑚤𑚯'
  },

  {
    id: 'dogri',
    name: 'ドーグリー文字',
    localName: 'Dogri',
    parent: 'takri',
    period: '18世紀～現在',
    regions: ['ジャンムー・カシミール'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ドーグリー語で使用される。',
    languages: ['ドーグリー語'],
    sample: 'डोगरी'
  },

  // Siddham branch
  {
    id: 'siddham',
    name: '悉曇文字',
    localName: 'Siddhaṃ',
    parent: 'gupta',
    period: '6-13世紀',
    regions: ['北インド', '東アジア'],
    type: 'アブギダ',
    direction: '左→右',
    description: '仏教経典の伝写に用いられ、中国、日本にも伝来した。',
    languages: ['サンスクリット語'],
    sample: '𑖭𑖰𑖟𑖿𑖠𑖽'
  },

  // Nagari branch
  {
    id: 'nagari',
    name: 'ナーガリー文字',
    localName: 'Nagari',
    parent: 'siddham',
    period: '9-11世紀',
    regions: ['北インド'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'デーヴァナーガリーなど現代文字の直接の祖先。',
    languages: ['サンスクリット語'],
    sample: 'नागरी'
  },

  {
    id: 'devanagari',
    name: 'デーヴァナーガリー文字',
    localName: 'देवनागरी',
    parent: 'nagari',
    period: '11世紀～現在',
    regions: ['北インド', 'ネパール'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ヒンディー語、サンスクリット語などで使用される現代の主要文字の一つ。',
    languages: ['ヒンディー語', 'サンスクリット語', 'ネパール語', 'マラーティー語'],
    sample: 'देवनागरी'
  },

  {
    id: 'modi',
    name: 'モーディー文字',
    localName: 'Modi',
    parent: 'nagari',
    period: '17-20世紀',
    regions: ['マハーラーシュトラ州'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'マラーティー語の筆記体として使用された。',
    languages: ['マラーティー語'],
    sample: '𑘦𑘻𑘚𑘲'
  },

  {
    id: 'gujarati',
    name: 'グジャラーティー文字',
    localName: 'ગુજરાતી',
    parent: 'nagari',
    period: '14世紀～現在',
    regions: ['グジャラート州'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'グジャラーティー語で使用される。上部の水平線がないのが特徴。',
    languages: ['グジャラーティー語'],
    sample: 'ગુજરાતી'
  },

  {
    id: 'kaithi',
    name: 'カイティー文字',
    localName: 'Kaithi',
    parent: 'nagari',
    period: '16-20世紀',
    regions: ['ビハール州', 'ウッタル・プラデーシュ州'],
    type: 'アブギダ',
    direction: '左→右',
    description: '北インドの行政・商業文書に使用された。',
    languages: ['ヒンディー語', 'ビハール語'],
    sample: '𑂍𑂶𑂟𑂲'
  },

  {
    id: 'sylheti-nagari',
    name: 'シルヘティ・ナーガリー文字',
    localName: 'Sylheti Nagari',
    parent: 'kaithi',
    period: '18-20世紀',
    regions: ['バングラデシュ（シルヘット地方）'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'シルヘティ語で使用された地域的な文字。',
    languages: ['シルヘティ語'],
    sample: 'ꠍꠤꠟꠐꠤ'
  },

  // Kamarupi (Eastern) branch
  {
    id: 'kamarupi',
    name: 'カマルーピー文字',
    localName: 'Kamarupi',
    parent: 'siddham',
    period: '11-14世紀',
    regions: ['アッサム州'],
    type: 'アブギダ',
    direction: '左→右',
    description: '東インドで発達した悉曇文字の地域変種。',
    languages: ['アッサム語', 'サンスクリット語'],
    sample: 'কামৰূপী'
  },

  {
    id: 'assamese',
    name: 'アッサム文字',
    localName: 'অসমীয়া',
    parent: 'kamarupi',
    period: '14世紀～現在',
    regions: ['アッサム州'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'アッサム語で使用される現代文字。',
    languages: ['アッサム語'],
    sample: 'অসমীয়া'
  },

  // Gaudi branch (Eastern)
  {
    id: 'gaudi',
    name: 'ガウディー文字',
    localName: 'Gaudi',
    parent: 'siddham',
    period: '11-14世紀',
    regions: ['東インド'],
    type: 'アブギダ',
    direction: '左→右',
    description: '東インドで発達した文字。ベンガル文字などの祖先。',
    languages: ['サンスクリット語'],
    sample: 'গৌড়ী'
  },

  {
    id: 'bengali-assamese',
    name: 'ベンガル・アッサム文字',
    localName: 'বাংলা-অসমীয়া',
    parent: 'gaudi',
    period: '11世紀～現在',
    regions: ['ベンガル地方', 'アッサム州'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ベンガル文字とアッサム文字の共通祖先。',
    languages: ['ベンガル語', 'アッサム語'],
    sample: 'বাংলা'
  },

  {
    id: 'bengali',
    name: 'ベンガル文字',
    localName: 'বাংলা',
    parent: 'bengali-assamese',
    period: '14世紀～現在',
    regions: ['ベンガル地方'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ベンガル語で使用される現代文字。',
    languages: ['ベンガル語'],
    sample: 'বাংলা'
  },

  {
    id: 'tirhuta',
    name: 'ティルフタ文字',
    localName: 'Tirhuta',
    parent: 'gaudi',
    period: '14-20世紀',
    regions: ['ビハール州（ミティラー地方）'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'マイティリー語で使用された。ミティラクシャルとも呼ばれる。',
    languages: ['マイティリー語'],
    sample: '𑒞𑒱𑒩𑒯𑒳𑒞𑒰'
  },

  {
    id: 'odia',
    name: 'オディア文字',
    localName: 'ଓଡ଼ିଆ',
    parent: 'gaudi',
    period: '13世紀～現在',
    regions: ['オディシャ州'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'オディア語で使用される。丸みを帯びた文字が特徴。',
    languages: ['オディア語'],
    sample: 'ଓଡ଼ିଆ'
  },

  // Nepalese scripts
  {
    id: 'nepalese',
    name: 'ネパール系文字',
    localName: 'Nepalese',
    parent: 'siddham',
    period: '11世紀～現在',
    regions: ['ネパール'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ネパールで発達した文字群の総称。',
    languages: ['ネパール語', 'ネワール語'],
    sample: 'नेपाली'
  },

  {
    id: 'ranjana',
    name: 'ランジャナー文字',
    localName: 'Ranjana',
    parent: 'nepalese',
    period: '11世紀～現在',
    regions: ['ネパール'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ネワール文字とも呼ばれる。装飾的な文字として現在も使用。',
    languages: ['ネワール語', 'サンスクリット語'],
    sample: '𑽀𑽁𑽂'
  },

  // Tibetan branch
  {
    id: 'tibetan',
    name: 'チベット文字',
    localName: 'བོད་ཡིག',
    parent: 'gupta',
    period: '7世紀～現在',
    regions: ['チベット', 'モンゴル', 'ヒマラヤ地域'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'チベット語で使用される。仏教文献の保存に重要な役割を果たした。',
    languages: ['チベット語', 'ゾンカ語'],
    sample: 'བོད་ཡིག'
  },

  {
    id: 'meetei-mayek',
    name: 'メイテイ・マイェク文字',
    localName: 'Meetei Mayek',
    parent: 'tibetan',
    period: '11世紀～現在',
    regions: ['マニプール州'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'マニプール語（メイテイ語）で使用される。',
    languages: ['マニプール語'],
    sample: 'ꯃꯤꯇꯩ ꯃꯌꯦꯛ'
  },

  {
    id: 'lepcha',
    name: 'レプチャ文字',
    localName: 'Lepcha',
    parent: 'tibetan',
    period: '18世紀～現在',
    regions: ['シッキム州', 'ダージリン'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'レプチャ語で使用される。',
    languages: ['レプチャ語'],
    sample: 'ᰛᰩᰵ'
  },

  {
    id: 'phags-pa',
    name: 'パスパ文字',
    localName: 'ʼPhags-pa',
    parent: 'tibetan',
    period: '13-17世紀',
    regions: ['モンゴル帝国'],
    type: 'アブギダ',
    direction: '上→下',
    description: 'モンゴル帝国の公式文字として制定。縦書きが特徴。',
    languages: ['モンゴル語', '中国語'],
    sample: 'ꡃꡋꡎ'
  },

  // Tocharian
  {
    id: 'tocharian',
    name: 'トカラ文字',
    localName: 'Tocharian',
    parent: 'brahmi',
    period: '6-10世紀',
    regions: ['中央アジア（タリム盆地）'],
    type: 'アブギダ',
    direction: '左→右',
    description: '中央アジアのトカラ語で使用された。傾斜ブラーフミーとも呼ばれる。',
    languages: ['トカラ語'],
    sample: '𝞴𝞸𝞾𝞳𝞻'
  },

  // === Southern Brahmic ===
  {
    id: 'tamil-brahmi',
    name: 'タミル・ブラーフミー文字',
    localName: 'Tamil-Brahmi',
    parent: 'brahmi',
    period: '紀元前2世紀',
    regions: ['南インド'],
    type: 'アブギダ',
    direction: '左→右',
    description: '南インドで発達したブラーフミー文字の変種。',
    languages: ['古タミル語'],
    sample: '𑀢𑀫𑀺𑀴'
  },

  // Pallava branch
  {
    id: 'pallava',
    name: 'パッラヴァ文字',
    localName: 'Pallava',
    parent: 'tamil-brahmi',
    period: '4-9世紀',
    regions: ['南インド', '東南アジア'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'パッラヴァ朝で使用され、東南アジアの文字発達に大きな影響を与えた。',
    languages: ['サンスクリット語', 'タミル語'],
    sample: 'पल्लव'
  },

  {
    id: 'tamil',
    name: 'タミル文字',
    localName: 'தமிழ்',
    parent: 'pallava',
    period: '7世紀～現在',
    regions: ['南インド', 'スリランカ'],
    type: 'アブギダ',
    direction: '左→右',
    description: '南インドのタミル語で使用される。独特の丸みを帯びた文字形が特徴。',
    languages: ['タミル語'],
    sample: 'தமிழ்'
  },

  // Grantha branch
  {
    id: 'grantha',
    name: 'グランタ文字',
    localName: 'Grantha',
    parent: 'pallava',
    period: '5-20世紀',
    regions: ['南インド'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'サンスクリット語の南インド系文字。マラヤーラム文字などの祖先。',
    languages: ['サンスクリット語', 'タミル語'],
    sample: 'ग्रन्थ'
  },

  {
    id: 'malayalam',
    name: 'マラヤーラム文字',
    localName: 'മലയാളം',
    parent: 'grantha',
    period: '9世紀～現在',
    regions: ['南インド（ケーララ州）'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'マラヤーラム語で使用される。多くの結合文字が特徴。',
    languages: ['マラヤーラム語'],
    sample: 'മലയാളം'
  },

  {
    id: 'tigalari',
    name: 'ティガラリ文字',
    localName: 'Tigalari',
    parent: 'grantha',
    period: '12世紀～現在',
    regions: ['南インド（カルナータカ州沿岸部）'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'トゥル語で使用される。別名トゥル文字。',
    languages: ['トゥル語'],
    sample: 'ಟುಳು'
  },

  {
    id: 'saurashtra',
    name: 'サウラーシュトラ文字',
    localName: 'Saurashtra',
    parent: 'grantha',
    period: '19世紀～現在',
    regions: ['タミル・ナードゥ州'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'サウラーシュトラ語で使用される。',
    languages: ['サウラーシュトラ語'],
    sample: 'ꢂꢁꢃ'
  },

  // Khmer branch
  {
    id: 'khmer',
    name: 'クメール文字',
    localName: 'អក្សរខ្មែរ',
    parent: 'pallava',
    period: '7世紀～現在',
    regions: ['カンボジア'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'クメール語（カンボジア語）で使用される。',
    languages: ['クメール語'],
    sample: 'អក្សរខ្មែរ'
  },

  // Thai scripts (simplified structure)
  {
    id: 'proto-tai',
    name: '原タイ文字',
    localName: 'Proto-Tai',
    parent: 'khmer',
    period: '12-13世紀',
    regions: ['東南アジア'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'タイ系文字の共通祖先（仮定）。',
    languages: ['古タイ語'],
    sample: 'ไท'
  },

  {
    id: 'sukhothai',
    name: 'スコータイ文字',
    localName: 'Sukhothai',
    parent: 'proto-tai',
    period: '13-15世紀',
    regions: ['タイ'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'スコータイ朝で使用された古タイ文字。',
    languages: ['古タイ語'],
    sample: 'สุโขทัย'
  },

  {
    id: 'thai',
    name: 'タイ文字',
    localName: 'อักษรไทย',
    parent: 'sukhothai',
    period: '14世紀～現在',
    regions: ['タイ'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'タイ語で使用される現代文字。',
    languages: ['タイ語'],
    sample: 'อักษรไทย'
  },

  {
    id: 'fakkham',
    name: 'ファックハム文字',
    localName: 'Fakkham',
    parent: 'thai',
    period: '15-19世紀',
    regions: ['ラオス北部'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ラオ文字の前身の一つ。',
    languages: ['ラオ語'],
    sample: 'ฟักขาม'
  },

  {
    id: 'lao',
    name: 'ラオ文字',
    localName: 'ອັກສອນລາວ',
    parent: 'fakkham',
    period: '14世紀～現在',
    regions: ['ラオス'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ラオ語で使用される。タイ文字と密接な関係がある。',
    languages: ['ラオ語'],
    sample: 'ອັກສອນລາວ'
  },

  {
    id: 'tai-viet',
    name: 'タイ・ヴィエット文字',
    localName: 'Tai Viet',
    parent: 'proto-tai',
    period: '16世紀～現在',
    regions: ['ベトナム北部'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'タイ・ダム語で使用される。',
    languages: ['タイ・ダム語'],
    sample: 'ꪁꪫꪱ'
  },

  // Cham branch
  {
    id: 'cham',
    name: 'チャム文字',
    localName: 'Cham',
    parent: 'pallava',
    period: '4世紀～現在',
    regions: ['ベトナム南部', 'カンボジア'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'チャム語で使用される。',
    languages: ['チャム語'],
    sample: 'ꨀꨁꨂ'
  },

  // Kawi branch
  {
    id: 'kawi',
    name: 'カウィ文字',
    localName: 'Kawi',
    parent: 'pallava',
    period: '8-16世紀',
    regions: ['ジャワ島', 'バリ島'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ジャワの古代文字。多くのインドネシア系文字の祖先。',
    languages: ['古ジャワ語', 'サンスクリット語'],
    sample: 'ꦏꦮꦶ'
  },

  {
    id: 'balinese',
    name: 'バリ文字',
    localName: 'Balinese',
    parent: 'kawi',
    period: '11世紀～現在',
    regions: ['バリ島'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'バリ語で使用される。',
    languages: ['バリ語'],
    sample: 'ᬅᬓ᭄ᬱᬭᬩᬮᬶ'
  },

  {
    id: 'javanese',
    name: 'ジャワ文字',
    localName: 'Javanese',
    parent: 'kawi',
    period: '15世紀～現在',
    regions: ['ジャワ島'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ジャワ語で使用される。',
    languages: ['ジャワ語'],
    sample: 'ꦄꦏ꧀ꦱꦫꦗꦮ'
  },

  {
    id: 'sundanese',
    name: 'スンダ文字',
    localName: 'Sundanese',
    parent: 'kawi',
    period: '14世紀～現在',
    regions: ['西ジャワ島'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'スンダ語で使用される。',
    languages: ['スンダ語'],
    sample: 'ᮃᮊ᮪ᮞᮛᮞᮥᮔ᮪ᮓ'
  },

  {
    id: 'lontara',
    name: 'ロンタラ文字',
    localName: 'Lontara',
    parent: 'kawi',
    period: '17世紀～現在',
    regions: ['スラウェシ島'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ブギス語、マカッサル語で使用される。',
    languages: ['ブギス語', 'マカッサル語'],
    sample: 'ᨒᨚᨈᨑ'
  },

  {
    id: 'baybayin',
    name: 'バイバイン文字',
    localName: 'Baybayin',
    parent: 'kawi',
    period: '14-18世紀',
    regions: ['フィリピン'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'フィリピンの古代文字。タガログ文字とも呼ばれる。',
    languages: ['タガログ語'],
    sample: 'ᜊᜌ᜔ᜊᜌᜒᜈ᜔'
  },

  {
    id: 'buhid',
    name: 'ブヒッド文字',
    localName: 'Buhid',
    parent: 'baybayin',
    period: '15世紀～現在',
    regions: ['フィリピン（ミンドロ島）'],
    type: 'アブギダ',
    direction: '上→下',
    description: 'ブヒッド語で使用される。縦書きが特徴。',
    languages: ['ブヒッド語'],
    sample: 'ᝃᝓᝑᝒᝇ'
  },

  {
    id: 'tagbanwa',
    name: 'タグバンワ文字',
    localName: 'Tagbanwa',
    parent: 'baybayin',
    period: '16世紀～現在',
    regions: ['フィリピン（パラワン島）'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'タグバンワ語で使用される。',
    languages: ['タグバンワ語'],
    sample: 'ᝦᝤᝪᝡᝬᝥ'
  },

  // Mon-Burmese branch
  {
    id: 'mon-burmese',
    name: 'モン・ビルマ文字',
    localName: 'Mon-Burmese',
    parent: 'pallava',
    period: '11-12世紀',
    regions: ['ミャンマー'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'モン文字とビルマ文字の共通祖先。',
    languages: ['モン語', 'ビルマ語'],
    sample: 'မြန်မာ'
  },

  {
    id: 'modern-mon',
    name: 'モン文字',
    localName: 'Modern Mon',
    parent: 'mon-burmese',
    period: '15世紀～現在',
    regions: ['ミャンマー南部'],
    type: 'アブギダ',
    direction: '左→右',
    description: '現代モン語で使用される。',
    languages: ['モン語'],
    sample: 'မန်'
  },

  {
    id: 'burmese',
    name: 'ビルマ文字',
    localName: 'မြန်မာအက္ခရာ',
    parent: 'mon-burmese',
    period: '12世紀～現在',
    regions: ['ミャンマー'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ミャンマー語で使用される。円形の文字が特徴的。',
    languages: ['ミャンマー語'],
    sample: 'မြန်မာ'
  },

  {
    id: 'chakma',
    name: 'チャクマ文字',
    localName: 'Chakma',
    parent: 'burmese',
    period: '18世紀～現在',
    regions: ['バングラデシュ（チッタゴン丘陵地帯）'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'チャクマ語で使用される。',
    languages: ['チャクマ語'],
    sample: '𑄃𑄧𑄏𑄴𑄟𑄳𑄦'
  },

  {
    id: 'shan',
    name: 'シャン文字',
    localName: 'Shan',
    parent: 'burmese',
    period: '16世紀～現在',
    regions: ['ミャンマー（シャン州）'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'シャン語で使用される。',
    languages: ['シャン語'],
    sample: 'လိၵ်ႈတႆး'
  },

  {
    id: 'tai-tham',
    name: 'タイ・タム文字',
    localName: 'Tai Tham',
    parent: 'mon-burmese',
    period: '13世紀～現在',
    regions: ['北タイ', 'ラオス'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ランナー文字とも呼ばれる。北タイの文字。',
    languages: ['北タイ語', 'ラオ語'],
    sample: 'ᨲᩱᩅᨾᩮᩬᩥ'
  },

  // Pyu
  {
    id: 'pyu',
    name: 'ピュー文字',
    localName: 'Pyu',
    parent: 'pallava',
    period: '5-11世紀',
    regions: ['ミャンマー中部'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'ピュー族が使用した古代文字。',
    languages: ['ピュー語'],
    sample: '𑫐𑫑𑫒'
  },

  // Vatteluttu branch
  {
    id: 'vatteluttu',
    name: 'ヴァッテルットゥ文字',
    localName: 'Vatteluttu',
    parent: 'tamil-brahmi',
    period: '8-15世紀',
    regions: ['南インド'],
    type: 'アブギダ',
    direction: '左→右',
    description: '南インドで使用された古代文字。「丸い文字」の意味。',
    languages: ['タミル語', 'マラヤーラム語'],
    sample: 'വട്ടെഴുത്ത്'
  },

  // Sinhala
  {
    id: 'sinhala',
    name: 'シンハラ文字',
    localName: 'සිංහල',
    parent: 'tamil-brahmi',
    period: '9世紀～現在',
    regions: ['スリランカ'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'シンハラ語で使用される。丸みを帯びた独特の文字形。',
    languages: ['シンハラ語'],
    sample: 'සිංහල'
  },

  // Other Southern Brahmic branches
  {
    id: 'bhattiprolu',
    name: 'バッティプロル文字',
    localName: 'Bhattiprolu',
    parent: 'brahmi',
    period: '紀元前3-1世紀',
    regions: ['アーンドラ・プラデーシュ州'],
    type: 'アブギダ',
    direction: '左→右',
    description: '南東インドの初期文字。独立して発達した。',
    languages: ['プラークリット語'],
    sample: '𑀩𑀝𑁆𑀝𑀺𑀧𑁆𑀭𑁄𑀮𑀼'
  },

  // Kadamba branch
  {
    id: 'kadamba',
    name: 'カダンバ文字',
    localName: 'Kadamba',
    parent: 'brahmi',
    period: '4-6世紀',
    regions: ['南インド（カルナータカ州）'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'カダンバ朝で使用された文字。テルグ・カンナダ文字の祖先。',
    languages: ['サンスクリット語', 'プラークリット語'],
    sample: 'कदम्ब'
  },

  {
    id: 'telugu-kannada',
    name: 'テルグ・カンナダ文字',
    localName: 'Telugu-Kannada',
    parent: 'kadamba',
    period: '7-13世紀',
    regions: ['南インド'],
    type: 'アブギダ',
    direction: '左→右',
    description: '現代のテルグ文字とカンナダ文字の共通祖先。',
    languages: ['テルグ語', 'カンナダ語'],
    sample: 'తెలుగు-ಕನ್ನಡ'
  },

  {
    id: 'telugu',
    name: 'テルグ文字',
    localName: 'తెలుగు',
    parent: 'telugu-kannada',
    period: '13世紀～現在',
    regions: ['南インド（アーンドラ・プラデーシュ州、テランガーナ州）'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'テルグ語で使用される。円形の文字が特徴的。',
    languages: ['テルグ語'],
    sample: 'తెలుగు'
  },

  {
    id: 'kannada',
    name: 'カンナダ文字',
    localName: 'ಕನ್ನಡ',
    parent: 'telugu-kannada',
    period: '7世紀～現在',
    regions: ['南インド（カルナータカ州）'],
    type: 'アブギダ',
    direction: '左→右',
    description: 'カンナダ語で使用される。テルグ文字と類似した特徴を持つ。',
    languages: ['カンナダ語'],
    sample: 'ಕನ್ನಡ'
  }
]

export function getScriptById(id: string): ScriptData | undefined {
  return scriptData.find(script => script.id === id)
}

export function getChildrenScripts(parentId: string): ScriptData[] {
  return scriptData.filter(script => script.parent === parentId)
}

export function getRootScripts(): ScriptData[] {
  return scriptData.filter(script => !script.parent)
}