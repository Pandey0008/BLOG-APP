import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const logoutHandler = async () => {
    if (loading) return; // Prevent multiple clicks
    setLoading(true);

    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`w-full sm:w-auto px-6 py-2 text-white font-semibold rounded-md transition-all 
        ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}`}
      onClick={logoutHandler}
      disabled={loading}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}

export default LogoutBtn;
