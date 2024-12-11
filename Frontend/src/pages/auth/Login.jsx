import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '@/store/authslice/authSlice'; // Redux action for login
import Form from '@/components/Common/Form'; // Custom Form component
import { loginFormControl } from '@/Config/Config'; // Form controls configuration
import { useToast } from '@/hooks/use-toast'; // Toast for notifications

// Initial state for the form
const initialState = {
  email: '',
  password: '',
};

function Login() {
  const [formData, setFormData] = useState(initialState); // Form state
  const dispatch = useDispatch(); // Redux dispatch
  const { toast } = useToast(); // Toast hook

  // Form submission handler
  function onSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(formData))
      .then((data) => {
        // Check if the login was successful
        if (data?.payload?.success) {
          toast({
            title: data.payload.message,
            variant: 'default', // Success message
          });
        } else {
          toast({
            title: data?.payload?.message || 'Something went wrong!',
            variant: 'destructive', // Error message
          });
        }
      })
      .catch((err) => {
        // Catch unexpected errors
        toast({
          title: 'Error occurred',
          description: err.message,
          variant: 'destructive',
        });
      });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don&apos;t have an account?
          <Link className="font-medium text-primary ml-2 hover:underline" to="/auth/signup">
            Sign Up
          </Link>
        </p>
      </div>
      {/* Form Component */}
      <Form
        formControls={loginFormControl} // Form controls for fields
        buttonText="Sign In" // Button label
        formData={formData} // Current form data
        setFormData={setFormData} // Update form data
        onSubmit={onSubmit} // Submit handler
      />
    </div>
  );
}

export default Login;
