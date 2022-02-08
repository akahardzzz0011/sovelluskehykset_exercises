import React, { useState } from 'react';

export default function SearchBar( {filter} ) {

    const [search, setSearch] = useState('')

  return (
    <div className="searchBar">
        <input type="text" placeholder="Search" onChange={ e => setSearch(e.target.value)}></input>
        <button onClick = { () => filter(search)}>Search</button>
    </div>
  );
}
