import React, {useState} from 'react'
import { Link,NavLink, useLocation} from 'react-router-dom'
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { GoSearch } from "react-icons/go";

function MobileBar() {
    const location = useLocation()
    const isLogin = location.pathname==='/login'
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <div className='xl:hidden text-2xl items-center flex'>
                <button onClick={()=>setMenuOpen(true)}>
                    <HiMiniBars3 className='h-[24px] w-[24px]'/>
                </button>
            </div>
            <div  className={`fixed top-0 right-0 h-full w-full sm:max-w-[360px] bg-white z-10 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out ${isLogin?'hidden':''}`}>

                {/* Close Button */}
                <div className="p-4">
                    <div className="flex items-center gap-2">
                        <button type='button' className={`flex items-center border border-[rgba(255,255,255,0.2)] p-[9px_12px_10px] gap-[8px] w-[87.804878%] rounded-[100px] bg-[#f7f7f7] text-black cursor-pointer relative justify-start`}>
                            <span className='order-2 absolute!important '>Search</span>
                            <GoSearch className='w-[16px] h-[16px] '/>
                        </button>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl text-black"
                        >
                            <RxCross2 className='h-[24px] w-[24px]'/>
                        </button>
                    </div>
                </div>        

                {/* List data */}
                <ul className="flex flex-col gap-4 p-4 text-black font-bold text-2xl">
                    <li><NavLink to='/shop' onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
                    <li><NavLink to='/mobile' onClick={() => setMenuOpen(false)}>Mobile</NavLink></li>
                    <li><NavLink to='/tv&av' onClick={() => setMenuOpen(false)}>TV & AV</NavLink></li>
                    <li><NavLink to='/appliances' onClick={() => setMenuOpen(false)}>Appliances</NavLink></li>
                    <li><NavLink to='/computing&displays' onClick={() => setMenuOpen(false)}>Computing & Displays</NavLink></li>
                    <li><NavLink to='/accessories' onClick={() => setMenuOpen(false)}>Accessories</NavLink></li>
                </ul>
            </div>

            {/* Login page NavBar */}
            <div className={`fixed top-0 right-0 h-full w-full sm:max-w-[360px] bg-white z-10 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out ${isLogin?'':'hidden'}`}>

                {/* Close Button */}
                <div className="p-4">
                    <div className="flex items-center gap-2">
                        <button type='button' className={`flex items-center border border-[rgba(255,255,255,0.2)] p-[9px_12px_10px] gap-[8px] w-[87.804878%] rounded-[100px] bg-[#f7f7f7] text-black cursor-pointer relative justify-start`}>
                            <span className='order-2 absolute!important '>Search</span>
                            <GoSearch className='w-[16px] h-[16px] '/>
                        </button>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl text-black"
                        >
                            <RxCross2 className='h-[24px] w-[24px]'/>
                        </button>
                    </div>
                </div>
                {/* List data */}
                <ul></ul>
            </div>

             {/* Background Overlay */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-opacity-50 z-0"
                />
            )}
        </>
    )
}

export default MobileBar