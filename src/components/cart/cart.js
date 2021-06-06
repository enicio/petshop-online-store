import React, { useContext, useEffect, useState } from 'react';
import cart from '../../assets/cart.png';

import { convertCurrency } from '../../service/service';
import MyContext from '../../store/myContext';

import './cart.scss';


function Cart() {
  const { cartProducts } = useContext(MyContext);
  const [ sumPrice, setSumPrice ] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartProducts.forEach((product ) => {
      sum += Number(product.price);
    })
    setSumPrice(sum);

   },[cartProducts])


  return(
    <div className="cart">
        <img src={ cart } alt="cart" />
        <span className="cart__quantity">{ cartProducts.length }</span>
        <h4 className="cart__text">Produtos no Carrinho</h4>
        <span className="cart__price">{ convertCurrency(sumPrice)}</span>
    </div>
  );
}

export default Cart;