import React, { useState , useEffect } from 'react';
import IngredientSingle from './IngredientSingle.jsx';

function Ingredients(props) {
  console.log(props)

  return (
    <div>
      <p>{props.serving}</p>
      <ul>
        {props.ingredients.map((ingredient, i) => (
       <li key={i}>{ingredient.name}</li>
     ))}
      </ul>
    </div>
  );
}

export default Ingredients;