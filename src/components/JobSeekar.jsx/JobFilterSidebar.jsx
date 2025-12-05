

// import React, { useState } from "react";
// import { FiSearch, FiMapPin } from "react-icons/fi";

// export default function JobFilterSidebar({ filters, setFilters, onApply }) {
//   // Only minimum salary slider
//   const [minSalary, setMinSalary] = useState(filters.minSalary || 0);

//   const jobTypes = ["Full-time", "Part-time", "Internship", "Contract", "Remote"];
  
//   // Why minSalary is a separate local state?
//   // Because range sliders (input type="range") update dozens of times per second as the user drags.


//   function resetFilters() {
//     setFilters({
//       search: "",
//       location: "",
//       jobType: "",
//       minSalary: 0,
//       experience: "",
//     });
//     setMinSalary(0);
//   }

//   function applyFilters() {
//     setFilters((prev) => ({
//       ...prev,
//       minSalary,
//     }));
//     if (onApply) onApply();
//   }

//   return (
//     <div className="w-full bg-white rounded-2xl shadow-md p-6 space-y-6">
//       <h2 className="text-xl font-semibold">Filters</h2>

//       {/* Job Title */}
//       <div>
//         <label className="text-sm font-medium">Job Title</label>
//         <div className="flex items-center border rounded-xl px-3 py-2 mt-1 bg-gray-50">
//           <FiSearch className="text-gray-500 mr-2" />
//           <input
//             type="text"
//             placeholder="Search by job title"
//             value={filters.jobTitle}
//             onChange={(e) =>
//               setFilters((f) => ({ ...f, jobTitle: e.target.value }))
//             }
//             className="w-full bg-transparent outline-none"
//           />
//         </div>
//       </div>

//       {/* Location */}
//       <div>
//         <label className="text-sm font-medium">Location</label>
//         <div className="flex items-center border rounded-xl px-3 py-2 mt-1 bg-gray-50">
//           <FiMapPin className="text-red-500 mr-2" />
//           <input
//             type="text"
//             placeholder="Enter location"
//             value={filters.location}
//             onChange={(e) =>
//               setFilters((f) => ({ ...f, location: e.target.value }))
//             }
//             className="w-full bg-transparent outline-none"
//           />
//         </div>
//       </div>

//       {/* Job Type */}
//       <div>
//         <label className="text-sm font-medium">Job Type</label>
//         <div className="flex flex-wrap gap-2 mt-2">
//           {jobTypes.map((type) => (
//             <button
//               key={type}
//               onClick={() => setFilters((f) => ({ ...f, jobType: type }))}
//               className={`px-4 py-1.5 rounded-full border text-sm transition ${
//                 filters.jobType === type
//                   ? "bg-blue-600 text-white border-blue-600"
//                   : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
//               }`}
//             >
//               {type}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Minimum Salary */}
//       <div>
//         <label className="text-sm font-medium">Minimum Salary</label>

//         <p className="text-blue-600 font-semibold mt-2 text-center">
//           ₹ {minSalary} LPA
//         </p>

//         <input
//           type="range"
//           min="0"
//           max="50"
//           value={minSalary}
//           onChange={(e) => setMinSalary(e.target.value)}
//           className="w-full mt-3 accent-blue-600"
//         />
//       </div>

//       {/* Experience */}
//       <div>
//         <label className="text-sm font-medium">Years of Experience</label>
//         <select
//           value={filters.experience}
//           onChange={(e) =>
//             setFilters((f) => ({ ...f, experience: e.target.value }))
//           }
//           className="w-full mt-2 border bg-gray-50 rounded-xl px-3 py-2 outline-none"
//         >
//           <option value="">Select experience</option>
//           <option value="0-1">0–1 years</option>
//           <option value="1-3">1–3 years</option>
//           <option value="3-5">3–5 years</option>
//           <option value="5+">5+ years</option>
//         </select>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-between mt-6">
//         <button
//           onClick={resetFilters}
//           className="px-5 py-2 border rounded-xl text-gray-700 bg-white"
//         >
//           Reset
//         </button>

//         <button
//           onClick={applyFilters}
//           className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium"
//         >
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";

export default function JobFilterSidebar({ filters, setFilters }) {
  // LOCAL UI STATE (doesn't trigger API)
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const jobTypes = ["Full-time", "Part-time", "Internship", "Contract", "Remote"];

  /* RESET FILTERS */
  function resetFilters() {
    const reset = {
      jobTitle: "",
      location: "",
      jobType: "",
      minSalary: 0,
      experience: "",
      page: 1,
      limit: 10,
    };

    setLocalFilters(reset); // update UI
    setFilters(reset);      // trigger API
  }

  /* APPLY FILTERS → triggers API */
  function applyFilters() {
    setFilters((prev) => ({
      ...prev,
      ...localFilters,
      page: 1,
    }));
  }

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-6 space-y-6 sticky top-4">

      <h2 className="text-xl font-semibold">Filters</h2>

      {/* Job Title */}
      <div>
        <label className="text-sm font-medium">Job Title</label>
        <div className="flex items-center border rounded-xl px-3 py-2 mt-1 bg-gray-50">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by job title"
            value={localFilters.jobTitle}
            onChange={(e) =>
              setLocalFilters((f) => ({ ...f, jobTitle: e.target.value }))
            }
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="text-sm font-medium">Location</label>
        <div className="flex items-center border rounded-xl px-3 py-2 mt-1 bg-gray-50">
          <FiMapPin className="text-red-500 mr-2" />
          <input
            type="text"
            placeholder="Enter location"
            value={localFilters.location}
            onChange={(e) =>
              setLocalFilters((f) => ({ ...f, location: e.target.value }))
            }
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Job Type */}
      <div>
        <label className="text-sm font-medium">Job Type</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {jobTypes.map((type) => (
            <button
              key={type}
              onClick={() =>
                setLocalFilters((f) => ({ ...f, jobType: type }))
              }
              className={`px-4 py-1.5 rounded-full border text-sm transition ${
                localFilters.jobType === type
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Minimum Salary Slider */}
      <div>
        <label className="text-sm font-medium">Minimum Salary (LPA)</label>

        <p className="text-blue-600 font-semibold mt-2 text-center">
          ₹ {localFilters.minSalary} LPA
        </p>

        <input
          type="range"
          min="0"
          max="50"
          value={localFilters.minSalary}
          onChange={(e) =>
            setLocalFilters((f) => ({ ...f, minSalary: e.target.value }))
          }
          className="w-full mt-3 accent-blue-600"
        />
      </div>

      {/* Experience */}
      <div>
        <label className="text-sm font-medium">Years of Experience</label>
        <select
          value={localFilters.experience}
          onChange={(e) =>
            setLocalFilters((f) => ({ ...f, experience: e.target.value }))
          }
          className="w-full mt-2 border bg-gray-50 rounded-xl px-3 py-2 outline-none"
        >
          <option value="">Select experience</option>
          <option value="0-1">0–1 years</option>
          <option value="1-3">1–3 years</option>
          <option value="3-5">3–5 years</option>
          <option value="5+">5+ years</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={resetFilters}
          className="px-5 py-2 border rounded-xl text-gray-700 bg-white"
        >
          Reset
        </button>

        <button
          onClick={applyFilters}
          className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
