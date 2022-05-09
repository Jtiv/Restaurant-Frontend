//imports
import { useState, useEffect } from "react";
import Ingredients from "./Ingredients.jsx";
import Timer from "./Timer.jsx";
import Topsection from "./Topsection.jsx";
import Summary from "./Summary.jsx";

//functional react component
const Recipecard = (props) => {

  //const [recipe, setRecipe] = useState('');

  return (
    <div>
      <Ingredients serving={props.recipe.servings} ingredients={props.recipe.extendedIngredients} />
      <Timer time={props.recipe.readyInMinutes} />
      <Topsection title={props.recipe.title} image={props.recipe.iamge} />
      <Summary summary={props.recipe.summary}/>
    </div>
  )
}

export default Recipecard;

//FIRE
