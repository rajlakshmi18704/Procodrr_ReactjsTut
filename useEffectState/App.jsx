import React ,{useState}from 'react'
import './App.css'
import Header from './Components/Header'
import Searchbar from './Components/Searchbar'
import Filter from './Components/Filter'
import CountryCard from './Components/CountryCard'
import CountriesData from './CountriesData'
import CountriesList from './Components/CountriesList'
function App() {
  const [query,setQuery]=useState('')

  return (
   <>
<Header/>
<main>
<div className='search-filter-container'>
<Searchbar setQuery={setQuery}/>
<Filter />
</div>
</main>
<CountryCard/>
{query=='unmount'?'':<CountriesList query={query}/>}
   </>
  )
}

export default App
