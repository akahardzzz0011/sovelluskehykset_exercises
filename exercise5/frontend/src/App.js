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
  const [addedProduct, setAddedProduct] = useState('')
  const [modifiedProduct, setModifiedProduct] = useState('')
  const [ref, setRef] = useState(false)
  const locationInfo = "Ships to Finland"

  useEffect(() => {
    const getData = async () => {
      const results = await axios.get('http://localhost:3001/products')
      console.log(results.data);
      setProducts(results.data)
      setFiltered(results.data)
    }
    getData()
  }, [ref])
  
  useEffect(() => {
    if (delProd !== '') {
        const productDeletion = async () => {
        const results = await axios.delete(`http://localhost:3001/products/${delProd}`)
        console.log(results.status);
        console.log(results.data);
      }
      productDeletion()
    }

  }, [delProd])

  useEffect(() => {
    if (addedProduct !== '') {
        const productAddition = async () => {
        const results = await axios.post('http://localhost:3001/products', {
          addedProduct
        })
        console.log(results.status);
        console.log(results.data);
        setRef(!ref)
      }
      productAddition()
    }

  }, [addedProduct])

  useEffect(() => {
    if (modifiedProduct !== '') {
        const productModification = async () => {
        const results = await axios.put(`http://localhost:3001/products/${modifiedProduct.id}`, {
          modifiedProduct
        })
        console.log(results.status);
        console.log(results.data);
      }
      productModification()
    }

  }, [modifiedProduct])

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

    const modifyProduct = (item) => {
      console.log(item);
      let clone = [...products]
      let itemId = clone.findIndex(c => c.id === item.id)
      if (itemId !== -1) {
        clone.splice(itemId, 0, item)
        clone.splice(itemId + 1, 1)
        setProducts(clone)
        setFiltered(clone)
        console.log(products);
        setModifiedProduct(item)
      } else {
        alert("Id does not match")
      }
    }
    
    const addingProduct = (newProduct) => {
      console.log("newobj", newProduct);
      let clone = [...products]
      clone.push(newProduct)
      console.log("products", products);
      setFiltered(clone)
      setProducts(clone)
      setAddedProduct(newProduct)
    }

  return (
    <div className="App">
      <h1 className="header">Welcome to the webshop</h1>
      <button className={styles.button} onClick={() => setAdminMode(!adminMode)}>Admin Mode</button>
      <SearchBar filter={ filteredData }/>
      { noResults === true ? <h3 className="header">No Results</h3>: <h3 className="header">Results</h3>}
      { adminMode === true ? <EditorView data={filtered} deleteProd={deleteProduct} modifyProduct={modifyProduct} addingProduct={addingProduct} location={locationInfo}/> : <Products data={ filtered } location={locationInfo}/>}
    </div>
  );
}

export default App;
