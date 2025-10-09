import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Shop from "../Pages/Shop";
import Home from "../Pages/Home";
import Weather from "../Components/weather";
import Loginform from "../Components/Loginform";
import Login from "../Components/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/loginform" element={<Loginform/>}/>
    </Routes>
  );
};

export default AppRoutes;
