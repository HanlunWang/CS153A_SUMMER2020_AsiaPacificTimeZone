import React from 'react';
import PropTypes from 'prop-types';


const  SaleList = ({data,name}) => {
  return (
   <>
     <h1> {name} </h1>
     <ul>
       {data.map(sales => (
         <li key={sales.id}>
           {sales.name} -- {sales.price}
         </li>
       ))}
     </ul>
   </>
 );
}

SaleList.propTypes = {
    data: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
};


export default SaleList;
