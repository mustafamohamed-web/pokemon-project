import React, { useState, useEffect } from "react";
import "../styles/SearchBar.css";
import Pokemon from "./Pokemon";

const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

const SearchBar = () => {
  const [text, setText] = useState();
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPokemon(data.results);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  return (
    <form className="input-container">
      <input type="text" value={text} onChange={handleSubmit} />
      <Pokemon pokemon={pokemon} />
    </form>
  );
};

export default SearchBar;
