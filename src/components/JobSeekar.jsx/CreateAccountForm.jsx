import axios from "axios";
import React, { useState } from "react";

export default function CreateAccountForm({
  onNext = (data) => console.log(data),
  setIsverifyEmailClicked,
  form,
  setForm,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  // Triggered when user clicks outside the input
  const handleBlur = async () => {
    if (!form.email) return; // don't check empty

    try {
      const email = form.email;
      const res = await axios.get(`https://job-portal-server-lr93.onrender.com/jobseekar/check-email?email=${email}`);
      if (res.data.exists) {
        
        setError("Email already exists");
      } else {
        setError("");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // basic check
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }
    try {
      console.log("form data ver: ", form);
      const response = await axios.post(
        "http://localhost:4300/jobseekar/verify",
        form,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      setIsverifyEmailClicked(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-8 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-6 md:p-8">
        {/* heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">
            Create Your Account
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Let&apos;s get started with your basic information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* name row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="Enter your first name"
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Enter your last name"
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>
          </div>

          {/* email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                onBlur={handleBlur}
                placeholder="Enter your email address"
                className="w-full border border-slate-200 rounded-lg px-3 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-slate-400 text-lg">
                @
              </span>
            </div>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </div>

          {/* password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="w-full border border-slate-200 rounded-lg px-3 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute inset-y-0 right-3 flex items-center text-slate-400 text-sm"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Password must be at least 8 characters long
            </p>
          </div>

          {/* submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-500 cursor-pointer hover:bg-blue-600 text-white text-sm font-semibold transition shadow-sm"
          >
            Continue to Next Step →
          </button>
        </form>

        {/* footer */}
        <p className="text-center text-sm text-slate-500 mt-5">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 font-medium">
            Log in
          </a>
        </p>

        <div className="mt-5 pt-4 border-t text-center text-xs text-slate-400">
          By continuing, you agree to our{" "}
          <a href="#" className="text-blue-500">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
