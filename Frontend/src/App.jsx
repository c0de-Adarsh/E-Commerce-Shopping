import LayOut from './components/ui/authLayOut/LayOut'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/login'
import AdminPanel from './components/AdminPanel/AdminPanel'
import Dashboard from './pages/auth/AdminPanel/Dashboard'
import Products from './pages/auth/AdminPanel/Products'
import Orders from './pages/auth/AdminPanel/Orders'
import Features from './pages/auth/AdminPanel/Features'
import ShoppingLayOut from './components/Shopping/ShoppingLayOut'
import NotFound from './pages/NotFound/NotFound'
import ShoppingHome from './pages/Shopping/ShoppingHome'
import ShoppingList from './pages/Shopping/ShoppingList'
import ShoppingCheckOut from './pages/Shopping/ShoppingCheckOut'
import ShoppingAccount from './pages/Shopping/ShoppingAccount'

function App() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'> 
     
      <Routes>
        <Route path='/auth' element={<LayOut/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>
        </Route>
        <Route path='/admin' element={<AdminPanel/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='orders' element={<Orders/>}/>
        <Route path='features' element={<Features/>}/>
        </Route>
          {/* <Route path='/shopping' element={<ShoppingLayOut/>}/>

          <Route path='home' element={<ShoppingHome/>} />
          <Route path='listing' element={<ShoppingList/>}/>
          <Route  path='checkout' element={<ShoppingCheckOut/>}/>
         <Route path='account' element={<ShoppingAccount/>}/>

        </Routes>
        <Route path='*' element={<NotFound />}/> */}
      </Routes>
    </div>
  )
}

export default App