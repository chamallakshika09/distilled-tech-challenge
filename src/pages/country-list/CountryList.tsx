import React, { FC, useContext, useEffect } from 'react';
import { AppTitle } from '../../components/app-title';
import { CardList } from '../../components/card-list';
import { Container } from '../../components/container';
import { CountryContext, fetchCountries } from '../../context';

const CountryList: FC = () => {
  const { state, dispatch } = useContext(CountryContext);

  useEffect(() => {
    fetchCountries(dispatch);
  }, [dispatch]);

  const { loading, error, countries } = state;

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>error</span>;
  }

  return (
    <Container>
      <AppTitle>Countries App</AppTitle>
      <CardList countries={countries} />
    </Container>
  );
};

export default CountryList;
