export interface ScriptData {
  id: string
  name: string
  localName: string
  period: string
  regions: string[]
  type: string
  direction: string
  description?: string
  sample?: string
  languages?: string[]
  parent?: string
  children?: string[]
  x?: number
  y?: number
  level?: number
}

export const scriptFamilyData: ScriptData[] = [
  // Root - Brahmi
  {
    id: 'brahmi',
    name: 'ブラーフミー文字',
    localName: 'Brāhmī',
    period: '3世紀 BCE - 3世紀 CE',
    regions: ['インド亜大陸'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'インドの多くの文字の祖先となった古代文字。アショーカ王の勅令に使用された。',
    sample: '𑀲𑀫𑁂 𑀲𑀢𑁆𑀢𑀸',
    languages: ['プラークリット語', 'サンスクリット語'],
    level: 0
  },

  // Second Generation - Gupta and Regional variants
  {
    id: 'gupta',
    name: 'グプタ文字',
    localName: 'Gupta',
    period: '4世紀 - 8世紀 CE',
    regions: ['北インド'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'ブラーフミー文字から発展した中間的な文字。多くの北インド文字の直接の祖先。',
    sample: '𑌸𑌰𑍍𑌵𑍇',
    languages: ['サンスクリット語', 'プラークリット語'],
    parent: 'brahmi',
    level: 1
  },

  {
    id: 'southern-brahmi',
    name: '南ブラーフミー文字',
    localName: 'Southern Brāhmī',
    period: '2世紀 - 6世紀 CE',
    regions: ['南インド'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'ブラーフミー文字の南インド変種。タミル・ブラーフミーとも呼ばれる。',
    sample: '𑀢𑀫𑀺𑀻',
    languages: ['タミル語', 'プラークリット語'],
    parent: 'brahmi',
    level: 1
  },

  {
    id: 'pallava',
    name: 'パッラヴァ文字',
    localName: 'Pallava',
    period: '4世紀 - 9世紀 CE',
    regions: ['南インド', '東南アジア'],
    type: 'アブギダ',
    direction: '左から右',
    description: '南インドのパッラヴァ朝で使用。東南アジアの文字の祖先となった。',
    sample: 'पल्लव',
    languages: ['サンスクリット語', 'タミル語'],
    parent: 'southern-brahmi',
    level: 2
  },

  // Third Generation - Siddham and other intermediate scripts
  {
    id: 'siddham',
    name: '悉曇文字',
    localName: 'Siddhaṃ',
    period: '6世紀 - 13世紀 CE',
    regions: ['北東インド', '中国', '日本'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'グプタ文字から発展。仏教経典の写本に使用され、日本にも伝来した。',
    sample: '𑖭𑖰𑖟𑖿𑖠𑖽',
    languages: ['サンスクリット語'],
    parent: 'gupta',
    level: 2
  },

  {
    id: 'sharada',
    name: 'シャーラダー文字',
    localName: 'Śāradā',
    period: '8世紀 - 現在',
    regions: ['カシミール', 'パンジャーブ'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'グプタ文字から発展したカシミール地方の文字。',
    sample: '𑆯𑆳𑆫𑆢𑆳',
    languages: ['サンスクリット語', 'カシミール語'],
    parent: 'gupta',
    level: 2
  },

  {
    id: 'nagari',
    name: 'ナーガリー文字',
    localName: 'Nāgarī',
    period: '8世紀 - 11世紀 CE',
    regions: ['西インド'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'グプタ文字から発展した中間的な文字。デーヴァナーガリーの直接の祖先。',
    sample: 'नागरी',
    languages: ['サンスクリット語', 'プラークリット語'],
    parent: 'gupta',
    level: 2
  },
  // Modern Northern Scripts (from Nagari/Siddham)
  {
    id: 'devanagari',
    name: 'デーヴァナーガリー文字',
    localName: 'देवनागरी',
    period: '11世紀 - 現在',
    regions: ['北インド', 'ネパール'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'ナーガリー文字から発展。ヒンディー語やサンスクリット語で使用される。特徴的な上線（シロレーカー）を持つ。',
    sample: 'नमस्ते संसार',
    languages: ['ヒンディー語', 'サンスクリット語', 'マラーティー語', 'ネパール語'],
    parent: 'nagari',
    level: 3
  },

  {
    id: 'bengali',
    name: 'ベンガル文字',
    localName: 'বাংলা',
    period: '11世紀 - 現在',
    regions: ['西ベンガル', 'バングラデシュ', 'アッサム'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'シッダマートリカーから発展した東インドの文字。丸みを帯びた形が特徴。',
    sample: 'বাংলা লিপি',
    languages: ['ベンガル語', 'アッサム語'],
    parent: 'siddham',
    level: 3
  },

  {
    id: 'gurmukhi',
    name: 'グルムキー文字',
    localName: 'ਗੁਰਮੁਖੀ',
    period: '16世紀 - 現在',
    regions: ['パンジャーブ州'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'シャーラダー文字を基に作られたシク教の文字。パンジャーブ語の標準文字。',
    sample: 'ਪੰਜਾਬੀ ਲਿਪੀ',
    languages: ['パンジャーブ語'],
    parent: 'sharada',
    level: 3
  },

  {
    id: 'gujarati',
    name: 'グジャラート文字',
    localName: 'ગુજરાતી',
    period: '15世紀 - 現在',
    regions: ['グジャラート州'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'デーヴァナーガリーから発展。上線がないのが特徴。',
    sample: 'ગુજરાતી લિપિ',
    languages: ['グジャラート語'],
    parent: 'devanagari',
    level: 4
  },

  {
    id: 'oriya',
    name: 'オリヤー文字',
    localName: 'ଓଡ଼ିଆ',
    period: '13世紀 - 現在',
    regions: ['オリッサ州'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'シッダマートリカーから発展。丸い形が特徴的。',
    sample: 'ଓଡ଼ିଆ ଲିପି',
    languages: ['オリヤー語'],
    parent: 'siddham',
    level: 3
  },

  // Southern Scripts (from Southern Brahmi)
  {
    id: 'tamil',
    name: 'タミル文字',
    localName: 'தமிழ்',
    period: '7世紀 - 現在',
    regions: ['タミル・ナードゥ州', 'スリランカ', 'シンガポール'],
    type: 'アブギダ',
    direction: '左から右',
    description: '南ブラーフミー文字から直接発展した最も古い南インド文字の一つ。',
    sample: 'தமிழ் எழுத்து',
    languages: ['タミル語'],
    parent: 'southern-brahmi',
    level: 2
  },

  {
    id: 'grantha',
    name: 'グランタ文字',
    localName: 'Grantha',
    period: '5世紀 - 現在',
    regions: ['南インド'],
    type: 'アブギダ',
    direction: '左から右',
    description: '南インドでサンスクリット語を書くために発展した文字。',
    sample: '𑌗𑍍𑌰𑌨𑍍𑌥',
    languages: ['サンスクリット語', 'タミル語'],
    parent: 'southern-brahmi',
    level: 2
  },

  {
    id: 'telugu',
    name: 'テルグ文字',
    localName: 'తెలుగు',
    period: '13世紀 - 現在',
    regions: ['アーンドラ・プラデーシュ州', 'テランガーナ州'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'グランタ文字から発展した丸い形状が特徴の文字。',
    sample: 'తెలుగు లిపి',
    languages: ['テルグ語'],
    parent: 'grantha',
    level: 3
  },

  {
    id: 'kannada',
    name: 'カンナダ文字',
    localName: 'ಕನ್ನಡ',
    period: '5世紀 - 現在',
    regions: ['カルナータカ州'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'グランタ文字から発展。テルグ文字と類似した丸い形状。',
    sample: 'ಕನ್ನಡ ಲಿಪಿ',
    languages: ['カンナダ語'],
    parent: 'grantha',
    level: 3
  },

  {
    id: 'malayalam',
    name: 'マラヤーラム文字',
    localName: 'മലയാളം',
    period: '9世紀 - 現在',
    regions: ['ケーララ州'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'グランタ文字から発展。複雑な合字システムを持つ。',
    sample: 'മലയാളം ലിപി',
    languages: ['マラヤーラム語'],
    parent: 'grantha',
    level: 3
  },

  {
    id: 'sinhala',
    name: 'シンハラ文字',
    localName: 'සිංහල',
    period: '3世紀 - 現在',
    regions: ['スリランカ'],
    type: 'アブギダ',
    direction: '左から右',
    description: '南ブラーフミー文字から独自に発展したスリランカの文字。',
    sample: 'සිංහල අකුරු',
    languages: ['シンハラ語', 'パーリ語'],
    parent: 'southern-brahmi',
    level: 2
  },

  // Tibetic Branch
  {
    id: 'tibetan',
    name: 'チベット文字',
    localName: 'བོད་ཡིག',
    period: '7世紀 - 現在',
    regions: ['チベット', 'ブータン', 'モンゴル'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'グプタ文字から発展したチベット仏教の文字。独特の積み重ね文字を持つ。',
    sample: 'བོད་ཡིག་',
    languages: ['チベット語', 'ゾンカ語', 'ラダック語'],
    parent: 'gupta',
    level: 2
  },

  // Southeast Asian Branch (from Pallava)
  {
    id: 'old-khmer',
    name: '古クメール文字',
    localName: 'Old Khmer',
    period: '7世紀 - 14世紀 CE',
    regions: ['カンボジア', 'タイ'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'パッラヴァ文字から発展した東南アジアの祖先文字。',
    sample: '𑤀𑤁𑤂',
    languages: ['古クメール語', 'サンスクリット語'],
    parent: 'pallava',
    level: 3
  },

  {
    id: 'old-mon',
    name: '古モン文字',
    localName: 'Old Mon',
    period: '6世紀 - 16世紀 CE',
    regions: ['ミャンマー', 'タイ'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'パッラヴァ文字から発展した東南アジアの文字。',
    sample: '𑋀𑋁𑋂',
    languages: ['モン語', 'パーリ語'],
    parent: 'pallava',
    level: 3
  },

  {
    id: 'burmese',
    name: 'ビルマ文字',
    localName: 'မြန်မာအက္ခရာ',
    period: '11世紀 - 現在',
    regions: ['ミャンマー'],
    type: 'アブギダ',
    direction: '左から右',
    description: '古モン文字から発展。円形の文字が特徴的。',
    sample: 'မြန်မာအက္ခရာ',
    languages: ['ビルマ語', 'モン語'],
    parent: 'old-mon',
    level: 4
  },

  {
    id: 'thai',
    name: 'タイ文字',
    localName: 'อักษรไทย',
    period: '13世紀 - 現在',
    regions: ['タイ'],
    type: 'アブギダ',
    direction: '左から右',
    description: '古クメール文字から発展。ラームカムヘーン王により制定。',
    sample: 'อักษรไทย',
    languages: ['タイ語', 'イサーン語', 'パーリ語'],
    parent: 'old-khmer',
    level: 4
  },

  {
    id: 'khmer',
    name: 'クメール文字',
    localName: 'អក្សរខ្មែរ',
    period: '14世紀 - 現在',
    regions: ['カンボジア', 'ベトナム南部'],
    type: 'アブギダ',
    direction: '左から右',
    description: '古クメール文字から現代的に発展した文字。',
    sample: 'អក្សរខ្មែរ',
    languages: ['クメール語', 'パーリ語'],
    parent: 'old-khmer',
    level: 4
  }
]

export function getScriptById(id: string): ScriptData | undefined {
  return scriptFamilyData.find(script => script.id === id)
}

export function getChildrenScripts(parentId: string): ScriptData[] {
  return scriptFamilyData.filter(script => script.parent === parentId)
}

export function getRootScripts(): ScriptData[] {
  return scriptFamilyData.filter(script => !script.parent)
}