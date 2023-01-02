import axios from 'axios';
const API_URL = 'https://restcountries.com/v2';

const API = axios.create({ baseURL: API_URL });

const fetchCountries = () =>
  API.get('/all?fields=name,capital,region,flags,population,subregion,tld,languages,borders');
const searchCountryByName = (name: string) => API.get(`/name/${name}/`);
const searchCountryByRegion = (region: string) => API.get(`/region/${region}`);
const getCountriesByCode = (code: string) => API.get(`/alpha/${code}?fields=name`);

const api = {
  fetchCountries,
  searchCountryByName,
  searchCountryByRegion,
  getCountriesByCode
};
export default api;
