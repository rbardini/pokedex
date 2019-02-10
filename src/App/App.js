import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Home from '../pages/Home';
import Details from '../pages/Details';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/:name" component={Details} />
  </Switch>
);

export default App;
