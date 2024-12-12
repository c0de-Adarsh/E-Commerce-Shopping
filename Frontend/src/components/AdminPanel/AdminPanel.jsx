import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'

const AdminPanel = () => {

  const [sideBar , setSideBar] = useState(false)
  return (
    <div className='flex min-h-screen w-full'>
        {/* sidebar */}
        <SideBar open={sideBar} setOpen={setSideBar}/>
        <div className='flex flex-1 flex-col'>
            {/* header */}
            <Header setOpen={setSideBar}/>
           <main className='flex-1 flex bg-muted/40 p-4 md:p-6'>
            <Outlet/>
            </main>            
        </div>

    </div>
  )
}

export default AdminPanel