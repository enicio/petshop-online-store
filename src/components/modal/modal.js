import React, { useContext, useState, useRef } from "react";
import { convertCurrency } from "../../service/service";
import MyContext from "../../store/myContext";
import "./modal.scss";

function Modal() {
  const { setIsModal, idProduct, setIdProduct, products, cartProducts, setCartProducts  } = useContext(MyContext);
  const [ quantity, setQuantity ] = useState(0)

  const productToModal = products.filter((product) => product.id === idProduct)
  const { name, img, price  } = productToModal[0];

  const modalRef = useRef();

  document.body.addEventListener("click", closeDropdown);


  function closeDropdown(event) {
     if(event.target.classList.value === "modal__background") {
      closeModal()
    }
  }

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
        <div ref={ modalRef } className="modal__background">
          <div className="modal">
            <header className="modal__header">
              <button className="modal__header__button" onClick={ closeModal}></button>
              <span>voltar</span>
            </header>
            <div className="modal__container" >
              <div>
                <img className="modal__image" src={ img } alt={ name } />
              </div>
              <div>
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
                    <input type="text" value={ quantity } readOnly />
                    <button onClick={ increment } >+</button>
                  </div>
                  <div className="modal__AddAndPrice__add">
                    <button onClick={ addToCart }>Adicionar</button>
                    <span>{ convertCurrency(price) }</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Modal;
