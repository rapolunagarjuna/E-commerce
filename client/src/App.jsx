import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Geosynthetics from "./pages/Geosynthetics";
import ErosionControl from "./pages/ErosionControl.jsx";
import AgroTextiles from "./pages/AgroTextiles.jsx";
import IndustrialTextiles from "./pages/IndustrialTextiles.jsx";
import PackagingTextiles from "./pages/PackagingTextiles";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/geosynthetics' element={<Geosynthetics />}></Route>
        <Route path='/products/erosion-control' element={<ErosionControl />}></Route>
        <Route path='/products/agro-textiles' element={<AgroTextiles />}></Route>
        <Route path='/products/industrial-textiles' element={<IndustrialTextiles />}></Route>
        <Route path='/products/packaging-textiles' element={<PackagingTextiles />}></Route> 
      </Routes>

    </Router>
  )
}

