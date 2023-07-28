import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Invoice from "./pages/Invoice";
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
        
        <Route path='/test' element={<Test />}></Route>
        <Route path='/geosynthetics' element ={<GeoSyntheticpg  />}></Route>
        <Route path='/categories' element={<Categories />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/invoice/:orderNumber' element={<Invoice />}></Route>
        
      </Routes>

    </Router>
  )
}

import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Invoice from "./pages/Invoice";
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
        
        <Route path='/test' element={<Test />}></Route>
        <Route path='/categories' element={<Categories />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/invoice/:orderNumber' element={<Invoice />}></Route>
        
      </Routes>

    </Router>
  )
}

