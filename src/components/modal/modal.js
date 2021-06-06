import React, { useContext, useState } from "react";
import { convertCurrency } from "../../service/service";
import MyContext from "../../store/myContext";
import "./modal.scss";

function Modal() {
  const { setIsModal, idProduct, setIdProduct, products, cartProducts, setCartProducts  } = useContext(MyContext);
  const [ quantity, setQuantity ] = useState(0)

  const productToModal = products.filter((product) => product.id === idProduct)
  const { name, img, price  } = productToModal[0];

  function closeModal() {
      setIsModal(false);
      setIdProduct('');
  }

  function increment() {
      setQuantity(() => quantity + 1 );
  }

  function decrement() {
    if(quantity === 0) return
      setQuantity(() => quantity - 1 );
  }

  function addToCart() {
    setCartProducts(() => cartProducts.concat(productToModal[0])  )
  }

    return(
        <div className="modal">
          <header className="modal__header">
            <button className="modal__header__button" onClick={ closeModal}></button>
            <span>voltar</span>
          </header>
            <img className="modal__image" src={ img } alt={ name } />
            <h4>{ name }</h4>
            <div className="modal__description">
              <ul>
                <li>indicado para cães e gatos;</li>
                <li>Contém extrato de aloe e vera e silicone;</li>
                <li>Ph neutro;</li>
                <li>Produto de alta qualidade.</li>
              </ul>
            </div>
            <div className="modal__observations">
              <h5>Observações</h5>
              <input type="text" />
            </div>
            <div className="modal__AddAndPrice">
              <div className="modal__AddAndPrice__quantity">
                <button onClick={ decrement } >-</button>
                <input type="number" value={ quantity }/>
                <button onClick={ increment } >+</button>
              </div>
              <div className="modal__AddAndPrice__add">
                <button onClick={ addToCart }>Adicionar</button>
                <span>{ convertCurrency(price) }</span>
              </div>
            </div>
        </div>
    )
}

export default Modal;
