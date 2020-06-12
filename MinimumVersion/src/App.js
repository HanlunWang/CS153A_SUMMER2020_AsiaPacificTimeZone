import React from'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CardList from './containers/CardList';
import saleData from '../assets/sales.js';
import Header from './components/Header/Header';
import Account from './components/Account/Account';
import Home from './containers/Home';
import NewHeaderDesign from './components/Header/NewHeaderDesign'

export default function App()  {
  return (
   <Router>
    <Switch>
      <Route  exact path = "/">
        <Home />
      </Route>
      <Route  path = "/account">
        <Account />
      </Route>
    </Switch>
   </Router>
  );
}
