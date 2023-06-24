import React from "react";
import './Card.scss';

 const Card = ({ image, name, price }) => (
     <div className="card">
       <div className="image__container">
         <img src={ image } alt={`Imagen de ${ name }`} />
       </div>

       <div className="content__container">
         <p>{ name }</p>
         <span>{`$${price} `}</span>
       </div>
     </div>
);

export default Card;
