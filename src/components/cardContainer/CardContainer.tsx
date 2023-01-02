import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CountryCard from '../countryCard/CountryCard';
import './card-container.css';
import api from '../../api/index';
import ICountry from '../../interfaces/CountryInterface';

const CardContainer = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.fetchCountries();
        setCountries(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Box className="card-container" sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} sx={{ width: '100%', marginLeft: 'auto' }}>
        {countries.map((country, index) => (
          <Grid key={index} className="grid-item" item xs={12} md={3}>
            <CountryCard
              name={country.name}
              population={country.population}
              capital={country.capital}
              region={country.region}
              flags={country.flags}
              subregion={country.subregion}
              tld={country.tld}
              languages={country.languages}
              currencies={country.currencies}
              nativeName={country.nativeName}
              borders={country.borders}></CountryCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardContainer;
