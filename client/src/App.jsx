import React from "react";
import Navbar from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import AppRoutes from "./Routes/Routes";
import UserProvider from "./contexts/UserProvider";
import { useLocation } from "react-router-dom";
import LoginHeader from "./Components/LoginHeader";

function App() {
  const location = useLocation()
  const isLogin = location.pathname === '/login'
  const isCart = location.pathname === '/cart'
  return (
  <UserProvider>
    <div className={`overflow-x-hidden overflow-hidden  flex-col  `}>
      {isLogin || isCart ? <LoginHeader /> : <Navbar />}
      <AppRoutes />
      <Footer />
    </div>
  </UserProvider>
  );
}
export default App;
