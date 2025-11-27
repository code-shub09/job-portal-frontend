import React from "react";
import { FiSearch, FiEdit2, FiTrash2, FiEye, FiXCircle } from "react-icons/fi";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaCalendarCheck } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useCloseJob } from "../../hooks/useCloseJob";
import { useDeleteJob } from "../../hooks/useDeleteJob";
import { useNavigate } from "react-router-dom";
const JobPostCard = ({ job }) => {
  const closeMutation = useCloseJob();
  const deleteMutation = useDeleteJob();

  async function handleCloseJob() {
    if (!window.confirm("Are you sure you want to close this job?")) return;

    closeMutation.mutate(job._id);
    
    // reload job lis
  } 
  const navigate= useNavigate();

  function handleViewJob(){
    navigate(`/jobs/${job._id}`);
  }

  return (
    <div
      key={job.id}
      className="rounded-3xl p-5 bg-white shadow-lg hover:shadow-md transition"
    >
      {/* TITLE + STATUS */}
      <div className="flex   justify-between">
        <div className="">
          <div className="flex gap-2 text-center items-center mb-3">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <div>
              <span
                className={`px-3 m-auto border-2 text-xs rounded-full font-semibold ${
                  job.status === "open"
                    ? "bg-green-100 text-green-700"
                    : job.status === "closed"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
              </span>
            </div>
          </div>

          <p className="text-gray-600 text-base">
            {/* {job.company} • {job.location} */}
          </p>

          <p className="text-base font-normal text-gray-600 mt-1">
            {job.jobType} • {job.salaryRange.min} - {job.salaryRange.max}
          </p>

          {/* TAGS */}
          <div className="mt-2 flex flex-wrap gap-2">
            {job.skillsRequired.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium rounded bg-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* INSIGHTS */}
          <div className="flex gap-4 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <PiUsersThreeFill className="text-blue-500"></PiUsersThreeFill>
              <span>
                {" "}
                Total Applications:{" "}
                <span className="font-bold">
                  {job.stats.totalApplications}
                </span>{" "}
              </span>
            </div>

            <span>⭐ Shortlisted {job.stats.shortlistedApplications}</span>
            <div className="flex items-center gap-1">
              <FaCalendarCheck className="text-green-500"></FaCalendarCheck>
              <span>
                {" "}
                Interviews:{" "}
                <span className="font-bold">
                  {job.stats.InterviewApplications}
                </span>{" "}
              </span>
            </div>
          </div>
        </div>

        {/* actions */}
        <div className="flex flex-col justify-between items-end ">
          {/* Status Badge */}
          <div className="flex items-center gap-4">
            <div>
              <span className="font-bold text-gray-400">24 jan ,2025</span>
            </div>

            <HiOutlineExternalLink size={20} onClick={handleViewJob}></HiOutlineExternalLink>
          </div>
          {/* ACTION BUTTONS */}
          <div className="flex gap-3 mt-4 text-sm">
            <button className="flex items-center gap-1 cursor-pointer text-blue-600 hover:underline">
              <FiEye /> View Applications
            </button>

            <button className="flex items-center gap-1 cursor-pointer text-blue-600 hover:underline">
              <FiEdit2 /> Edit Job
            </button>

            <button
              className="flex items-center gap-1 cursor-pointer text-orange-600 hover:underline"
              onClick={handleCloseJob}
            >
              <FiXCircle /> Close Job
            </button>

            <button
              className="flex items-center gap-1 cursor-pointer text-red-600 hover:underline"
              onClick={() => deleteMutation.mutate(job._id)}
            >
              <FiTrash2 /> Delete
            </button>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
    </div>
  );
};

export default JobPostCard;

// import React from "react";
// import { FiEdit2, FiTrash2, FiEye, FiXCircle } from "react-icons/fi";

// const JobPostCard = ({ job }) => {
//   return (
//     <div className="bg-white border rounded-xl shadow-sm p-5 hover:shadow-md transition">
//       <div className="flex justify-between gap-6">

//         {/* LEFT SECTION – JOB DETAILS */}
//         <div className="flex-1">
//           <h3 className="text-xl font-semibold">{job.title}</h3>

//           <p className="text-gray-600 text-sm mt-1">
//             {job.company} • {job.location}
//           </p>

//           <p className="text-gray-600 text-sm mt-1">
//             {job.type} • {job.salary}
//           </p>

//           {/* TAGS */}
//           <div className="mt-3 flex flex-wrap gap-2">
//             {job.tags.map((tag, idx) => (
//               <span
//                 key={idx}
//                 className="px-2 py-1 text-xs bg-gray-100 rounded font-medium text-gray-700"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* INSIGHTS */}
//           <div className="flex gap-6 mt-4 text-sm text-gray-600">
//             <span>📩 Total {job.totalApplications}</span>
//             <span>⭐ Shortlisted {job.shortlisted}</span>
//             <span>🎙 Interviews {job.interviews}</span>
//           </div>
//         </div>

//         {/* RIGHT SECTION – STATUS + ACTIONS */}

//       </div>
//     </div>
//   );
// };

// export default JobPostCard;
