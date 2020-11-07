import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  let handleChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="city..."
        value={city}
        onChange={handleChange}
      />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
