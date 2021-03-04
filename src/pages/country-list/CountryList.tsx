import React, { FC, useContext, useEffect } from 'react';
import { AppTitle } from '../../components/app-title';
import { CardList } from '../../components/card-list';
import { CountryContext, fetchCountries } from '../../context';
import { PageContainer } from './styles';

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

  console.log(countries);

  return (
    <PageContainer>
      <AppTitle>Countries App</AppTitle>
      <CardList />
    </PageContainer>
  );
};

export default CountryList;
