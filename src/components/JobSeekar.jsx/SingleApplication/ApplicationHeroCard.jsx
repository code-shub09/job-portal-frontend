// import React from "react";

// export default function ApplicationHeroCard({
//   title = "Senior Product Designer",
//   company = "TechCorp Solutions",
//   location = "San Francisco, CA",
//   type = "Full-time",
//   salary = "$120k - $160k",
//   appliedDate = "March 15, 2024",
//   logo = "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=120&h=120&fit=crop"
// }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 mb-8 animate-fade-slide border border-gray-100">
//       <div className="flex flex-col lg:flex-row lg:items-center gap-6">
//         <img src={logo} alt="Company Logo" className="w-20 h-20 rounded-xl object-cover shadow-md" />

//         <div className="flex-1">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
//           <p className="text-lg text-gray-700 font-medium mb-3">{company}</p>
//           <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
//             <span className="flex items-center gap-1.5"><i className="fas fa-map-marker-alt text-blue-600"></i> {location}</span>
//             <span className="flex items-center gap-1.5"><i className="fas fa-briefcase text-blue-600"></i> {type}</span>
//             <span className="flex items-center gap-1.5"><i className="fas fa-dollar-sign text-blue-600"></i> {salary}</span>
//           </div>
//           <div className="mt-3">
//             <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium">
//               <i className="fas fa-check-circle"></i> Applied on: {appliedDate}
//             </span>
//           </div>
//         </div>

//         <button className="btn-hover px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap">
//           <i className="fas fa-file-alt"></i> View Job Description
//         </button>
//       </div>
//     </div>
//   );
// }

export default function ApplicationHeroCard({
  title,
  company,
  location,
  type,
  salary,
  appliedDate,
  logo
}) {
  const formattedSalary = salary
    ? `₹${salary.min} - ₹${salary.max}`
    : "Not Mentioned";

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        
        <img src={logo} className="w-20 h-20 rounded-xl" />

        <div className="flex-1">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-lg text-gray-700">{company}</p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span>{location}</span>
            <span>{type}</span>
            <span>{formattedSalary}</span>
          </div>

          <div className="mt-3">
            <span className="bg-green-50 px-3 py-1.5 rounded-full text-sm">
              Applied on {appliedDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
