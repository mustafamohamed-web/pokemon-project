import React from "react";
import Pokemon from "../assests/pokemon.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={Pokemon} alt="" />
    </nav>
  );
};

export default Navbar;
