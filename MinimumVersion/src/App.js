import React from'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CardList from './containers/CardList';
import saleData from '../assets/sales.js';
import Header from './components/Header/Header';
import Account from './components/Account/Account';

export default function App()  {
  return (
   <Router>
    <Header />

    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-white'>
        <h1 className='navbar-brand text-dark'>Newly Listed</h1>
      </nav>
      <CardList data={saleData} />
    </div>

    <Switch>
      <Route  path = "/Account">
        <Account />
      </Route>
    </Switch>

   </Router>
  );
}
