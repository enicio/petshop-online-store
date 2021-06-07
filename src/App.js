import Header from './components/header/header';
import Main from './pages/main';
import './App.scss';
import SearchBar from './components/searchBar/searchbar';
import FilterByCategorie from './components/filterByCategorie/filterByCategorie';
import Modal from './components/modal/modal';
import { useContext } from 'react';
import MyContext from './store/myContext';
import Footer from './components/footer/footer';


function App() {
  const { isModal } = useContext(MyContext);
  return (
    <div className="App">
      <Header />
      <div className="search-and-filter">
        <SearchBar />
        <FilterByCategorie />
      </div>
      <Main />
      <Footer />
      { (isModal)?<Modal />: ""}
    </div>
  );
}

export default App;
