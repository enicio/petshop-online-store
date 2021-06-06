import React from 'react';

import addToCart from '../../assets/addCart.svg';
import { convertCurrency } from '../../service/service';

import './card.scss';

function Card(props) {
const { name, img, price, DiscountPrice } = props.product;
console.log(props)

  return(
    <div className="card">
       {(DiscountPrice)? <span className="card_discount">{DiscountPrice}% OFF</span>:''}
      <img className="card__product-image" src={ img } alt="imagem do pruduto"/>
      <h4 className="card__name">{name}</h4>
      <div className="card__botton">
        {(DiscountPrice)
          ? <div className="card__botton__price">
              <span className="card__botton__price__old">De {convertCurrency( price) }</span>
              <span>Por {convertCurrency( price, DiscountPrice/100 ) }</span>
            </div>
          : <div className="card__botton__price">
              <span>{convertCurrency( price) }</span>
            </div>
        }
        <button>
          <img src={ addToCart } alt="adicionar"/>
        </button>
      </div>
    </div>
  );
}

export default Card;
