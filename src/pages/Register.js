import Spinner from "../components/Spinner";
import Mensaje from "../components/Mensaje";

import React, { useState } from "react";

function Register({ handleLogged }) {
  // 1ro: se guarda el hook, 2do: se modifica el hook
  const [dataRegister, setDataRegister] = useState({
    // tienen que ser llamados igual que los names
    // de los inputs
    emailReg: "",
    passReg: "",
    nameReg: "",
    lastNameReg: "",
    secondLastNameReg: "",
    phoneReg: "",
    typeDocReg: "",
    numDocReg: "",
  });

  // En caso haya error
  const [isError, setError] = useState(false);

  // Controlador de spinner
  const [enableSpinner, setEnableSpinner] = useState(false);

  // definiendo la funcion
  const handleInput = (e) => {
    //obteniendo los valores y nombres de los inputs
    const { value, name } = e.target;

    // esto servirá para capturar los valores de cada input
    setDataRegister({
      ...dataRegister,
      [name]: value,
    });

    // verficando lo obtenido
    // console.log("capturando", dataRegister);
  };

  // AL PRESIONAR EL BOTON PARA REGISTRARNOS
  const handleSubmit = (e) => {
    e.preventDefault();

    // obtener datos del dataLogin
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

    // activamos el spinner
    setEnableSpinner(true);

    // QUE BUSQUE EL OBJETO DEL WINDOW Y EJECUTE
    // El rememberMe: es para que se haga una sesion persistente
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
      // importante
      { doLogin: true },

      // para mantener sesion permanente
      { rememberMe: true }
    )
      .then((res) => {
        console.log("registro exitoso", res);
        // en caso todo bien
        setTimeout(() => {
          // desactivamos el spinner
          setEnableSpinner(false);
          handleLogged();
        }, 2500);
      })
      .catch((error) => {
        // muestra mensaje de error
        console.error(error);
        setError(true);
        setTimeout(() => {
          // desactivamos el spinner
          setEnableSpinner(false);

          // desaparecer error
          setTimeout(() => {
            setError(false);
          }, 2500);
        }, 2500);
      });
  };

  // RETORNARÁ EL FORMULARIO
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
            type="email"
            name="emailReg"
            placeholder="Correo"
            className="form-control"
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
            pattern="[A-Za-z0-9 @_.]{8,15}"
            title="ejm: ejemplo@ej123"
            onChange={handleInput}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <input
          type="text"
          name="nameReg"
          placeholder="Nombre(s)"
          pattern="[A-Za-záéíóúÁÉÍÓÚ ]{2,40}]"
          title="ejemplo ejemplo2"
          minLength="2"
          maxLength="40"
          className="form-control"
          onChange={handleInput}
          required
        />
      </div>
      <div className="row">
        <div className="col-12 col-md-6 form-group">
          <input
            type="text"
            name="lastNameReg"
            placeholder="Apellido Paterno"
            className="form-control"
            pattern="[A-Za-záéíóúÁÉÍÓÚ ]{2,25}]"
            title="Silvester"
            minLength="2"
            maxLength="25"
            onChange={handleInput}
            required
          />
        </div>
        <div className="col-12 col-md-6 form-group">
          <input
            type="text"
            name="secondLastNameReg"
            placeholder="Apellido Materno"
            className="form-control"
            pattern="[A-Za-záéíóúÁÉÍÓÚ ]{2,25}]"
            title="Mackley"
            minLength="2"
            maxLength="25"
            onChange={handleInput}
            required
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
          pattern="[0-9]{7,9}]"
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
            className="form-control"
            required
          >
            <option value="">[Seleccione]</option>
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div className="col-12 col-md-6 form-group">
          <input
            type="text"
            name="numDocReg"
            placeholder="Número Documento"
            className="form-control"
            onChange={handleInput}
            pattern="[0-9]{8}]"
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
