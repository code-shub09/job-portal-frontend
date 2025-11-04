import React from "react";
import { MdVerified } from 'react-icons/md';
export  function ProfileHeader({
  name = "Rahul Kumar",
  email = "rahul.kumar@example.com",
  isEmailVerified = true,
  phone = "+91 98765 43210",
  isPhoneVerified = false,
  roleLabel = "Working Professional",
  profileImage =
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&w=200",
  profileCompletion = 85,
  onVerifyPhone = () => {},
  onUploadResume = () => {},
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
      {/* Top row: avatar + details + upload button */}
      <div className="flex items-start justify-between gap-4">
        {/* Left: avatar + user info */}
        <div className="flex items-start gap-4">
          {/* Avatar (no green dot) */}
          <div className="w-20 h-20 rounded-full overflow-hidden border border-slate-200">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name / contact */}
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold text-slate-900">{name}</h2>

            {/* Email + verified badge */}
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span>📧 {email}</span>
              {isEmailVerified && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900 text-white text-[11px] font-medium">
                  <MdVerified></MdVerified>
                  <span className="hidden md:inline">Verified</span>
                </span>
              )}
            </div>

            {/* Phone + verify option */}
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span>📱 {phone}</span>
              {isPhoneVerified ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 text-green-600 text-[11px] font-medium">
                  ✓ Verified
                </span>
              ) : (
                <button
                  type="button"
                  onClick={onVerifyPhone}
                  className="text-blue-500 text-xs font-medium hover:underline"
                >
                  Verify
                </button>
              )}
            </div>

            {/* Role pill */}
            <span className="inline-flex items-center mt-1 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
              {roleLabel}
            </span>
          </div>
        </div>

        {/* Right: Upload Resume button */}
       
      </div>

      {/* Profile completion bar */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
          <span>Profile Completion</span>
          <span className="font-medium text-slate-700">
            {profileCompletion}%
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-blue-500 transition-all"
            style={{ width: `${profileCompletion}%` }}
          ></div>
        </div>
        <p className="text-[11px] text-slate-400 mt-1">
          Complete your profile to get better job recommendations.
        </p>
      </div>
    </div>
  );
}
