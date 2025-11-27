// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { ArrowLeft, MapPin, Briefcase, Calendar, Users, Edit } from "lucide-react";
// // import JobApplicants from "@/components/Employer/JobApplicants";
// import ApplicantsList from "./ApplicantsList";
// import useSIngleJobPost from "../../hooks/UseSIngleJobPost";

// const SingleJobDetails = () => {

//   const { jobId } = useParams();
//    const{data:SingleJob}=useSIngleJobPost(jobId);
//   console.log();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("details");
//   const [job, setJob] = useState(null);

//   // Mock data (replace with API later)
//   useEffect(() => {
//     const mockJobs = [
//       {
//         id: 1,
//         title: "Senior Frontend Developer",
//         department: "Engineering",
//         location: "San Francisco, CA",
//         salary: "$120k - $180k",
//         type: "Full-time",
//         applicants: 3,
//         posted: "10/1/2025",
//         status: "Open",
//         description:
//           "We're looking for an experienced Frontend Developer to join our growing team...",
//       },
//     ];
//     const selectedJob = mockJobs.find((j) => j.id === parseInt(jobId));
//     console.log('async :  ',jobId)
//     setJob(selectedJob);
//   }, [jobId]);

 

//   return (
//     <>
//      {!SingleJob ? (<div className="p-6">Loading job details...</div>):(<div className="p-8 bg-gray-50 min-h-screen">
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 text-gray-600 mb-4 hover:text-blue-600"
//       >
//         <ArrowLeft size={18} />
//         <span>Back to all jobs</span>
//       </button>

//       <div className="flex justify-between items-start mb-6">
//         <div>
//           <h1 className="text-3xl font-semibold text-gray-900 mb-3">
//             {SingleJob.title}
//           </h1>
//           <div className="flex flex-wrap items-center gap-2 mb-3">
//             <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
//               {SingleJob.status}
//             </span>
//             <span className="border border-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
//               {SingleJob.department}
//             </span>
//             <span className="border border-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
//               {SingleJob.jobType}
//             </span>
//           </div>
//           <div className="flex flex-wrap items-center text-gray-600 text-sm gap-5">
//             <div className="flex items-center gap-1">
//               {/* <MapPin size={16} /> {job.location} */}
//             </div>
//             <div className="flex items-center gap-1">
//               <Briefcase size={16} /> {SingleJob.salaryRange.min} - {SingleJob.salaryRange.max}
//             </div>
//             <div className="flex items-center gap-1">
//               {/* <Calendar size={16} /> Posted {job.posted} */}
//             </div>
//             <div className="flex items-center gap-1">
//               {/* <Users size={16} /> {job.applicants} applicants */}
//             </div>
//           </div>
//         </div>

//         <button className="flex items-center gap-2 bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={()=>{navigate(`/jobs/edit/${jobId}`)}}>
//           <Edit size={16} /> Edit Job
//         </button>
//       </div>

//       {/* Tabs */}
//       <div className="flex border-b border-gray-200 mb-6">
//         <button
//           onClick={() => setActiveTab("details")}
//           className={`px-6 py-3 font-medium text-sm ${
//             activeTab === "details"
//               ? "text-blue-600 border-b-2 border-blue-600"
//               : "text-gray-500 hover:text-gray-700"
//           }`}
//         >
//           Job Details
//         </button>
//         <button
//           onClick={() => setActiveTab("applicants")}
//           className={`px-6 py-3 font-medium text-sm ${
//             activeTab === "applicants"
//               ? "text-blue-600 border-b-2 border-blue-600"
//               : "text-gray-500 hover:text-gray-700"
//           }`}
//         >
//           {/* Applicants ({job.applicants}) */}
//         </button>
//       </div>

//       {/* Tab Content */}
//       {activeTab === "details" ? (
//         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//           <h2 className="text-xl font-semibold text-gray-800 mb-3">
//             Job Description
//           </h2>
//           <p className="text-gray-600 leading-relaxed">{SingleJob.description}</p>
//         </div>
//       ) : (
//         <ApplicantsList></ApplicantsList>
//       )}
//     </div>) }
    
//     </>
    
//   );
// };

// export default SingleJobDetails;

import React from 'react'
import JobDetailsPage1 from '../../components/Employer/JobDetailsPage1'

const SingleJobDetails = () => {
  return (
    <div className='w-full bg-gray-200 p-12'>
       <div className='w-[80%] m-auto'>
        <JobDetailsPage1></JobDetailsPage1>
       </div>
      
    </div>
  )
}

export default SingleJobDetails
