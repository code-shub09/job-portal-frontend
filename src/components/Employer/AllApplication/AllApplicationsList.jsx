// import React from "react";
// import { AiOutlineFilePdf } from "react-icons/ai";
// import { FiExternalLink } from "react-icons/fi";
// import { FaRegStar, FaStar } from "react-icons/fa";
// import ApplicantCard from "./ApplicantCard";

// // Dummy Data
// // Dummy Data (Updated for ApplicantCard)
// const applications = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     profilePic: "https://i.pravatar.cc/150?img=47",
//     location: "San Francisco, CA",
//     currentTitle: "Senior Frontend Developer",
//     experience: {
//       isFresher: false,
//       totalExperienceYears: 5,
//       noticePeriodDays: 30,
//       currentCTC: 22, // in LPA
//     },
//     skills: ["React", "JavaScript", "Redux", "TypeScript", "Tailwind"],
//     resume: {
//       url: "https://example.com/sarah_resume.pdf",
//       fileName: "Sarah_Johnson_Resume.pdf",
//       fileSize: 420000, // bytes
//     },
//     status: "applied",
//     appliedAt: "2025-11-20T10:30:00",
//   },

//   {
//     id: 2,
//     name: "Michael Chen",
//     profilePic: "https://i.pravatar.cc/150?img=12",
//     location: "Remote",
//     currentTitle: "Full Stack Developer",
//     experience: {
//       isFresher: false,
//       totalExperienceYears: 4,
//       noticePeriodDays: 15,
//       currentCTC: 18,
//     },
//     skills: ["Node.js", "React", "MongoDB", "Docker"],
//     resume: {
//       url: "https://example.com/michael_resume.pdf",
//       fileName: "Michael_Chen_Resume.pdf",
//       fileSize: 380000,
//     },
//     status: "shortlisted",
//     appliedAt: "2025-11-19T14:20:00",
//   },

//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     profilePic: "https://i.pravatar.cc/150?img=32",
//     location: "Austin, TX",
//     currentTitle: "UI/UX Designer",
//     experience: {
//       isFresher: false,
//       totalExperienceYears: 4,
//       noticePeriodDays: 0, // immediate joiner
//       currentCTC: 12,
//     },
//     skills: ["Figma", "UI Design", "Prototyping", "Design Systems"],
//     resume: {
//       url: "https://example.com/emily_resume.pdf",
//       fileName: "Emily_Rodriguez_Resume.pdf",
//       fileSize: 350000,
//     },
//     status: "viewed",
//     appliedAt: "2025-11-18T09:10:00",
//   },
// ];

// // Status Badge Styling
// const statusMap = {
//   new: "bg-blue-100 text-blue-700",
//   shortlisted: "bg-yellow-200 text-yellow-700",
//   viewed: "bg-purple-100 text-purple-700",
// };

// export default function AllApplicationsList() {
//   return (
//     <div className="w-full bg-white rounded-xl shadow py-6">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <p className="text-lg font-semibold">6 applications</p>

//         <select className="border rounded-lg px-3 py-2 text-sm text-gray-700">
//           <option>Latest First</option>
//           <option>Oldest First</option>
//         </select>
//       </div>

//       {/* Applications List */}
//       <div className="flex flex-col">
//         {applications.map((app, index) => (
//           <ApplicantCard
//             key={app.id}
//             applicant={app}
//             onViewProfile={() => console.log("View profile of", app.name)}
//             onViewApplication={() =>
//               console.log("View application of", app.name)
//             }
//             onShortlist={() => console.log("Shortlisted", app.name)}
//             onReject={() => console.log("Rejected", app.name)}
//           ></ApplicantCard>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { FaRegStar, FaStar } from "react-icons/fa";
import ApplicantCard from "./ApplicantCard";
import ApplicantCard2 from "./ApplicantCard2";

// Dummy Data
// Dummy Data (Updated for ApplicantCard)

// Status Badge Styling
const statusMap = {
  new: "bg-blue-100 text-blue-700",
  shortlisted: "bg-yellow-200 text-yellow-700",
  viewed: "bg-purple-100 text-purple-700",
};

export default function AllApplicationsList({applicationList,jobId}) {
    console.log('job:iifg all-a',jobId)
  return (
    <div className="w-full bg-white rounded-xl shadow py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold">6 applications</p>

        <select className="border rounded-lg px-3 py-2 text-sm text-gray-700">
          <option>Latest First</option>
          <option>Oldest First</option>
        </select>
      </div>

      {/* Applications List */}
      <div className="flex flex-col overflow-hidden">
        {applicationList.map((app, index) => (
          <ApplicantCard2 key={app.id} applicantX={app} jobId={jobId}></ApplicantCard2>
        ))}
      </div>
    </div>
  );
}

