import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // optional icon library
import { useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const emailRef = useRef("");
  const passRef = useRef("");

  async function submitHandler() {
    let formData = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    console.log('form data :', formData);
    try {
         const response= await axios.post('http://localhost:4300/auth/login',formData,{withCredentials:true,headers:{"Content-Type":"application/json"}});
         navigate('/dashboard');
    } catch (error) {

        
    }
    

  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
          <a
            href="/register"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            Register for free
          </a>
        </div>

        {/* Email / Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email ID / Username
          </label>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your active Email ID / Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            ref={passRef}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute right-3 top-[38px] text-sm text-blue-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-4">
          <Link
            to="/forgotPassword"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer" onClick={submitHandler}>
          Login
        </button>

        {/* Use OTP */}
        <div className="text-center mt-4">
          <a
            href="/otp-login"
            className="text-sm text-blue-600 hover:underline"
          >
            Use OTP to Login
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">Or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Sign-in */}
        <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
