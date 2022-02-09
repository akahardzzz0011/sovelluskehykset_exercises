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
    
    console.log(filtered);
  return (
    <div className="App">
      <SearchBar filter={ filteredData }/>
      <Products data={ filtered }/>
    </div>
  );
}

export default App;
