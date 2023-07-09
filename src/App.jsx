import Nav from "./assets/component/Nav"
import {React , useEffect }from "react";
import "./App.css";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Home from "./assets/component/Home"
import Login from "./assets/component/Login";
import Chekout from "./assets/component/Chekout";
import  {useAuth } from "./assets/context/AllState";
import { auth } from "/firebase.js";
import Payment from "./assets/component/Payment";
function App() {
  const {dispatch}=useAuth();
useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
  if (authUser){
       dispatch({
        type:"SET_USER",
        user:authUser,
       })
  }else{
    dispatch({
      type:"SET_USER",
      user:null,
    })
  }
})
}, [])

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <div className="app2">
          <Route path="/" exact component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Chekout" component={Chekout}/>
          <Route path="/Payment" component={Payment}/>
          </div>
        </Switch>
      </Router>
     
    </div>
 
  )
}

export default App
