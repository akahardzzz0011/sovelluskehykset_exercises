import './App.css';
import productList from './data/products'
import { useState, useEffect } from 'react'
import Products from './components/Products'
import SearchBar from './components/SearchBar';

function App() {

  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
      setProducts(productList.products)
      setFiltered(productList.products)
  }, [])

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
      <Products data={ filtered }/>
    </div>
  );
}

export default App;
