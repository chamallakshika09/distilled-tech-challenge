import React, { FC } from 'react';
import { Country } from '../../utils';
import { CardList } from '../card-list';
import { CountryTitle } from '../country-title';
import { DescriptionSection } from '../description-section';
import { Image } from '../flag-image';
import { BorderingCountriesSectionTitle } from './styles';

interface CountryViewProps {
  countryCode: string;
  countries: Country[];
}

export const CountryView: FC<CountryViewProps> = ({ countryCode, countries }) => {
  const country = countries.filter((country) => country.alpha3Code === countryCode)[0];
  const { borders } = country;
  const borderCountries = countries.filter((country) => borders.indexOf(country.alpha3Code) > -1);

  return (
    <React.Fragment>
      <Image src={country.flag} alt={`${country.name} flag`} height="200px" />
      <CountryTitle>{country.name}</CountryTitle>
      <DescriptionSection country={country} />
      <BorderingCountriesSectionTitle>Bordering Countries</BorderingCountriesSectionTitle>
      <CardList countries={borderCountries} />
    </React.Fragment>
  );
};
