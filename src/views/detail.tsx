import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';
import ICountry from '../interfaces/CountryInterface';
import CountryDetail from '../components/countryDetail/CountryDetail';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, CircularProgress } from '@mui/material';
import './detail.css';
const initCountry = {
  name: '',
  nativeName: '',
  region: '',
  subregion: '',
  population: 0,
  flags: { png: '', svg: '' },
  capital: '',
  tld: [],
  languages: null,
  borders: null,
  currencies: null
};

export const Detail = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [country, setCountry] = useState<ICountry>(initCountry);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.searchCountryByName(name as string);
        setCountry(data.length ? data[0] : {});
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [name]);
  return isLoading ? (
    <CircularProgress color="inherit" />
  ) : (
    <div className="detail-container">
      <div className="back-bar">
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
      <CountryDetail
        name={country?.name}
        population={country?.population}
        capital={country?.capital}
        region={country?.region}
        flags={country.flags}
        subregion={country.subregion}
        tld={country.tld}
        languages={country.languages}
        currencies={country.currencies}
        nativeName={country.nativeName}
        borders={country.borders}></CountryDetail>
    </div>
  );
};
