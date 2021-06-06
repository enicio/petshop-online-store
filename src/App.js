import Header from './components/header/header';
import Main from './pages/main';
import './App.css';
import SearchBar from './components/searchBar/searchbar';
import FilterByCategorie from './components/filterByCategorie/filterByCategorie';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <FilterByCategorie />
      <Main />
    </div>
  );
}

export default App;
