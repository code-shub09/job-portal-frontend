// components/ProfileTypeStep.jsx
import React, { useState } from "react";
import ProfileStudent from "./ProfileStudent";
import CourseType from "./CourseType";
import WorkingProfessionalForm from "./WorkingProfessionalForm";
import FresherEducationForm from "./FresherEducationForm";

const PROFILE_OPTIONS = [
  {
    id: "student",
    label: "Student",
    icon: "🎓",
    description: "Currently studying / college student",
  },
  {
    id: "fresher",
    label: "Fresher",
    badge: "NEW",
    description: "Recently graduated / 0–1 year",
  },
  {
    id: "working",
    label: "Working Professional",
    icon: "💼",
    description: "1+ years of experience",
  },
];

export default function ProfileTypeStep({
           // current selected profile type (string)
  onChange,           // (val) => void
  onBack,             // () => void
  onNext,             // () => void
}) {
  const handleSelect = (id) => {
    setvalue(id);
    setProfileType(id);
    if (onChange) onChange(id);
  };
   const [value,setvalue]=useState('student');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Please select one option.");
      return;
    }
    onNext && onNext();
  };
     const [profileType, setProfileType] = useState("student"); 

    const [qualification, setQualification] = useState("graduation");
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-sm w-full"
    >
      {/* heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">Profile Type</h2>
        <p className="text-slate-500 mt-1 text-sm">
          These details help recruiters understand your current career stage.
        </p>
      </div>

      {/* question */}
      <p className="text-sm font-medium text-slate-900 mb-3">
        What best describes you? <span className="text-red-500">*</span>
      </p>

      {/* options */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {PROFILE_OPTIONS.map((opt) => {
          const active = value === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleSelect(opt.id)}
              className={`flex-1 min-h-[110px] rounded-2xl border-2 transition-all text-left px-5 py-4
              ${
                active
                  ? "border-blue-500 bg-blue-50/40 shadow-sm"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                {opt.icon ? (
                    <span className="text-2xl">{opt.icon}</span>
                  ) : opt.badge ? (
                    <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] rounded-md">
                      {opt.badge}
                    </span>
                  ) : null}
                <p
                  className={`font-semibold text-sm ${
                    active ? "text-slate-900" : "text-slate-700"
                  }`}
                >
                  {opt.label}
                </p>
              </div>
              <p className="text-xs text-slate-500">{opt.description}</p>
            </button>
          );
        })}
      </div>

      {/* info box */}
      <div className="bg-blue-50 rounded-xl border border-blue-100 px-4 py-3 mb-6 flex gap-3 items-start">
        <div className="text-blue-500 text-lg leading-none mt-0.5">ℹ</div>
        <div className="text-sm text-slate-700">
          <span className="font-semibold">Why this matters:</span>{" "}
          Your profile type helps us show you the most relevant job opportunities
          and tailor your experience.
        </div>
      </div>
       {/* <ProfileStudent qualification={qualification} setQualification={setQualification}></ProfileStudent>
       <CourseType qualification={qualification} ></CourseType> */}
       {/* <WorkingProfessionalForm></WorkingProfessionalForm> */}
      {/* illustration */}
      <div className="mb-6">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=60"
          alt="People working together"
          className="w-full rounded-2xl object-cover max-h-72"
        />
      </div>
       {value=='working' &&(<WorkingProfessionalForm></WorkingProfessionalForm>)   }
       {value=='student' &&(<div>
        <ProfileStudent qualification={qualification} setQualification={setQualification}></ProfileStudent>
        <CourseType qualification={qualification} ></CourseType>
       </div>)   }
       {value=='fresher' &&(<FresherEducationForm></FresherEducationForm>)}
      {/* footer buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2.5 border border-slate-200 rounded-lg text-slate-700 text-sm font-medium hover:bg-slate-50 flex items-center gap-2"
        >
          ← Back
        </button>
        <button
          type="submit"
          className="flex-1 px-5 py-2.5 rounded-lg bg-slate-300 text-slate-600 text-sm font-semibold hover:bg-slate-400/90 hover:text-slate-900 transition flex items-center justify-center gap-2
          disabled:opacity-60 disabled:cursor-not-allowed
          "
          style={value ? { background: "#2563eb", color: "white" } : {}}
          disabled={!value}
        >
          Save and Continue →
        </button>
      </div>
    </form>
  );
}

// import React, { useState } from "react";

// const PROFILE_TYPES = [
//   { id: "student", label: "Student", icon: "🎓" },
//   { id: "fresher", label: "Fresher", badge: "NEW" },
//   { id: "working", label: "Working Professional", icon: "💼" },
// ];

// const STUDENT_QUALIFICATIONS = [
//   { id: "12th", label: "12th Pass" },
//   { id: "diploma", label: "Diploma" },
//   { id: "graduation", label: "Graduation" },
// ];

// export default function ProfileTypeStep({
//   onBack,
//   onNext,
// }) {
//   const [profileType, setProfileType] = useState("student"); // default
//   const [qualification, setQualification] = useState("12th");

//   // form fields
//   const [collegeName, setCollegeName] = useState("");
//   const [courseName, setCourseName] = useState("");
//   const [yearOfStudy, setYearOfStudy] = useState("");
//   const [schoolName, setSchoolName] = useState("");
//   const [boardName, setBoardName] = useState("");
//   const [passingYear, setPassingYear] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // collect data
//     const payload = {
//       profileType,
//       qualification,
//       collegeName,
//       courseName,
//       yearOfStudy,
//       schoolName,
//       boardName,
//       passingYear,
//     };
//     // eslint-disable-next-line no-console
//     console.log("Form data:", payload);
//     onNext && onNext(payload);
//   };

//   // when user switches away from "student", clear qualification
//   const handleProfileTypeChange = (id) => {
//     setProfileType(id);
//     if (id !== "student") {
//       setQualification(""); // hide student-specific row
//     } else {
//       setQualification("12th");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white rounded-2xl p-6 md:p-8 w-full shadow-sm"
//     >
//       {/* heading */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold text-slate-900">
//           Profile &amp; Education Details
//         </h2>
//         <p className="text-slate-500 text-sm mt-1">
//           Help us understand your current career stage and educational background.
//         </p>
//       </div>

//       {/* profile type */}
//       <p className="text-sm font-medium text-slate-900 mb-3">
//         What best describes you? <span className="text-red-500">*</span>
//       </p>

//       <div className="flex flex-col md:flex-row gap-4 mb-5">
//         {PROFILE_TYPES.map((item) => {
//           const active = profileType === item.id;
//           return (
//             <button
//               key={item.id}
//               type="button"
//               onClick={() => handleProfileTypeChange(item.id)}
//               className={`flex-1 min-h-[90px] rounded-2xl border-2 px-5 py-3 flex flex-col items-center justify-center gap-2 transition-all
//                 ${
//                   active
//                     ? "border-blue-500 bg-blue-50/50 shadow-sm"
//                     : "border-slate-200 hover:border-slate-300"
//                 }
//               `}
//             >
//               {item.icon ? (
//                 <span className="text-2xl">{item.icon}</span>
//               ) : item.badge ? (
//                 <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] rounded-md">
//                   {item.badge}
//                 </span>
//               ) : null}
//               <span
//                 className={`text-sm font-semibold ${
//                   active ? "text-slate-900" : "text-slate-600"
//                 }`}
//               >
//                 {item.label}
//               </span>
//             </button>
//           );
//         })}
//       </div>

//       {/* only show this row when profileType = student */}
//       {profileType === "student" && (
//         <>
//           <hr className="my-4" />

//           <p className="text-sm font-medium text-slate-900 mb-3">
//             Highest qualification currently pursuing <span className="text-red-500">*</span>
//           </p>

//           <div className="flex flex-wrap gap-3 mb-6">
//             {STUDENT_QUALIFICATIONS.map((q) => {
//               const active = qualification === q.id;
//               return (
//                 <button
//                   key={q.id}
//                   type="button"
//                   onClick={() => setQualification(q.id)}
//                   className={`px-6 py-2 rounded-full border text-sm font-medium transition-all
//                     ${
//                       active
//                         ? "bg-blue-500 text-white border-blue-500"
//                         : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
//                     }
//                   `}
//                 >
//                   {q.label}
//                 </button>
//               );
//             })}
//           </div>
//         </>
//       )}

//       {/* conditional education fields */}
//       {profileType === "student" ? (
//         <>
//           {/* 12th form */}
//           {qualification === "12th" && (
//             <div className="space-y-4 mb-6">
//               <p className="text-sm font-semibold text-slate-900">School Details</p>
//               <div>
//                 <label className="block text-xs text-slate-600 mb-1">
//                   School Name *
//                 </label>
//                 <input
//                   value={schoolName}
//                   onChange={(e) => setSchoolName(e.target.value)}
//                   type="text"
//                   placeholder="Enter your school name"
//                   className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs text-slate-600 mb-1">
//                   Board (CBSE, ICSE, State) *
//                 </label>
//                 <input
//                   value={boardName}
//                   onChange={(e) => setBoardName(e.target.value)}
//                   type="text"
//                   placeholder="e.g., CBSE"
//                   className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs text-slate-600 mb-1">
//                   Passing Year *
//                 </label>
//                 <input
//                   value={passingYear}
//                   onChange={(e) => setPassingYear(e.target.value)}
//                   type="number"
//                   placeholder="2026"
//                   className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
//                 />
//               </div>
//             </div>
//           )}

//           {/* diploma form */}
//           {qualification === "diploma" && (
//             <div className="space-y-4 mb-6">
//               <p className="text-sm font-semibold text-slate-900">Diploma Details</p>
//               <div>
//                 <label className="block text-xs text-slate-600 mb-1">
//                   College / Institute Name *
//                 </label>
//                 <input
//                   value={collegeName}
//                   onChange={(e) => setCollegeName(e.target.value)}
//                   type="text"
//                   placeholder="Enter institute name"
//                   className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs text-slate-600 mb-1">
//                   Diploma Course *
//                 </label>
//                 <input
//                   value={courseName}
//                   onChange={(e) => setCourseName(e.target.value)}
//                   type="text"
//                   placeholder="e.g., Polytechnic, Web Design, MBA Foundation"
//                   className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs text-slate-600 mb-1">
//                   Year / Semester *
//                 </label>
//                 <input
//                   value={yearOfStudy}
//                   onChange={(e) => setYearOfStudy(e.target.value)}
//                   type="text"
//                   placeholder="e.g., 1st year, 3rd sem"
//                   className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
//                 />
//               </div>
//             </div>
//           )}

//           {/* graduation form */}
//           {qualification === "graduation" && (
//             <div className="space-y-4 mb-6">
//               <p className="text-sm font-semibold text-slate-900">College Details</p>
//               <div>
//                 <label className="block text-xs text-slate-600 mb-1">
//                   College Name *
//                 </label>
//                 <input
//                   value={collegeName}
//                   onChange={(e) => setCollegeName(e.target.value)}
//                   type="text"
//                   placeholder="Enter your college name"
//                   className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs text-slate-600 mb-1">
//                   Course Name *
//                 </label>
//                 <input
//                   value={courseName}
//                   onChange={(e) => setCourseName(e.target.value)}
//                   type="text"
//                   placeholder="e.g., B.Tech, B.Com, BBA"
//                   className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs text-slate-600 mb-1">
//                   Year of Study *
//                 </label>
//                 <select
//                   value={yearOfStudy}
//                   onChange={(e) => setYearOfStudy(e.target.value)}
//                   className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
//                 >
//                   <option value="">Select year</option>
//                   <option value="1st Year">1st Year</option>
//                   <option value="2nd Year">2nd Year</option>
//                   <option value="3rd Year">3rd Year</option>
//                   <option value="4th Year">4th Year</option>
//                   <option value="Passed out">Passed out</option>
//                 </select>
//               </div>
//             </div>
//           )}
//         </>
//       ) : (
//         // if not student → simple form
//         <div className="space-y-4 mb-6">
//           <p className="text-sm font-semibold text-slate-900">
//             Current Role / Highest Qualification
//           </p>
//           <div>
//             <label className="block text-xs text-slate-600 mb-1">
//               Qualification / Degree *
//             </label>
//             <input
//               type="text"
//               placeholder="e.g., B.Tech, MBA, 2+ yrs exp"
//               className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
//             />
//           </div>
//         </div>
//       )}

//       {/* buttons */}
//       <div className="flex gap-3 pt-2">
//         <button
//           type="button"
//           onClick={onBack}
//           className="px-5 py-2.5 border border-slate-200 rounded-lg text-slate-700 text-sm font-medium hover:bg-slate-50"
//         >
//           ← Back
//         </button>
//         <button
//           type="submit"
//           className="flex-1 px-5 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition"
//         >
//           Save and Continue →
//         </button>
//       </div>
//     </form>
//   );
// }

