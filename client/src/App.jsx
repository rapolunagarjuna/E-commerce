import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Geosynthetics from "./pages/Geosynthetics";
import ErosionControl from "./pages/ErosionControl.jsx";
import AgroTextiles from "./pages/AgroTextiles.jsx";
import IndustrialTextiles from "./pages/IndustrialTextiles.jsx";
import PackagingTextiles from "./pages/PackagingTextiles";

import Test from "./components/Test";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/about' element={<About />}></Route>
        {/* <Route path='/dashboard' element={<Customer />}></Route> */}
        
        <Route path='/test' element={<Test />}></Route>
        <Route path='/categories' element={<Categories />}></Route>
        {/* <Route path='/products/geosynthetics' element={<Geosynthetics />}></Route>
        <Route path='/products/erosion-control' element={<ErosionControl />}></Route>
        <Route path='/products/agro-textiles' element={<AgroTextiles />}></Route>
        <Route path='/products/industrial-textiles' element={<IndustrialTextiles />}></Route>
        <Route path='/products/packaging-textiles' element={<PackagingTextiles />}></Route>   */}
      </Routes>

    </Router>
  )
}

