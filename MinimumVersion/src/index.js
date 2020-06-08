import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import CardList from './containers/CardList';
import SaleList from './containers/SaleList';

import saleData from '../assets/sales.js';

const Header = styled.div`
  background-color: #1a1a1a;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const App = () => {
  return (
   <>
    <Header>
      <h1>List of Items for Sale</h1>
      <p>This is the list of the used items for sale.</p>
    </Header>

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
