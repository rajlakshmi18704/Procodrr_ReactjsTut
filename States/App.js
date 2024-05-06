import LeftArrow from './assets/images/left-arrow.png'
import AppleBasket from './components/AppleBasket'
import AppleCounter from './components/AppleCounter'
import Counter from './components/Counter'
console.log(LeftArrow)
const App=({root})=>{
  return (
    <div>
  <Counter/>
<AppleCounter root={root}/>
</div>
  )

}
export default  App