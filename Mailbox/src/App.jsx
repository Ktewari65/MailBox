import React from "react";
import LoginForm from "./Components/Forms/LoginForm";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";


const App = () =>{
  return(
  <div>
   
    
     <Routes> 
      <Route path="/"  element={<LoginForm/>}/>
      <Route path="/home"  element ={<Home/>}/>
     </Routes> 
   
  </div>
  )

}

export default App