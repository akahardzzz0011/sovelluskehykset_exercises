import './App.css';
import { useState, useEffect } from 'react'
import Products from './components/Products'
import SearchBar from './components/SearchBar';
import axios from 'axios'
import styles from './styles.module.css'
import EditorView from './components/EditorView'

function App() {

  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [noResults, setNoResults] = useState(false)
  const [adminMode, setAdminMode] = useState(false)
  const [delProd, setEffectDelete] = useState('')

  const locationInfo = "Ships to Finland"

  useEffect(() => {
    const getData = async () => {
      const results = await axios.get('http://localhost:3001/products')
      console.log(results.data);
      setProducts(results.data)
      setFiltered(results.data)
    }
    getData()
  }, [])
  
  useEffect(() => {
    if (delProd != '') {
        const productDeletion = async () => {
        const results = await axios.delete(`http://localhost:3001/products/${delProd}`)
        console.log(results.status);
        console.log(results.data);
      }
      productDeletion()
    }

  }, [delProd])

  useEffect(() => {
    if (filtered.length === 0) {
      setNoResults(true)
    } else {
      setNoResults(false)
    }
  }, [filtered])

  useEffect(() => {
    setFiltered(filtered)
  }, [filtered])

    const filteredData = (search) => {
      if (search !== '') {
        setFiltered(() => products.filter(prod => 
        prod.description.toLowerCase().includes(search.toLowerCase())
        ))
      } else {
        setFiltered(products)
      }
    }

    const deleteProduct = (index) => {
      let clone = [...products]
      let itemId = clone.findIndex(c => c.id === index)
      clone.splice(itemId, 1)
      setFiltered(clone)
      setProducts(clone)
      setEffectDelete(index)
    }
  

  return (
    <div className="App">
      <h1 className="header">Welcome to the webshop</h1>
      <button className={styles.button} onClick={() => setAdminMode(!adminMode)}>Admin Mode</button>
      <SearchBar filter={ filteredData }/>
      { noResults === true ? <h3 className="header">No Results</h3>: <h3 className="header">Results</h3>}
      { adminMode === true ? <EditorView data={filtered} deleteProd={deleteProduct} location={locationInfo}/> : <Products data={ filtered } location={locationInfo}/>}
    </div>
  );
}

export default App;
