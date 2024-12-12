import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/ui/authLayOut/LayOut';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Dashboard from './pages/auth/AdminPanel/Dashboard';
import Products from './pages/auth/AdminPanel/Products';
import Orders from './pages/auth/AdminPanel/Orders';
import Features from './pages/auth/AdminPanel/Features';
import ShoppingLayOut from './components/Shopping/ShoppingLayOut';
import NotFound from './pages/NotFound/NotFound';
import ShoppingHome from './pages/Shopping/ShoppingHome';
import ShoppingList from './pages/Shopping/ShoppingList';
import ShoppingCheckOut from './pages/Shopping/ShoppingCheckOut';
import ShoppingAccount from './pages/Shopping/ShoppingAccount';
import CheckAuth from './components/Common/CheckAuth';
import UnAuthPage from './pages/unAuthPage/UnAuthPage';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './store/authslice/authSlice';
import { Skeleton } from "@/components/ui/skeleton"


function App() {
  // const isAuthenticated = false; // Replace with real auth logic
  // const user = null
   
  const {user,isAuthenticated, isLoading} = useSelector((state)=> state.auth)

   const dispatch = useDispatch()

   useEffect(()=>{
        dispatch(checkAuth())
        console.log(checkAuth)
   },[dispatch])

   if(isLoading) return <Skeleton className="w-[500px] h-[500px] " />

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Auth Routes */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminPanel />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="features" element={<Features />} />
        </Route>

        {/* Shopping Routes */}
        <Route
          path="/shopping"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayOut />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingList />} />
          <Route path="checkout" element={<ShoppingCheckOut />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<UnAuthPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
