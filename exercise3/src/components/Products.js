import React from 'react';
import ProductBox from './ProductBox'

export default function Products( { data } ) {
    console.log("here", data);
  return (
    <div className="products">
        {
            data.map(d => 
                <ProductBox key={d.id}
                    desc={d.description} 
                    currency={d.currency} 
                    price={d.price} 
                    pCents={d.priceCents}
                    prevPrice={d.previousPrice} 
                    image={d.image} 
                />
            )
        }
    </div>
  );
}
