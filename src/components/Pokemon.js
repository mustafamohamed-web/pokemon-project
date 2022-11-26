import React from "react";
import "../styles/Pokemon.css";

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="container">
      {pokemon.slice(0, 10).map((item) => {
        return (
          <div className="pokemon-container">
            <p className="pokemon-name">{item.name}</p>
            <img src={item.sprites.back_shiny} alt="" />
            <p className="height">{item.height}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
