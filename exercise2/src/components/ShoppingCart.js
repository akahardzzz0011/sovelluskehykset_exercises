import React from 'react';

export default function ShoppingCart(props) {
  
  return (
    <div className="listBox">
        <ul className="cartListElements">
            {
            props.itemList.map(val => 
            <div className="cartText" key={val.id}>
                {val.qty} {val.unit} {val.item}
            </div>
            )       
            }
        </ul>
    </div>
  );
}
