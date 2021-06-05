import React from 'react';

import cart from '../../assets/cart.png';

import './cart.scss';


function Cart() {
  return(
    <div className="cart">
        <img src={ cart } alt="cart" />
        <span className="cart__quantity">5</span>
        <h4 className="cart__text">Produtos no Carrinho</h4>
        <span className="cart__price">R$ 349,80</span>
    </div>
  );
}

export default Cart;