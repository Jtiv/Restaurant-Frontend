import React from 'react';

function Topsection(props) {
  return (
    <div className='topsection'>
      <img src={props.image} alt='recipe'></img>
      <h1 className='ingredientTitle'>{props.title}</h1>
    </div>
  );
}

export default Topsection;