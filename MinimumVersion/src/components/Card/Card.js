import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ sales }) => {
  return (
    <div className='card'>
      <img src={sales.img.src} className='card-img-top' alt={sales.img.alt} />
      <div className='card-body'>
        <h2 className='card-title'>{` ${sales.name} - ${sales.price}`}</h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`phone: ${sales.phone}`}</li>
        <li className='list-group-item'>{`email: ${sales.email}`}</li>
        <li className='list-group-item'>{`detail: ${sales.detail}`}</li>
        <button type="button" onclick="alert('Hello world!')">Add to cart</button>
      </ul>
    </div>
  );
};

Card.propTypes = {
  sales: PropTypes.object.isRequired
}
/*
Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    distributor: PropTypes.string,
    year: PropTypes.number,
    amount: PropTypes.string,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    ranking: PropTypes.number,
  }).isRequired,
};
*/
export default Card;
