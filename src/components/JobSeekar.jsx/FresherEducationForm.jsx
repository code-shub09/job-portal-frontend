// components/FresherEducationForm.jsx
import React, { useState } from "react";

const PROFILE_TYPES = [
  { id: "student", label: "Student", icon: "🎓" },
  { id: "fresher", label: "Fresher", badge: "NEW" },
  { id: "working", label: "Working Professional", icon: "💼" },
];

export default function FresherEducationForm({
  activeType = "fresher",
  onSelectType,
  onBack,
  onNext,
}) {
  const [highestQual, setHighestQual] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [passingYear, setPassingYear] = useState("");
  const [college, setCollege] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      profileType: "fresher",
      highestQual,
      specialization,
      passingYear,
      college,
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

      {/* education fields */}
      <p className="text-sm font-semibold text-slate-900 mb-4">
        Education Details
      </p>

      {/* highest qualification */}
      <div className="mb-4">
        <label className="block text-xs text-slate-600 mb-1">
          Highest Qualification *
        </label>
        <select
          value={highestQual}
          onChange={(e) => setHighestQual(e.target.value)}
          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        >
          <option value="">Select qualification</option>
          <option value="12th">12th Pass</option>
          <option value="diploma">Diploma</option>
          <option value="graduation">Graduation</option>
          <option value="post-graduate">Post Graduate</option>
        </select>
      </div>

      {/* specialization */}
      <div className="mb-4">
        <label className="block text-xs text-slate-600 mb-1">
          Specialization *
        </label>
        <input
          type="text"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          placeholder="e.g., Computer Science, Commerce"
          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>

      {/* passing year */}
      <div className="mb-4">
        <label className="block text-xs text-slate-600 mb-1">
          Passing Year *
        </label>
        <input
          type="number"
          value={passingYear}
          onChange={(e) => setPassingYear(e.target.value)}
          placeholder="e.g., 2024"
          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>

      {/* college */}
      <div className="mb-6">
        <label className="block text-xs text-slate-600 mb-1">
          College/University Name *
        </label>
        <input
          type="text"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          placeholder="Enter your college or university name"
          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>

     
    </form>
  );
}
