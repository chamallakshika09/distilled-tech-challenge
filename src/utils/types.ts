export type Country = {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: number;
  borders: string[];
  callingCodes: string[];
  capital: string;
  cioc: string;
  currencies: { code: string; name: string; symbol: string }[];
  demonym: string;
  flag: string;
  gini: number;
  languages: { iso639_1: string; iso639_2: string; name: string; nativeName: string }[];
  latlng: number[];
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: { acronym: string; name: string; otherAcronyms: string[]; otherNames: string[] }[];
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  translations: {
    br?: string;
    de?: string;
    es?: string;
    fa?: string;
    fr?: string;
    hr?: string;
    it?: string;
    ja?: string;
    nl?: string;
    pt?: string;
  };
};
