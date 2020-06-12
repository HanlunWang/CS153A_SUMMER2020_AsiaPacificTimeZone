import React from'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import NewHeaderDesign from '../components/Header/NewHeaderDesign'
import AccountForm from '../components/Account/AccountForm'


export default function Account()  {
  return (
    <div className='container-fluid'>
        <NewHeaderDesign />
        <AccountForm />
    </div>

  );
}