import React from "react";
import Navbar from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import AppRoutes from "./Routes/Routes";

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      
        
      <Footer />
    </div>
  );
}
export default App;
