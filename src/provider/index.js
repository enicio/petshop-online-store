import React, { useState, useEffect } from 'react';
import myContext from '../store/myContext';
import { fetchProduts } from '../service/service';
// import product from '../service/products.json';g

function Provider({ children }) {
  const [ products, setProducts ] = useState([]);
  const [ cart, setCart ] = useState([]);
  const [ freeShipping, setFreeShipping ] = useState(false);
  const [ search, setSearch ] = useState('');
  const [productsToRender, setProductsToREnder ] = useState([]);
  const [ categorieSearched, setCategorieSearched ] = useState('');

  useEffect( () => {
    async function fetchData() {
      const products = await fetchProduts();
      setProducts(products)
    }
    fetchData();
  },[])

  useEffect(() => {
    const filtredProducts = products
    .filter(( product ) => product.name
    .toLowerCase()
    .includes(search.toLocaleLowerCase())
    ).filter((product) => {
      if(categorieSearched === ""){
        return product
      }
      return product.category === categorieSearched
    });

    setProductsToREnder(filtredProducts);
  },[search, products, categorieSearched])

  const contextValue = {
    products,
    setProducts,
    cart,
    setCart,
    freeShipping,
    setFreeShipping,
    search,
    setSearch,
    productsToRender,
    setCategorieSearched,
    categorieSearched
  };

  return (
    <myContext.Provider value={contextValue}>
      {children}
    </myContext.Provider>
  );
}

export default Provider;
