import './App.css';
import productList from './data/products'
import { useState, useEffect } from 'react'
import Products from './components/Products'
import SearchBar from './components/SearchBar';

function App() {

  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [noResults, setNoResults] = useState(false)
  const locationInfo = "Ships to Finland"

  useEffect(() => {
      setProducts(productList.products)
      setFiltered(productList.products)
  }, [])

  useEffect(() => {
    if (filtered.length === 0) {
      setNoResults(true)
    } else {
      setNoResults(false)
    }
  }, [filtered])

    const filteredData = (search) => {
      
      if (search !== '') {
        setFiltered(() => products.filter(prod => 
        prod.description.toLowerCase().includes(search.toLowerCase())
        ))  
      } else {
        setFiltered(productList.products)
      }
    }

  return (
    <div className="App">
      <h1 className="header">Welcome to the webshop</h1>
      <SearchBar filter={ filteredData }/>
      { noResults === true ? <h3 className="header">No Results</h3>: <h3 className="header">Results</h3>}
      <Products data={ filtered } location={locationInfo}/>
    </div>
  );
}

export default App;
