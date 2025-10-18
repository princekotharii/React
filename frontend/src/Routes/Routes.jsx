import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Shop from "../Pages/Shop";
import Home from "../Pages/Home";
import Weather from "../Pages/Weather";
import Loginform from "../Pages/Loginform";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";
import Mobile from "../Pages/Mobile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginform" element={<Loginform/>} />
      {/* Fixed: changed "parth" to "path" */}
      <Route path="/cart" element={<Cart />} />
      <Route path='/mobile' element={<Mobile />} />
    </Routes>
  );
};

export default AppRoutes;