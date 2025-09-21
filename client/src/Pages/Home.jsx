import React from "react";
import Hero from "../Components/Hero";
import Galaxy from "../assets/samsung2.webp";

function Home() {
  return (
    <div>
      <Hero />
      <div className="relative cursor-pointer">
            <img className="h-full w-full" src={Galaxy} alt="" />
            </div>
    </div>
  );
}

export default Home;
