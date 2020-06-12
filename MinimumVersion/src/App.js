import React from'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './components/Account/Account';
import Home from './containers/Home';

export default function App()  {
  return (
   <Router>
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
