import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './containers/CardList';
import saleData from '../assets/sales.js';
import Header from './components/Header/Header';



const App = () => {
  return (
   <>
    <Header />

    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-white'>
        <h1 className='navbar-brand text-dark'>Newly Listed</h1>
      </nav>
      <CardList data={saleData} />
    </div>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
