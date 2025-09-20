import React from "react";
import heroImg from "../assets/heroimage.jpg"; // use your svg/banner here

function Hero() {
  return (
    <section
      className="relative text-white flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center mt-70 mr-300"> 
       

       
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-2 rounded-full font-bold bg-black text-white hover:bg-white hover:text-black transition border">
            Learn more
          </button>
          <button className="px-6 py-2 rounded-full font-bold bg-black text-white hover:bg-white hover:text-black transition border">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
