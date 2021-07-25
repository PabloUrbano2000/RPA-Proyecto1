import React from "react";
import PropTypes from "prop-types"; // VALIDACION: un componente tiene que recibir determinado dato o tipoDeDato
import "../../assets/css/cards.css";

function Card({ title, image, url, description }) {
  const retornaImage = () => {
    if (image === null || image === "") {
      return "https://fpae.pt/backup/20181025/wp/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg";
    }
    return image;
  };

  const retornaDescription = () => {
    if (description !== null || description === "") {
      if (description.length > 90) {
        return description.substring(0, 87) + "...";
      } else {
        return description;
      }
    }
    return "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ";
  };

  return (
    <div
      className="card text-center bg-dark animate__animated animate__fadeInUp mb-2"
      style={{ height: "450px" }}
    >
      <div className="overflow" style={{ height: "200px" }}>
        <img
          src={retornaImage()}
          alt={title}
          className="card-img-top"
          loading="lazy"
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary description">
          {retornaDescription()}
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
