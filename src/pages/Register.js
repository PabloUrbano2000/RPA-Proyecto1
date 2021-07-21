import Spinner from "../components/Spinner";

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
    console.log("capturando", dataRegister);
  };

  // AL PRESIONAR EL BOTON PARA REGISTRARNOS
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviar", dataRegister);

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
        handleLogged();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // RETORNARÁ EL FORMULARIO
  return (
    <form onSubmit={handleSubmit}>
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
          required
        />
      </div>

      <div className="row">
        <div className="col-12 col-md-6 form-group">
          <select
            name="typeDocReg"
            onChange={handleInput}
            className="form-control"
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
    </form>
  );
}

export default Register;
