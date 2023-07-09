import React from 'react'
import { useAuth } from '../context/AllState'
import ChekoutProduct from './ChekoutProduct'
import SubProd from './SubProd'
import "./Chekout.css"
const Chekout=()=> {
  const {user , basket}=useAuth()
  return (
    <div className='chek'>
<div className='chek-left'>
    <h4>hello ,{user?.email}</h4>
     <h5>Your Shopping cart</h5>
     <div className='prd1'>
     {basket.length > 0 ? (basket.map((item)=>(
   
   <ChekoutProduct
   id={item.id}
   title={item.title}
   image={item.image}
   price={item.price}
   rating={item.rating}/>
   
  ))
  ):(<p>you have no items in your bakste , so you need to buy on item or mor item</p>)}
     </div >
      </div>
      <div className='chekright'>
        <SubProd /> 
        </div>
    </div>
   
  )
}
export default Chekout
