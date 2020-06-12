import React from'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import CardList from './CardList';
import saleData from '../../assets/sales.js';
import Header from '../components/Header/Header'
import NewHeaderDesign from '../components/Header/NewHeaderDesign'


export default function Home()  {
  return (

    <div className='container-fluid'>
      <NewHeaderDesign />
      <CardList data={saleData} />
    </div>

  );
}
