import React,{useContext, useState, useEffect} from 'react';
import { Link,Navigate,NavLink, useLocation, useNavigate } from 'react-router-dom'
import MobileBar from './MobileBar';
import { FaRegUser } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import {FiTrendingUp} from "react-icons/fi"
import UserContext from '../contexts/UserContext';

function Header() {

    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation();
    const isNavPage = location.pathname === '/';
    const [isListHovered, setIsListHovered] = useState(false);

    const [isScrolledUp, setIsScrolledUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    // useEffect:
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Track if at top
            setIsAtTop(currentScrollY === 0);
            
            // When at top, reset state
            if (currentScrollY === 0) {
                setIsScrolledUp(false);
            } else if (currentScrollY < lastScrollY) {
                setIsScrolledUp(true); // scrolling up
            } else {
                setIsScrolledUp(false); // scrolling down
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const getNavClasses = () => {
        if (!isNavPage) return 'bg-white text-black';
        
        if (isScrolledUp || isListHovered) {
            return 'bg-white text-black z-50 fixed';
        }
        
        return 'bg-transparent text-white z-50 absolute';
};

    return (
        <nav className={` mx-1 h-[64px] xl:h-[7.3655vw] flex gap-[2.22222222vw] items-center w-full top-0 p-[0_8px_0_8px] xl:p-[2.2222vw_1.1111vw_0vw_1.1111vw] transform transition-all duration-300 ease-in-out ${isNavPage ? (isAtTop || isScrolledUp || isListHovered) ? 'translate-y-0' : '-translate-y-full' : 'translate-y-0'} ${getNavClasses()}`}>
             {/* Bar */}
            <div className={`hidden xl:flex justify-end  z-50 absolute right-[50%] top-[.69444444vw] -mr-[49.02777778vw] font-bold leading-[1.33] gsp-[.13888889vw] text-[.97222222vw]`}>
                <NavLink to="" className="p-[.27777778vw_.69444444vw] text-[.97222222vw]">Support</NavLink>
                <NavLink to="" className="p-[.27777778vw_.69444444vw] flex items-center gap-1">
                    For Business <FiTrendingUp />
                </NavLink>
            </div>
            <div className='cursor-pointer'>
                <Link to={'/'}>
                <svg className='w-[106px] xl:w-[130px] xl:h-[29px]' class="icon" focusable="false" aria-hidden="true" width="130" fill='currentColor' height="29" viewBox="0 0 130 29" data-di-res-id="7242691b-1854f892" data-di-rand="1758191581070">
                    <g transform="translate(-250 -7)">
                        <path d="M0,13.835V12.482H4.609V14.2a1.558,1.558,0,0,0,1.724,1.6A1.509,1.509,0,0,0,8,14.6a2.237,2.237,0,0,0-.03-1.322C7.076,10.976.981,9.931.208,6.333a6.531,6.531,0,0,1-.029-2.4C.654,1.045,3.122,0,6.184,0c2.438,0,5.8.585,5.8,4.458V5.719H7.7V4.612a1.492,1.492,0,0,0-1.605-1.6,1.452,1.452,0,0,0-1.575,1.2,2.468,2.468,0,0,0,.03.922c.5,2.059,7.017,3.167,7.73,6.887a8.481,8.481,0,0,1,.029,2.921C11.892,17.893,9.336,19,6.244,19,3,19,0,17.8,0,13.835Zm55.837-.062V12.421h4.549v1.691a1.533,1.533,0,0,0,1.695,1.6,1.49,1.49,0,0,0,1.665-1.168,2.147,2.147,0,0,0-.029-1.292c-.863-2.274-6.9-3.319-7.671-6.917a6.37,6.37,0,0,1-.03-2.367c.476-2.859,2.944-3.9,5.946-3.9,2.409,0,5.739.615,5.739,4.427v1.23H63.449V4.643a1.485,1.485,0,0,0-1.575-1.6,1.4,1.4,0,0,0-1.546,1.168,2.463,2.463,0,0,0,.029.922C60.832,7.194,67.284,8.27,68,11.959a8.314,8.314,0,0,1,.029,2.89c-.416,2.952-2.943,4.028-6.005,4.028C58.811,18.877,55.837,17.678,55.837,13.773Zm16.293.647A7.18,7.18,0,0,1,72.1,13.25V.523h4.341V13.65a5.023,5.023,0,0,0,.029.677,1.682,1.682,0,0,0,3.271,0,4.852,4.852,0,0,0,.03-.677V.523h4.341V13.25c0,.339-.03.984-.03,1.169-.3,3.319-2.825,4.4-5.976,4.4S72.428,17.739,72.13,14.419Zm35.739-.185a9.539,9.539,0,0,1-.059-1.168V5.6c0-.308.029-.861.059-1.169.386-3.319,2.973-4.365,6.036-4.365,3.033,0,5.708,1.045,6.006,4.365A8.781,8.781,0,0,1,119.94,5.6v.584H115.6V5.2a3.791,3.791,0,0,0-.059-.677,1.777,1.777,0,0,0-3.42,0,3.772,3.772,0,0,0-.059.829v8.117a5.1,5.1,0,0,0,.03.677,1.707,1.707,0,0,0,1.813,1.291,1.633,1.633,0,0,0,1.754-1.291,2.554,2.554,0,0,0,.03-.677V10.883h-1.754V8.3H120v4.765a9.377,9.377,0,0,1-.06,1.168c-.3,3.228-3,4.366-6.036,4.366S108.166,17.462,107.869,14.235Zm-60.5,4.027L47.245,1.845,44.272,18.262H39.931L36.987,1.845l-.118,16.417H32.587L32.943.554h6.988L42.1,14.388,44.272.554h6.987l.386,17.708Zm-22.835,0L22.211,1.845,19.831,18.262H15.194L18.344.554h7.642l3.152,17.708Zm72.665-.184L92.884,3.352l.238,14.726H88.9V.554h6.363l4.044,14.265L99.068.554h4.251V18.078Z" transform="translate(255 12)"></path>
                    </g>
                </svg>
                </Link>
            </div>

            <div className='h-full items-center gap-[4px] xl:gap-0 flex justify-end w-full xl:justify-between relative'>
                <div className='h-full items-center hidden xl:flex flex-1'>
                    <ul className='list-none flex text-[1.11111111vw] font-bold' onMouseEnter={()=> setIsListHovered(true)} onMouseLeave={() => setIsListHovered(false)}>
                        <li className='list-item '>
                            <div className=''>
                                <NavLink className='p-[.83333vw_.83333vw_1.1111vw_.83333vw] ' to='/shop'>Shop</NavLink>
                            </div>
                        </li>
                        <li className='h-[4,822vw list-item] '>
                            <div className=''>
                                <NavLink className='p-[.83333vw_.83333vw_1.1111vw_.83333vw] ' to='/mobile'>Mobile</NavLink>
                            </div>
                        </li>
                        <li className='h-[4,822vw list-item] '>
                            <div className=''>
                                <NavLink className='p-[.83333vw_.83333vw_1.1111vw_.83333vw] ' to='av&tv'>AV & TV</NavLink>
                            </div>
                        </li>
                        <li className='h-[4,822vw list-item] '>
                            <div className=''>
                                <NavLink className='p-[.83333vw_.83333vw_1.1111vw_.83333vw] ' to='appliances'>Appliances</NavLink>
                            </div>
                        </li>
                        <li className='h-[4,822vw list-item] '>
                            <div className=''>
                                <NavLink className='p-[.83333vw_.83333vw_1.1111vw_.83333vw] ' to='computing&displays'>Computing & Displays</NavLink>
                            </div>
                        </li>
                        <li className='h-[4,822vw list-item] '>
                            <div className=''>
                                <NavLink className='p-[.83333vw_.83333vw_1.1111vw_.83333vw] ' to='accessories'>Accessories</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
                
                {/* Search Bar */}
                <button type='button' className={`flex items-center xl:border xl:border-[rgba(255,255,255,0.2)] p-[8px] xl:p-[.69444444vw_.83333333vw] xl:mr-[.69444444vw] gap-[.55555556vw] xl:w-[12.22222222vw] xl:rounded-[6.94444444vw] transform transition-all duration-300 ease-in-out ${isNavPage ? isListHovered || isScrolledUp ? "xl:bg-[#f7f7f7] text-black" : "xl:bg-[rgba(255,255,255,0.1)] text-white" : "xl:bg-[#f7f7f7] text-black"} cursor-pointer relative justify-start`}>
                    <span className='hidden xl:block order-2 absolute!important '>Search</span>
                    <GoSearch className='w-[24px] xl:w-[1.1111111vw] h-[24px] xl:h-[1.1111111vw]'/>
                </button>
                
                {/* Cart */}
                <Link to='/cart' className='p-[8px] xl:p-[.625vw]'>
                    <BsCart2 className='h-[24px] xl:h-[1.66666667vw] w-[24px] xl:w-[1.66666667vw]'/>
                </Link>

                {/* User for pc*/}
                <button className='user-menu group hidden xl:block p-[8px] xl:p-[.625vw] text-0 items-center cursor-pointer relative'>
                    {/* <FaRegUser className='hiddden xl:block h-[24px] xl:h-[1.66666667vw] w-[24px] xl:w-[1.66666667vw]'/> */}
                    <svg className='hiddden xl:block h-[24px] xl:h-[1.66666667vw] w-[24px]' fill='currentColor' class="icon" focusable="false" aria-hidden="true" width="24" height="24" viewBox="0 0 96 96" data-di-res-id="9dace16f-94f67383" data-di-rand="1761831152491">
                        <path d="M48,51.5c16.521,0,30.5,13.82,30.5,29.555h0V89A3.5,3.5,0,0,1,75,92.5H21A3.5,3.5,0,0,1,17.5,89h0V81.055C17.5,65.32,31.479,51.5,48,51.5Zm0,5c-13.772,0-25.5,11.595-25.5,24.555h0V87.5h51V81.055c0-12.831-11.494-24.323-25.087-24.552h0Zm0-53A20.5,20.5,0,1,1,27.5,24,20.5,20.5,0,0,1,48,3.5Zm0,5A15.5,15.5,0,1,0,63.5,24,15.5,15.5,0,0,0,48,8.5Z" transform="translate(-0.5 0.5)"></path>
                    </svg>
                    <div className='utility-menu z-50 bg-white text-black absolute flex invisible xl:group-hover:visible right-[.44444445vw] shadow-[0_4px_10px_0_rgba(0,0,0,.2)] mt-[1.04166667vw] p-[1.66666667vw] rounded-[1.38888889vw] w-[18.33333333vw] flex-col text-start transform transition-all duration-200 ease-in-out'>
                        <Link to={user ? '/profile' : '/login'} className={`font-bold p-[.69444444vw_1.11111111vw_.83333333vw_1.11111111vw] text-[.97222222vw] leading-[1.33] ${user ? 'text-blue-500' : 'text-black'}`}>{ user?.FullName || "Login-In/Sign-Up"}</Link>
                        <Link className='p-[.69444444vw_1.11111111vw_.83333333vw_1.11111111vw] text-[.97222222vw] leading-[1.33]'>Order</Link>
                        <Link className='p-[.69444444vw_1.11111111vw_.83333333vw_1.11111111vw] text-[.97222222vw] leading-[1.33]'>Product Registrarion</Link>
                        <Link className='p-[.69444444vw_1.11111111vw_.83333333vw_1.11111111vw] text-[.97222222vw] leading-[1.33]'>Digital Service Center</Link>
                    </div>
                </button>
                {/* User for mobile/tablate */}
                <button onClick={user? ()=> navigate('./profile') : ()=> navigate('/login')} className='group xl:hidden p-[8px] xl:p-[.625vw] text-0 items-center cursor-pointer'>
                    {/* <FaRegUser className='h-[24px] xl:hidden xl:h-[1.66666667vw] w-[24px] xl:w-[1.66666667vw]'/> */}
                    <svg className='h-[24px] xl:hidden xl:h-[1.66666667vw] w-[24px] xl:w-[1.66666667vw]' fill='currentColor' class="icon" focusable="false" aria-hidden="true" width="24" height="24" viewBox="0 0 96 96" data-di-res-id="9dace16f-94f67383" data-di-rand="1761831152491">
                        <path d="M48,51.5c16.521,0,30.5,13.82,30.5,29.555h0V89A3.5,3.5,0,0,1,75,92.5H21A3.5,3.5,0,0,1,17.5,89h0V81.055C17.5,65.32,31.479,51.5,48,51.5Zm0,5c-13.772,0-25.5,11.595-25.5,24.555h0V87.5h51V81.055c0-12.831-11.494-24.323-25.087-24.552h0Zm0-53A20.5,20.5,0,1,1,27.5,24,20.5,20.5,0,0,1,48,3.5Zm0,5A15.5,15.5,0,1,0,63.5,24,15.5,15.5,0,0,0,48,8.5Z" transform="translate(-0.5 0.5)"></path>
                    </svg>
                </button>

                {/* Mobile Bar */}
                <div className='relative'>
                    <MobileBar />
                </div>
                
            </div>
        </nav>
    )
}

export default Header