import React from 'react'
import './Search.css';

 function Search({search ,searchInput}) {
  return (
    <div className='search-bar'>
        <input
        type="text"
        placeholder='search the movie'
        className='search'
        onChange={searchInput}
        onKeyPress={search}
        />


      
    </div>
  )
}
export default Search;
