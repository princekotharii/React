import React, {useState, useEffect} from 'react'
import { Link,NavLink, useLocation} from 'react-router-dom'
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { GoSearch } from "react-icons/go";

function MobileBar() {
    const location = useLocation()
    const isLogin = location.pathname==='/login'
    const isCart = location.pathname==='/cart'
    const [menuOpen, setMenuOpen] = useState(false)
    
    // ✅ Stronger body scroll lock
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = '0';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
        }
        
        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
        };
    }, [menuOpen]);
    
    return (
        <>
            <div className='xl:hidden text-2xl items-center flex'>
                <button onClick={()=>setMenuOpen(true)}>
                    <HiMiniBars3 className='h-[24px] w-[24px]'/>
                </button>
            </div>

            {/* Background Overlay - PEHLE RENDER KARO */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-[#36363671] bg-opacity-50 z-[99] touch-none"
                />
            )}

            {/* Normal pages menu */}
            <div className={`fixed top-0 right-0 h-screen w-full sm:max-w-[360px] bg-white z-[100] transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out ${isLogin?'hidden':''} shadow-[-4px_0_20px_rgba(0,0,0,0.1)] overflow-y-auto overscroll-none`}>

                {/* Close Button */}
                <div className="p-4 bg-white sticky top-0 z-10">
                    <div className="flex items-center gap-2">
                        <button type='button' className='flex items-center border border-[rgba(0,0,0,0.1)] p-[9px_12px_10px] gap-[8px] flex-1 rounded-[100px] bg-[#f7f7f7] text-black cursor-pointer relative justify-start'>
                            <GoSearch className='w-[16px] h-[16px]'/>
                            <span className='text-sm ml-2'>Search</span>
                        </button>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl text-black flex-shrink-0"
                        >
                            <RxCross2 className='h-[24px] w-[24px]'/>
                        </button>
                    </div>
                </div>        

                {/* List data */}
                <ul className="flex flex-col gap-4 p-4 text-black font-bold text-2xl bg-white">
                    <li><NavLink to='/shop' onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
                    <li><NavLink to='/mobile' onClick={() => setMenuOpen(false)}>Mobile</NavLink></li>
                    <li><NavLink to='/tv&av' onClick={() => setMenuOpen(false)}>TV & AV</NavLink></li>
                    <li><NavLink to='/appliances' onClick={() => setMenuOpen(false)}>Appliances</NavLink></li>
                    <li><NavLink to='/computing&displays' onClick={() => setMenuOpen(false)}>Computing & Displays</NavLink></li>
                    <li><NavLink to='/accessories' onClick={() => setMenuOpen(false)}>Accessories</NavLink></li>
                </ul>
            </div>

            {/* Login page NavBar */}
            <div className={`fixed top-0 right-0 h-screen w-full sm:max-w-[360px] bg-white z-[100] transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out ${ isLogin || isCart ?'':'hidden'} shadow-[-4px_0_20px_rgba(0,0,0,0.1)] overflow-y-auto overscroll-none`}>

                {/* Close Button */}
                <div className="p-4 bg-white sticky top-0 z-10">
                    <div className="flex items-center gap-2">
                        <button type='button' className='flex items-center border border-[rgba(0,0,0,0.1)] p-[9px_12px_10px] gap-[8px] flex-1 rounded-[100px] bg-[#f7f7f7] text-black cursor-pointer relative justify-start'>
                            <GoSearch className='w-[16px] h-[16px]'/>
                            <span className='text-sm ml-2'>Search</span>
                        </button>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl text-black flex-shrink-0"
                        >
                            <RxCross2 className='h-[24px] w-[24px]'/>
                        </button>
                    </div>
                </div>
                {/* List data */}
                <ul className="bg-white p-4"></ul>
            </div>
        </>
    )
}

export default MobileBar