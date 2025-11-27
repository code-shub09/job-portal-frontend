import React from "react";

export default function SkillsRequired({ skills = [] }) {
    console.log('skill',skills)
//   if (!skills.length) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 my-8">
      <h3 className="text-base font-semibold text-slate-900 mb-3">
        Skills Required
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
