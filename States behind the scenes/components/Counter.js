import React, { useState } from 'react'

function Counter() {
 // console.log(useState(4))
 //myStateArray=useState(0)
// const count= myStateArray[0]
// const setCount=myStateArray[1]
const[name,setName]=useState("Rajlakshmi")
const [count,setCount]=useState(0)
console.log('rendering')
  return (
    <div style={{textAlign:"center"}}>
      <h1>{name}</h1>
<h1>{count}</h1>
   <button onClick={()=> {


setName('Tanya')
//We should set the state like this if we have  to set the value on the basis of previous value like a callback function.
    setCount((previousCount) => previousCount+1)

setCount((previousCount) => previousCount+1)
}


 

  

}>Increase count</button>  
    </div>
  
  )
}

export default Counter
