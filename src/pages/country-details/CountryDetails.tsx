import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { AppTitle } from '../../components/app-title';
import { Container } from '../../components/container';

const CountryDetails: FC = () => {
  const params = useParams();

  const { countryCode } = params as { countryCode: string };

  console.log(countryCode);

  return (
    <Container>
      <AppTitle>Countries App</AppTitle>
    </Container>
  );
};

export default CountryDetails;
