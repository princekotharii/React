import React from 'react'

function Login() {
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
            <button className='bg-[#2189ff] h-[40px] w-[296px] rounded-[20px] text-white font-[500]'>Login via Samsung account</button>
        </div>
        <div>
            <p className='text-center font-[400]'>By logging-in, I consent and accept the Smart club Program and Enrollment <a className='text-blue-400' href="https://images.samsung.com/is/content/samsung/assets/in/microsite/smart-club/smartclub-terms-conditions.pdf?v=4"target='_blank'>Terms and Conditions</a> & <a className='text-blue-400' href="https://www.samsung.com/in/info/privacy/"target='_blank'>Privacy Policy</a>.
            </p>
        </div>
    </div>
  )
}

export default Login