import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoppingHeader from './ShoppingHeader'

function ShoppingLayOut() {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
        {/* header */}
        <ShoppingHeader/>
        <main className='flex flex-col w-full'>
          hh
         <Outlet/>
        </main>
    </div>
  )
}

export default ShoppingLayOut