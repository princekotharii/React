import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function Login() {
  const SamsungAccount = () => {
    window.open(
      "https://account.samsung.com/iam/oauth2/authorize?client_id=28xws2p2v3&redirect_uri=https%3A%2F%2Fwww.samsung.com%2Fin%2Fweb%2Fafter-login&response_type=code&scope=openid&state=eyJyZWZlcnJlciI6Imh0dHBzOi8vd3d3LnNhbXN1bmcuY29tL2luLyIsImZhaWxfcmVmZXJyZXIiOiJodHRwczovL3d3dy5zYW1zdW5nLmNvbS9pbi8iLCJkb21haW4iOiJodHRwczovL3d3dy5zYW1zdW5nLmNvbSIsInN0b3JlSWQiOiIiLCJvcmdJRCI6IjgwMTYzREJFNUEzQ0MzREMwQTQ5NUVDMkBBZG9iZU9yZyIsImRhdGFTdHJlYW1JZCI6ImE0YmFmZTc4LWYxN2QtNGZlNi04YWE1LWNhOTViNmJmMDA3YSIsIkVDSUQiOiI0ODk5MjI4NzM0OTA3NTkzODgwMTI2ODcwODU1MzAxMDc4NDExNyJ9&locale=en-IN",
      "_blank"
    );
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);

  const validateInput = (val) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    return emailRegex.test(val) || phoneRegex.test(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setError("Please login using your Email ID/Mobile Number.");
      return;
    }
    if (!validateInput(email.trim())) {
      setError("Please login using your Email ID/Mobile Number.");
      return;
    }
    setError("");
    return setUser(email);
  };

  return (
    <div className="m-auto max-w-[1440px] w-full pt-[12px]">
      <div className="p-[20px_24px] leading-[31.92px] text-center">
        <h3 className="block w-full text-[24px] p-[5px_0_20px] font-[700]">Login</h3>
        <h4 className="block text-[18px] p-[0_0_22px] font-[700]">
          Login with mobile to become a member
        </h4>
        <div className="p-[15px_0_0] w-[33vw] h-[80px] m-auto table relative">
          <form onSubmit={handleSubmit}>
            {/* Floating Label Input */}
            <div className="w-full m-0 relative">
              <input
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                className="peer border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px]"
              />
              <label
                htmlFor="username"
                className={`absolute left-0 transition-all duration-300
                  ${email ? 'top-[-8px] text-[12px] text-black' : 'top-[10px] text-[14px] text-[#766767]'}
                  peer-focus:top-[-8px] peer-focus:text-[12px] peer-focus:text-black
                `}
              >
                Mobile Number / Email Id
              </label>

              <div className="text-[#dc2222] text-start text-[12px] leading-[14px] mt-[5px] p-[5px_0]">
                {error}
              </div>
            </div>

            {/* Checkbox */}
            <div className="leading-[18.62px] justify-start p-[0_0_20px_30px]">
              <input
                type="checkbox"
                className={`float-left -ml-[30px] appearance-none outline-none cursor-pointer w-[20px] h-[20px] bg-white border rounded-full checked:bg-blue-500 checked:bg-[url(https://www.samsung.com/in/web/dist/img/icon-checked-white.f836399.svg)] checked:bg-center checked:bg-no-repeat checked:border-blue-500 checked:bg-[length:14px_14px] transition`}
              />
              <span className="w-full inline-block font-normal text-[14px] leading-[18.62px] text-start">
                {"I agree to receive personalized offers and updates"}
                <br />
                {"You can opt out anytime by visiting My Page"}
              </span>
            </div>

            {/* Login Buttons */}
            <p className="flex justify-center p-[25px]">
              <button
                type="submit"
                className="bg-black text-white rounded-[20px] h-[40px] w-[296px] font-[500]"
              >
                Login
              </button>
            </p>

            <p className="flex justify-center">
              <button
                type="button"
                onClick={SamsungAccount}
                className="bg-[#2189ff] h-[40px] w-[296px] rounded-[20px] text-white font-[500] cursor-pointer"
              >
                Login via Samsung Account
              </button>
            </p>
          </form>
        </div>

        {/* Terms & Conditions */}
        <div className="mt-3">
          <p className="text-center font-[400]">
            By logging-in, I consent and accept the Smart club Program and Enrollment{" "}
            <a
              className="text-blue-400"
              href="https://images.samsung.com/is/content/samsung/assets/in/microsite/smart-club/smartclub-terms-conditions.pdf?v=4"
              target="_blank"
            >
              Terms and Conditions
            </a>{" "}
            &{" "}
            <a className="text-blue-400" href="https://www.samsung.com/in/info/privacy/" target="_blank">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
