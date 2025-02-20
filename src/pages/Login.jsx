import React from 'react';
import { Login as LoginComponent } from '../components';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login;
