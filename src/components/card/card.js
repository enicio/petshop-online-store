import React,{ useState, useRef, useContext} from 'react';

import addToCartIcon from '../../assets/addCart.svg';
import { convertCurrency } from '../../service/service';
import MyContext from '../../store/myContext';

import './card.scss';

function Card(props) {
  const { setIsModal, setIdProduct, cartProducts, setCartProducts } = useContext(MyContext);
  const { id, name, img, price, DiscountPrice } = props.product;

  function openModal() {
    console.log('ops card')
    setIsModal(true)
    setIdProduct(id)
  }

  function addToCart() {
    setCartProducts(() => cartProducts.concat(props.product)  )
  }


// console.log(props)

  return(
      <div className="card">
        {(DiscountPrice)? <span className="card_discount">{DiscountPrice}% OFF</span>:''}
        <img onClick={ openModal} className="card__product-image" src={ img } alt="imagem do pruduto"/>
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
            <img onClick={ addToCart} src={ addToCartIcon } alt="adicionar"/>
          </button>
        </div>
      </div>
  );
}

export default Card;
