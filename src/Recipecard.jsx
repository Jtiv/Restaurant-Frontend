//imports
import { useState, useEffect } from "react";

const [recipe, setRecipe] = useState('');


//functional react component
const Recipecard = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <Ingredients Ingredients={props.Ingredients} />
      <Timer time={props.readyInMinutes} />
      <Topsection serving={props.serving} />
      <Summary />

    </div>
  )
}

export default Recipecard;

//FIRE
