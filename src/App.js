import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./recipe";

function App() {
  const APP_ID = "c83aaa42";
  const APP_KEY = "35f38215934da4bd7efba0c1026d8929	";

  //Skapa state (här hamnar alal våra recept)
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  //tar en arrow function som parameter
  useEffect(() => {
    getRecipes();
    /* console.log("Effect has been run"); */
    //om vi bara vill att effect ska köras en gång lägg till tom array dvs , []
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    /* console.log(data.hits); */
    setRecipes(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
