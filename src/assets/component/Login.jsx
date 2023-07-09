import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "/firebase.js";
import './Login.css';
import { useAuth } from "../context/AllState";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="login">
      <h1>Sign in</h1>
      <form>
        <span>Email:</span>
        <input className="loginCSS1" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <span>Password:</span>
        <input className="loginCSS1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button  onClick={ (e)=>{  
           e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((auth) => {
        if (auth) {
          history.push('/');
        }
     
  });
  }}>Send</button>
        <span>PLS Sing up</span>
        <button className="btn1"
  >Create new Account</button>
      </form>
    </div>
  );
};

export default Login;