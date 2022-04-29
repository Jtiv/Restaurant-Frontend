//imports
import { useState, useEffect } from "react";
import Ingredients from "./Ingredients.jsx";
import Timer from "./Timer.jsx";
import Topsection from "./Topsection.jsx";
import Summary from "./Summary.jsx";

//functional react component
const Recipecard = (props) => {

  const [recipe, setRecipe] = useState('');

  return (
    <div>
      <h1>{props.recipe.title}</h1>
      <Ingredients Ingredients={props.recipe.Ingredients} />
      <Timer time={props.recipe.readyInMinutes} />
      <Topsection serving={props.recipe.serving} />
      <Summary summary={props.recipe.summary}/>

    </div>
  )
}

export default Recipecard;

//FIRE
