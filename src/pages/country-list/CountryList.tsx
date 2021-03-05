import React, { FC, useContext } from 'react';
import { AppTitle } from '../../components/app-title';
import { CardList } from '../../components/card-list';
import { Container } from '../../components/container';
import { CountryContext } from '../../context';

const CountryList: FC = () => {
  const { state } = useContext(CountryContext);
  const { countries } = state;
  return (
    <Container>
      <AppTitle>Countries App</AppTitle>
      <CardList countries={countries} />
    </Container>
  );
};

export default CountryList;
