import React from "react";
import Navbar from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import AppRoutes from "./Routes/Routes";

function App() {
  return (
     <>
    <div className={`overflow-x-hidden overflow-hidden fleflex flex-col `}>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
    </>
  );
}
export default App;
