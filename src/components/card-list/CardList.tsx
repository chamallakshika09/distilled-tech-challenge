import React, { FC } from 'react';
import { Country } from '../../utils';
import { CardContainer } from './styles';
import { CountryCard } from '../country-card';

interface CardListProps {
  countries: Country[];
}

export const CardList: FC<CardListProps> = ({ countries }) => {
  const renderCountryList = countries.map((country) => {
    return <CountryCard key={country.alpha3Code} country={country} />;
  });

  return <CardContainer>{renderCountryList}</CardContainer>;
};
