// export function ApplicationCard({ app }) {
//   const job = app.jobID || {};
//   const status = app.status;
//   const createdAt = app.createdAt;

//   // Default Logo
//   const logo =
//     job.companyLogo ||
//     `/assets/defaultLogo/logo${Math.floor(Math.random() * 5) + 1}.png`;

//   return (
//     <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-5 flex justify-between items-center">
//       <div className="flex gap-4">
//         <img
//           src={logo}
//           alt="Company Logo"
//           className="w-14 h-14 object-cover rounded-md border"
//         />

//         <div>
//           <h2 className="text-lg font-semibold">
//             {job.title || "Untitled Job"}
//           </h2>

//           <p className="text-gray-600 text-sm">
//             {job.companyName || "Unknown Company"}
//           </p>

//           <p className="text-gray-500 text-xs mt-1">
//             Applied on {new Date(createdAt).toLocaleDateString()}
//           </p>
//         </div>
//       </div>

//       <StatusBadge status={status} />
//     </div>
//   );
// }

// /* ------------------------------- STATUS UI ------------------------------- */
// function StatusBadge({ status }) {
//   const styles = {
//     applied: "bg-gray-100 text-gray-700 border-gray-300",
//     viewed: "bg-blue-100 text-blue-700 border-blue-300",
//     shortlisted: "bg-green-100 text-green-700 border-green-300",
//     interview: "bg-purple-100 text-purple-700 border-purple-300",
//     rejected: "bg-red-100 text-red-700 border-red-300",
//     hired: "bg-emerald-100 text-emerald-700 border-emerald-300",
//   };

//   return (
//     <span
//       className={`px-4 py-1.5 rounded-full border text-sm font-medium ${
//         styles[status] || "bg-gray-100 text-gray-600"
//       }`}
//     >
//       {status?.toUpperCase()}
//     </span>
//   );
// }

// export function ApplicationCard({ app }) {
//   console.log("app-card:", app);
//   const job = app.jobID || {};
//   const status = app.status;
//   const createdAt = app.createdAt;

//   // Default logo fallback
//   const logo =
//     job.companyLogo ||
//     `/assets/defaultLogo/logo${Math.floor(Math.random() * 5) + 1}.png`;

//   return (
//     <div className="bg-white border border-gray-200 rounded-xl p-5 flex justify-between items-start hover:shadow-md transition-shadow">
//       {/* LEFT SECTION */}
//       <div className="flex gap-4">
//         {/* Company Logo */}
//         <img
//           src={logo}
//           alt="Company Logo"
//           className="w-12 h-12 rounded-md border object-cover"
//         />

//         {/* Job Info */}
//         <div>
//           <div className="flex items-center gap-2">
//             <h2 className="text-lg font-semibold">
//               {job.title || "Untitled Job"}
//             </h2>
//             <StatusBadge status={status} />
//           </div>

//           <p className="text-gray-600 text-sm">
//             {job.postedBy.companyName || "Unknown Company"}
//           </p>

//           <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
//             <span>📍</span>
//             {job.location || "No location specified"}
//           </p>

//           <p className="text-gray-400 text-xs mt-1">
//             Applied on: {new Date(createdAt).toLocaleDateString()}
//           </p>
//         </div>
//       </div>

//       {/* RIGHT SECTION BUTTONS */}
//       <div className="flex flex-col items-end gap-2">
//         <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
//           View Details
//         </button>

//         {/* Optional withdraw button only for “applied” */}
//         {status === "applied" && (
//           <button className="text-red-500 text-xs hover:underline">
//             Withdraw Application
//           </button>
//         )}

//         {/* Offer button for hired */}
//         {status === "hired" && (
//           <button className="px-4 py-1.5 border border-emerald-300 text-emerald-700 rounded-lg text-sm hover:bg-emerald-50">
//             View Offer
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ------------------------------- STATUS TAG ------------------------------- */

