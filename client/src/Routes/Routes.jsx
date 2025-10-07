import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Shop from "../Pages/Shop";
import Home from "../Pages/Home";
import Weather from "../Components/weather";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  );
};

export default AppRoutes;
