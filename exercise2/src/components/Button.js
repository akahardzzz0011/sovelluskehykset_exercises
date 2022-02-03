import React from 'react';

export default function Button({ listUpdate, index, quantity, text }) {
  return (
    <div>
        <button onClick={listUpdate(index, quantity)}>{text}</button>
    </div>
  );
}
