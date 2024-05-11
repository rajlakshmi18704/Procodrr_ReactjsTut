import React, { useState } from 'react'
import Styles from './Counter.module.css'
 console.log(Styles);

function Counter({counterName,children}) {
 // console.log(useState(4))
 //myStateArray=useState(0)
// const count= myStateArray[0]
// const setCount=myStateArray[1]
console.log(children)
const [count,setCount]=useState(0)

  return (
    <div style={{textAlign:"center"}}>
     <h1 >{counterName}</h1>
<h1 className={Styles['textxl']}>{count}</h1>
   <button  className={[Styles.button, Styles.textxl].join(' ')}onClick={()=> {



//We should set the state like this if we have  to set the value on the basis of previous value like a callback function.
    setCount((previousCount) => previousCount+1)

setCount((previousCount) => previousCount+1)
setCount((previousCount) => previousCount+1)
}


 

  

}>Increase count</button>  
{children}
    </div>
  
  )
}

export default Counter
