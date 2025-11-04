import React from "react";

export function BoostProfileCard({ onCompleteProfile }) {
  return (
    <div className="bg-[#2965f5] rounded-2xl p-6 text-white shadow-md">
      <h4 className="text-lg font-semibold mb-2">⚡ Boost Your Profile</h4>
      <p className="text-sm text-blue-100 mb-5 leading-relaxed">
        Stand out to recruiters. Add skills, certifications, and projects to
        increase your visibility by <strong>3x</strong>.
      </p>
      <button
        onClick={onCompleteProfile}
        className="bg-white text-[#2965f5] font-medium rounded-lg px-5 py-2 hover:bg-blue-50 transition"
      >
        Complete Profile
      </button>
    </div>
  );
}
