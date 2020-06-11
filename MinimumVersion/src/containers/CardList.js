import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card/Card';
import './CardList.css'
import ItemCard from '../components/Card/ItemCard';
import NewCardDesign from '../components/Card/NewCardDesign';

const CardList = ({data}) => {
  return (
   <div className='flex-container'>
     {data.map(sales => (
       <div key={sales.id} className='flex-container-element'>
         <NewCardDesign sales={sales} />
       </div>
     ))}
   </div>
 );
}

CardList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default CardList;
