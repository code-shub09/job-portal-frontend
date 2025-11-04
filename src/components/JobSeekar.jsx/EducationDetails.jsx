import React from "react";
import { BiEdit } from 'react-icons/bi';
export function EducationDetails({ education = [], onEdit }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-start justify-between mb-5">
        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          Education Details
        </h3>
        <button
          onClick={onEdit}
          className="cursor-pointer text-slate-700 text-lg"
        >
          <BiEdit></BiEdit>
        </button>
      </div>

      <div className="space-y-4">
        {education.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border-l-4 ${
              item.type === "college"
                ? "border-blue-500 bg-blue-50/60"
                : "border-green-500 bg-green-50/60"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">
                {item.type === "college" ? "🎓" : "📘"}
              </span>
              <h4 className="font-semibold text-slate-800">
                {item.degree} {item.field && `in ${item.field}`}
              </h4>
            </div>
            <p className="text-sm text-slate-600 mb-2">
              {item.institution}, Passing Year: {item.passingYear}
            </p>
            {item.score && (
              <p
                className={`text-xs font-medium inline-block px-3 py-1 rounded-full ${
                  item.type === "college"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {item.type === "college"
                  ? `CGPA: ${item.score}`
                  : `Percentage: ${item.score}%`}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Example usage:
// <EducationDetails education={[
//   { type: 'college', degree: 'B.Tech', field: 'Computer Science', institution: 'Delhi University', passingYear: 2024, score: 8.6 },
//   { type: 'school', degree: '12th Grade', field: 'Science', institution: 'Delhi Public School', passingYear: 2020, score: 92 }
// ]} />
