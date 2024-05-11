import React from 'react'

function CountryCard({name,flag,population,region,capital}) {
  
  return (
    <div>
      <a className="country-card" href="/country.html?name=Moldova">
          <img src={flag} alt={name+`flag`}/>
          <div className="card-text">
              <h3 className="card-title">{name}</h3>
              <p><b>Population: </b>{population}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital?.[0]}</p>
          </div>
  </a>
    </div>
  )
}

export default CountryCard
