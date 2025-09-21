import React from "react";
import heroImg from "../assets/heroimage.jpg"; // use your svg/banner here

function Hero() {
  return (
    <>
    <div className="relative cursor-pointer">
      <img className="h-full w-full" src={heroImg} alt="" />
          <div className="flex justify-center space-x-4 absolute z-10 -translate-y-105 translate-x-65 ">

          <button className="cursor-pointer relative text-white font-semibold after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:left-0 after:bottom-1.5 after:transition-all after:duration-300 hover:after:w-full underline underline-offset-8 hover:no-underline">
            Learn more
          </button>
          <button className="cursor-pointer px-6 py-2 rounded-full font-bold bg-black text-white hover:bg-white hover:text-black transition border">
            Buy
          </button>

        </div>
    </div>
    
    </>
   
  );
}

export default Hero;
