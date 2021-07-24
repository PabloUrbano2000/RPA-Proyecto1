import React from "react";
import NavBar from "../components/NavBar";
import "../assets/css/App.css";

import "../assets/css/header.css";

function Main(props) {
  return (
    <>
      <NavBar handleLogged={props.handleLogged}></NavBar>
    </>
  );
}

export default Main;
