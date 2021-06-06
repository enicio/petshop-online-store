import React, { useContext} from 'react';
import MyContext from '../../store/myContext';
import Card from '../card/card';

import './cardContainer.scss';


function CardContainer() {
  const { products } = useContext(MyContext)
  console.log(products)

  if(!products) return <h4>Carregando...</h4>

  return(
    <section className="card_container">
      { products.map((product) => <Card key={Math.random()} product={product} /> )}
    </section>

  );
}

export default CardContainer;