import {createRoot} from 'react-dom/client'
import './style.css'
import  React  from 'react'



function Card(props){
  const{thumbnail,brand,title,price}=props
//  console.log(key)
  return (
   <div className='card'  >
  
    <img src={thumbnail} alt="nature" />
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
 return  <Card 
 key={product.id}
 title={product.title}
 brand={product.brand}
 price={product.price}
 image={product.thumbnail}
 />
  })
  root.render(<div className='container'>{container2}</div>) 
})

function card2(){
  return <h1>hello world</h1>
}
// const h1=<h1>hello world</h1>
// console.log(h1)
// root.render({
//   $$typeof:Symbol.for('react.element'),
//   type:card,//can pass function also intype other than string
//   ref:null,
//   props:{
//   title:'Apple iPhone',
//   image:"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   brand:"Apple",
//   price:900,
//   key:12
//   }
// })
// console.log( React.createElement(card,{
//   title:'Apple iPhone',
//    image:"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//    brand:"Apple",
//    price:900,
//   key:12,
// }))
// root.render(
//   React.createElement(card,{
//   title:'Apple iPhone',
//    image:"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//    brand:"Apple",
//    price:900,
//   key:12,
// }))
// root.render(<Card title="iPhone13" brand="Apple" image= "https://i.dummyjson.com/data/products/1/thumbnail.jpg"  price="900" />)