import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import React from "react";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>

    </Router>
  )
}

