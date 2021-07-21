import Spinner from './Spinner';

import React, { useState, useEffect } from 'react';

function Profile({ handleLogged }) {

    const [fullName, setFullName] = useState()
    const [enableSpinner, setEnableSpinner] = useState(false)

    // AL PRESIONAR EL BOTON 
    const handleLogout = () => {
        window.Identity.logout()
            .then(() => {
                console.log('cerró sesión')
                handleLogged()
            })
            .catch(err => {

                // EN CASO OCURRA UN ERROR
                console.log('Error: ', err)
            })
    }

    useEffect(() => {

        window.Identity.getUserProfile()
            .then(res => {
                console.log("perfil: ", res)
                const { firstName, lastName } = res
                setFullName(`${firstName} ${lastName}`)
            })

        // MOSTRAR SPINNER
        // OCULTAR SPINNER
        // MOSTRAR H1
        setEnableSpinner(true)
        setTimeout(() => {
            setEnableSpinner(false)
        }, 3000)
    }, [])


    return (
        <div>{
            enableSpinner ? (<Spinner />) : (<h1>Bienvenido {fullName}</h1>)
            }  
            <button type="button" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    )
}
export default Profile