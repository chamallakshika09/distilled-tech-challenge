import React, { FC } from 'react';
import { Country } from '../../utils';
import { CountryTitle } from '../country-title';
import { Image } from '../flag-image';

interface CountryViewProps {
  countryCode: string;
  countries: Country[];
}

export const CountryView: FC<CountryViewProps> = ({ countryCode, countries }) => {
  const country = countries.filter((country) => country.alpha3Code === countryCode)[0];

  return (
    <React.Fragment>
      <Image src={country.flag} alt={`${country.name} flag`} height="200px" />
      <CountryTitle>{country.name}</CountryTitle>
    </React.Fragment>
  );
};
