import React from 'react';

import logo from '../../assets/logo.png';
import Delivery_motocycle from '../../assets/Delivery_motocycle.png';
import isopen from '../../assets/isopen.png';

import '../header/header.scss';

function Header() {
  return(
    <header className="header">
      <img className="header__logo" src={ logo } alt="logo"/>
      <div className="header__information__container">
          <div className="header__information__container__title">
            <h3>Pet Friends Acessories</h3>
            <img className="header__information__container__title__isopen" src={ isopen } alt="open"/>
          </div>
          <h5>Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa - PB</h5>
          <div className="header__information__container__botton">
            <div className="header__information__container__botton__delivery">
              <img src={ Delivery_motocycle } alt="motocicle"/>
              <h6>35m - 1h:40m</h6>
            </div>
            <div className="header__information__container__botton__entrega">
              <h6> Entrega:</h6>
              <h6>À partir de R$ 3,00</h6>
            </div>
          </div>
      </div>
    </header>
  );
}

export default Header;