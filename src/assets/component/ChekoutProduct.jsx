import React from 'react'
import {AiFillStar} from "react-icons/ai"
import "./ChekoutProduct.css"
import { useAuth } from '../context/AllState'
const ChekoutProduct=({id , image , title, price , rating , hiddenbutton})=> {
    const {dispatch}=useAuth()
    const removeBasekt=()=>{
          dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
          })
    }
  return (
    <div className='chekoutProduct'>
    <img className='chekoutProductImg' src={image}/>
    <div className='information'>
        <p className='chekoutProduct-title'>{title}</p>
        <p className='chekoutProduct-para'>
            <small>$</small>
           <strong>{price}</strong>
        </p>
        <div className='chekoutProduct-rating'>
            {Array(rating)
            .fill()
            .map((_,i)=>(
           <p>
            <AiFillStar/>
           </p>
            ))
   
            }
           
        </div>
        <button onClick={removeBasekt}>Remove from basket</button>
        </div>  
    </div>
  )
}

export default ChekoutProduct
