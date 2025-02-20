import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit,
    formState: { errors, isSubmitting }} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-6">
            <div className={`w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg p-6 sm:p-8`}>
             {/* Logo */}
            <div className="mb-6 flex justify-center">
                    <span className="w-20">
                        <Logo width="100%" />
                    </span>
                </div>
                 {/* Title */}
                <h2 className="text-center text-2xl font-bold">Sign up</h2>
                <p className="mt-2 text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-400 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                  {/* Display Error */}
                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

                   {/* Signup Form */}
                <form onSubmit={handleSubmit(create)}>
                    <div className='mt-6 space-y-5'>
                   {/* Full Name Field */}
                       <div>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: "Full Name is required"
                        })}
                        />
                         {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                 </div>
            {/* Email Field */}
                       <div>
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>
                         {/* Password Field */}
          <div>
            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
          </div>
                       {/* Submit Button */}
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup