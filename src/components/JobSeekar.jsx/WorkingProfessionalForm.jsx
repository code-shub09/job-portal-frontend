// components/WorkingProfessionalForm.jsx
import React, { useState } from "react";

const PROFILE_TYPES = [
  { id: "student", label: "Student", icon: "🎓" },
  { id: "fresher", label: "Fresher", badge: "NEW" },
  { id: "working", label: "Working Professional", icon: "💼" },
];

export default function WorkingProfessionalForm({
  activeType = "working",
  onSelectType,
  onBack,
  onNext,
}) {
  const [designation, setDesignation] = useState("");
  const [years, setYears] = useState("");
  const [company, setCompany] = useState("");
  const [qualification, setQualification] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      profileType: "working",
      designation,
      years,
      company,
      qualification,
    };
    onNext && onNext(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 md:p-8 w-full shadow-sm"
    >
      {/* heading */}
    



      <hr className="my-4" />

      {/* form fields */}
      <p className="text-sm font-semibold text-slate-900 mb-4">
        Work Experience Details
      </p>

      {/* current designation */}
      <div className="mb-4">
        <label className="block text-xs text-slate-600 mb-1">
          Current Designation *
        </label>
        <input
          type="text"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          placeholder="e.g., Software Engineer, Marketing Manager"
          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>

      {/* years of experience */}
      <div className="mb-4">
        <label className="block text-xs text-slate-600 mb-1">
          Years of Experience *
        </label>
        <select
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        >
          <option value="">Select experience</option>
          <option value="0-1">0–1 year</option>
          <option value="1-3">1–3 years</option>
          <option value="3-5">3–5 years</option>
          <option value="5-8">5–8 years</option>
          <option value="8+">8+ years</option>
        </select>
      </div>

      {/* company name */}
      <div className="mb-4">
        <label className="block text-xs text-slate-600 mb-1">
          Company Name *
        </label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter your current company name"
          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>

      {/* highest qualification */}
      <div className="mb-6">
        <label className="block text-xs text-slate-600 mb-1">
          Highest Qualification *
        </label>
        <select
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        >
          <option value="">Select qualification</option>
          <option value="graduation">Graduation</option>
          <option value="post-graduation">Post Graduation</option>
          <option value="diploma">Diploma</option>
          <option value="others">Others</option>
        </select>
      </div>
    </form>
  );
}
