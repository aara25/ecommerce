import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Dashboard from './Dashboard'
import Cart from './Cart'

export default function Home() {
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path="/ecommerce" element={<Dashboard />} />
            <Route path="/ecommerce/cart" element={<Cart />} />
        </Routes>
    </div>
  )
}
