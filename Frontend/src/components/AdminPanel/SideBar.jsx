
import { ChartNoAxesCombined} from 'lucide-react'
import {  LayoutDashboard } from "lucide-react"
import { RiShoppingBasketFill, RiVerifiedBadgeFill } from "react-icons/ri";
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';



const adminSidebar = [
  {
      id: 'dashboard',
      label: 'Dashboard',
      path: '/admin/dashboard',
      icons: <LayoutDashboard/>
  },
  {
      id: 'products',
      label: 'Products',
      path: '/admin/products',
      icons:<RiShoppingBasketFill />
  },
  {
      id: 'orders',
      label: 'Orders',
      path: '/admin/orders',
      icons: <RiVerifiedBadgeFill />
  }
]
function MenuItems({setOpen}){
  const navigate = useNavigate();
    return <nav className='mt-8 flex-col flexg gap-2'>
     {
      adminSidebar.map(MenuItems=> <div
         key={MenuItems.id} onClick={()=> {
        navigate(MenuItems.path);
        setOpen?setOpen(false): null
      
      }  
       } className='flex items-center cursor-pointer gap-2 rounded-md px-3 text-xl py-2 text-muted-foreground hover:bg-muted hover:text-foreground'>
        {MenuItems.icons}
        <span>{MenuItems.label}</span>
      </div>)
     }
    </nav>
}

const SideBar = ({open,setOpen}) => {

  const navigate = useNavigate();
  return (
    <>
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side='left' className='w-64'>
        <div className='flex flex-col h-full'>
          <SheetHeader className='border-b'>
           <SheetTitle className='flex gap-2 mt-5 mb-5'>
            <ChartNoAxesCombined size={30}/>
            <h1 className='text-2xl font-extrabold'>Admin Panel</h1>
           </SheetTitle>
          </SheetHeader>
          <MenuItems setOpen={setOpen}/>
        </div>
      </SheetContent>

    </Sheet>
    <section className='hidden w-64 flex-col border-r bg-background p-6 lg:flex'>
      <div onClick={()=> navigate('/admin/dashboard')} className='flex cursor-pointer items-center gap-2'>
      <ChartNoAxesCombined size={30}/>
       <h1 className='text-2xl font-extrabold'>Admin Panel</h1>
      </div>
      <MenuItems />
    </section>
    </>
  )
}

export default SideBar