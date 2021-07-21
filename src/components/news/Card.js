import React from "react";
import PropTypes from "prop-types"; // VALIDACION: un componente tiene que recibir determinado dato o tipoDeDato

import "../../assets/css/cards.css";

function Card({ imageSource, title, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp"> 
      <div className="overflow">
        <img src="https://i.blogs.es/07c1d8/google-maps/1366_2000.jpg" alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
 
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank" // abre una pestaña nueva
          className="btn btn-outline-secondary border-0" //estilo gris sin bordes
          rel="noreferrer"
        >
          Go to {title}
        </a>
      </div>
    </div>
  );
}

//VALIDAMOS EL CARD 

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
