import React from "react";
import NavBar from "../components/NavBar";
import "../assets/css/App.css";

import "../assets/css/header.css";

function Main({ handleLogged }) {
  return (
    <>
      <header className="header-width">
        <NavBar handleLogged={handleLogged}></NavBar>
      </header>
    </>
  );
}

export default Main;
