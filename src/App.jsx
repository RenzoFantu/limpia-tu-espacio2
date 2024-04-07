//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import {  Navigate, Route, Routes } from "react-router-dom";
import NvComponent from "./NvComponent/NvComponent";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Nosotros from "./pages/Nosotros";
import Contactanos from "./pages/Contactanos";

function App() {
  return (
    
    <>
      <NvComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element = {<Nosotros/>} />
        <Route path="/Contactanos" element = {<Contactanos/>} />
        <Route path="/*" element = {<Navigate to ='./' />} />
      </Routes>
      <Footer/>
    </>

   
  );
}
export default App;
