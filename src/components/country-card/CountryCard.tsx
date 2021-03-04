import React, { FC } from 'react';
import { Country, formatNumbers } from '../../utils';
import { useHistory } from 'react-router-dom';
import { Card } from '../card';
import { CardBorderText } from '../card-border-text';
import { CountryTitle } from '../country-title';
import { Image } from '../flag-image';
import { Text } from '../text';

interface CountryCardProps {
  country: Country;
}

export const CountryCard: FC<CountryCardProps> = ({ country }) => {
  const history = useHistory();

  const handleClick = (countryCode: string) => {
    history.push(`/country-details/${countryCode}`);
  };

  return (
    <Card onClick={() => handleClick(country.alpha3Code)}>
      <CardBorderText>{country.name}</CardBorderText>
      <Image src={country.flag} alt={`${country.name} flag`} height="70px" />
      <CountryTitle>{country.name}</CountryTitle>
      <Text fontSize="12px">{`Capital: ${country.capital}`}</Text>
      <Text fontSize="12px">{`Population: ${formatNumbers(country.population)}`}</Text>
      <Text fontSize="12px">{`Region: ${country.region}`}</Text>
      <Text fontSize="12px">{`Area: ${country.area ? formatNumbers(country.area) : '-'}`}</Text>
    </Card>
  );
};
