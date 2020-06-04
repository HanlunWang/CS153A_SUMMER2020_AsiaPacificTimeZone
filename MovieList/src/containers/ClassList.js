import React from 'react';
import PropTypes from 'prop-types';


const  ClassList = ({data,name}) => {
  return (
   <>
     <h1> {name} </h1>
     <ul>
       {data.map(classes => (
         <li key={classes.id}>
           {classes.ClassID} -- {classes.Name}
         </li>
       ))}
     </ul>
   </>
 );
}

ClassList.propTypes = {
    data: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
};


export default ClassList;
