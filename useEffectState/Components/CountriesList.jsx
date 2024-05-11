import React,{useEffect, useState} from 'react'
// import CountriesData from '../CountriesData'
import CountryCard from './CountryCard';


function CountriesList({query}) {
 const [countriesData,setCountriesData] =useState([])
 const[count,setCount]=useState(0)
 useEffect(()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json())
  .then((data) => {
  
    setCountriesData(data)
 
  })
  const intervalId=setInterval(()=>{
    console.log('running countries');
  },1000)
  console.log(intervalId)
  return ()=>{
   clearInterval(intervalId)
  }
},[ ])

 
useEffect(()=>{
  console.log("hii")
},[count])

 return(
<>
<h1 >{count}</h1>
<button onClick={()=>setCount(count+1)}>Increase count</button>
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
