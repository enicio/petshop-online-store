import React from 'react';

import facebook from '../../assets/socialNetwork/facebook.png'
import instagram from '../../assets/socialNetwork/instagram.png'
import twitter from '../../assets/socialNetwork/twitter.png'
import youtube from '../../assets/socialNetwork/youtube.png'

import './footer.scss';

function Footer() {
  return(
    <footer className="footer">
      <div className="footer__" >
        <h5>Desenvolvido por</h5>
      </div>
      <div>
        <a href="/">Políticas de Privacidade</a>
      </div>
      <div>
        <a href="/">Termos de Uso</a>
      </div>
      <div>
        <h5>Nossas redes sociais</h5>
        <div>
          <img src={ facebook } alt="facebook" />
          <img src={ instagram } alt="instagram" />
          <img src={ twitter } alt="twitter" />
          <img src={ youtube } alt="youtube" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;