import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// import { login } from "../../../../../backend/controller/UserController";

export default function VerifyEmailModal({
  data,
  onClose = () => {},
  onVerify = (otp) => console.log("verify", otp),
  onResend = () => console.log("resend"),
  resendSeconds = 40,
  setcurrentStep,
  setIsverifyEmailClicked
  
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(resendSeconds);
  const inputsRef = useRef([]);

  // countdown
  useEffect(() => {
    if (timer <= 0) return;
    const id = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const handleChange = (idx, value) => {
    if (!/^\d?$/.test(value)) return; // only digits, max 1
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);

    if (value && idx < 5) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (idx, e) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
    if (e.key === "ArrowRight" && idx < 5) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!text) return;
    const arr = text.split("");
    const filled = Array(6)
      .fill("")
      .map((_, i) => arr[i] || "");
    setOtp(filled);
    // focus last filled
    const last = Math.min(arr.length - 1, 5);
    if (last >= 0) inputsRef.current[last]?.focus();
  };

  const allFilled = otp.every((d) => d !== "");

  const handleVerify = async(e) => {
    e.preventDefault();
    // if (!allFilled) return;

     try {
        const otpValue = otp.join("")
         data.otp=otpValue;
        console.log('form data ver: ',data);
      const response=await axios.post("http://localhost:4300/jobseekar/verifyotp", data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json"},
        
      });
      console.log('reshh:',response);
      setIsverifyEmailClicked(false);
      setcurrentStep(2)
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    onVerify(otp.join(""));
  };

  const handleResendClick = () => {
    if (timer > 0) return;
    onResend();
    setTimer(resendSeconds);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
      <div className="relative bg-white rounded-2xl w-full max-w-md shadow-xl pt-8 pb-6 px-6">
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100"
        >
          ✕
        </button>

        {/* icon */}
        <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mx-auto mb-4 text-2xl">
          📩
        </div>

        {/* heading */}
        <h2 className="text-xl font-semibold text-center text-slate-900 mb-1">
          Verify Your Email
        </h2>
        <p className="text-center text-slate-500 text-sm mb-4">
          We&apos;ve sent a <span className="font-semibold">6-digit OTP</span> to your
          registered email address. Please enter it below to verify your account.
        </p>

        {/* email pill */}
        <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-2 rounded-full text-sm mx-auto w-fit mb-5">
          <span className="text-xs">📧</span>
          <span>{data.email}</span>
        </div>

        {/* otp label */}
        <p className="text-sm font-medium text-slate-900 text-center mb-3">
          Enter 6-Digit OTP
        </p>

        {/* OTP inputs */}
        <form onSubmit={handleVerify}>
          <div
            className="flex gap-3 justify-center mb-2"
            onPaste={handlePaste}
          >
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (inputsRef.current[idx] = el)}
                type="text"
                inputMode="numeric"
                pattern="\d*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="w-11 h-12 md:w-12 md:h-12 text-center text-lg font-semibold border-2 rounded-xl focus:border-blue-400 outline-none transition bg-slate-50"
              />
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mb-5">
            Please check your inbox and spam folder
          </p>

          <button
            type="submit"
            disabled={!allFilled}
            className={`w-full py-3 rounded-lg cursor-pointer font-semibold text-white text-sm transition
              ${
                allFilled
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-blue-200 cursor-not-allowed"
              }`}
          >
            Verify &amp; Continue
          </button>
        </form>

        {/* resend */}
        <div className="text-center mt-5 text-sm text-slate-500">
          Didn&apos;t receive the code?{" "}
          <button
            type="button"
            onClick={handleResendClick}
            disabled={timer > 0}
            className={`font-semibold ${
              timer > 0 ? "text-slate-400" : "text-blue-500"
            }`}
          >
            Resend OTP ↻
          </button>
          <div className="text-xs text-slate-400 mt-1">
            {timer > 0 ? `Resend available in ${timer}s` : "You can resend now"}
          </div>
        </div>

        {/* footer */}
        <div className="mt-6 border-t pt-3 text-center text-xs text-slate-400">
          Having trouble?{" "}
          <button className="text-blue-500 font-medium" type="button">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
