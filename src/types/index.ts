export type CountryT = {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: [number, number];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: Flags;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
};

type PostalCode = {
  format: string;
  regex: string;
};

type CapitalInfo = {
  latlng: number[];
};

type Flags = {
  png: string;
  svg: string;
};

type Car = {
  signs: string[];
  side: string;
};

type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

type Demonyms = {
  eng: Eng;
  fra: Eng;
};

type Eng = {
  f: string;
  m: string;
};

type Translations = {
  ara: Fra;
  bre: Fra;
  ces: Fra;
  cym: Fra;
  deu: Fra;
  est: Fra;
  fin: Fra;
  fra: Fra;
  hrv: Fra;
  hun: Fra;
  ita: Fra;
  jpn: Fra;
  kor: Fra;
  nld: Fra;
  per: Fra;
  pol: Fra;
  por: Fra;
  rus: Fra;
  slk: Fra;
  spa: Fra;
  srp: Fra;
  swe: Fra;
  tur: Fra;
  urd: Fra;
  zho: Fra;
};

type Languages = {
  fra: string;
};

type Idd = {
  root: string;
  suffixes: string[];
};

type Currencies = {
  XPF: XPF;
};

type XPF = {
  name: string;
  symbol: string;
};

type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
};

type NativeName = {
  fra: Fra;
};

type Fra = {
  official: string;
  common: string;
};
