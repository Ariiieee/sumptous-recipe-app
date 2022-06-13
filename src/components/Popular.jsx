import React from "react";
import { useEffect } from "react";

const Popular = () => {
  useEffect(() => {
    getPopularRecipes();
  }, []);

  const getPopularRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await response.json();
    console.log(data);
    // console.log(process.env);
  };

  return <div>Popular</div>;
};

export default Popular;
//whenever you make changes in .env file restart the server
