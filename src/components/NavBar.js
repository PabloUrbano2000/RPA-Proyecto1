import React from "react";
import "../assets/css/navBar.css";
import Lupa from "../assets/images/lupa.svg";
import Banner from "../components/Banner";
import Cards from "../components/news/Cards";
import Login from "../pages/Login";

import "../assets/css/App.css";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [fullName, setFullName] = useState();

  const [dataCategory, setDataCategory] = useState("general");
  const [isLogged, setIsLogged] = useState(true);

  const [dataSearch, setDataSearch] = useState("");

  const [dataLanguage, setDataLanguage] = useState("es");

  useEffect(() => {
    window.Identity.getUserProfile().then((res) => {
      const { firstName, lastName } = res;
      setFullName(`${firstName} ${lastName}`);
    });
  }, []);

  const cerrar_Sesion = () => {
    window.Identity.logout()
      .then(() => {
        console.log("cerró sesión");
        setIsLogged(false);
      })
      .catch((err) => {
        // EN CASO OCURRA UN ERROR
        console.log("Error: ", err);
      });
  };

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

  return isLogged ? (
    <>
      <div className="bck-gray">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <form className="d-flex">
            <input
              id="search"
              className="form-control buscador"
              type="search"
              placeholder="¿Qué buscas?"
              aria-label="Search"
              name="search"
              onChange={handleInput}
              pattern="[A-Za-zÁÉÍÓÚáéíóú0-9 ]{0,50}"
              title="Solo caracteres alfanuméricos"
            />
            <img className="lupa" src={Lupa} alt=""></img>
          </form>
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                    className="btn btn-light"
                    name="language"
                    onChange={handleLanguage}
                  >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                  </select>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    onClick={() => cerrar_Sesion()}
                    className="btn btn-danger links"
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </ul>

              <label className="text-light cerrar-sesion links">
                {fullName}
              </label>
            </div>
          </div>
        </nav>
      </div>
      <Banner></Banner>
      <Cards
        busqueda={dataSearch}
        filtro={dataCategory}
        idioma={dataLanguage}
      />
    </>
  ) : (
    <>
      <div className="form-responsive">
        <div className="border-form">
          <Login />
          <div className="form-group">
            <p>
              Aún no registrado?{" "}
              <a id="showRegister" href="/#">
                Registrate!
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
