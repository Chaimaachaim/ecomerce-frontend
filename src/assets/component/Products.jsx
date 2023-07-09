import React from 'react'
import {AiFillStar} from "react-icons/ai"
import "./Products.css"
import { useAuth } from '../context/AllState'
const Products=({title , price , image , rating , id })=> {
  const {dispatch , basket }=useAuth();
  const addtoSell=()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      }
    })
  }

  return (
    <div className='products'>
      <p className='p1'>{title}</p>
      <small className='prductsOne'>$ </small>
      <strong>{price}</strong>
      <div className='product-rating'>
        {Array(rating).fill().map((_, i)=>(
          <p>
        <AiFillStar/>

          </p>
        ) )}
      </div>
      <img src={image} alt='prd-image'/><br/>
      <button onClick={addtoSell}>Add to Basket</button>
    </div>
  )
}

export default Products
