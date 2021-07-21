
import React from 'react'
import '../assets/css/navBar.css'
import Lupa from '../assets/images/lupa.svg'
import {useState, useEffect} from 'react'
export default function NavBar(props) {


    return (
        <>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <form className="d-flex" action="">
            <input className="form-control buscador" type="search" placeholder="¿Qué buscas?" aria-label="Search" />
            <img className="lupa" src={Lupa} alt=""></img>
        </form>
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="links" href="/#" onClick={()=>props.selectCategory("business")}>NEGOCIOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="links" href="/#" onClick={()=>props.selectCategory("entertainment")}>ENTRETENIMIENTO</a>
                    </li>
                    <li className="nav-item">
                        <a className="links" href="/#" onClick={()=>props.selectCategory("general")}>GENERAL</a>
                    </li>
                    <li className="nav-item">
                        <a className="links" href="/#" onClick={()=>props.selectCategory("health")}>SALUD</a>
                    </li>
                    <li className="nav-item">
                        <a className="links" href="/#" onClick={()=>props.selectCategory("science")}>CIENCIAS</a>
                    </li>
                    <li className="nav-item">
                        <a className="links" href="/#" onClick={()=>props.selectCategory("sports")}>DEPORTES</a>
                    </li>
                    <li className="nav-item">
                        <a className="links" href="/#" onClick={()=>props.selectCategory("technology")}>TECNOLOGIA</a>
                    </li>
                </ul>
                <button className="btn btn-light cerrar-sesion" >{props.nombreCompleto()}</button>
                </div>
        </div>
        </nav>
    </div>
</>
    )
}