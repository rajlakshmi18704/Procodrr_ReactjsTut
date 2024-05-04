import React from 'react'
import AppleBasket from './AppleBasket'
import Button from './Button'
import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import  './AppleCounter.css'
import{createRoot} from 'react-dom/client'

const root=createRoot(document.querySelector('#root'))
const totalApplecount=10
  let RightApplecount=0
  let LeftAppleCount=totalApplecount-RightApplecount
const AppleCounter=()=> {
  
  return (
    <>
   <section>
      <AppleBasket AppleCounter={LeftAppleCount} Basket={1} />
      <Button imageUrl={LeftArrow} title="Left-Arrow" EventHandler={()=>{
if(LeftAppleCount<=10&& RightApplecount>0){
  RightApplecount--
  LeftAppleCount++
  root.render(<AppleCounter/>)
  console.log(LeftAppleCount) 
  console.log(RightApplecount) 
}
      }
        
      }/>
      <Button imageUrl={RightArrow}  title="Right-Arrow"  EventHandler={()=>{
        if(RightApplecount<10&& LeftAppleCount>=0){
          RightApplecount++
          LeftAppleCount--
          root.render(<AppleCounter/>)
          console.log(RightApplecount) 
            console.log(LeftAppleCount)
        }
       
      }}/>
   
  <AppleBasket AppleCounter={RightApplecount} Basket={2}/>
  <p style={{
    textAlign:"center",
    marginTop:"32px"}}>
     <button onClick={()=>{
     root.render(<AppleCounter/>)
    }}>Re-Render</button></p>
  </section>
  </>
  )}


export default AppleCounter
