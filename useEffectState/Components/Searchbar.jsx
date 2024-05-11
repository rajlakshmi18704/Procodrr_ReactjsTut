import React from 'react'

function Searchbar({setQuery}) {
  return (
    <div>
  <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" onChange={((e)=> setQuery(e.target.value.toLowerCase()))} placeholder="Search for a country... "/>
        </div>    
    </div>
  )
}

export default Searchbar
