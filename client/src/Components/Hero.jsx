import React, { useEffect, useState } from "react";
import Learnmore from "./Learnmore";
import Buynow from "./Buynow";

function Hero() {
  const [width, setWidth] = useState("100%");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const minWidth = 1440; // smallest width when scrolled
      const maxWidth = window.innerWidth; // full screen at top

      // Calculate width reduction based on scroll distance
      const shrinkSpeed = 0.8; // adjust how fast it shrinks
      const newWidth = Math.max(maxWidth - scrollY * shrinkSpeed, minWidth);

      setWidth(`${newWidth}px`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative cursor-pointer flex justify-center overflow-hidden">
      {/* Desktop Image */}
      <img
        src='https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/25_bf_hero-kv_preview_pc_1920x1080_text_.jpg?$1920_N_JPG$?imwidth=1366'
        alt="hero"
        className="hidden sm:block transition-all duration-300 ease-out"
        style={{
          width: width,
          maxWidth: "100%",
        }}
      />

      {/* Mobile Image */}
      <img
        className="sm:hidden w-full transition-all duration-300 ease-out"
        src="https://images.samsung.com/is/image/samsung/assets/in/home/09-2025/HOME_TS11_Hero-KV_720x1248_mo.jpg?$720_N_JPG$?imwidth=720"
        alt="mobile hero"
      />

      {/* Buttons */}
      <div className="flex items-center justify-center space-x-4 absolute z-10 left-[40%] top-[25%] sm:top-[60%] sm:left-[15%]">
        <Learnmore />
        <Buynow name="Buy" />
      </div>
    </div>
  );
}

export default Hero;
