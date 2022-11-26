import React from "react";
import "../styles/Pokemon.css";

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="container">
      {pokemon.slice(0, 10).map((item) => {
        return (
          <div>
            <p className="pokemon-name">{item.name}</p>
            <img src={item.sprites.back_default} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
