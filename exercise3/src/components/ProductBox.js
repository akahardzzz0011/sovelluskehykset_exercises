import React from 'react';

export default function ProductBox({ desc, currency, price, pCents, prevPrice, image }) {
    console.log(desc, currency, price, pCents);
  return (
    <div>
        <img src={image} />
        <div>{desc}</div>
        <div>{currency}</div>
        <div>{price}</div>
        <div>{pCents}</div>
        <div>{prevPrice}</div>
    </div>
  );
}
