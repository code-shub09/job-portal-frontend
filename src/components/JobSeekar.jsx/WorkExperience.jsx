import React from "react";
import { Briefcase } from "lucide-react";
import { TbBriefcaseFilled } from 'react-icons/tb';

export function WorkExperience({ experiences = [], setIsAddExpOpen }) {
  const hasExperience = experiences.length > 0;

  function onAdd(){
    setIsAddExpOpen(true)
    
  }
  

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          Work Experience
        </h3>
        <button
          onClick={onAdd}
          className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg transition"
        >
          + Add
        </button>
      </div>

      {/* If No Experience Added */}
      {!hasExperience ? (
        <div className="text-center py-10 text-slate-500">
          <div className="flex justify-center mb-3">
           
            <TbBriefcaseFilled size={40} className="text-orange-500"></TbBriefcaseFilled>
          </div>
          <p className="font-semibold text-slate-800">
            No work experience added yet.
          </p>
          <p className="text-sm text-slate-500 mt-1">
            Add your internship, full-time, or freelance experience to showcase
            your professional journey.
          </p>
        </div>
      ) : (
        // ✅ Display Experience Cards
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border-l-4 ${
                idx % 2 === 0
                  ? "border-purple-500 bg-purple-50/60"
                  : "border-orange-500 bg-orange-50/60"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{idx % 2 === 0 ? "💼" : "💡"}</span>
                <h4 className="font-semibold text-slate-800">{exp.role}</h4>
              </div>
              <p className="text-sm text-slate-600 mb-2">@{exp.company}</p>

              <div className="flex flex-wrap gap-2 mb-2">
                {exp.duration && (
                  <span className="text-xs font-medium inline-flex items-center gap-1 bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600">
                    ⏱ {exp.duration}
                  </span>
                )}
                {exp.salary && (
                  <span className="text-xs font-medium inline-flex items-center gap-1 bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600">
                    💰 {exp.salary}
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-700">
                <strong>Responsibilities:</strong> {exp.responsibilities}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
