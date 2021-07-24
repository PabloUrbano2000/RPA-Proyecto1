import React from "react";
import Card from "./Card";

import useFetchNews from "../../hooks/useFetchNews";
import Spinner from "../Spinner";

function Cards(props) {
  const { data: news, loading } = useFetchNews(
    props.busqueda,
    props.filtro,
    props.idioma
  );
  return (
    <>
      {loading && <Spinner />}
      {news.length !== 0 ? (
        <div className="container d-flex justify-content-center align-items-center h-100 mt-3">
          <div className="row">
            {news.map((article) => (
              <div className="col-md-4">
                <Card key={article.title} {...article} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-light">No se encontraron resultados.</p>
      )}
    </>
  );
}

export default Cards;
