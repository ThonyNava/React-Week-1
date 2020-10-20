import React from "react";

let BestPokemon = (props) => {
  console.log(props);
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((ability, i) => {
          return <li key={i}>{ability}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokemon;
