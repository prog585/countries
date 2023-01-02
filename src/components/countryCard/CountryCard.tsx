import React from 'react';
import './countryCard.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ICountry from '../../interfaces/CountryInterface';
import { Link } from 'react-router-dom';
const CountryCard = (props: ICountry) => {
  console.log(props);
  return (
    <Card sx={{ maxWidth: 345, width: 210, minHeight: 260, marginLeft: '0px' }}>
      <Link to={`/detail/${props.name}`}>
        <CardMedia sx={{ height: 135 }} image={props.flags.png} title="country data" />
      </Link>{' '}
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle2"
          sx={{ fontWeight: 800, fontSize: 14 }}
          component="div">
          {props.name.length > 21 ? props.name.substring(0, 20) + '...' : props.name}
        </Typography>
        <div className="country-dtls">
          <div>
            <span className="label">Population:</span> {props.population}
          </div>
          <div>
            <span className="label">Region:</span> {props.region}
          </div>
          <div>
            <span className="label">Capital:</span> {props && props.capital ? props.capital : ''}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default CountryCard;
