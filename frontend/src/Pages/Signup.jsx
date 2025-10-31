import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../Api/Api.js';

function Signup() {
    const navigate = useNavigate()
    const [FullName, setFullName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            // Data ko object mein organize karein
            const userData = {
                FullName: FullName,
                Email: Email,
                Password: Password
            };
            
            console.log("Object format:", userData);
            console.log("JSON format:", JSON.stringify(userData));
            
            // API call karein aur response wait karein
            const response = await register(userData);
            
            console.log("Registration successful:", response);
            
            if(response.status===201 && response.success){ 
                // Success hone par form fields clear karein
                setFullName("");
                setEmail("");
                setPassword("");
                navigate('/login');
            } else {
                setError(response.message || "Registration failed. Please try again.");
            }
            
        } catch (error) {
            console.log("Registration error:", error);
            setError("Registration failed. Please try again.");  
            // Optional: Error message show karein
            // alert("Registration failed. Please try again.");
        }
    }

    return (
        <div className='m-auto max-w-[1440px] w-full'>
            <div className='p-[20px_24px] leading-[31.92px] text-center w-full'>
                <h3 className="block w-full text-[24px] p-[5px_0_20px] font-[700]">
                    {'Create your account'}
                </h3>
                <div className='"p-[15px_0_0] w-[33vw] h-[80px] m-auto table relative'>
                    <form onSubmit={handleSubmit}>
                        <div className='w-full m-0 relative'>
                            <input 
                                onChange={(e) => setFullName(e.target.value)} 
                                value={FullName}
                                type="text" 
                                id="fullname" 
                                className='peer border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px] pt-[20px]' 
                                required
                            />
                            <label htmlFor='fullname' className={`absolute left-0 transition-all duration-300 pointer-events-none ${FullName ? 'top-[3px] text-[12px] text-black' : 'top-[25px] text-[14px] text-[#766767] peer-focus:top-[3px] peer-focus:text-[12px] peer-focus:text-black'}`}>Enter your FullName</label>
                        </div>

                        <div className='relative w-full m-0'>
                            <input 
                                onChange={(e) => setEmail(e.target.value)} 
                                value={Email}
                                type="email" 
                                id="email" 
                                className='peer border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px] pt-[20px]' 
                                required
                            />
                            <label htmlFor='email' className={`absolute left-0 transition-all duration-300 pointer-events-none ${Email ? 'top-[3px] text-[12px] text-black' : 'top-[25px] text-[14px] text-[#766767] peer-focus:top-[3px] peer-focus:text-[12px] peer-focus:text-black'}`}>Enter your Email</label>
                        </div>

                        <div className='relative w-full m-0'>
                            <input 
                                onChange={(e) => setPassword(e.target.value)} 
                                value={Password}
                                type="password" 
                                id="password" 
                                className='peer border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px] pt-[20px]' 
                                required
                            />
                            <label htmlFor='password' className={`absolute left-0 transition-all duration-300 pointer-events-none ${Password ? 'top-[3px] text-[12px] text-black' : 'top-[25px] text-[14px] text-[#766767] peer-focus:top-[3px] peer-focus:text-[12px] peer-focus:text-black'}`}>Enter your Password</label>
                            <div className="text-[#dc2222] text-start text-[12px] leading-[14px] mt-[5px] p-[5px_0] min-h-[1.25rem]"> {error} </div>
                        </div>
                        <p className="p-[25px_0] text-center font-[700] text-[1.11111vw] leading-[200%]">
                            <button type='submit' className="cursor-pointer h-[40px] w-[296px] border bg-black text-white rounded-[20px] text-[14px]">Sign Up</button>
                        </p>

                        <p className="pb-[25px] text-center font-[700] text-[1.11111vw] leading-[200%]">
                            <button type="button" onClick={()=>navigate('/login')} className="cursor-pointer h-[40px] w-[296px] border bg-[#2189ff] text-white rounded-[20px] text-[14px]">Already have an account? Log in</button>
                        </p>
                    </form>
                </div>
                <p className='font-[400] text-[14px]'>
                    {"By logging-in, I consent and accept the Smart club Program and Enrollment "}

                    <a href="https://images.samsung.com/is/content/samsung/assets/in/microsite/smart-club/smartclub-terms-conditions.pdf?v=4" target="_blank" className="cursor-pointer text-[#20a2ff]">
                        {"Terms and Conditions "}
                    </a>

                    {"& "}

                    <Link className='cursor-pointer text-[#20a2ff]'>
                        {"Privacy Policy"}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup