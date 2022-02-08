import React from 'react';

export default function ProductBox({ desc, currency, price, pCents, prevPrice, image }) {
  
  return (
    <div className="productBox">
        <img src={`./images/${image}`} alt="product"/>
        <div>{desc}</div>
        <div>{currency}</div>
        <div>{price}</div>
        <div>{pCents}</div>
        <div>{prevPrice}</div>
    </div>
  );
}
