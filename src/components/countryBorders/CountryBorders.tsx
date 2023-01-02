import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import api from '../../api';
import './country-border.css';
const CountryBorders = ({ code, key }: { code: string; key: number }) => {
  const [countryName, setCountryName] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.getCountriesByCode(code);
        setCountryName(data.name);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [code]);
  return isLoading ? (
    <span>...</span>
  ) : (
    <>
      <span className="chip" key={key}>
        {countryName}
      </span>
    </>
  );
};
export default CountryBorders;
