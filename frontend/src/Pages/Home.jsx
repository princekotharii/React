import React from "react";
import Hero from "../Components/Hero";
import ProductCard from "../Components/ProductCard";
import Buynow from "../Components/Buynow";
import Learnmore from "../Components/Learnmore";



function Home() {
  return (
    <>
    <Hero />   {/* hero image  */}
    <div className={`mx-auto max-w-[1440px] w-full mt-5`}>

    <div >
      {/* 2nd image */}
            <div className=" cursor-pointer relative">
        <img className="hidden sm:block" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_VD_1440X810_PC_.jpg?$1440_N_JPG$" alt="" />
        <img className="sm:hidden" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_VD_720X1120_MO_.jpg?$720_N_JPG$" alt="" />
            <div className=" top-[40%] left-[60px] translateY(-50%) absolute z-10 w-[620px] mt-[-4px]">
                    <h1 className=" text-white font-bold text-[56px] leading-[1.2]">Fab 4K AI upscaling</h1>
                    <p className=" text-white text-[24px] mt-[17px] leading-[1.33]">Grab the Frame TV</p>
                    <div className="flex items-center mt-[23px] gap-6">
                      <Learnmore/> <Buynow name="Buy" />
                    </div>
            </div>
      </div>

      {/* Product Card 1st */}

          <div className="flex   overflow-x-auto scroll-smooth p-[1.66666667vw_0vw_1.66666667vw_0vw] sm:px-0 max-w-full scrollbar-hide ">
                <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card1_560X560.jpg?$560_560_JPG$"
                title={"Neo QLED 8K"} />
                <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card2_560X560.jpg?$560_560_JPG$"
                title={"The Frame"} />
                <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card3_560X560.jpg?$560_560_JPG$"
                title={"Q-series Soundbar"} />
                <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/home/250807/M7.jpg?$560_560_JPG$"
                title={"Smart Monitor M7"} />
          </div>
    </div>     

      
      
      {/* 3rd img */}
      <div className="relative cursor-pointer ">
            <img className=" hidden sm:block w-full" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_MX_1440X810-PC_2.jpg?$1440_N_JPG$" alt="" />
            <img className="sm:hidden" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_MX_720X1120-MO_2.jpg?$720_N_JPG$" alt="" />
              <div className="absolute z-10 top-[35%] left-[60px] translateY(-50%) w-[620px] mt-[-4px] ">
                  <h1 className=" text-white font-bold text-[56px] leading-[1.2]">Fab AI companion</h1>
                  <p className=" text-white mt-[17px] text-[24px] leading[1.33]">
                    <br />
                    <br />
                    Grab Galaxy Z Fold7
                  </p>
                  <div className=" ml-[25px] p-[9px_23px_10px_23px]">
                    <Buynow name="Buy" />
                  </div>
              </div>
      </div>
   
      
      {/* Product Card 2nd */}
      <div className="flex   overflow-x-auto scroll-smooth p-[1.66666667vw_0vw_1.66666667vw_0vw] sm:px-0 max-w-full scrollbar-hide ">
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/Galaxy-Z-Flip7_Home_Feature_Card_560x560.jpg?$560_560_JPG$" title={"Galaxy Z Flip7"} />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/HOME_Feature-Card_Watch8-Classic_560x560.jpg?$560_560_JPG$" title={"Galaxy Watch8 Classic"}/>
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/HOME_Feature-Card_Watch8_560x560.jpg?$560_560_JPG$" 
        title={"Galaxy Watch8"} />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/home/250911/TabS10_Lite_featured_cards_560x560.jpg?$560_560_JPG$" title={"Galaxy Tab S10 Lite"} />
      </div>

       {/* 3rd img */}   

      <div className="relative">
              <img className="w-full h-full sm:block hidden" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_DA_1440X810-PC.jpg?$1440_N_JPG$" alt="" />
              <img className="sm:hidden block" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_DA_720X1120-MO.jpg?$720_N_JPG$" alt="" />
              <div className=" absolute z-10 top-[39%] left-[80px] translateY(-50%) w-[620px] mt-[-4px]">
                    <h1 className=" text-white font-bold text-[56px] leading-[1.2]">Fab one-stop laundry</h1>
                    <p className="text-white  mt-[17px] text-[24px] leading-[1.33]">Grab Bespoke AI Laundry Combo</p>
                    <div className="mt-[23px] flex items-center">
                          <Buynow name="Buy" />
                    </div>
              </div>
      </div>
       {/* Product Card 3rd */}
            <div className="flex   overflow-x-auto scroll-smooth p-[1.66666667vw_0vw_1.66666667vw_0vw] sm:px-0 max-w-full scrollbar-hide ">
            <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/home/250807/1.png?$560_560_PNG$" 
            title={"Bespoke AI Refrigerator"} />
            <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDDA_Feature_Card2_560X560.jpg?$560_560_JPG$" 
            title={"Bespoke AI Laundry"} />
            <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/home/250813/WindFree_Inverter_Split_AC_AR60F19D13W_560X560_Fearture_card.jpg?$560_560_JPG$" 
            title={"Bespoke AI WindFree AC"} />
            <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDDA_Feature_Card4_560X560.jpg?$560_560_JPG$" 
            title={"Microwave Ovens"}/>
            </div>
  </div>


</>

  );
}

export default Home;
