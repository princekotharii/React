import React from "react";
import Hero from "../Components/Hero";
import ProductCard from "../Components/ProductCard";
import Buynow from "../Components/Buynow";



function Home() {
  return (
    <>
    <Hero />   {/* hero image  */}
    <div className={`mx-auto max-w-[1440px] w-full mt-5`}>
    <div>
      
      
      {/* 2nd img */}
      <div className="relative cursor-pointer ">
            <img className=" hidden sm:block w-full" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_MX_1440X810-PC_2.jpg?$1440_N_JPG$" alt="" />
            <img className="sm:hidden" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_MX_720X1120-MO_2.jpg?$720_N_JPG$" alt="" />
            </div>
    </div>

    <div className="flex  p-[1.6666667vw_0vw] gap-[1.6666666vw] ">
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/Galaxy-Z-Flip7_Home_Feature_Card_560x560.jpg?$560_560_JPG$" />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/HOME_Feature-Card_Watch8-Classic_560x560.jpg?$560_560_JPG$" />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/HOME_Feature-Card_Watch8_560x560.jpg?$560_560_JPG$" />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/home/250911/TabS10_Lite_featured_cards_560x560.jpg?$560_560_JPG$" />
      </div>

      <div className=" cursor-pointer">
        <img className="hidden sm:block" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_VD_1440X810_PC_.jpg?$1440_N_JPG$" alt="" />
        <img className="sm:hidden" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_VD_720X1120_MO_.jpg?$720_N_JPG$" alt="" />
      </div>

      <div className="flex p-[1.6666667vw_0vw] gap-[1.6666666vw] max-w-[1440px] h-[810]  ">
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/Galaxy-Z-Flip7_Home_Feature_Card_560x560.jpg?$560_560_JPG$" />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/HOME_Feature-Card_Watch8-Classic_560x560.jpg?$560_560_JPG$" />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/HOME_Feature-Card_Watch8_560x560.jpg?$560_560_JPG$" />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/home/250911/TabS10_Lite_featured_cards_560x560.jpg?$560_560_JPG$" />
      </div>

      <div className="relative">
        
        <img className="w-full h-full sm:block hidden" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_DA_1440X810-PC.jpg?$1440_N_JPG$" alt="" />
        <img className="sm:hidden block" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_DA_720X1120-MO.jpg?$720_N_JPG$" alt="" />
        <div className="flex items-center justify-center space-x-4 absolute z-10 right-[20%] top-[25%] sm:top-[60%] sm:left-[15%] "><Buynow name="Buy" /></div>
        
      
        
      </div>
      <div className="flex  p-[1.6666667vw_0vw] gap-[1.6666666vw] ">
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/Galaxy-Z-Flip7_Home_Feature_Card_560x560.jpg?$560_560_JPG$" />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/HOME_Feature-Card_Watch8-Classic_560x560.jpg?$560_560_JPG$" />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/HOME_Feature-Card_Watch8_560x560.jpg?$560_560_JPG$" />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/home/250911/TabS10_Lite_featured_cards_560x560.jpg?$560_560_JPG$" />
      </div>
      </div>

   
</>

  );
}

export default Home;
