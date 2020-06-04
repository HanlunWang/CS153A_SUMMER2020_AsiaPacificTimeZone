import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ classes }) => {
  return (
    <div className='card'>
      <img src={classes.img.src} className='card-img-top' alt={classes.img.alt} />
      <div className='card-body'>
        <h2 className='card-title'>{`${classes.ClassID} - ${classes.Name} `}</h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`Instructor: ${classes.Instructor}`}</li>
        <li className='list-group-item'>{`Time: ${classes.Time}`}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object.isRequired
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
