import React from 'react';
import './countryDetail.css';
import { Grid, Typography } from '@mui/material';
import ICountry from '../../interfaces/CountryInterface';
import CountryBorders from '../countryBorders/CountryBorders';
const CountryDetail = (props: ICountry) => {
  const languages = props.languages?.map((lan: { name: string }, i) => {
    const langCount = props.languages ? props.languages.length : 0;
    const sep = i === langCount - 1 ? '' : ', ';
    return `${lan.name + sep}`;
  });
  const currencies = props.currencies?.map((lan: { name: string }, i) => {
    const langCount = props.currencies ? props.currencies.length : 0;
    const sep = i === langCount - 1 ? '' : ', ';
    return `${lan.name + sep}`;
  });
  return (
    <>
      <Grid container spacing={4} sx={{ width: '100%', marginLeft: 'auto' }}>
        <Grid className="grid-item" item xs={12} md={6}>
          <img src={props.flags?.png} width="400px" height="300px"></img>
        </Grid>
        <Grid className="grid-item" sx={{ marginTop: '1rem' }} item xs={12} md={6}>
          <Typography sx={{ fontWeight: 800 }} variant="h5">
            {props.name}
          </Typography>
          <Grid container spacing={1} sx={{ width: '100%', marginLeft: 'auto', marginTop: '1rem' }}>
            <Grid item xs={12} md={6}>
              <span className="label">Native name:</span> {props.nativeName}
            </Grid>
            <Grid item xs={12} md={6}>
              <span className="label">Top Level Domain:</span> {props.tld}
            </Grid>
            <Grid item xs={12} md={6}>
              <span className="label">Population:</span> {props.population}
            </Grid>
            <Grid item xs={12} md={6}>
              <span className="label">Currencies:</span> {currencies}
            </Grid>
            <Grid item xs={12} md={6}>
              <span className="label">Region:</span> {props.region}
            </Grid>
            <Grid item xs={12} md={6}>
              <span className="label">Languages:</span> {languages}
            </Grid>
            <Grid item xs={12} md={12}>
              <span className="label">Sub Region:</span> {props.subregion}
            </Grid>
            <Grid item xs={12} md={12}>
              <span className="label">Capital:</span> {props.capital}
            </Grid>
            <Grid item xs={12} md={12} sx={{ marginTop: '2rem' }}>
              {props.borders ? (
                <>
                  <span className="label">Border Countries:</span>{' '}
                  {props.borders.map((code, i) => (
                    <CountryBorders key={i} code={code}></CountryBorders>
                  ))}
                </>
              ) : null}{' '}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default CountryDetail;
