import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: "Argentina",
    image: image1,
    url: "https://en.wikipedia.org/wiki/Argentina",
  },
  {
    id: 2,
    title: "Brasil",
    image: image2,
    url: "https://en.wikipedia.org/wiki/Brazil",
  },
  {
    id: 3,
    title: "Colombia",
    image: image3,
    url: "https://en.wikipedia.org/wiki/Colombia",
  },
];
function Cards() {
  // console.log(cards)
  return (
    <div className="container d-flex h-100 align-items-center">
      <div className="row">
        {
          cards.map(cardObj => (
            <div className="col-md-4" key={cardObj.id}>
          <Card title={cardObj.title} imageSource={cardObj.image} url={cardObj.url}/>
        </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Cards

