import React from "react";
import Navbar from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import AppRoutes from "./Routes/Routes";
// import Weather from "./Components/Weather";
import Weather from "./Components/weather";

function App() {
  return (
     <>
    <div className={`overflow-x-hidden overflow-hidden fleflex flex-col ml-`}>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
   
    {/* <Weather /> */}
    </>
  );
}
export default App;
