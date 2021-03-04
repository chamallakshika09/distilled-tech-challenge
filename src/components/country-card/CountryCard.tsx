import React, { FC } from 'react';
import { Country } from '../../utils';

import { Card } from '../card';
import { Image } from '../flag-image';

interface CountryCardProps {
  country: Country;
}

export const CountryCard: FC<CountryCardProps> = ({ country }) => {
  return (
    <Card>
      <Image src={country.flag} alt={`${country.name} flag`} height="70px" />
    </Card>
  );
};
