import React from "react";
import heroImg from "../assets/heroimage.jpg"; // use your svg/banner here
import Learnmore from "./Learnmore";
import Buynow from "./Buynow";

function Hero() {
  return (
    <>
    <div className="relative cursor-pointer">
      <img className="h-full w-full hidden sm:block" src={heroImg} alt="" />
      <img className="sm:hidden" src="https://images.samsung.com/is/image/samsung/assets/in/home/09-2025/HOME_TS11_Hero-KV_720x1248_mo.jpg?$720_N_JPG$?imwidth=720" alt="" />
    
      <div className="flex items-center justify-center space-x-4 absolute z-10 left-[40%] top-[25%] sm:top-[60%] sm:left-[15%] ">
        <Learnmore />
        <Buynow  name= 'Buy' />
      </div>
    </div>
    
    </>
   
  );
}

export default Hero;
