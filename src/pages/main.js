import React from 'react';
import CardContainer from '../components/CardContainer/cardContainer';
import Cart from '../components/cart/cart'

import './main.scss';


function Main() {
  return(
    <div className="main">
      <CardContainer />
      <Cart />
    </div>
  );
}

export default Main;
