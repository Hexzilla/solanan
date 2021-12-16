import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './Providers';
import {
  HomeView,
  ArtCreateView
} from './views';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch>
            <Route
              exact
              path="/art/create"
              component={() => <ArtCreateView />}
            />
            <Route path="/" component={() => <HomeView />} />
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
