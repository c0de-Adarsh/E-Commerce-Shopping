import Form from '@/components/Common/Form'
import { registerFormControl } from '@/Config/Config'
import { useToast } from '@/hooks/use-toast'
import { registerUser } from '@/store/authslice/authSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'



const initialState = {
  userName: '',
  email: '',
  password: ''
}
function SignUp() {
  
  const [formData , setFormData] = useState(initialState) 

   const dispatch = useDispatch()
   const navigate = useNavigate()
   const {toast} = useToast()
  function onSubmit(event){
     event.preventDefault()
     dispatch(registerUser(formData)).then((data)=>{

     if(data?.payload.success){
     toast({
      title: data.payload?.message,
     })
      navigate('/auth/login')
     }else{
      toast({
        title: data.payload?.message,
        variant:'destructive',
       })
     }

     })
  }
  
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
       <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create new account </h1>
       <p className='mt-2'>Already have an account</p>
       <Link className='font-medium text-primary ml-2 hover:underline' to='/auth/login'>Login</Link>
      </div>
      <Form
      formControls={registerFormControl}
      buttonText={'Sign Up'}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      />
    </div>
  )
}

export default SignUp