// function StatusBadge({ status }) {
//   const styles = {
//     applied: "bg-gray-100 text-gray-700 border-gray-300",
//     viewed: "bg-blue-100 text-blue-700 border-blue-300",
//     shortlisted: "bg-green-100 text-green-700 border-green-300",
//     interview: "bg-purple-100 text-purple-700 border-purple-300",
//     rejected: "bg-red-100 text-red-700 border-red-300",
//     hired: "bg-emerald-100 text-emerald-700 border-emerald-300",
//   };

//   return (
//     <span
//       className={`px-3 py-0.5 rounded-full text-xs font-medium border ${
//         styles[status] || "bg-gray-100 text-gray-600 border-gray-300"
//       }`}
//     >
//       {status?.toUpperCase()}
//     </span>
//   );
// }

import { Link } from "react-router-dom";

import logo1 from "../../../assets/defaultCompanyLogo/logo1.jpg";
import logo2 from "../../../assets/defaultCompanyLogo/logo2.png";
import logo3 from "../../../assets/defaultCompanyLogo/logo3.png";
import logo4 from "../../../assets/defaultCompanyLogo/logo4.png";
import logo5 from "../../../assets/defaultCompanyLogo/logo5.png";

const defaultLogos = [logo1, logo2, logo3, logo4, logo5];

export function getRandomDefaultLogo() {
  return defaultLogos[Math.floor(Math.random() * defaultLogos.length)];
}

export function ApplicationCard({ app }) {
    console.log(app)
  const job = app.jobID || {};
  const employer = job.postedBy || {};

  const status = app.status;
  const createdAt = app.createdAt;

  // -------------------------
  // COMPANY FIXED LOGIC
  // -------------------------
  const companyName =
    employer.companyName || job.companyName || "Unknown Company";

  const logo =
    employer.companyLogoUrl ||
    job.companyLogo ||
    getRandomDefaultLogo();

  // Salary logic
  const minSalary = job.salaryRange?.min;
  const maxSalary = job.salaryRange?.max;

  const salaryText =
    minSalary && maxSalary ? `${minSalary} - ${maxSalary}` : "Not disclosed";

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex justify-between items-start hover:shadow-md transition-all">

      {/* LEFT SECTION */}
      <div className="flex gap-4">

        {/* Company Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className="w-12 h-12 rounded-md border object-cover"
        />

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">
              {job.title || "Untitled Job"}
            </h2>
            <StatusBadge status={status} />
          </div>

          {/* Company Name */}
          <p className="text-gray-600 text-sm">{companyName}</p>

          <div className="text-gray-500 text-sm mt-2 space-y-1">
            <p>📍 {job.location || "No location specified"}</p>
            <p>🕒 {job.jobType || "Not mentioned"}</p>
            <p>💰 {salaryText}</p>
          </div>

          <p className="text-gray-400 text-xs mt-2">
            Applied on {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col items-end gap-2">
        <Link to={`/jobseekar/applications-list/application/${app._id}`}>
          <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
            View Details
          </button>
        </Link>

        {status === "hired" && (
          <button className="px-4 py-1.5 border border-emerald-300 text-emerald-700 rounded-lg text-sm hover:bg-emerald-50">
            View Offer
          </button>
        )}
      </div>

    </div>
  );
}

/* --------------------- STATUS TAG --------------------- */
function StatusBadge({ status }) {
  const styles = {
    applied: "bg-gray-100 text-gray-700 border-gray-300",
    viewed: "bg-blue-100 text-blue-700 border-blue-300",
    shortlisted: "bg-green-100 text-green-700 border-green-300",
    interview: "bg-purple-100 text-purple-700 border-purple-300",
    rejected: "bg-red-100 text-red-700 border-red-300",
    hired: "bg-emerald-100 text-emerald-700 border-emerald-300",
  };

  return (
    <span
      className={`px-3 py-0.5 rounded-full text-xs font-medium border ${
        styles[status] || "bg-gray-100 text-gray-600 border-gray-300"
      }`}
    >
      {status?.toUpperCase()}
    </span>
  );
}
