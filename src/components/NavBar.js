import React from "react";
import "../assets/css/navBar.css";
import Lupa from "../assets/images/lupa.svg";
import Banner from "../components/Banner";
import Cards from "../components/news/Cards";

import { useEffect, useState } from "react";

export default function NavBar(props) {
  const [fullName, setFullName] = useState();

  const [dataCategory, setDataCategory] = useState("general");

  const [dataSearch, setDataSearch] = useState("");

  const [dataLanguage, setDataLanguage] = useState("es");

  const [menuDisplay, setMenuDisplay] = useState(false);

  useEffect(() => {
    window.Identity.getUserProfile().then((res) => {
      const { firstName, lastName } = res;
      setFullName(`${firstName} ${lastName}`);
    });
  }, []);

  const selectCategory = (category) => {
    document.getElementById("search").value = "";
    setDataSearch("");
    setDataCategory(category);
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setDataSearch(value);
  };

  const handleLanguage = (e) => {
    const { value } = e.target;
    setDataLanguage(value);
  };

  const cerrar_Sesion = () => {
    window.Identity.logout()
      .then(() => {
        props.handleLogged();
      })
      .catch((err) => {
        console.log("Error la cerrar sesión: ", err);
      });
  };

  const abrirMenu = () => {
    if (menuDisplay === false) {
      document.getElementById("navbarNav").style.display = "block";
      setMenuDisplay(!menuDisplay);
    } else {
      document.getElementById("navbarNav").style.display = "none";
      setMenuDisplay(!menuDisplay);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="d-flex navbar-brand">
            <input
              id="search"
              className="form-control buscador"
              type="search"
              placeholder="¿Qué buscas?"
              name="search"
              onChange={handleInput}
            />
            <img className="lupa" src={Lupa} alt=""></img>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => abrirMenu()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="links"
                  href="/#"
                  onClick={() => selectCategory("business")}
                >
                  NEGOCIOS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="links"
                  href="/#"
                  onClick={() => selectCategory("entertainment")}
                >
                  ENTRETENIMIENTO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="links"
                  href="/#"
                  onClick={() => selectCategory("general")}
                >
                  GENERAL
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="links"
                  href="/#"
                  onClick={() => selectCategory("health")}
                >
                  SALUD
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="links"
                  href="/#"
                  onClick={() => selectCategory("science")}
                >
                  CIENCIAS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="links"
                  href="/#"
                  onClick={() => selectCategory("sports")}
                >
                  DEPORTES
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="links"
                  href="/#"
                  onClick={() => selectCategory("technology")}
                >
                  TECNOLOGIA
                </a>
              </li>
              <li className="nav-item">
                <select
                  className="btn btn-dark links"
                  name="language"
                  onChange={handleLanguage}
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => cerrar_Sesion()}
                  className="btn btn-danger links"
                >
                  Cerrar Sesión
                </button>
              </li>
              <li className="nav-item">
                <label className="btn-dark cerrar-sesion links">
                  {fullName}
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Banner></Banner>
      <Cards
        busqueda={dataSearch}
        filtro={dataCategory}
        idioma={dataLanguage}
      />
    </div>
  );
}
