import React from'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CardList from './containers/CardList';
import saleData from '../assets/sales.js';
import Header from './components/Header/Header';
import Account from './components/Account/Account';
import Home from './containers/Home';

export default function App()  {
  return (
   <Router>
    <Header />



    <Switch>
      <Route  exact path = "/">
        <Home />
      </Route>
      <Route  path = "/Account">
        <Account />
      </Route>
    </Switch>

   </Router>
  );
}
