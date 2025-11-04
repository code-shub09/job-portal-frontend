import React, { useState } from "react";
const STUDENT_QUALIFICATIONS = [
  { id: "12th", label: "12th Pass" },
  { id: "diploma", label: "Diploma" },
  { id: "graduation", label: "Graduation" },
];
const ProfileStudent = ({qualification,setQualification}) => {
    
  return (
    <div>
      <hr className="my-4" />

      <p className="text-sm font-medium text-slate-900 mb-3">
        Highest qualification currently pursuing{" "}
        <span className="text-red-500">*</span>
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        {STUDENT_QUALIFICATIONS.map((q) => {
          const active = qualification === q.id;
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => setQualification(q.id)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition-all
                    ${
                      active
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                    }
                  `}
            >
              {q.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileStudent;
