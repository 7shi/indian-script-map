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
  // Root
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
    children: ['devanagari', 'tamil', 'telugu', 'kannada', 'malayalam', 'bengali', 'gurmukhi', 'gujarati', 'oriya', 'sinhala', 'tibetan', 'burmese', 'thai', 'khmer'],
    level: 0,
    x: 400,
    y: 50
  },
  
  // Northern Branch
  {
    id: 'devanagari',
    name: 'デーヴァナーガリー文字',
    localName: 'देवनागरी',
    period: '7世紀 - 現在',
    regions: ['北インド', 'ネパール'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'ヒンディー語やサンスクリット語で使用される。特徴的な上線（シロレーカー）を持つ。',
    sample: 'नमस्ते संसार',
    languages: ['ヒンディー語', 'サンスクリット語', 'マラーティー語', 'ネパール語'],
    parent: 'brahmi',
    level: 1,
    x: 200,
    y: 150
  },
  
  {
    id: 'bengali',
    name: 'ベンガル文字',
    localName: 'বাংলা',
    period: '10世紀 - 現在',
    regions: ['西ベンガル', 'バングラデシュ', 'アッサム'],
    type: 'アブギダ',
    direction: '左から右',
    description: '丸みを帯びた文字が特徴。ベンガル語とアッサム語で使用される。',
    sample: 'বাংলা লিপি',
    languages: ['ベンガル語', 'アッサム語'],
    parent: 'brahmi',
    level: 1,
    x: 100,
    y: 200
  },

  {
    id: 'gurmukhi',
    name: 'グルムキー文字',
    localName: 'ਗੁਰਮੁਖੀ',
    period: '16世紀 - 現在',
    regions: ['パンジャーブ州'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'シク教の聖典に使用され、パンジャーブ語の標準文字。',
    sample: 'ਪੰਜਾਬੀ ਲਿਪੀ',
    languages: ['パンジャーブ語'],
    parent: 'brahmi',
    level: 1,
    x: 300,
    y: 200
  },

  {
    id: 'gujarati',
    name: 'グジャラート文字',
    localName: 'ગુજરાતી',
    period: '15世紀 - 現在',
    regions: ['グジャラート州'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'デーヴァナーガリーに似ているが上線がない。グジャラート語で使用。',
    sample: 'ગુજરાતી લિપિ',
    languages: ['グジャラート語'],
    parent: 'brahmi',
    level: 1,
    x: 250,
    y: 250
  },

  {
    id: 'oriya',
    name: 'オリヤー文字',
    localName: 'ଓଡ଼ିଆ',
    period: '13世紀 - 現在',
    regions: ['オリッサ州'],
    type: 'アブギダ',
    direction: '左から右',
    description: '丸い形が特徴的。オリヤー語で使用される。',
    sample: 'ଓଡ଼ିଆ ଲିପି',
    languages: ['オリヤー語'],
    parent: 'brahmi',
    level: 1,
    x: 150,
    y: 250
  },

  // Southern Branch
  {
    id: 'tamil',
    name: 'タミル文字',
    localName: 'தமிழ்',
    period: '7世紀 - 現在',
    regions: ['タミル・ナードゥ州', 'スリランカ', 'シンガポール'],
    type: 'アブギダ',
    direction: '左から右',
    description: '南インドの古い文字体系。丸みを帯びた独特の形状を持つ。',
    sample: 'தமிழ் எழுத்து',
    languages: ['タミル語'],
    parent: 'brahmi',
    level: 1,
    x: 500,
    y: 150
  },

  {
    id: 'telugu',
    name: 'テルグ文字',
    localName: 'తెలుగు',
    period: '13世紀 - 現在',
    regions: ['アーンドラ・プラデーシュ州', 'テランガーナ州'],
    type: 'アブギダ',
    direction: '左から右',
    description: '丸い形状が特徴。テルグ語で使用される南インドの文字。',
    sample: 'తెలుగు లిపి',
    languages: ['テルグ語'],
    parent: 'brahmi',
    level: 1,
    x: 550,
    y: 200
  },

  {
    id: 'kannada',
    name: 'カンナダ文字',
    localName: 'ಕನ್ನಡ',
    period: '5世紀 - 現在',
    regions: ['カルナータカ州'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'テルグ文字に似た丸い形状。カンナダ語で使用される。',
    sample: 'ಕನ್ನಡ ಲಿಪಿ',
    languages: ['カンナダ語'],
    parent: 'brahmi',
    level: 1,
    x: 600,
    y: 200
  },

  {
    id: 'malayalam',
    name: 'マラヤーラム文字',
    localName: 'മലയാളം',
    period: '9世紀 - 現在',
    regions: ['ケーララ州'],
    type: 'アブギダ',
    direction: '左から右',
    description: '複雑な合字システムを持つ。マラヤーラム語で使用される。',
    sample: 'മലയാളം ലിപി',
    languages: ['マラヤーラム語'],
    parent: 'brahmi',
    level: 1,
    x: 650,
    y: 250
  },

  {
    id: 'sinhala',
    name: 'シンハラ文字',
    localName: 'සිංහල',
    period: '3世紀 - 現在',
    regions: ['スリランカ'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'スリランカで使用される独特の丸い文字。パーリ語文献でも使用。',
    sample: 'සිංහල අකුරු',
    languages: ['シンハラ語', 'パーリ語'],
    parent: 'brahmi',
    level: 1,
    x: 450,
    y: 250
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
    description: 'チベット仏教の経典に使用。独特の積み重ね文字を持つ。',
    sample: 'བོད་ཡིག་',
    languages: ['チベット語', 'ゾンカ語', 'ラダック語'],
    parent: 'brahmi',
    level: 1,
    x: 350,
    y: 300
  },

  // Southeast Asian Branch
  {
    id: 'burmese',
    name: 'ビルマ文字',
    localName: 'မြန်မာအက္ခရာ',
    period: '11世紀 - 現在',
    regions: ['ミャンマー'],
    type: 'アブギダ',
    direction: '左から右',
    description: '円形の文字が特徴的。ミャンマー語で使用される。',
    sample: 'မြန်မာအက္ခရာ',
    languages: ['ビルマ語', 'モン語'],
    parent: 'brahmi',
    level: 1,
    x: 700,
    y: 150
  },

  {
    id: 'thai',
    name: 'タイ文字',
    localName: 'อักษรไทย',
    period: '13世紀 - 現在',
    regions: ['タイ'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'クメール文字から発展。タイ語で使用される。',
    sample: 'อักษรไทย',
    languages: ['タイ語', 'イサーン語', 'パーリ語'],
    parent: 'brahmi',
    level: 1,
    x: 750,
    y: 200
  },

  {
    id: 'khmer',
    name: 'クメール文字',
    localName: 'អក្សរខ្មែរ',
    period: '7世紀 - 現在',
    regions: ['カンボジア', 'ベトナム南部'],
    type: 'アブギダ',
    direction: '左から右',
    description: 'アンコール遺跡の碑文にも使用された古い文字。',
    sample: 'អក្សរខ្មែរ',
    languages: ['クメール語', 'パーリ語'],
    parent: 'brahmi',
    level: 1,
    x: 800,
    y: 200
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