import React from "react"
import { useRef } from "react";
import "./Home.css"
import Products from "./Products"
import Pimage1 from "../component/images/11.png"
import Pimage2 from "../component/images/12.png"
import Pimage3 from "../component/images/13.png"
import Pimage4 from "../component/images/14.png"
import Pimage5 from "../component/images/15.png"
import Pimage6 from "../component/images/16.png"
import shortid from "shortid";
const Home =()=>{
    return(
        <div className="home">
        <div className="aboutHome">
    
        <div className="backHome"></div>

 <div className="home2">
<h1 className="titleHome">The good quality from Us </h1>
 <p className="paragra2">Live with yuur Girl friend/Boy friend</p>
</div> 
</div>
<div className="-h">
<div className="h">
<Products
  id={shortid.generate()}
image={Pimage1} price={64} 
title="Notre casque phare de moto intégral en fibre de carbone. Notre casque le plus sûr, le plus silencieux et le plus confortable jamais conçu."
rating={5}
/>
<Products
  id={shortid.generate()}
image={Pimage2} price={64} 
title="Notre casque phare de moto intégral en fibre de carbone. Notre casque le plus sûr, le plus silencieux et le plus confortable jamais conçu."
rating={5}/>



    <Products
    id={shortid.generate()}
    image={Pimage3} price={64} 
    title="Notre casque phare de moto intégral en fibre de carbone. Notre casque le plus sûr, le plus silencieux et le plus confortable jamais conçu."
    rating={5}/>
    <Products
      id={shortid.generate()}
    image={Pimage4} price={64} 
    title="Notre casque phare de moto intégral en fibre de carbone. Notre casque le plus sûr, le plus silencieux et le plus confortable jamais conçu."
    rating={5}/>
    <Products
          id={shortid.generate()}
    image={Pimage5} price={64} 
    title="Notre casque phare de moto intégral en fibre de carbone. Notre casque le plus sûr, le plus silencieux et le plus confortable jamais conçu."
    rating={5}/>


    <Products
        id={shortid.generate()}
    image={Pimage6} price={64} 
    title="Notre casque phare de moto intégral en fibre de carbone. Notre casque le plus sûr, le plus silencieux et le plus confortable jamais conçu."
    rating={5}/>
</div>
</div>
            </div> 
        
     
    )}

export default Home 