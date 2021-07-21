import Spinner from '../components/Spinner'
import Mensaje from '../components/Mensaje'

import React, { useState } from 'react'


function Login({ handleLogged }) {

    const [dataLogin, setDataLogin] = useState(
        {
            // tienen que ser llamados igual que los names
            // de los inputs
            emailLogin: "",
            passLogin: ""
        }
    )

    // En caso haya error
    const [isError, setError] = useState(false)

    // Controlador de spinner
    const [enableSpinner, setEnableSpinner] = useState(false)

    const handleInput = (e) => {

        //obteniendo los valores y nombres de los inputs 
        const { value, name } = e.target

        // esto servirá para capturar los valores de cada input
        setDataLogin({
            ...dataLogin,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        // activamos el spinner
        setEnableSpinner(true)

        // obtener datos del dataLogin
        const { emailLogin, passLogin } = dataLogin

        // QUE BUSQUE EL OBJETO DEL WINDOW Y EJECUTE
        // El rememberMe: es para que se haga una sesion persistente
        window.Identity.login(emailLogin, passLogin, { rememberMe: true })
            .then(res => {
                console.log("todo correcto: ", res)

                // en caso todo bien
                setTimeout(() => {
                    // desactivamos el spinner
                    setEnableSpinner(false)
                    handleLogged()
                }, 3000)
            })
            .catch(error => {
                console.log("Algo ah pasado: ", error)
                if (error.httpStatus === 401) {
                    setTimeout(() => {
                        // desactivamos el spinner
                        setEnableSpinner(false)

                        // muestra mensaje de error
                        setError(true)

                        // desaparecer error
                        setTimeout(() => {
                            setError(false)
                        }, 2000)
                    }, 3000)
                }
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="titulo-form">
                        <h3>Login</h3>
                    </div>
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" name="emailLogin" placeholder="Ingresa Correo" minLength="2" required onChange={handleInput}></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="passLogin" placeholder="Ingresa Contraseña" maxLength="15" pattern="[A-Za-z0-9 @_.]{8,15}" title="ejm: ejemplo@ej123" required onChange={handleInput}></input>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-success form-control" value="Iniciar Sesión" name="loginBtn"></input>
                </div>
                {isError ? (
                    <Mensaje mensaje={"Usuario o Contraseña Incorrecta"} />
                ) : (null)}
            </form>
            {
                enableSpinner ? (<Spinner></Spinner>) : (null)
            }
        </>
    );
}

export default Login;


