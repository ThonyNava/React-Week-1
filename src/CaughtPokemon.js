import React, { useState } from "react";

let CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    setCaught(caught.concat("Pokemon"));
    console.log(caught);
  }

  return (
    <div>
      <button onClick={catchPokemon}>Click me</button>
      <p>
        🐳 Caught {caught.length} Pokemons on {props.date}.
      </p>
      {caught.map((e, i) => (
        <p key={i}>Oh! we got a new {e}!</p>
      ))}
    </div>
  );
};

export default CaughtPokemon;
