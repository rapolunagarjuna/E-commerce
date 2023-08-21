import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import ProductPage from "./components/customer/ProductPage";
import Profile from "./components/customer/ProfilePage";

import AdminDashboard from "./components/admin/Dashboard";
import AdminProducts from "./components/admin/Products";
import AdminPending from "./components/admin/Pending";
import AdminUsers from "./components/admin/Users";
import AdminCategories from "./components/admin/Categories";
import AdminOrders from "./components/admin/Order";
import AdminPendingOrderDetails from "./components/admin/PendingOrderDetails";
import AdminOrderDetails from "./components/admin/OrderDetails";

import InventoryPage from './components/editor/InventoryPage';
import EditorDashboard from './components/editor/DashboardPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:category" element={<Template />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/test" element={<Test />}></Route>
        {/* <Route path='/invoice/:orderNumber' element={<Invoice />}></Route> */}

        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/orders" element={<Orders />}></Route>
        <Route path="/dashboard/cart" element={<Cart />}></Route>
        <Route
          path="/dashboard/products"
          element={<CustomerProducts />}
        ></Route>
        <Route
          path="/dashboard/products/:productCode"
          element={<ProductPage />}
        ></Route>
        <Route path="/dashboard/profile" element={<Profile />}></Route>

        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="/admin/categories" element={<AdminCategories />}></Route>
        <Route path="/admin/pending" element={<AdminPending />}></Route>
        <Route
          path="/admin/pending/:orderNumber"
          element={<AdminPendingOrderDetails />}
        ></Route>
        <Route path="/admin/orders" element={<AdminOrders />}></Route>
        <Route
          path="/admin/orders/:orderNumber"
          element={<AdminOrderDetails />}
        ></Route>
        <Route path="/admin/users" element={<AdminUsers />}></Route>
        <Route path="/admin/products" element={<AdminProducts />}></Route>

        <Route path='/editor' element={<EditorDashboard />}></Route>
        <Route path="/inventory" element={<InventoryPage />}></Route>
      </Routes>
    </Router>
  );
}
