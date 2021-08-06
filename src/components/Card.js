import React from 'react'
import image1 from '../assets/image1.jpg'

function Card() {
  return (
    <div className="card text-center bg-dark">
      <img src={image1} alt="photo" />
      <div className="card-body text-light">
        <h4 className="card-title">My Title</h4>
        <p className="card-text text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quos. Iste saepe voluptas soluta ipsa voluptatum corporis. Laudantium veritatis impedit ipsum dolor vero sed? Facilis consectetur eligendi doloremque earum neque.</p>
        <a href='#!' className="btn btn-outline-secondary rounded-0">
          Go to this web site
        </a>
      </div>
    </div>
  )
}

export default Card
