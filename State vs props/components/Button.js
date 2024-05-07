import React from 'react'

const Button=({imageUrl,title,EventHandler,children})=> {
  
  return (

      <button title={children}    onClick={EventHandler}>
        {children}
         <img src={imageUrl} />
      </button>
     
   
  )
}

export default Button
