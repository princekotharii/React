import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Shop from "../Pages/Shop";
import Home from "../Pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
