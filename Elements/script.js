import {createRoot} from 'react-dom/client'
import './style.css'



function card(key,title,productimage,brand,price){
  return (
   <div className='card'key={key}  >
  
    <img src={productimage} alt="nature" />
   <div className="card-content">
   <h1>{title}</h1>
  <p>{brand}</p>
  <p><b>$:{price}</b></p>
   </div>
  </div>
  )
}


const root= createRoot(document.getElementById('root'))



fetch('https://dummyjson.com/products')
.then((res) => res.json())
.then((data)=>{
  console.log(data)

  const container2=data.products.map((product)=>{
 return  card(product.id,product.title,product.thumbnail,product.brand,product.price)
  })
  root.render(<div className='container'>{container2}</div>)
})
