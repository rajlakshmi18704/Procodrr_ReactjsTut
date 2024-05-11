import React from 'react'
const Button=({imageUrl,title,EventHandler,children})=> {
  
  return (

      <button className='button' title={children}   onClick={EventHandler}>
        
         <img src={imageUrl} />
      </button>
     
   
  )
}

export default Button
