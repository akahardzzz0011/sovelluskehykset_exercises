import React from 'react';

export default function ProductBox({ desc, currency, price, pCents, prevPrice, image }) {
  
  return (
    <div className="productBox">
      <div>
        <img src={`./images/${image}`} alt="product"/>
      </div>
      <div>
        <div>{desc}</div>
      </div>
      <div className="currencyBox">
        <div className="currency">{currency}</div>
        <div className="price">{price}</div>
        <div className="cents">{pCents}</div>
        <div className="prevPrice">{prevPrice}</div>
      </div>
    </div>
  );
}
