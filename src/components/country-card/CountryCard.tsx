import React, { FC } from 'react';
import { Country } from '../../utils';

import { Card } from '../card';
import { CountryTitle } from '../country-title';
import { Image } from '../flag-image';
import { Text } from '../text';

interface CountryCardProps {
  country: Country;
}

export const CountryCard: FC<CountryCardProps> = ({ country }) => {
  return (
    <Card>
      <Image src={country.flag} alt={`${country.name} flag`} height="70px" />
      <CountryTitle>{country.name}</CountryTitle>
      <Text fontSize="12px">{`Capital: ${country.capital}`}</Text>
      <Text fontSize="12px">{`Region: ${country.region}`}</Text>
    </Card>
  );
};
