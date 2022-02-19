import React from 'react'

export default function EditorProductBox( { desc, currency, price, pCents, prevPrice, image, image02, amount, location } ) {
  return (
    <div className="productBox">
        <div className="productImg">
        <img className="prod" src={`./images/${image}`} alt="" />
      </div>
      <div>
        <div>{desc}</div>
      </div>
      <div className="ratingBox">
        <img src={`./images/${image02}`} alt="rating" />
        <div className="ratingBox text">{amount}</div>
      </div>
      <div className="currencyBox">
        <div className="currency">{currency}</div>
        <div className="price">{price}</div>
        <div className="cents">{pCents}</div>
        <div className="prevPrice">{prevPrice}</div>
      </div>
      <div className="locationBox">
        <div className="locationText">{location}</div>
      </div>
    </div>
  )
}
