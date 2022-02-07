import './App.css';
import productList from './data/products'
import { useState, useEffect } from 'react'
import Products from './components/Products'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
      setProducts(productList.products)
    }, [])

    console.log("app", productList);
  return (
    <div className="App">
      <Products data={ products }/>
    </div>
  );
}

export default App;
