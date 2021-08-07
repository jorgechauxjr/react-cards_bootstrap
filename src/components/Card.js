import React from 'react'

function Card({title, imageSource, url}) {
  
  return (
    <div className="card text-center bg-dark">
      <img src={imageSource} alt="im" />
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quos. Iste saepe voluptas soluta ipsa voluptatum corporis. Laudantium veritatis impedit ipsum dolor vero sed? Facilis consectetur eligendi doloremque earum neque.</p>
        <a href={url} className="btn btn-outline-secondary rounded-0" rel="noreferrer" target="_blank">
          Go to this web site
        </a>
      </div>
    </div>
  )
}

export default Card
