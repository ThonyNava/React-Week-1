import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

let App = () => {
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  let date = new Date().toLocaleDateString();

  let logWhenClicked = () => {
    console.log("Button was clicked");
    alert("Button was clicked");
  };

  return (
    <div>
      <Logo appName={"Pokedex"} handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};

export default App;
