import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './Providers';
import {
  HomeView,
} from './views';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch>
            <Route path="/" component={() => <HomeView />} />
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
