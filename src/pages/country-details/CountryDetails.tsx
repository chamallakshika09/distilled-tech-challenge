import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { AppTitle } from '../../components/app-title';

const CountryDetails: FC = () => {
  const params = useParams();

  const { countryCode } = params as { countryCode: string };

  console.log(countryCode);

  return <AppTitle>Countries App</AppTitle>;
};

export default CountryDetails;
