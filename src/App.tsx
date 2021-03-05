import React, { FC, useContext, useEffect } from 'react';
import { ErrorText } from './components/error-text';
import { Spinner } from './components/spinner';
import { CountryContext, fetchCountries } from './context';
import MainRouter from './routes/MainRouter';

const App: FC = () => {
  const { state, dispatch } = useContext(CountryContext);

  useEffect(() => {
    fetchCountries(dispatch);
  }, [dispatch]);

  const { loading, error } = state;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorText>Failed to fetch country data</ErrorText>;
  }

  return <MainRouter />;
};

export default App;
