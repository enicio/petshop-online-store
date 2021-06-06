import React, { useContext} from 'react';
import MyContext from '../../store/myContext';
import Card from '../card/card';

import './cardContainer.scss';


function CardContainer() {
  const { productsToRender } = useContext(MyContext)
  // console.log(products)

  if(!productsToRender) return <h4>Carregando...</h4>

  return(
    <section className="card_container">
      { productsToRender.map((product) => <Card key={product.id} product={product} /> )}
    </section>

  );
}

export default CardContainer;