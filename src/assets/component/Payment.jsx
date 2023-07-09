import React from 'react'
import { useAuth } from '../context/AllState'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import ChekoutProduct from './ChekoutProduct'

function Payment() {
    const {bakset, user}=useAuth()

  return (
    <div className='payment'> 
      <h1>Chekout (<Link to="/Chekout"/>){bakset.length} </h1>
      <div className='paymentSection1'>
          <div className='paymentTitle'>
            <h1>Delivery Adress</h1>
          </div>
          <div className='paymentAdress'>
             <h3>{user?.email}</h3>
             <p></p>
          </div>
      </div>
      <div className='paymentSection1'>
        <div className='paymentTitle'>
        <h1>Review items and delivery </h1> 
        </div>
          <div className='paymentItems'>
          {basket.map((item)=>(
    <ChekoutProduct
    id={item.id}
    title={item.title}
    image={item.image}
    price={item.price}
    rating={item.rating}/>
          ))}
          </div>
      </div>
    </div>
  )
}

export default Payment
