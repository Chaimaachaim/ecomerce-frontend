import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useAuth } from '../context/AllState';
import {getBasketTotal} from "../context/AppReducer"
import { useHistory } from "react-router-dom";
import "./SubProd.css"
const SubProd=()=> {
    const {basket}=useAuth();
   const history = useHistory();
   return (
    <div className='subprod'>
 

 <CurrencyFormat renderText={(value)=>(

 <>
 <p> 
    Total "{basket.length} items" : <strong>{value}</strong> 
    </p> </>   )} 
   value={getBasketTotal(basket)}
   decimalScale={2}
   displayType={"text"}
   thousandSeparator={true}
   prefix={"$"}
     /> 
  
       <button className='subbtn'  onClick={()=>history("/payment")}>Proceed to Chekout </button>

    </div>
 )
}

export default SubProd
