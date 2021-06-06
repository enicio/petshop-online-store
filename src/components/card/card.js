import React from 'react';

import addToCart from '../../assets/addCart.svg';

function Card(props) {
const { name, image, price, DiscountPrice } = props;

  return(
    <div className="card">
      <img src={ image } alt="imagem do pruduto"/>
      <h4>{name}</h4>
      {(DiscountPrice)
        ? <span>{price * (DiscountPrice /100)}</span>
        : <span>{price}</span>
      }
      <button>
        <img src={ addToCart } alt="adicionr"/>
      </button>

    </div>
  );
}

export default Card;
