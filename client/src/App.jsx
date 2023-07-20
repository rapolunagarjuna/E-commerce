import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/products' element={<Products />}></Route>
      </Routes>

    </Router>
  )
}

