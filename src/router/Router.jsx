import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Basket from '../pages/Basket/Basket'
import DashBoard from '../pages/DashBoard/DashBoard'
import Home from '../pages/home/Home'
import Wishlist from '../pages/Wishlist/Wishlist'

const Router = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/basket' element={<Basket/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/dashBoard' element={<DashBoard/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Router
