import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/Store";
import CartPage from "./components/CartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AltMobiles from "./components/OverViewProduct";
import CarousalMobile from "./components/CarousalMobile";

import Laptops from "./components/Laptops";
import Signin from "./components/SignIn";
import Signup from "./components/SignUp";
import LandingPage from "./Pages/LandingPage";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path='/Mobiles' element={<CarousalMobile />} />
            <Route path='/Laptop' element={<Laptops />} />
            <Route path='/Contact Us' element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <CartPage />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
