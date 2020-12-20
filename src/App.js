import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const APP_ID = "c83aaa42";
  const APP_KEY = "35f38215934da4bd7efba0c1026d8929	";

  /* const exampleRequest = ``; */

  /* const [counter, setCounter] = useState(0); */

  //tar en arrow function som parameter
  useEffect(() => {
    getRecipes();
    /* console.log("Effect has been run"); */
    //om vi bara vill att effect ska köras en gång lägg till tom array dvs , []
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
    </div>
  );
}

export default App;
