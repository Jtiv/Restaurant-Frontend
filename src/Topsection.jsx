import React from 'react';

function Topsection(props) {
  return (
    <div>
      <img src={props.image} alt='recipe image'></img>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Topsection;