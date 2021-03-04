import React, { FC } from 'react';
import CountryList from './pages/country-list/CountryList';
import { CountryProvider } from './context';

const App: FC = () => {
  return (
    <CountryProvider>
      <CountryList />
    </CountryProvider>
  );
};

export default App;
