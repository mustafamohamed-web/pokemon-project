import React from "react";
import "../styles/Pokemon.css";

const Pokemon = ({ pokemon, data, text }) => {
  const filteredData = data.filter((val) => {
    if (text == "") {
      return val;
    } else if (val.name.toLowerCase().includes(text.toLowerCase())) {
      return val;
    }
  });

  const pokemonName = pokemon.map((item) => {
    return item.name;
  });
  console.log(pokemonName);

  console.log(filteredData, pokemon);
  return (
    <div className="container">
      {pokemon.slice(0, 8).map((item) => {
        return (
          <div className="pokemon-container">
            <p className="pokemon-name">
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </p>
            <img src={item.sprites.back_shiny} alt="" />
            <p className="attack">Attack: {item.stats[0].base_stat}</p>
            {/* <p className="moves">Moves: {item.moves[0].move.name}</p> */}
            <p className="moves">Type: {item.types[0].type.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
