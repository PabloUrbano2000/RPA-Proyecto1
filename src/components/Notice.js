import React from 'react'

export default function Notice({objetoRecibido}){

    const {author, title, description, url, urlToImage, publishedAt/*, content*/} = objetoRecibido

    return (
        <div className="card">
            <img src={urlToImage} alt ={title}/>
            <div className="card-info">
                <h4>{title.toUpperCase()}</h4>
                <h5>{description}</h5>
                <a  href={url} className="text-primary">{url}</a>
                <p>Fecha de publicación: {publishedAt}</p>
                <span>{author}</span>
            </div>
        </div>
    )
}