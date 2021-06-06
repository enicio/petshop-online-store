import React, { useState, useContext } from 'react';
import MyContext from '../../store/myContext';

import './filterByCategorie.scss';

function FilterByCategorie() {
// const [localCategorie, setLocalCategorie ] = useState()
const { setCategorieSearched } = useContext(MyContext);

function handleChange({ target }) {
  console.log(target.id)
  const categorieClicked = (target.id === "all")? "": target.id;
  setCategorieSearched(categorieClicked)
}

  return(
    <div className="categories">
      <form>
      <label htmlFor="all">
          Todas as categorias
          <input onChange={handleChange} type="radio" id="all" name="categorie" />
        </label>
        <label htmlFor="toys">
          Brinquedos
          <input onChange={handleChange} type="radio" id="toys" name="categorie" />
        </label>
        <label htmlFor="utilities">
          Camas e casinhas
          <input onChange={handleChange} type="radio" id="utilities" name="categorie" />
        </label>
        <label htmlFor="toys">
          Ossos e Petiscos
          <input onChange={handleChange} type="radio" id="food" name="categorie" />
        </label>
      </form>
    </div>
  );
}

export default FilterByCategorie;
