import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const CountryList = lazy(() => import('../pages/country-list/CountryList'));
const CountryDetails = lazy(() => import('../pages/country-details/CountryDetails'));

const MainRouter: FC = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Switch>
        <Route exact path="/">
          <CountryList />
        </Route>
        <Route exact path="/country-details/:countryCode">
          <CountryDetails />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default MainRouter;
