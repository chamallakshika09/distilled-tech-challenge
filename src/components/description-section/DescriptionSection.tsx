import React, { FC } from 'react';
import { Country, formatNumbers, getFormattedString } from '../../utils';
import { Text } from '../text';
import { CardTextContainer } from './styles';

interface DescriptionSectionProps {
  country: Country;
}

export const DescriptionSection: FC<DescriptionSectionProps> = ({ country }) => {
  return (
    <CardTextContainer>
      <Text fontSize="16px">{`Capital: ${country.capital}`}</Text>
      <Text fontSize="16px">{`Population: ${formatNumbers(country.population)}`}</Text>
      <Text fontSize="16px">{`Currency: ${getFormattedString(country.currencies)}`}</Text>
      <Text fontSize="16px">{`Languages: ${getFormattedString(country.languages)}`}</Text>
    </CardTextContainer>
  );
};
