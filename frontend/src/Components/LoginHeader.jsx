import React, { useContext } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import MobileBar from "./MobileBar";
import { FaRegUser } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import UserContext from "../contexts/UserContext";

function LoginHeader() {
    const {user} = useContext(UserContext);

    return (
        <div className="mx-1 h-[64px] xl:h-[80px] flex gap-[2.22222222vw] items-center w-full top-0  bg-white text-black p-[0_1.11111111vw]">
            <div className="cursor-pointer w-[120px] mr-[4.44444444vw] h-full items-center flex">
                <Link to={"/"} className="w-[120px] h-auto">
                    <img
                        src="https://www.samsung.com/in/web/dist/img/gnb-mobile-240x64.103c8c2.png"
                        className="h-[31.8px] w-[120px]"
                    ></img>
                </Link>
            </div>

            <div className="h-full items-center flex justify-end w-full relative">
                {/* Cart */}
                <Link className="h-full w-[40px] items-center flex">
                    <BsCart2 className="h-[24px] xl:h-[1.66666667vw] w-[24px] xl:w-[1.66666667vw]" />
                </Link>

                {/* User */}
                <button className="group h-full w-[40px] text-0 items-center cursor-pointer">
                    <FaRegUser className="h-[24px] opacity-[0.5] xl:h-[1.66666667vw] w-[24px] xl:w-[1.66666667vw]" />

                    <ul className="z-10 bg-white text-black absolute hidden xl:group-hover:block top-[4.44444444vw] right-[.55555556vw] shadow-[0_4px_10px_0_rgba(0,0,0,.2)] rounded-[1.38888889vw] p-[1.66666667vw_0] transition-all duration-200 ease-in-out">
                        <li className="">
                            <Link to={user?'/profile':'/login'} className="p-[0_1.11111111vw] w-[15vw] text-[.97222222vw] inline-flex items-center justify-start font-[600] leading-[2.77777778vw]">
                                {user?.FullName || "Log-In/Sign-Up"}
                            </Link>
                        </li>
                        <li className="">
                            <Link className="p-[0_1.11111111vw] w-[15vw] text-[.97222222vw] inline-flex items-center justify-start font-[600] leading-[2.77777778vw]">
                                Order
                            </Link>
                        </li>
                        <li className="">
                            <Link className="p-[0_1.11111111vw] w-[15vw] text-[.97222222vw] inline-flex items-center justify-start font-[600] leading-[2.77777778vw]">
                                Product Registrarion
                            </Link>
                        </li>
                        <li className="">
                            <Link className="p-[0_1.11111111vw] w-[15vw] text-[.97222222vw] inline-flex items-center justify-start font-[600] leading-[2.77777778vw]">
                                Digital Service Center
                            </Link>
                        </li>
                    </ul>
                </button>

                {/* Mobile Bar */}
                <MobileBar />
            </div>
        </div>
  );
}

export default LoginHeader;