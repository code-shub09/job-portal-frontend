import React from "react";

export function PersonalInfoCard({
  name = "Rahul Kumar",
  email = "rahul.kumar@example.com",
  phone = "+91 98765 43210",
  profileType = "Working Professional",
  resumeUrl = "#",
  onEdit = () => {},
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 min-w-[320px]">
      <div className="flex items-start justify-between mb-5">
        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          Personal Information
        </h3>
        <button
          onClick={onEdit}
          className="text-slate-400 hover:text-slate-600 text-sm"
        >
          ✏
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5 text-sm">
        <div>
          <p className="text-xs text-slate-400 uppercase mb-1">FULL NAME</p>
          <p className="text-slate-800 font-medium">{name}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase mb-1">EMAIL ADDRESS</p>
          <p className="text-slate-800 font-medium">{email}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase mb-1">PHONE NUMBER</p>
          <p className="text-slate-800 font-medium">{phone}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase mb-1">PROFILE TYPE</p>
          <p className="text-slate-800 font-medium flex items-center gap-1">
            💼 {profileType}
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs text-slate-400 uppercase mb-1">RESUME</p>
          <a
            href={resumeUrl}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium"
          >
            📄 Download Resume.pdf
          </a>
        </div>
      </div>
    </div>
  );
}
