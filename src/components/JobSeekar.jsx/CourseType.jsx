import React, { useState } from 'react'

const CourseType = ({qualification}) => {
    const [profileType, setProfileType] = useState("student"); // default
    const [collegeName, setCollegeName] = useState("");
    const [courseName, setCourseName] = useState("");
    const [yearOfStudy, setYearOfStudy] = useState("");
   const [schoolName, setSchoolName] = useState("");
   const [boardName, setBoardName] = useState("");
   const [passingYear, setPassingYear] = useState("");

  return (
    <div>
        {profileType === "student" ? (
        <>
          {/* 12th form */}
          {qualification === "12th" && (
            <div className="space-y-4 mb-6">
              <p className="text-sm font-semibold text-slate-900">School Details</p>
              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  School Name *
                </label>
                <input
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  type="text"
                  placeholder="Enter your school name"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  Board (CBSE, ICSE, State) *
                </label>
                <input
                  value={boardName}
                  onChange={(e) => setBoardName(e.target.value)}
                  type="text"
                  placeholder="e.g., CBSE"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  Passing Year *
                </label>
                <input
                  value={passingYear}
                  onChange={(e) => setPassingYear(e.target.value)}
                  type="number"
                  placeholder="2026"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>
          )}

          {/* diploma form */}
          {qualification === "diploma" && (
            <div className="space-y-4 mb-6">
              <p className="text-sm font-semibold text-slate-900">Diploma Details</p>
              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  College / Institute Name *
                </label>
                <input
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  type="text"
                  placeholder="Enter institute name"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  Diploma Course *
                </label>
                <input
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  type="text"
                  placeholder="e.g., Polytechnic, Web Design, MBA Foundation"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  Year / Semester *
                </label>
                <input
                  value={yearOfStudy}
                  onChange={(e) => setYearOfStudy(e.target.value)}
                  type="text"
                  placeholder="e.g., 1st year, 3rd sem"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>
          )}

          {/* graduation form */}
          {qualification === "graduation" && (
            <div className="space-y-4 mb-6">
              <p className="text-sm font-semibold text-slate-900">College Details</p>
              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  College Name *
                </label>
                <input
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  type="text"
                  placeholder="Enter your college name"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  Course Name *
                </label>
                <input
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  type="text"
                  placeholder="e.g., B.Tech, B.Com, BBA"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  Year of Study *
                </label>
                <select
                  value={yearOfStudy}
                  onChange={(e) => setYearOfStudy(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Select year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Passed out">Passed out</option>
                </select>
              </div>
            </div>
          )}
        </>
      ) : (
        // if not student → simple form
        <div className="space-y-4 mb-6">
          <p className="text-sm font-semibold text-slate-900">
            Current Role / Highest Qualification
          </p>
          <div>
            <label className="block text-xs text-slate-600 mb-1">
              Qualification / Degree *
            </label>
            <input
              type="text"
              placeholder="e.g., B.Tech, MBA, 2+ yrs exp"
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>
      )}
      
    </div>
  )
}

export default CourseType
