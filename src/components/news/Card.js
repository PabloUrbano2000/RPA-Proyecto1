import React from "react";
import PropTypes from "prop-types"; // VALIDACION: un componente tiene que recibir determinado dato o tipoDeDato

import "../../assets/css/cards.css";

function Card({ title, image, url, description }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img
          src={
            image === null || image === ""
              ? "https://fpae.pt/backup/20181025/wp/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg"
              : image
          }
          alt={title}
          className="card-img-top"
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary description">
          {description
            ? description.length > 90
              ? description.substring(0, 87) + "..."
              : description
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. "}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank" // abre una pestaña nueva
          className="btn btn-outline-secondary border-0" //estilo gris sin bordes
          rel="noreferrer"
        >
          Ir al Artículo
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
  imageSource: PropTypes.string,
};

export default Card;
