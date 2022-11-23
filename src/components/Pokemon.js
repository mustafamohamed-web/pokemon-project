import React from "react";
import "../styles/Pokemon.css";

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);

  return (
    <div>
      {pokemon.slice(1, 10).map((item) => {
        const { name, url } = item;
        return (
          <div>
            <p>{name}</p>
            <img src={url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
