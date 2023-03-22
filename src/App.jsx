import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'



export const App = () => {
  return (
    <div>
      <Navbar/>
      <h1>NetShop</h1>
      <Products/>
    </div>
  )
}

