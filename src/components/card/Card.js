import React from 'react';
import "./card.css"

const Card = (props) => {
  return (
    <li className='card'>
      <img src={props.property.cover} alt="" />
      <div className="infos">
        <h2>{props.property.title}</h2>
      </div>
    </li>
  );
};

export default Card;