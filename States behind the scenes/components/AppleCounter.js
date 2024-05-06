//Declarative Programming--variable is declared onetime only.
import React, { useState } from 'react'
import AppleBasket from './AppleBasket'
import Button from './Button'
import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import  './AppleCounter.css'


  // let RightApplecount=0
  // let LeftAppleCount=totalApplecount-RightApplecount
const AppleCounter=()=> {
  const totalApplecount=10
  const [rightAppleCount,setRightAppleCount]=useState(0)
  const [leftAppleCount,setLeftAppleCount]=useState(totalApplecount-rightAppleCount)
  return (
    <>
   <section>
      <AppleBasket AppleCounter={leftAppleCount} Basket={1} />
      <Button imageUrl={LeftArrow} title="Left-Arrow" EventHandler={()=>{
if(leftAppleCount<=10&& rightAppleCount>0){
  setRightAppleCount(rightAppleCount-1)
 setLeftAppleCount(leftAppleCount+1) 
  // root.render(<AppleCounter root={root}/>)
  console.log(leftAppleCount) 
  console.log(rightAppleCount) 
}
      }
        
      }/>
      <Button imageUrl={RightArrow}  title="Right-Arrow"  EventHandler={()=>{
        if(rightAppleCount<10&& leftAppleCount>=0){
         setRightAppleCount(rightAppleCount+1) 
         setLeftAppleCount(leftAppleCount-1) 
          // root.render(<AppleCounter root={root}/>)
          console.log(rightAppleCount) 
            console.log(leftAppleCount)
        }
       
      }}/>
   
  <AppleBasket AppleCounter={rightAppleCount} Basket={2}/>
 
  </section>
  </>
  )}


export default AppleCounter
