import React, { useState, useEffect } from "react";
import "../styles/SearchBar.css";
import Pokemon from "./Pokemon";
import axios from "axios";

const SearchBar = () => {
  const [text, setText] = useState();
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getPokemon = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // setPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.prev);
    pokeFunction(data.results);
  };

  const pokeFunction = async (data) => {
    data.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemon((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  useEffect(() => {
    getPokemon();
  }, [url]);

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
