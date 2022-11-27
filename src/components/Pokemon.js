import React from "react";
import "../styles/Pokemon.css";

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
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
            <p className="moves">Moves: {item.moves[0].move.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
