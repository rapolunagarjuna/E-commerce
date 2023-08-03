import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Template from "./pages/Template";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Invoice from "./pages/Invoice";


import Test from "./components/Test";

import Dashboard from "./components/customer/DashboardPage";
import Orders from "./components/customer/OrdersPage";
import Cart from "./components/customer/CartPage";
import CustomerProducts from "./components/customer/ProductsPage";
import Profile from "./components/customer/ProfilePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:category' element={<Template />}></Route>
        <Route path='/about' element={<About />}></Route>
        
        <Route path='/test' element={<Test />}></Route>
        {/* <Route path='/invoice/:orderNumber' element={<Invoice />}></Route> */}

        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/orders' element={<Orders />}></Route>
        <Route path='/dashboard/cart' element={<Cart />}></Route>
        <Route path='/dashboard/products' element={<CustomerProducts />}></Route>
        <Route path='/dashboard/products/:productCode' element={<CustomerProducts />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>
        
      </Routes>

    </Router>
  )
}

