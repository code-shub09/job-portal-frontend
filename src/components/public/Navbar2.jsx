import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar2({activeRole, setActiveRole,setAuthOption}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">JobZilla</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">Jobs</a>
          <a href="#" className="hover:text-blue-600 transition">Companies</a>
          <a href="#" className="hover:text-blue-600 transition">About Us</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Role Selector */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            {["jobseeker", "employer"].map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                  activeRole === role
                    ? "bg-white shadow text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Auth Buttons */}
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition" onClick={() => setAuthOption('login')}>
            Login
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition" onClick={() => setAuthOption('signup')}>
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 hover:text-blue-600"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <div className="flex flex-col items-center py-4 gap-4 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Jobs</a>
            <a href="#" className="hover:text-blue-600">Companies</a>
            <a href="#" className="hover:text-blue-600">About Us</a>
            <a href="#" className="hover:text-blue-600">Contact</a>

            {/* Role Switch */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              {["jobseeker", "employer"].map((role) => (
                <button
                  key={role}
                  onClick={() => setActiveRole(role)}
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                    activeRole === role
                      ? "bg-white shadow text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-2 mt-2">
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition">
                Login
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
