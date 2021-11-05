import React from 'react'
import PropTypes from 'prop-types'
import './card.css'
// para importar animate.css ver public/notas.txt

function Card({title, imageSource, text, url}) {
  
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="im" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {
            text ? text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quos. Iste saepe voluptas soluta ipsa voluptatum corporis. Laudantium veritatis impedit ipsum dolor vero sed? Facilis consectetur eligendi doloremque earum neque."
          }
        </p>
        <a href={url} className="btn btn-outline-secondary rounded-0" rel="noreferrer" target="_blank">
          Go to this web site
        </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Card

/*
Dos formas de acceder a props.
Ver components/notas.txt
*/
