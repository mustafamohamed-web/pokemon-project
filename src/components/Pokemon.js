import React from "react";
import "../styles/Pokemon.css";

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);

  return (
    <div className="container">
      {pokemon.slice(0, 10).map((item) => {
        const { name, url } = item;
        return (
          <div>
            <p className="pokemon-name">{name}</p>
            <img src={url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
