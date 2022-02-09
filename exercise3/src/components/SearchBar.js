import React, { useState } from 'react';

export default function SearchBar( {filter} ) {

  return (
    <div className="searchBar">
        <input type="text" placeholder="Search" onChange={ e => filter(e.target.value)}></input>
    </div>
  );
}
