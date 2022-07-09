import React from 'react'
import './card.scss';

const Card = (data) => {
  const { data:Characters } = data;
  return (
    <div className="card-container">
      {Characters.map((item) => (
        console.log(item),
        <div className="card" key={item.id}>
          <div className="card-title">{item.name}</div>
          <div className="card-body">Specie: {item.species}</div>
          <div className="card-image">
            <img src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  ); 
}

export default Card;
