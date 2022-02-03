import React from 'react';

export default function Button({ listUpdate, index, text }) {
  return (
    <div>
        <button onClick={() => listUpdate(index)}>{text}</button>
    </div>
  );
}
