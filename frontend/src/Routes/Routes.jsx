import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Mobile from '../Pages/Mobile'
import Login from '../Pages/Login'
import Cart from '../Pages/Cart'
import Signup from '../Pages/Signup'
import Profile from '../Pages/Profile'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/mobile' element={<Mobile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/why-samsung-account' element={''} />
    </Routes>
  )
}

export default AppRouter