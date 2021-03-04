import React, { FC } from 'react';
import { AppTitle } from '../../components/app-title';
import { CardList } from '../../components/card-list';
import { PageContainer } from './styles';

const CountryList: FC = () => {
  return (
    <PageContainer>
      <AppTitle>Countries App</AppTitle>
      <CardList />
    </PageContainer>
  );
};

export default CountryList;
