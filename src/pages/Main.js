import React from "react";
import Notice from "../components/Notice";
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Aside from '../components/Aside';
import Profile from '../components/Profile';
import Cards from "../components/news/Cards";

import '../assets/css/header.css'

import {useState, useEffect} from 'react'

function Main({handleLogged}) {
  const [listaNoticias, setListNews] = useState({});

  const [dataFilters, setDataFilters] = useState({
      busqueda: "",
      categoria: "",
      
  });

  const nombreCompleto = () => {
    return 'YA TE VI'
  }
  
  useEffect(() => {

    const anio = new Date().getFullYear();
    const mes = new Date().getMonth() + 1;
    const dia = new Date().getDate();
    
    console.log(anio,mes,dia)

  }, [])

  const selectCategory = (category) => {
      dataFilters.categoria= category;
      console.log(dataFilters.categoria)
  }


  console.log(dataFilters.categoria)

  return (
    <>
    <Aside></Aside>
    <header className="header-width">
        <NavBar selectCategory={selectCategory} nombreCompleto={nombreCompleto}></NavBar>
        <Banner></Banner>
        <Cards />
    </header>

    <Aside></Aside>
</>
  );
};

export default Main;
