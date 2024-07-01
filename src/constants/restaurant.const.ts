export enum StoreCategory {
  SUSHI = 'SUSHI',
  UNAGI = 'UNAGI',
  TEMPURA = 'TEMPURA',
  TONKATSU = 'TONKATSU',
  YAKITORI = 'YAKITORI',
  SUKIYAKI = 'SUKIYAKI',
  SOBA = 'SOBA',
  RAMEN = 'RAMEN',
  YAKISOBA = 'YAKISOBA',
  OKONOMIYAKI = 'OKONOMIYAKI',
  DONBURI = 'DONBURI',
  ODEN = 'ODEN',
  KAISEKI = 'KAISEKI',
  HAMBAGU = 'HAMBAGU',
  TEPPANYAKI = 'TEPPANYAKI',
  CURRY = 'CURRY',
  YAKINIKU = 'YAKINIKU',
  NABE = 'NABE',
  CAFE = 'CAFE',
  IZAKAYA = 'IZAKAYA',
  OTHER = 'OTHER',
}

export const STORE_CATEGORY_TEXTS = {
  [StoreCategory.SUSHI]: '스시·해산물',
  [StoreCategory.UNAGI]: '장어',
  [StoreCategory.TEMPURA]: '덴푸라',
  [StoreCategory.TONKATSU]: '돈카츠·쿠시카츠',
  [StoreCategory.YAKITORI]: '야키토리·꼬치',
  [StoreCategory.SUKIYAKI]: '스키야키·샤브샤브',
  [StoreCategory.SOBA]: '소바·우동',
  [StoreCategory.RAMEN]: '라멘·츠케멘',
  [StoreCategory.YAKISOBA]: '야키소바',
  [StoreCategory.OKONOMIYAKI]: '오코노미야키·타코야키',
  [StoreCategory.DONBURI]: '덮밥',
  [StoreCategory.ODEN]: '오뎅',
  [StoreCategory.KAISEKI]: '가이세키·일식',
  [StoreCategory.HAMBAGU]: '함바그·오므라이스',
  [StoreCategory.TEPPANYAKI]: '스테이크·철판요리',
  [StoreCategory.CURRY]: '카레',
  [StoreCategory.YAKINIKU]: '야키니쿠·호르몬',
  [StoreCategory.NABE]: '나베',
  [StoreCategory.CAFE]: '카페·디저트',
  [StoreCategory.IZAKAYA]: '이자카야·바',
  [StoreCategory.OTHER]: '기타 일본 음식',
};

export const CITY_TEXTS = {
  kobe: '고베',
  yokohama: '요코하마',
  hiroshima: '히로시마',
  saporo: '삿포로',
  osaka: '오사카',
  fukuoka: '후쿠오카',
  nagoya: '나고야',
  kyoto: '교토',
  tokyo: '도쿄',
};
