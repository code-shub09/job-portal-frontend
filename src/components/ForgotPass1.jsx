import axios from "axios";
import { useState } from "react";

export default function ForgotPass1() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Simulate API call
    const data = {
      email: email,
    };
    try {
      const res = await axios.post(
        "https://job-portal-server-lr93.onrender.com/auth/forget-password",
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      setSuccess("Password reset link sent to your email!");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Forgot password
        </h1>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block text-gray-800 font-medium mb-2"
          >
            Email ID
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter registered email ID"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          {success && <p className="text-green-600 text-sm mt-2">{success}</p>}

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-200"
          >
            Submit
          </button>
        </form>

        <div className="text-center mt-6">
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Go back to login
          </a>
        </div>
      </div>
    </div>
  );
}
