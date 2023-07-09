import React from "react";
import {Link } from  "react-router-dom";
import {BsSearch} from "react-icons/bs"
import {HiOutlineShoppingBag} from "react-icons/hi"
import "./Nav.css";
import { useAuth } from "../context/AllState";

const Nav =()=>{
  const {user , basket}=useAuth()
  console.log(user?.gmail)

    return(
        <div className="nav">

            <div className="logo">
            <Link  className="av" to="/">
 <h1 >MTR</h1>
 </Link>
<input className="input11" placeholder="type" type="text"/>
<BsSearch/> 
</div>
  <div className="header">
    <Link className="hdr2" to ='/Login'>
      <span >  hello {user? `${user.email}`:"guest"}</span><br/>
       <span> sign in </span>
         </Link>
    <Link className="option1" to='/orders'>
    <div >
        <div className="hdr-option">returns</div>
        <div className="hdr-option">&orders</div>
        </div>
    </Link>
    <div className="option">
        <div className="hdr-option">yuur</div>
        <div className="hdr-option">prime</div>
        </div>
        <Link to='/orders'> </Link>
        
    <div className="options" >
    <Link  className="option2"to="/Chekout">
     <HiOutlineShoppingBag/> 
   <span className="option-line ">{basket.length}</span>
   </Link>   </div>  
       
  </div> 
        </div>
    )
}
export default Nav;