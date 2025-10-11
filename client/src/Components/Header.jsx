import React, { useState } from 'react';
import { HiMiniBars3 } from "react-icons/hi2";
import { FiSearch, FiUser, FiShoppingCart, FiTrendingUp } from "react-icons/fi";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

function Header() {
    const location = useLocation();
    const isNavPage = location.pathname === '/';
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full absolute top-0 z-20">
            {/* Bar */}
            <div className={`hidden md:flex justify-end text-sm px-[2vw] py-[0.5vw] 
                ${isNavPage ? "bg-transparent text-white" : "bg-white text-black"}`}>
                <NavLink to="/support" className="mr-[1.5vw]">Support</NavLink>
                <NavLink to="/business" className="flex items-center gap-1">
                    For Business <FiTrendingUp />
                </NavLink>
            </div>

            {/*  Nav */}
            <nav className={`flex items-center justify-between px-[2vw] py-[1vw] 
                ${isNavPage ? "bg-transparent text-white" : "bg-white text-black shadow"}`}>

                {/* Logo */}
                <Link to={'/'}>
                <svg className='' class="icon" focusable="false" aria-hidden="true" width="130" fill='currentColor' height="29" viewBox="0 0 130 29" data-di-res-id="7242691b-1854f892" data-di-rand="1758191581070">
                    <g transform="translate(-250 -7)">
                        <path d="M0,13.835V12.482H4.609V14.2a1.558,1.558,0,0,0,1.724,1.6A1.509,1.509,0,0,0,8,14.6a2.237,2.237,0,0,0-.03-1.322C7.076,10.976.981,9.931.208,6.333a6.531,6.531,0,0,1-.029-2.4C.654,1.045,3.122,0,6.184,0c2.438,0,5.8.585,5.8,4.458V5.719H7.7V4.612a1.492,1.492,0,0,0-1.605-1.6,1.452,1.452,0,0,0-1.575,1.2,2.468,2.468,0,0,0,.03.922c.5,2.059,7.017,3.167,7.73,6.887a8.481,8.481,0,0,1,.029,2.921C11.892,17.893,9.336,19,6.244,19,3,19,0,17.8,0,13.835Zm55.837-.062V12.421h4.549v1.691a1.533,1.533,0,0,0,1.695,1.6,1.49,1.49,0,0,0,1.665-1.168,2.147,2.147,0,0,0-.029-1.292c-.863-2.274-6.9-3.319-7.671-6.917a6.37,6.37,0,0,1-.03-2.367c.476-2.859,2.944-3.9,5.946-3.9,2.409,0,5.739.615,5.739,4.427v1.23H63.449V4.643a1.485,1.485,0,0,0-1.575-1.6,1.4,1.4,0,0,0-1.546,1.168,2.463,2.463,0,0,0,.029.922C60.832,7.194,67.284,8.27,68,11.959a8.314,8.314,0,0,1,.029,2.89c-.416,2.952-2.943,4.028-6.005,4.028C58.811,18.877,55.837,17.678,55.837,13.773Zm16.293.647A7.18,7.18,0,0,1,72.1,13.25V.523h4.341V13.65a5.023,5.023,0,0,0,.029.677,1.682,1.682,0,0,0,3.271,0,4.852,4.852,0,0,0,.03-.677V.523h4.341V13.25c0,.339-.03.984-.03,1.169-.3,3.319-2.825,4.4-5.976,4.4S72.428,17.739,72.13,14.419Zm35.739-.185a9.539,9.539,0,0,1-.059-1.168V5.6c0-.308.029-.861.059-1.169.386-3.319,2.973-4.365,6.036-4.365,3.033,0,5.708,1.045,6.006,4.365A8.781,8.781,0,0,1,119.94,5.6v.584H115.6V5.2a3.791,3.791,0,0,0-.059-.677,1.777,1.777,0,0,0-3.42,0,3.772,3.772,0,0,0-.059.829v8.117a5.1,5.1,0,0,0,.03.677,1.707,1.707,0,0,0,1.813,1.291,1.633,1.633,0,0,0,1.754-1.291,2.554,2.554,0,0,0,.03-.677V10.883h-1.754V8.3H120v4.765a9.377,9.377,0,0,1-.06,1.168c-.3,3.228-3,4.366-6.036,4.366S108.166,17.462,107.869,14.235Zm-60.5,4.027L47.245,1.845,44.272,18.262H39.931L36.987,1.845l-.118,16.417H32.587L32.943.554h6.988L42.1,14.388,44.272.554h6.987l.386,17.708Zm-22.835,0L22.211,1.845,19.831,18.262H15.194L18.344.554h7.642l3.152,17.708Zm72.665-.184L92.884,3.352l.238,14.726H88.9V.554h6.363l4.044,14.265L99.068.554h4.251V18.078Z" transform="translate(255 12)"></path>
                    </g>
                </svg>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden xl:flex gap-[2vw] font-medium">
                    <li><NavLink to='/shop'>Shop</NavLink></li>
                    <li><NavLink to='/mobile'>Mobile</NavLink></li>
                    <li><NavLink to='/tv&av'>TV & AV</NavLink></li>
                    <li><NavLink to='/appliances'>Appliances</NavLink></li>
                    <li><NavLink to='/computing&displays'>Computing & Displays</NavLink></li>
                    <li><NavLink to='/accessories'>Accessories</NavLink></li>
                </ul>

                {/* Icons */}
                <div className="flex items-center gap-[1vw]">

                    {/* Search bar */}
            <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-1.5 rounded-full text-white focus:outline-dotted focus:outline-2 focus:outline-black  border-white border-2 "
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white cursor-pointer" />
          </div>
                    <button className="p-2 text-xl"><FiShoppingCart /></button>
                    <button className="p-2 text-xl"><FiUser /></button>

                    {/* Mobile Menu Section*/}
                    <div className="xl:hidden text-2xl">
                        <button onClick={() => setMenuOpen(true)}>
                            <HiMiniBars3 />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Side Menu */}
            <div className={`fixed top-0 right-0 h-full w-[70vw] bg-white shadow-lg z-30 
                transform ${menuOpen ? "translate-x-0" : "translate-x-full"} 
                transition-transform duration-300 ease-in-out`}>

                {/* Close Button */}
                <div className="p-4">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-1 px-4 py-2 border rounded-full shadow-md"
                        />
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Menu Links */}
                <ul className="flex flex-col gap-4 p-4 font-medium">
                    <li><NavLink to='/shop' onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
                    <li><NavLink to='/mobile' onClick={() => setMenuOpen(false)}>Mobile</NavLink></li>
                    <li><NavLink to='/tv&av' onClick={() => setMenuOpen(false)}>TV & AV</NavLink></li>
                    <li><NavLink to='/appliances' onClick={() => setMenuOpen(false)}>Appliances</NavLink></li>
                    <li><NavLink to='/computing&displays' onClick={() => setMenuOpen(false)}>Computing & Displays</NavLink></li>
                    <li><NavLink to='/accessories' onClick={() => setMenuOpen(false)}>Accessories</NavLink></li>
                </ul>
            </div>

            {/* Background Overlay */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-gray-500/10  z-0"
                />
            )}
        </header>
    );
}

export default Header;
