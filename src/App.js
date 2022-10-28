import React from 'react'
import './App.css';

import {  Routes, Route, } from "react-router-dom";

import Index,{Home,About,Services,Teams,Contact} from './pages'
  
const App = ()=> {
 
    return (
    <Routes>
      <Route path="/" element={<Index/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="teams" element={<Teams/>}/>
        <Route path="contact" element={<Contact/>}/>
       
         
      </Route>
      
    </Routes>
    );
   
}
 
export default App;
