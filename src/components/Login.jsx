import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");

    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-6">
      <div className="w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg p-8">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <span className="w-20">
            <Logo width="100%" />
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold">Sign in</h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>

        {/* Display Error */}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleSubmit(login)} className="mt-6 space-y-5">
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
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
