import React from 'react'
import { Routes, Route } from 'react-router'
import Shop from '../Pages/Shop'
import Home from '../Pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path='/' element={< Home />}></Route>
    </Routes>
  )
}

export default AppRoutes