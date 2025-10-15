// import React, { useState } from "react";
// import { MoreVertical, Eye, Edit, Trash2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const ManageJobs = () => {
//   const [openMenu, setOpenMenu] = useState(null); // Track which job menu is open

//   const [jobs] = useState([
//     {
//       id: 1,
//       title: "Senior React Developer",
//       department: "Engineering",
//       location: "Remote",
//       type: "Full-time",
//       posted: "1/10/2024",
//       applicants: 24,
//       status: "Active",
//     },
//     {
//       id: 2,
//       title: "Product Manager",
//       department: "Product",
//       location: "New York, NY",
//       type: "Full-time",
//       posted: "1/8/2024",
//       applicants: 18,
//       status: "Active",
//     },
//     {
//       id: 3,
//       title: "UI/UX Designer",
//       department: "Design",
//       location: "San Francisco, CA",
//       type: "Contract",
//       posted: "1/5/2024",
//       applicants: 31,
//       status: "Active",
//     },
//     {
//       id: 4,
//       title: "Backend Engineer",
//       department: "Engineering",
//       location: "Remote",
//       type: "Full-time",
//       posted: "1/3/2024",
//       applicants: 15,
//       status: "Closed",
//     },
//   ]);

//   const navigate= useNavigate();

//   function editHandle(jobId){
//     navigate(`/jobs/${jobId}`);


//   }

//   // Toggle dropdown visibility
//   const toggleMenu = (id) => {
//     setOpenMenu(openMenu === id ? null : id);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen relative">
//       <h1 className="text-2xl font-semibold text-gray-800 mb-6">All Jobs</h1>

//       <div className="space-y-4 relative">
//         {jobs.map((job) => (
//           <div
//             key={job.id}
//             className="bg-white shadow-sm border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:shadow-md transition-all relative"
//           >
//             {/* LEFT SECTION */}
//             <div className="flex flex-col">
//               <div className="flex items-center gap-2">
//                 <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
//                 <span
//                   className={`text-xs font-medium px-2 py-1 rounded-full ${
//                     job.status === "Active"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {job.status}
//                 </span>
//               </div>
//               <p className="text-sm text-gray-500 mt-1">
//                 {job.department} • {job.location} • {job.type} • Posted {job.posted}
//               </p>
//             </div>

//             {/* RIGHT SECTION */}
//             <div className="flex items-center gap-4 relative">
//               <div className="text-right">
//                 <p className="text-xl font-semibold text-gray-800">{job.applicants}</p>
//                 <p className="text-xs text-gray-500">Applicants</p>
//               </div>

//               {/* Three-dot button */}
//               <button
//                 onClick={() => toggleMenu(job.id)}
//                 className="p-2 rounded-full hover:bg-gray-100 transition relative"
//               >
//                 <MoreVertical className="text-gray-500 h-5 w-5" />
//               </button>

//               {/* Dropdown menu */}
//               {openMenu === job.id && (
//                 <div className="absolute right-0 top-10 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                   <button
//                     className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm hover:bg-gray-50"
//                     onClick={() => alert(`Viewing ${job.title}`)}
//                   >
//                     <Eye className="h-4 w-4 text-gray-600" /> View Details
//                   </button>
//                   <button
//                     className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm hover:bg-gray-50"
//                     onClick={()=>{editHandle(job.id)}}
//                   >
//                     <Edit className="h-4 w-4 text-blue-600" /> Edit
//                   </button>
//                   <button
//                     className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-red-600 hover:bg-red-50"
//                     onClick={() => alert(`Deleting ${job.title}`)}
//                   >
//                     <Trash2 className="h-4 w-4" /> Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageJobs;

import React, { useState } from "react";
import { MoreVertical, Eye, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      posted: "1/10/2024",
      applicants: 24,
      status: "Active",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      posted: "1/8/2024",
      applicants: 18,
      status: "Active",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Contract",
      posted: "1/5/2024",
      applicants: 31,
      status: "Active",
    },
    {
      id: 4,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      posted: "1/3/2024",
      applicants: 15,
      status: "Closed",
    },
  ];

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const handleView = (id) => {
    navigate(`/jobs/${id}`); // ✅ Navigates correctly to SingleJobDetails
  };

  const handleEdit = (id) => {
    navigate(`/jobs/edit/${id}`); // if you add edit page later
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">All Jobs</h1>

      <div className="space-y-4 relative">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-sm border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:shadow-md transition-all relative"
          >
            {/* LEFT SECTION */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    job.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {job.status}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {job.department} • {job.location} • {job.type} • Posted {job.posted}
              </p>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-4 relative">
              <div className="text-right">
                <p className="text-xl font-semibold text-gray-800">{job.applicants}</p>
                <p className="text-xs text-gray-500">Applicants</p>
              </div>

              <button
                onClick={() => toggleMenu(job.id)}
                className="p-2 rounded-full hover:bg-gray-100 transition relative"
              >
                <MoreVertical className="text-gray-500 h-5 w-5" />
              </button>

              {openMenu === job.id && (
                <div className="absolute right-0 top-10 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <button
                    className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm hover:bg-gray-50"
                    onClick={() => handleView(job.id)} // ✅ correct call
                  >
                    <Eye className="h-4 w-4 text-gray-600" /> View Details
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm hover:bg-gray-50"
                    onClick={() => handleEdit(job.id)} // ✅ correct call
                  >
                    <Edit className="h-4 w-4 text-blue-600" /> Edit
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-red-600 hover:bg-red-50"
                    onClick={() => alert(`Deleting ${job.title}`)}
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageJobs;
