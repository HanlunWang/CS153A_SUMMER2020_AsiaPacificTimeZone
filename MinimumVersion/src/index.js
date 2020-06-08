import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './containers/CardList';


import SaleList from './containers/SaleList';


import saleData from '../assets/sales.js';


const App = () => {
  return (
   <>
    <div className="jumbotron">
      <h1>List of Items for Sale</h1>
      <p>This is the list of the used items for sale.</p>
    </div>

    <SaleList data={saleData} name="List of Item for Sales" />
    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>Sales List</h1>
      </nav>

      <CardList data={saleData} />


    </div>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
