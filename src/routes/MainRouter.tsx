import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Spinner } from '../components/spinner';

const CountryList = lazy(() => import('../pages/country-list/CountryList'));
const CountryDetails = lazy(() => import('../pages/country-details/CountryDetails'));
const PageNotFound = lazy(() => import('../pages/page-not-found/PageNotFound'));

const MainRouter: FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/">
          <CountryList />
        </Route>
        <Route exact path="/country-details/:countryCode">
          <CountryDetails />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default MainRouter;
