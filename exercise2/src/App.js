import './App.css';
import React, { useState } from 'react';
import ShoppingCart from './components/ShoppingCart'
import Title from './components/Title';
import ButtonBox from './components/ButtonBox';

function App() {

  const [shoppingCart, setShoppingCart] = useState([
    {
      id: 1,
      item: 'Milk',
      qty: 5,
      unit: 'ltr'
    },
    {
      id: 2,
      item: 'Bananas',
      qty: 3,
      unit: 'x'
    },
    {
      id: 3,
      item: 'Bread',
      qty: 2,
      unit: 'x'
    },
    {
      id: 4,
      item: 'Eggs',
      qty: 7,
      unit: 'x'
    }
  ])

  const updateCart = (index, quantity) => {
    
  }

  return (
    <div className="App">
      <Title />

      <ShoppingCart itemList={ shoppingCart }/>
      <ButtonBox listUpdate={ updateCart }/>
    </div>
  );
}

export default App;
