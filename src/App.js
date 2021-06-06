import Header from './components/header/header';
import Main from './pages/main';
import './App.css';
import SearchBar from './components/searchBar/searchbar';
import FilterByCategorie from './components/filterByCategorie/filterByCategorie';
import Modal from './components/modal/modal';
import { useContext } from 'react';
import MyContext from './store/myContext';


function App() {
  const { isModal } = useContext(MyContext);
  console.log(isModal)
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <FilterByCategorie />
      <Main />
      { (isModal)?<Modal />: ""}
    </div>
  );
}

export default App;
