import {useState} from 'react'
import React ,{useState}from 'react'


import Searchbar from './Searchbar'
import Filter from './Filter'

import CountriesList from './CountriesList'

function Home() {
  const [query,setQuery]=useState('')
  return (
    <div>
      <main>
<div className='search-filter-container'>
<Searchbar setQuery={setQuery}/>
<Filter />
</div>
{query==='unmount'?'':<CountriesList query={query}/>}
</main>

    </div>
  )
}

export default Home
