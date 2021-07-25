import Spinner from "../components/Spinner";
import Mensaje from "../components/Mensaje";
import React, { useState } from "react";

function Login(props) {
  const [dataLogin, setDataLogin] = useState({
    emailLogin: "",
    passLogin: "",
  });

  const [isError, setError] = useState(false);

  const [enableSpinner, setEnableSpinner] = useState(false);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnableSpinner(true);

    const { emailLogin, passLogin } = dataLogin;

    window.Identity.login(emailLogin, passLogin, { rememberMe: true })
      .then((res) => {
        setTimeout(() => {
          setEnableSpinner(false);
          props.handleLogged();
        }, 2500);
      })
      .catch((error) => {
        if (error.httpStatus === 401) {
          setTimeout(() => {
            setEnableSpinner(false);
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 2500);
          }, 2500);
        }
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="titulo-form">
            <h3>Login</h3>
          </div>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="emailLogin"
            placeholder="Ingresa Correo"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
            title="ejemplo@ej.com"
            required
            onChange={handleInput}
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="passLogin"
            placeholder="Ingresa Contraseña"
            minLength="8"
            maxLength="15"
            pattern="[A-Za-z0-9@_. ]{8,15}"
            title="ejm: ejemplo@ej123"
            required
            onChange={handleInput}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-success form-control"
            value="Iniciar Sesión"
            name="loginBtn"
          ></input>
        </div>
        {isError ? (
          <Mensaje mensaje={"Usuario o Contraseña Incorrecta"} />
        ) : null}
      </form>
      {enableSpinner ? <Spinner></Spinner> : null}
    </>
  );
}

export default Login;
