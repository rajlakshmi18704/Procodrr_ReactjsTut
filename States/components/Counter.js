import React, { useState } from 'react'

function Counter() {
 // console.log(useState(4))
 //myStateArray=useState(0)
// const count= myStateArray[0]
// const setCount=myStateArray[1]
const [count,setCount]=useState(0)
console.log('rendering')
  return (
    <div style={{textAlign:"center"}}>
<h1>{count}</h1>
   <button onClick={()=>
{(setCount(count+1))}}>Increase count</button>  
    </div>
  
  )
}

export default Counter
