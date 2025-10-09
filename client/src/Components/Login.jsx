import React from 'react'

function Login() {

    const SamsungAccount = ()=>{
        window.open(
            "https://account.samsung.com/iam/oauth2/authorize?client_id=28xws2p2v3&redirect_uri=https%3A%2F%2Fwww.samsung.com%2Fin%2Fweb%2Fafter-login&response_type=code&scope=openid&state=eyJyZWZlcnJlciI6Imh0dHBzOi8vd3d3LnNhbXN1bmcuY29tL2luLyIsImZhaWxfcmVmZXJyZXIiOiJodHRwczovL3d3dy5zYW1zdW5nLmNvbS9pbi8iLCJkb21haW4iOiJodHRwczovL3d3dy5zYW1zdW5nLmNvbSIsInN0b3JlSWQiOiIiLCJvcmdJRCI6IjgwMTYzREJFNUEzQ0MzREMwQTQ5NUVDMkBBZG9iZU9yZyIsImRhdGFTdHJlYW1JZCI6ImE0YmFmZTc4LWYxN2QtNGZlNi04YWE1LWNhOTViNmJmMDA3YSIsIkVDSUQiOiI0ODk5MjI4NzM0OTA3NTkzODgwMTI2ODcwODU1MzAxMDc4NDExNyJ9&locale=en-IN",
            "_blank"
        )
    }
  return (
    <div className='m-auto w-full  max-w-[1440px] pt-[12px]'>
        <div className='p-[20px_24px] font-[700] leading-[31.92px] text-center'>
            <h3 className='block w-full text-[24px] p-[5px_0_20px]'>Login</h3>
            <h4 className='block text-[18px] p-[0_0_22px]'>Login with mobile to become a member</h4>
        </div>
            <div className='flex justify-center'>
            <input className='border-b focus:outline-none' type="text" />
            </div>

            <div className='flex justify-center p-[0px 0px 0px 30px] gap-2 rounded-full'>
            <input className='w-[20px] h-[20px] appearance-none border rounded-full checked:bg-blue-500' type="checkbox" /><span> I agree to receive personalized offers and updates <br />
            You can opt out anytime by visiting My Page</span>
            </div>

        <div className='flex justify-center p-[25px]'>
            <button className=' bg-black text-white rounded-[20px] h-[40px] w-[296px] font-[500]'>Login via OTP</button>
        </div>
        <div className='flex justify-center pb-[25px]'>
            <button onClick={SamsungAccount} className='bg-[#2189ff] h-[40px] w-[296px] rounded-[20px] text-white font-[500] cursor-pointer'>Login via Samsung account</button>
        </div>
        <div>
            <p className='text-center font-[400]'>By logging-in, I consent and accept the Smart club Program and Enrollment <a className='text-blue-400' href="https://images.samsung.com/is/content/samsung/assets/in/microsite/smart-club/smartclub-terms-conditions.pdf?v=4"target='_blank'>Terms and Conditions</a> & <a className='text-blue-400' href="https://www.samsung.com/in/info/privacy/"target='_blank'>Privacy Policy</a>.
            </p>
        </div>
    </div>
  )
}

export default Login