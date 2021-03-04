import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CountryProvider } from './context';
import MainRouter from './routes/MainRouter';

const App: FC = () => {
  return (
    <BrowserRouter>
      <CountryProvider>
        <MainRouter />
      </CountryProvider>
    </BrowserRouter>
  );
};

export default App;
