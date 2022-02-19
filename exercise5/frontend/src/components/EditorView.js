import React from 'react'
import EditorProductBox from './EditorProductBox'
import styles from '../styles.module.css'

export default function EditorView( {data, location}) {
    console.log(data);
  return (
    <div className={styles.flexDisplay}>
        <div>
            <h2 className={styles.editorHeader}>Editor View</h2>
        </div>
        <div className={styles.formSettings}>
            <form>
                <div>Description <input type="text" /></div>
                <div>Currency(sign) <input type="text" /></div>
                <div>Price <input type="text" /></div>
                <div>Cents of price <input type="text" /></div>
                <div>PreviousPrice <input type="text" /></div>
                <div>Image url <input type="text" /></div>
                <div>Image url <input type="text" /></div>
                <div>Amount <input type="text" /></div>
                <button>Add Product</button>
                
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
                />
            )
        }
        </div>
    </div>
    
  )
}
