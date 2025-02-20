import React from "react";
import { Signup as SignupComponent } from "../components";

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-4">
      <div className="w-full max-w-md  p-6 rounded-lg shadow-lg">
        <SignupComponent />
      </div>
    </div>
  );
}

export default Signup;
