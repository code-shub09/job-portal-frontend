import axios from "axios";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPass = () => {
  const { token } = useParams();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function submitHandler(e) {
     e.preventDefault();
    setError("");
    setSuccess("");
    if (!password || !confirmPassword)
      return setError("Please fill in all fields");

    if (password !== confirmPassword) return setError("Passwords do not match");

    try {
      axios.post(
        `http://localhost:4300/auth/reset-password/${token}`,
        {
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setSuccess("Password reset successfully! Redirecting to login...");
    } catch (error) {

    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Reset your password
        </h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter new password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center font-medium">
              {error}
            </p>
          )}
          {success && (
            <p className="text-sm text-green-600 text-center font-medium">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Reset Password
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Remembered your password?{" "}
          <a
            href="/#/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Go to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPass;
