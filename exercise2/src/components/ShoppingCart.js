import React from 'react';

export default function ShoppingCart(props) {
  
  return (
    <div>
        <ul>
            {
            props.itemList.map(val => 
            <div key={val.id}>
                {val.qty} {val.unit} {val.item}
            </div>
            )       
            }
        </ul>
    </div>
  );
}
