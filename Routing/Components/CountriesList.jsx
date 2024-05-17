import React,{useEffect, useState} from 'react'
// import CountriesData from '../CountriesData'
import CountryCard from './CountryCard';


function CountriesList() {
 const [countriesData,setCountriesData] =useState([])

 useEffect(()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json())
  .then((data) => {
  
    setCountriesData(data)
 
  })},[])
  console.log(countriesData)
 return(
<>

    <div className="countries-container">
   {countriesData.map((country)=>{
return(
 <CountryCard 
key={country.name.common}
name={country.name.common}
flag={country.flags.svg} population={country.population } region={country.region}
capital={country.capital}
/>
)
})}
  
      </div>  
      </>
  )

}

export default CountriesList
