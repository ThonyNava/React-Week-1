import React, { useState } from "react";

let CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function catchPokemon() {
    {
      pokemonNameInput && setCaught(caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    }
    console.log(caught);
  }

  const handleInputChange = (e) => setPokemonNameInput(e.target.value);

  return (
    <div>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
        placeholder="Pokemon to catch"
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
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
