import Spinner from "../components/Spinner";
import Mensaje from "../components/Mensaje";

import React, { useState } from "react";

function Register({ handleLogged }) {
  const [dataRegister, setDataRegister] = useState({
    emailReg: "",
    passReg: "",
    nameReg: "",
    lastNameReg: "",
    secondLastNameReg: "",
    phoneReg: "",
    typeDocReg: "",
    numDocReg: "",
  });

  const [isError, setError] = useState(false);
  const [enableSpinner, setEnableSpinner] = useState(false);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDataRegister({
      ...dataRegister,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      emailReg,
      passReg,
      nameReg,
      lastNameReg,
      secondLastNameReg,
      phoneReg,
      typeDocReg,
      numDocReg,
    } = dataRegister;

    setEnableSpinner(true);

    window.Identity.signUp(
      {
        userName: emailReg,
        credentials: passReg,
        password: "password",
      },
      {
        firstName: nameReg,
        lastName: lastNameReg,
        secondLastName: secondLastNameReg,
        displayName: emailReg,
        email: emailReg,
        contacts: [
          {
            phone: phoneReg,
            type: "HOME",
          },
        ],
        attributes: [
          {
            name: "typeDocument",
            value: typeDocReg,
            type: "String",
          },
          {
            name: "document",
            value: numDocReg,
            type: "String",
          },
        ],
      },
      { doLogin: true },

      { rememberMe: true }
    )
      .then((res) => {
        console.log("registro exitoso", res);
        setTimeout(() => {
          setEnableSpinner(false);
          handleLogged();
        }, 2500);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setTimeout(() => {
          setEnableSpinner(false);

          setTimeout(() => {
            setError(false);
          }, 2500);
        }, 2500);
      });
  };

  return enableSpinner ? (
    <Spinner />
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="titulo-form">
        <h3>Registrate!</h3>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 form-group">
          <input
            name="emailReg"
            placeholder="Correo"
            className="form-control"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
            title="ejemplo@ej.com"
            onChange={handleInput}
            required
          />
        </div>
        <div className="col-12 col-md-6 form-group">
          <input
            type="password"
            name="passReg"
            placeholder="Contraseña"
            className="form-control"
            minLength="8"
            maxLength="15"
            title="ejemplo123"
            onChange={handleInput}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <input
          type="text"
          name="nameReg"
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          pattern="[a-zA-záéíóúÁÉÍÓÚ ]{2,40}"
          title="ejemplo ejemplo2"
          className="form-control"
          onChange={handleInput}
          required
          style={{ textTransform: "capitalize" }}
        />
      </div>
      <div className="row">
        <div className="col-12 col-md-6 form-group">
          <input
            type="text"
            name="lastNameReg"
            placeholder="Apellido Paterno"
            className="form-control"
            pattern="[A-Za-záéíóúÁÉÍÓÚ ]{2,25}"
            title="Silvester"
            minLength="2"
            maxLength="25"
            onChange={handleInput}
            required
            style={{ textTransform: "capitalize" }}
          />
        </div>
        <div className="col-12 col-md-6 form-group">
          <input
            type="text"
            name="secondLastNameReg"
            placeholder="Apellido Materno"
            className="form-control"
            pattern="[A-Za-záéíóúÁÉÍÓÚ ]{2,25}"
            title="Mackley"
            minLength="2"
            maxLength="25"
            onChange={handleInput}
            required
            style={{ textTransform: "capitalize" }}
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="phone"
          name="phoneReg"
          placeholder="Teléfono/Celular"
          className="form-control"
          onChange={handleInput}
          pattern="[0-9]{7,9}"
          title="7 a 9 caracteres numéricos"
          minLength="7"
          maxLength="9"
          required
        />
      </div>

      <div className="row">
        <div className="col-12 col-md-6 form-group">
          <select
            name="typeDocReg"
            onChange={handleInput}
            className="form-select"
            required
          >
            <option value="">[Seleccione]</option>
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div className="col-12 col-md-6 form-group">
          <input
            name="numDocReg"
            placeholder="Número Documento"
            className="form-control"
            onChange={handleInput}
            pattern="[0-9]{8}"
            title="8 caracteres numéricos"
            minLength="8"
            maxLength="8"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="submit"
          name="registerBtn"
          className="btn btn-warning form-control"
          value="Registrarse"
        ></input>
      </div>
      {isError ? (
        <Mensaje mensaje={"Algo salió mal al registrar sus datos :("} />
      ) : null}
    </form>
  );
}

export default Register;
