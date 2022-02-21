import React, {useState} from 'react'
import EditorProductBox from './EditorProductBox'
import styles from '../styles.module.css'

export default function EditorView( {data, deleteProd, location, addingProduct}) {
    const [newProduct, setNewProduct] = useState({})

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setNewProduct(v => ({...v, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
            const a = () => addingProduct(newProduct)
        a()
    }

  return (
    <div className={styles.flexDisplay}>
        <div>
            <h2 className={styles.editorHeader}>Editor View</h2>
        </div>
        <div className={styles.formSettings}>
            <form onSubmit={handleSubmit}>
                <div>Description <input type="text" name="description" value={newProduct.description} onChange={changeHandler} /></div>
                <div>Currency(sign) <input type="text" name="currency" value={newProduct.currency} onChange={changeHandler} /></div>
                <div>Price <input type="number" name="price" value={newProduct.price} onChange={changeHandler} /></div>
                <div>Cents of price <input type="number" name="priceCents" value={newProduct.priceCents} onChange={changeHandler} /></div>
                <div>PreviousPrice <input type="text" name="previousPrice" value={newProduct.previousPrice} onChange={changeHandler} /></div>
                <div>Image url <input type="text" name="image" value={newProduct.image} onChange={changeHandler} /></div>
                <div>Rating url <input type="text" name="image02" value={newProduct.image02} onChange={changeHandler} /></div>
                <div>Amount <input type="number" name="amount" value={newProduct.amount} onChange={changeHandler} /></div>
                <input type="submit" value="Add Product" />
            </form>
        </div>
        <div className="products">
        {
            data.map(d => 
                <EditorProductBox key={d.id}
                    desc={d.description} 
                    currency={d.currency} 
                    price={d.price} 
                    pCents={d.priceCents}
                    prevPrice={d.previousPrice} 
                    image={d.image}
                    image02={d.image02}
                    amount={d.amount}
                    location={location}
                    deleteProd={deleteProd}
                    itemId={d.id}
                />
            )
        }
        </div>
    </div>
    
  )
}
