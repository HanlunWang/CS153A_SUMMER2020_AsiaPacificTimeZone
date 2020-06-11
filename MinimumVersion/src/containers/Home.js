import React from'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import CardList from './CardList';
import saleData from '../../assets/sales.js';
import NewCardDesign from '../components/Card/NewCardDesign'


export default function Home()  {
  return (

    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-white'>
        <h1 className='navbar-brand text-dark'>Newly Listed</h1>
      </nav>
      <CardList data={saleData} />
    </div>

  );
}
