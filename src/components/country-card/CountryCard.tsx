import React, { FC } from 'react';
import { Country } from '../../utils';

import { Card } from '../card';

interface CountryCardProps {
  country: Country;
}

export const CountryCard: FC<CountryCardProps> = ({ country }) => {
  return <Card></Card>;
};
