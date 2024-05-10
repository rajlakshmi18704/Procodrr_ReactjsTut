import LeftArrow from './assets/images/left-arrow.png'
import AppleBasket from './components/AppleBasket'
import AppleCounter from './components/AppleCounter'
import Counter from './components/Counter'
console.log(LeftArrow)
const App=()=>{
  return (
    <div>
    { true ? <Counter counterName="Timer">   
       </Counter>:<AppleCounter/>}  
       <AppleCounter/>
</div>
  )

}
export default  App