import React, { useState, useContext } from 'react';
import MyContext from '../../store/myContext';

import './filterByCategorie.scss';

function FilterByCategorie() {
// const [localCategorie, setLocalCategorie ] = useState()
const { setCategorieSearched } = useContext(MyContext);
const [checked , setChecked ] = useState({all: true})


function handleChange({ target }) {

  setChecked({[target.id]: true})

  const categorieClicked = (target.id === "all")? "": target.id;
  setCategorieSearched(categorieClicked)
}

  return(
    <div className="categories">
      <div className="categories__scroll">
        <label htmlFor="all" className={(checked.all)? "checked": ""} >
            Todas as categorias
            <input onChange={handleChange} type="radio" id="all" name="categorie"   />
          </label>
          <label htmlFor="toys" className={(checked.toys)? "checked": ""} >
            Brinquedos
            <input onChange={handleChange} type="radio" id="toys" name="categorie"  />
          </label>
          <label htmlFor="utilities" className={(checked.utilities)? "checked": ""} >
            Camas e casinhas
            <input onChange={handleChange} type="radio" id="utilities" name="categorie"  />
          </label>
          <label htmlFor="food" className={(checked.food)? "checked": ""} >
            Ossos e Petiscos
            <input onChange={handleChange} type="radio" id="food" name="categorie"  />
          </label>
      </div>
    </div>
  );
}

export default FilterByCategorie;
