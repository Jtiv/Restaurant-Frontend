import React, { useState , useEffect } from 'react';
//import IngredientSingle from './IngredientSingle.jsx';

function Ingredients(props) {

  const [ingState, setIngState] = useState([])
  
  

  useEffect((props) => {

    //site does not load if request doesn't initally have data. Nullcheck (!props) is a bandaid. 
    //site renders extremely inconsistantly. Requires two rerenders to fully render data. Not sure if async issue or what
    if (!!props) {
      console.log(props.ingredients)
      setIngState(props.ingredients)
    }

  },[props])

  return (
    <div className='ingredients'>
      <p>{props.serving}</p>
      <ul>
        {ingState.map((ingredient, i) => (
       <li key={i}>{ingredient.name}</li>
     ))}
      </ul>
    </div>
  );
}

export default Ingredients;