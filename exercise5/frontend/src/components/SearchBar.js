import React from 'react';

export default function SearchBar( {filter} ) {

  return (
    <div className="searchBar">
        <input type="text" placeholder="Type here to search" onChange={ e => filter(e.target.value)}></input>
    </div>
  );
}
