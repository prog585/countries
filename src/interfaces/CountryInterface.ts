export default interface ICountry {
  name: string;
  nativeName: string;
  region: string;
  subregion?: string;
  population: number;
  flags: { png: string; svg: string };
  capital: string;
  tld: string[];
  languages?: [] | null;
  borders?: string[] | null;
  currencies: [] | null;
}
export interface IBorders {
  borders: string[];
}
/*
interface ICountryName {
  common: string;
  nativeName: {
    fra: {
      common: string;
      official: string;
    };
  };
  official: string;
}
*/
