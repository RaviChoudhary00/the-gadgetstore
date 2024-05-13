import "./App.css";
import Navbar from "./customer/components/Navbar";
import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/Store";
import CartPage from "./customer/components/CartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./customer/pages/HomePage";
import AltMobiles from "./customer/components/OverViewProduct";
import CarousalMobile from "./customer/components/CarousalMobile";

import Laptops from "./customer/components/Laptops";
import Signin from "./customer/components/SignIn";
import Signup from "./customer/components/SignUp";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path='/Mobiles' element={<CarousalMobile/>}/>
            <Route path='/Laptop' element={<Laptops/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
          <CartPage />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
