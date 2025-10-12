import React, {useState} from 'react'
import { NavLink,Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  const [open, setOpen] = useState(null)

  return (
    <div className='sm:text-[.83333333vw]'>
      <div className='!bg-[#f7f7f7] p-[4.44444444vw] leading-[1.33] sm:p-[1.66666667vw]'>
        <p className='wrap-anywhere mb-[1.11111111vw] text-[2.77777778vw] sm:text-[.83333333vw]'>*Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location.</p>
        <p className='wrap-anywhere mb-[1.11111111vw] text-[2.77777778vw] sm:text-[.83333333vw]'>*Image simulated. Samsung account login may be required for certain AI features.</p>
        <p className='wrap-anywhere mb-[1.11111111vw] text-[2.77777778vw] sm:text-[.83333333vw]'>*Image simulated. Actual UX/UI may differ. Availability of colours, sizes, models, and watch bands may vary by country or carrier. Products sold separately. Running coach    program is available on Android phones (Android 10 or above) and requires Samsung Health app (v6.30.2 or above). Samsung account login required. Service only available with Galaxy Watch8 Series or later released Galaxy Watch Series. To use running coach program, user needs to take a running level test and get a level before starting the coach program.</p>
      </div>

      <div className='wrap-anywhere leading-[1.15] border-b border-[#ccc]'>
        <div className='sm:flex border-t-[1px] border-[#ccc]'>
          <p className='hidden'>Footer Nevigation</p>
          <div className='auto w-full sm:w-[20%] sm:border-r border-[#d9d9d9] pb-[2.22222222vw] relative'>
            <p className='font-[700] block text-[4.44444444vw] sm:text-[1.25vw] p-[4.72222222vw_6.66666667vw] sm:p-[1.11111111vw_1.66666667vw]'>Shop</p>
            <NavLink onClick={()=> setOpen(open===0 ? null:0)} className='sm:hidden absolute h-[15.55555556vw] w-full top-0 left-0'>{open===0 ? (<SlArrowDown className='absolute w-[6.66666667vw]         h-[6.66666667vw] right-[6.38888889vw] top-[50%] -translate-y-[50%]'/>) : (<SlArrowUp className='absolute w-[6.66666667vw] h-[6.66666667vw] right-[6.38888889vw] top-[50%] -translate-y-[50%]'/>)}</NavLink>
            <ul className={`sm:block transform ${open===0 ? 'block' : 'hidden'} transition-transform duration-700 ease-in-out`}>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Shop Home</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Buy Direct Get More</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>SmartThnings</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Live Shop</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Samsung Care+</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Disvover AI</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Back to school</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Samsung BKC</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Samsung Experience Store</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>For Corporate Employees</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Explore</NavLink></li>
            </ul>
          </div>
          <div className='auto w-full sm:w-[20%] sm:border-r border-[#d9d9d9] pb-[2.22222222vw] relative'>
            <p className='font-[700] block text-[4.44444444vw] sm:text-[1.25vw] p-[4.72222222vw_6.66666667vw] sm:p-[1.11111111vw_1.66666667vw]'>Product</p>
            <NavLink onClick={()=> setOpen(open===1 ? null:1)} className='sm:hidden absolute h-[15.55555556vw] w-full top-0 left-0'>{open===1 ? (<SlArrowDown className='absolute w-[6.66666667vw] h-[6.66666667vw] right-[6.38888889vw] top-[50%] -translate-y-[50%]'/>) : (<SlArrowUp className='absolute w-[6.66666667vw] h-[6.66666667vw] right-[6.38888889vw] top-[50%] -translate-y-[50%]'/>)}</NavLink>
            <ul className={`sm:block transform ${open===1 ? 'block' : 'hidden'} transition-transform duration-700 ease-in-out`}>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Galaxy Smartphones</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Galaxy Tab</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Galaxy Book (Laptops)</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Galaxy Watch</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Galaxy Buds</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>TVs</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Projects</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Sound Devices</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Refrigarators</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Dishwashers</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Washing Machines</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Vacuum Cleaners</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Monitors</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Memory & Storage</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Accessories</NavLink></li>
            </ul>
          </div>
          <div className='auto w-full sm:w-[20%] sm:border-r border-[#d9d9d9] pb-[2.22222222vw] relative'>
            <p className='font-[700] block text-[4.44444444vw] sm:text-[1.25vw] p-[4.72222222vw_6.66666667vw] sm:p-[1.11111111vw_1.66666667vw]'>Support</p>
            <NavLink onClick={()=> setOpen(open===2 ? null:2)} className='sm:hidden absolute h-[15.55555556vw] w-full top-0 left-0'>{open===2 ? (<SlArrowDown className='absolute w-[6.66666667vw] h-[6.66666667vw] right-[6.38888889vw] top-[50%] -translate-y-[50%]'/>) : (<SlArrowUp className='absolute w-[6.66666667vw] h-[6.66666667vw] right-[6.38888889vw] top-[50%] -translate-y-[50%]'/>)}</NavLink>
            <ul className={`sm:block transform ${open===2 ? 'block' : 'hidden'} transition-transform duration-700 ease-in-out`}>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Support Home</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Manual & Software</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Search Support</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Self-Repair</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Warranty Infomation</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Service Center</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Track Repair</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Book a Repair</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Out of Warranty Repair Charges</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Spare Part Cost</NavLink></li>
              <li><NavLink className='flex cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>WhatsApp <GoArrowUpRight className='align-middle ml-[.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/> </NavLink></li>
              <li><NavLink className='flex cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Digital Services Center <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/> </NavLink></li>
              <li><NavLink className='flex cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Chat <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/> </NavLink></li>
              <li><NavLink className='flex cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Email the CEO</NavLink></li>
              <li><NavLink className='flex cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Share Your Opinion</NavLink></li>
            </ul>
          </div>
          <div className='auto w-full sm:w-[20%] sm:border-r border-[#d9d9d9] pb-[2.22222222vw] relative'>
            <p className='font-[700] block text-[4.44444444vw] sm:text-[1.25vw] p-[4.72222222vw_6.66666667vw] sm:p-[1.11111111vw_1.66666667vw]'>Account</p>
            <NavLink onClick={()=> setOpen(open===3 ? null:3)} className='sm:hidden absolute h-[15.55555556vw] w-full top-0 left-0'>{open===3 ? (<SlArrowDown className='absolute w-[6.66666667vw] h-[6.66666667vw] right-[6.38888889vw] top-[50%] -translate-y-[50%]'/>) : (<SlArrowUp className='absolute w-[6.66666667vw] h-[6.66666667vw] right-[6.38888889vw] top-[50%] -translate-y-[50%]'/>)}</NavLink>
            <ul className={`sm:block transform ${open===3 ? 'block' : 'hidden'} transition-transform duration-700 ease-in-out`}>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Why Samsung Account</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Orders</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>My Page</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Product Registration</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Vouchers</NavLink></li>
            </ul>
          </div>
          <div className='auto w-full sm:w-[20%] pb-[2.22222222vw]'>
            <div className='relative'>
              <p className='font-[700] block text-[4.44444444vw] sm:text-[1.25vw] p-[4.72222222vw_6.66666667vw] sm:p-[1.11111111vw_1.66666667vw]'>Sustainability</p>
              <NavLink onClick={()=> setOpen(open===4 ? null:4)} className='sm:hidden absolute h-[15.55555556vw] w-full top-0 left-0'>{open===4 ? (<SlArrowDown className='absolute w-[6.66666667vw] h-[6.66666667vw] right-[6.38888889vw] top-[50%] -translate-y-[50%]'/>) : (<SlArrowUp className='absolute w-[6.66666667vw] h-[6.66666667vw] right-[6.38888889vw] top-[50%] -translate-y-[50%]'/>)}</NavLink>
              <ul className={`sm:block transform ${open===4 ? 'block' : 'hidden'} transition-transform duration-700 ease-in-out`}>
                <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Environement</NavLink></li>
                <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Security & Privacy</NavLink></li>
                <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Accessibility</NavLink></li>
                <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Diversity · Equity · Inclusion</NavLink></li>
                <li><NavLink className='flex cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Corporate Citizenship <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/></NavLink></li>
                <li><NavLink className='flex cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Corporate Sustainability <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/></NavLink></li>
              </ul>
            </div>
            <div className='sm:mt-[1.11111111vw] relative'>
              <p className='font-[700] block text-[4.44444444vw] sm:text-[1.25vw] p-[4.72222222vw_6.66666667vw] sm:p-[1.11111111vw_1.66666667vw]'>About Us</p>
              <NavLink onClick={()=> setOpen(open===5 ?null:5)} className='sm:hidden absolute h-[15.55555556vw] w-full top-0 left-0'>{open===5 ? (<SlArrowDown className='absolute w-[6.66666667vw] h-[6.66666667vw] right-[6.38888889vw] top-[50%] -translate-y-[50%]'/>) : (<SlArrowUp className='absolute w-[6.66666667vw] h-[6.66666667vw] right-[6.38888889vw] top-[50%] -translate-y-[50%]'/>)}</NavLink>
              <ul className={`sm:block transform ${open===5 ? 'block' : 'hidden'} transition-transform duration-700 ease-in-out`}>
                <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Company Info</NavLink></li>
                <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Business Area</NavLink></li>
                <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Brand Identity</NavLink></li>
                <li><NavLink className='block cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Careers</NavLink></li>
                <li><NavLink className='flex cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Investor Relations <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/></NavLink></li>
                <li><NavLink className='flex cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Newaroom <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/></NavLink></li>
                <li><NavLink className='flex cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Ethics</NavLink></li>
                <li><NavLink className='flex cursor-pointer p-[2.77777778vw_7.77777778vw_3.05555556vw_8.88888889vw] sm:p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Samsung Design <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/></NavLink></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      

      <div className='p-[8.88888889vw_0vw_6.11111111vw_0vw] sm:p-0'>
        <div className='sm:text-[.83333333vw] text-[3.33333333vw] p-[0vw_6.66666667vw] sm:p-[1.18055556vw_0.83333333vw_1.04166667vw_1.66666667vw] sm:border-b border-[#d9d9d9] wrap-anywhere'>
          <div className='p-[0vw_0vw_7.5vw_0vw] sm:p-0'>
            <p className=''>Copyright ⓒ 1995-2025 SAMSUNG All Rights reserved.</p>

            <div>
              <br></br>
              {'Please dispose of e-waste and plastic waste responsibly.'}
              <br></br>
              {'For more information or e-waste pick up, please call 1800 5 7267864 or '}
              <NavLink className='cursor-pointer text-blue-600'>click here</NavLink>
              {' for more details.'}
              <br></br>
              <br></br>
              {'Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001'}
              <br></br>
              {'Corporate Identification Number (CIN): U31900DL1995PTC071387'}
            </div>
          </div>
        <div className='inline-block sm:hidden w-full mb-[5.83333333vw]'>
          <Link className='inline-flex items-center text-[3.33333333vw] font-[700] pr-[5.55555556vw min-h-[6.66666667vw] relative'>India/English</Link>
        </div>
        </div>


        <div className='p-[0vw_3.88888889vw] sm:pl-[1.66666667vw] h-auto sm:h-[4.44444444vw] grid sm:block relative'>
          <div className='pr-[1.66666667vw] h-[4.44444444vw] hidden sm:flex items-center float-left relative'>
            <NavLink className='font-[700] itmes-center inline-flex items-center'>India/English</NavLink>
            <p className='hidden sm:inline-block bg-[#d9d9d9] w-[1px] ml-[1.66666667vw] h-[.83333333vw]'>{''}</p>
          </div>
          <div className='align-middle float-left table h-auto sm:h-[4.44444444vw] w-full sm:w-auto pt-[2.22222222vw] sm:p-0 order-2'>
            <ul className='table-cell align-middle text-center'>
              <li className='inline-block'><NavLink to={''} className='flex items-center p-[2.22222222vw_3.33333333vw] sm:p-[0vw_.97222222vw] text-[3.33333333vw] sm:text-[.83333333vw]'>Privacy</NavLink></li>
              <li className='inline-block'><NavLink to={''}className='flex items-center p-[2.22222222vw_3.33333333vw] sm:p-[0vw_.97222222vw] text-[3.33333333vw] sm:text-[.83333333vw]'>Legal</NavLink></li>
              <li className='inline-block'><NavLink to={''} className='flex items-center p-[2.22222222vw_3.33333333vw] sm:p-[0vw_.97222222vw] text-[3.33333333vw] sm:text-[.83333333vw]'>CSR Policy</NavLink></li>
              <li className='inline-block'><NavLink to={''} className='flex items-center p-[2.22222222vw_3.33333333vw] sm:p-[0vw_.97222222vw] text-[3.33333333vw] sm:text-[.83333333vw]'>Sitemap</NavLink></li>
            </ul>
          </div>
          <div className='sm:mr-[1.66666667vw] text-[3.33333333vw] sm:text-[.83333333vw] block h-full w-full sm:w-auto sm:table float-right order-1'>
            <span className='block sm:table-cell align-middle h-auto sm:h-[1.11111111vw] w-full sm:w-auto text-center sm:font-[.83333333vw] p-[2.22222222vw_0vw] pb-[4.44444444vw] sm:p-0'>Stay in the Loop?</span>
            <ul className='table sm:table-cell align-middle m-[0_auto]'>
              <li className='sm:ml-[1.04166667vw] ml-0 table-cell sm:inline-block rounded-full'><Link className='m-[2.22222222vw_2.22222222vw] sm:m-0 w-[6.66666667vw] sm:w-[1.66666667vw] h-[6.66666667vw] sm:h-[1.66666667vw] block bg-transparent cursor-pointer'><FaFacebook className='w-full h-full'/></Link></li>
              <li className='sm:ml-[1.04166667vw] ml-0 table-cell sm:inline-block rounded-full'><Link className='m-[2.22222222vw_2.22222222vw] sm:m-0 w-[6.66666667vw] sm:w-[1.66666667vw] h-[6.66666667vw] sm:h-[1.66666667vw] block bg-transparent cursor-pointer'><FaXTwitter className='w-full h-full'/></Link></li>
              <li className='sm:ml-[1.04166667vw] ml-0 table-cell sm:inline-block rounded-full'><Link className='m-[2.22222222vw_2.22222222vw] sm:m-0 w-[6.66666667vw] sm:w-[1.66666667vw] h-[6.66666667vw] sm:h-[1.66666667vw] block bg-transparent cursor-pointer'><FaInstagram className='w-full h-full'/></Link></li>
              <li className='sm:ml-[1.04166667vw] ml-0 table-cell sm:inline-block rounded-full'><Link className='m-[2.22222222vw_2.22222222vw] sm:m-0 w-[6.66666667vw] sm:w-[1.66666667vw] h-[6.66666667vw] sm:h-[1.66666667vw] block bg-transparent cursor-pointer'><FaYoutube className='w-full h-full'/></Link></li>
              <li className='sm:ml-[1.04166667vw] ml-0 table-cell sm:inline-block rounded-full'><Link className='m-[2.22222222vw_2.22222222vw] sm:m-0 w-[6.66666667vw] sm:w-[1.66666667vw] h-[6.66666667vw] sm:h-[1.66666667vw] block bg-transparent cursor-pointer'><FaLinkedin className='w-full h-full'/></Link></li>
              <li className='sm:ml-[1.04166667vw] ml-0 table-cell sm:inline-block rounded-full'><Link className='m-[2.22222222vw_2.22222222vw] sm:m-0 w-[6.66666667vw] sm:w-[1.66666667vw] h-[6.66666667vw] sm:h-[1.66666667vw] block bg-transparent cursor-pointer'><IoLogoWhatsapp className='w-full h-full'/></Link></li>
            </ul>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Footer