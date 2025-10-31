import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import LoginHeader from './LoginHeader'
import Footer from './Footer'

function Layout({ children }) {
    const location = useLocation()
    const isLoginPage = location.pathname === '/login';
    const isCartPage = location.pathname === '/cart';
    const isSignupPage = location.pathname === '/signup';

    return (
        <div className='overflow-x-hidden flex flex-col items-center  justify-center m-auto'>
            {isLoginPage || isCartPage || isSignupPage ? <LoginHeader /> : <Header />}
            {children}
            <Footer />
        </div>
    )
}

export default Layout