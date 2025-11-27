// import React from "react";
// import { useJobApplications } from "../../hooks/useJobApplications"; 
// import { FiBriefcase } from "react-icons/fi";
// import { ApplicationCard } from "../../components/JobSeekar.jsx/SingleApplication/ApplicationCard";

// export default function AllApplications() {
//   const { data:applicationList, isLoading, error } = useJobApplications();
//    console.log('job all applications:',applicationList);

//   if (error) return <p className="text-center text-red-600">Failed to load applications</p>;
//  console.log('job all applications:',applicationList);
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-2xl font-semibold mb-4">My Applications</h1>

//         {/* SKELETON LOADER */}
//         {isLoading && <div>loading....</div>}

//         {/* NO APPLICATIONS */}
//         {!isLoading && applicationList?.applications?.length === 0 && (
//           <div className="bg-white p-10 rounded-xl shadow text-center text-gray-500">
//             <FiBriefcase className="text-5xl mx-auto mb-3 opacity-60" />
//             <p>You have not applied to any jobs yet.</p>
//           </div>
//         )}
        
//         {/* APPLICATION LIST */}
//         <div className="space-y-4">
//           {applicationList?.applications?.map((app) => (
//             <ApplicationCard key={app._id} app={app} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useJobApplications } from "../../hooks/useJobApplications"; 
import { FiBriefcase } from "react-icons/fi";
import { ApplicationCard } from "../../components/JobSeekar.jsx/SingleApplication/ApplicationCard";

export default function AllApplications() {
  const { data: applicationList, isLoading, error } = useJobApplications();

  if (error)
    return <p className="text-center text-red-600">Failed to load applications</p>;

  const apps = applicationList?.applications || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-2xl font-semibold mb-4">My Applications</h1>

        {/* Loading */}
        {isLoading && <p>Loading...</p>}

        {/* Empty State */}
        {!isLoading && apps.length === 0 && (
          <div className="bg-white p-10 rounded-xl shadow text-center text-gray-500">
            <FiBriefcase className="text-5xl mx-auto mb-3 opacity-60" />
            <p>You have not applied to any jobs yet.</p>
          </div>
        )}

        {/* List */}
        <div className="space-y-4">
          {apps.map((app) => (
            <ApplicationCard key={app._id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
}
