import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Recipecard from './Recipecard';


function Container(){

  const [recipes, setRecipes] = useState([{}]);

  

 //calling the api logic
  const fetchData = async () => {

    let response = await axios.get(
      "https://food-api-chiu.herokuapp.com/api/foods"
    );
    setRecipes(response.data)
  
  console.log(response.data);
  }

  useEffect(() => {  
    
    fetchData();
  }, []);

  return (
    <div>
       <div className='Recipecard'>
        {recipes.map((recipe, i) => (
          <Recipecard key={i} recipe={recipe} />
        ))}
        </div>
    </div>
  )
 }

export default Container;
