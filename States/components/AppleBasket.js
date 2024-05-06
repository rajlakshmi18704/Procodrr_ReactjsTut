import React from 'react'

const AppleBasket=({AppleCounter,Basket})=> {
  return (
   
    <div className='apple-basket'>
     
      <h1>
        <span>{AppleCounter}</span> apples

      </h1>
      <p> Basket {Basket}</p>
      
    </div>
    
  )
}

export default AppleBasket
