import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {initialState}  from "./AppReducer"
const AllContext=createContext();
 const AllProvider=({children})=>{
 const [state, dispatch]=useReducer(AppReducer , initialState);
 return(
 <AllContext.Provider value={{basket:state.basket , user:state.user , dispatch:dispatch}}>
    {children}</AllContext.Provider>
 )
   
 };
export default AllProvider
export const useAuth=()=>{  
    return useContext(AllContext)
};