import './App.css';
//import productList from './data/products'
import { useState, useEffect } from 'react'
import Products from './components/Products'
import SearchBar from './components/SearchBar';
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const locationInfo = "Ships to Finland"

  useEffect(() => {
    /*
      setProducts(productList.products)
      setFiltered(productList.products)
    */
    const getData = async () => {
      const results = await axios.get('http://localhost:3001/products')
      console.log(results.data);
      setProducts(results.data)
      setFiltered(results.data)
    }
    getData()
  }, [])

    const filteredData = (search) => {

      if (search !== '') {
        setFiltered(() => products.filter(prod => 
        prod.description.toLowerCase().includes(search.toLowerCase())
        ))
      } else {
        setFiltered(filtered)
      }
    }

  return (
    <div className="App">
      <h1 className="header">Welcome to the webshop</h1>
      <SearchBar filter={ filteredData }/>
      <Products data={ filtered } location={locationInfo}/>
    </div>
  );
}

export default App;
