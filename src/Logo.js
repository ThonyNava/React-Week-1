import React from "react";

let Logo = (props) => (
  <header>
    <h1>Welcome to the {props.appName}</h1>
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
      alt="pokedex 016"
      width="500"
      height="600"
    ></img>
  </header>
);

export default Logo;
