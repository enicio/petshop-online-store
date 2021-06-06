import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../store/myContext';

import lupa from '../../assets/lupa.svg';

import './searchbar.scss';

function SearchBar() {
  const { setSearch } = useContext(MyContext);
  const [ localSearch, setLocalSearch ] = useState('');

function handlesubmit() {
  setSearch(localSearch)
}

function handleChange({ target }) {
  setLocalSearch( target.value )
}

useEffect( () => {
  console.log('aqio')
  if(localSearch.length === 0){
    setSearch(localSearch)
  }
},[localSearch, setSearch])

  return(
    <div className="searchbar">
        <input
          onChange={ handleChange }
          placeholder="O que você procura?"
          className="searchbar__input"
          value={ localSearch }
          type="text"
        />
        <button onClick={ handlesubmit }>
            <img src={ lupa } alt="lupa" />
        </button>
    </div>
  );
}

export default SearchBar;
