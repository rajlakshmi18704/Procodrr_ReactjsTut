import React from 'react'

const Button=({imageUrl,title,EventHandler})=> {
  return (
    <div>
      <button title={title}>   <img src={imageUrl}  alt={title}  onClick={EventHandler}/>
      </button>-
    </div>
  )
}

export default Button
