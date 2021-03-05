import React, { FC, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AppTitle } from '../../components/app-title';
import { Button } from '../../components/button';
import { Container } from '../../components/container';
import { CountryContext } from '../../context';

const CountryDetails: FC = () => {
  const { state } = useContext(CountryContext);
  const { countries } = state;
  const params = useParams();
  const history = useHistory();

  const { countryCode } = params as { countryCode: string };

  const handleClick = () => {
    history.push(`/`);
  };

  return (
    <Container>
      <AppTitle>Countries App</AppTitle>
      <Button onClick={handleClick}>Back</Button>
    </Container>
  );
};

export default CountryDetails;
