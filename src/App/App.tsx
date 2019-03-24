import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';
import './App.css';

const App = () => (
  <Fragment>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Pokédex</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:name" component={Details} />
    </Switch>
  </Fragment>
);

export default App;
