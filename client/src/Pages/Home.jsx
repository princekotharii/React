import React from "react";
import Hero from "../Components/Hero";
import Galaxy from "../assets/samsung2.webp";
import ProductCard from "../Components/ProductCard";

function Home() {
  return (
    <>
    <div>
      <Hero />
      <div className="relative cursor-pointer">
            <img className="h-full w-full" src={Galaxy} alt="" />
            </div>
    </div>

    <ProductCard name="tata" details="byebye" price={45}/>
    <ProductCard name="kuchbhi" details="abhinav"/>
</>

  );
}

export default Home;
