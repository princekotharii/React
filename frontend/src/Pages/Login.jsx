import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { login } from "../Api/Api";

function Login() {
    const navigate = useNavigate()
    const [onMobile, setOnMobile] = useState(true)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [_emailVerified, setEmailVerified] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const { setUser } = useContext(UserContext);

    const validateInput = (val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
        return emailRegex.test(val) || phoneRegex.test(val);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // STEP 1: Agar password field visible nahi hai, to pehle email verify karo
        if (!showPassword) {
            try {
                if (email.trim() === "") {
                    setError("Please login using your Email ID/Mobile Number.");
                    return;
                }
                if (!validateInput(email.trim())) {
                    setError("Please login using your Email ID/Mobile Number.");
                    return;
                }

                const emailData = {
                    Email: email.trim(),
                }
                console.log("Verifying email:", emailData);

                const response = await login(emailData);
                            
                console.log("Email verification response:", response);

                if(response.status === 200 && response.success) {
                    setError("");
                    setEmailVerified(true);
                    setShowPassword(true);
                } else {
                    setError(response.message || "User not found. Please sign up first.");
                }

            } catch (error) {
                console.log("Email verification error:", error);
                setError("User not found. Please sign up first.");
            }
        } 
        
        // STEP 2: Agar password field visible hai, to login karo
        else {
            try {
                // Checkbox validation - SIRF yaha check karo
                if (!agreed) {
                    setError("Please agree to terms and conditions to continue.");
                    return;
                }

                if (password.trim() === "") {
                    setError("Please enter your password.");
                    return;
                }

                const userData = {
                    Email: email.trim(),
                    Password: password.trim()
                }
                console.log("Logging in:", userData);

                const response = await login(userData);
                            
                console.log("Login response:", response);

                // Agar password sahi hai (status 200)
                if(response.status === 200 && response.success) {
                    setError("");
                    setUser(response.data); // Save the login user data to local Storage
                    
                    // Form clear
                    setEmail("");
                    setPassword("");
                    setEmailVerified(false);
                    setShowPassword(false);
                    setAgreed(false);
                    
                    // Redirect to home/dashboard
                    navigate('/');
                } 
                // Agar password galat hai (status 401)
                else {
                    setError(response.message || "Incorrect password. Please try again.");
                    setPassword(""); // Sirf password clear karo
                    // Email, emailVerified, showPassword same rahega
                }

            } catch (error) {
                console.log("Login error:", error);
                setError("Login failed. Please try again.");
                setPassword(""); // Password clear karo
            }
        }
    };
    

  return (
    <>
        <div className="m-auto max-w-[1440px] w-full pt-[12px] invisible md:visible">
            <div className="p-[20px_24px] leading-[31.92px] text-center w-full">
                <h3 className="block w-full text-[24px] p-[5px_0_20px] font-[700]">
                    Login
                </h3>
                <h4 className="block text-[18px] p-[0_0_22px] font-[700]">
                    Login with mobile to become a member
                </h4>
                <div className="p-[15px_0_0] w-[33vw] h-[80px] m-auto table relative">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full m-0 relative">
                            <input onChange={(e) => setEmail(e.target.value)} type="text" id="username" value={email} className="peer border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px] pt-[20px]"/>
                            
                            <label htmlFor="username" className={`absolute left-0 transition-all duration-300 pointer-events-none ${email ? 'top-[3px] text-[12px] text-black' : 'top-[25px] text-[14px] text-[#766767] peer-focus:top-[3px] peer-focus:text-[12px] peer-focus:text-black'}`}>Mobile Number / Email Id</label>
                        </div>
                        <div className="w-full m-0 relative">
                            <input onChange={(e) => setPassword(e.target.value)} type="password" id="username" value={password} className={`peer border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px] pt-[20px] ${showPassword ?'block':'hidden'}`}/>
                            
                            <label htmlFor="username" className={`absolute left-0 transition-all duration-300 pointer-events-none ${password ? 'top-[3px] text-[12px] text-black' : 'top-[25px] text-[14px] text-[#766767] peer-focus:top-[3px] peer-focus:text-[12px] peer-focus:text-black'} ${showPassword ?'block':'hidden'}`}>Enter your Password</label>

                            <div className="text-[#dc2222] text-start text-[12px] leading-[14px] mt-[5px] p-[5px_0] min-h-[1.25rem]">
                                {error}
                            </div>
                        </div>


                        <div className={`leading-[18.62px] justify-start p-[0_0_20px_30px] ${showPassword ?'block':'hidden'}`}>
                            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className={`float-left -ml-[30px] appearance-none outline-none cursor-pointer w-[20px] h-[20px] bg-white border rounded-full checked:bg-blue-500 checked:bg-[url(https://www.samsung.com/in/web/dist/img/icon-checked-white.f836399.svg)] checked:bg-center checked:bg-no-repeat checked:border-blue-500 checked:bg-[length:14px_14px] transition `}></input>
                            
                            <span className="w-full inline-block font-normal text-[14px] leading-[18.62px] text-start">
                                {"I agree to receive personalized offers and updates"}
                                <br />
                                {"You can opt out anytime by visiting My Page"}
                            </span>
                        </div>

                        <p className="p-[25px_0] text-center font-[700] text-[1.11111vw] leading-[200%]">
                            <button type="submit" className="cursor-pointer h-[40px] w-[296px] border bg-black text-white rounded-[20px] text-[14px]">{showPassword ? 'Login' : 'Continue'}</button>
                        </p>

                        <p className="pb-[25px] text-center font-[700] text-[1.11111vw] leading-[200%]">
                            <button type="button" onClick={()=>navigate('/signup')} className="cursor-pointer h-[40px] w-[296px] border bg-[#2189ff] text-white rounded-[20px] text-[14px]">New user? Sign Up</button>
                        </p>
                    </form>
                </div>
                
                <p className="font-[400] text-[14px]">
                    {
                    "By logging-in, I consent and accept the Smart club Program and Enrollment "
                    }
                    <a
                    href="https://images.samsung.com/is/content/samsung/assets/in/microsite/smart-club/smartclub-terms-conditions.pdf?v=4"
                    target="_blank"
                    className="cursor-pointer text-[#20a2ff]"
                    >
                    {"Terms and Conditions "}
                    </a>
                    {"& "}
                    <Link to={""} className="cursor-pointer text-[#20a2ff]">
                        {"Privacy Policy"}
                    </Link>
                </p>
            </div>
        </div>

        {/* Mobile */}
        <div className={`max-w-[1440px] w-full h-full sm:h-fit fixed bg-white overflow-x-hidden overflow-y-auto m-[auto_auto_0] z-10 bottom-0 left-0 right-0 md:hidden ${onMobile ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-[20px_24px] leading-[31.92px] text-center w-full border-b-[.5px] border-[#8f8f8f] sm:border-none">
                <h3 className="block w-full text-[24px] p-[5px_0_20px] font-[700]">
                    Login
                </h3>
                <h4 className="block text-[18px] p-[0_0_22px] font-[700]">
                    Login with mobile to become a member
                </h4>
                <div className="p-[15px_0_0] w-[33vw] h-[80px] m-auto table relative ">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full m-0 relative">
                            <input onChange={(e) => setEmail(e.target.value)} type="text" id="username" value={email} className="peer border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px] pt-[20px]" />

                            <label
                                htmlFor="username"
                                className={`absolute left-0 transition-all duration-300 pointer-events-none ${email ? 'top-[3px] text-[12px] text-black' : 'top-[25px] text-[14px] text-[#766767] peer-focus:top-[3px] peer-focus:text-[12px] peer-focus:text-black'}`} >Mobile Number / Email Id</label>
                        </div>
                        <div className="w-full m-0 relative">
                            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" value={password} className={`peer border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px] pt-[20px] ${showPassword ?'block':'hidden'}`} />

                            <label
                                htmlFor="password"
                                className={`absolute left-0 transition-all duration-300 pointer-events-none ${password ? 'top-[3px] text-[12px] text-black' : 'top-[25px] text-[14px] text-[#766767] peer-focus:top-[3px] peer-focus:text-[12px] peer-focus:text-black'} ${showPassword ?'block':'hidden'}`} >Enter your password</label>
                            <div className="text-[#dc2222] text-start text-[12px] leading-[14px] mt-[5px] p-[5px_0] min-h-[1.25rem]">
                                {error}
                            </div>
                        </div>


                        <div className={`leading-[18.62px] justify-start p-[0_0_20px_30px] ${showPassword ?'block':'hidden'}`}>
                            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className={`float-left -ml-[30px] appearance-none outline-none cursor-pointer w-[20px] h-[20px] bg-white border rounded-full checked:bg-blue-500 checked:bg-[url(https://www.samsung.com/in/web/dist/img/icon-checked-white.f836399.svg)] checked:bg-center checked:bg-no-repeat checked:border-blue-500 checked:bg-[length:14px_14px] transition`}></input>
                            
                            <span className="w-full inline-block font-normal text-[12px] leading-[18.62px] text-start">
                                {"I agree to receive personalized offers and updates"}
                                <br />
                                {"You can opt out anytime by visiting My Page"}
                            </span>
                        </div>

                        <p className="font-[400] text-[14px] p-[0_0_28px] leading-[18.62px]">
                            {
                            "By logging-in, I consent and accept the Smart club Program and Enrollment "
                            }
                            <a href="https://images.samsung.com/is/content/samsung/assets/in/microsite/smart-club/smartclub-terms-conditions.pdf?v=4" target="_blank" className="cursor-pointer text-[#20a2ff]">
                            {"Terms and Conditions "}</a>
                            {"& "}
                            <Link to={""} className="cursor-pointer text-[#20a2ff]">
                                {"Privacy Policy"}
                            </Link>
                        </p>

                        <p className="p-[25px_0] text-center font-[700] text-[1.11111vw] leading-[200%]">
                            <button type="submit" className="cursor-pointer h-[40px] w-[296px] border bg-black text-white rounded-[20px] text-[14px]">{showPassword ? 'Login' : 'Continue'}</button>
                        </p>

                        <p className="pb-[25px] text-center font-[700] text-[1.11111vw] leading-[200%]">
                            <button type="button" onClick={()=>navigate('/signup')} className="cursor-pointer h-[40px] w-[296px] border bg-[#2189ff] text-white rounded-[20px] text-[14px]">New user? Sign Up</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        {onMobile && (
                <div
                    onClick={() => setOnMobile(false)}
                    className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-0 hidden sm:block md:hidden"
                />
        )}
    </>
  );
}

export default Login;