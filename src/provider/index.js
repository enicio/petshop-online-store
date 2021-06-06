import React, { useState, useEffect } from 'react';
import myContext from '../store/myContext';
import { fetchProduts } from '../service/service';
// import product from '../service/products.json';g

function Provider({ children }) {
  const [ input, setInput ] = useState('');
  const [ products, setProducts ] = useState([]);
  const [ cart, setCart ] = useState([]);
  const [ freeShipping, setFreeShipping ] = useState(false);

  useEffect( () => {
    // setStore(product.items);
    async function fetchData() {
      const products = await fetchProduts(input);
      // const { items } = products;
      console.log(products)
      setProducts(products)
    }
    fetchData();
  },[input])

  const contextValue = {
    input,
    setInput,
    products,
    setProducts,
    cart,
    setCart,
    freeShipping,
    setFreeShipping,
  };

  return (
    <myContext.Provider value={contextValue}>
      {children}
    </myContext.Provider>
  );
}

export default Provider;
