// import React from "react";

// export  function CareerPreferencesCard({
//   preferences = null, // null or { roles, location, ctc, noticePeriod }
//   onAdd = () => {},
//   onEdit = () => {},
// }) {
//   const isEmpty = !preferences || Object.keys(preferences).length === 0;

//   return (
//     <div className="bg-white rounded-2xl p-6 shadow-sm w-full transition-all duration-200">
//       <div className="flex items-start justify-between mb-5">
//         <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
//           <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
//           Career Preferences
//         </h3>

//         {isEmpty ? (
//           <button
//             onClick={onAdd}
//             className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-500 text-white text-xs font-medium hover:bg-blue-600"
//           >
//             + Add
//           </button>
//         ) : (
//           <button
//             onClick={onEdit}
//             className="text-slate-400 hover:text-slate-600 text-sm"
//           >
//             ✏ Edit
//           </button>
//         )}
//       </div>

//       {isEmpty ? (
//         // 🟢 Empty state
//         <div className="flex flex-col items-center justify-center py-8 text-center">
//           <div className="w-10 h-10 bg-yellow-50 flex items-center justify-center rounded-full text-yellow-500 text-xl mb-2">
//             💡
//           </div>
//           <p className="text-sm text-slate-700 font-medium">
//             Set your preferred job role, location, expected CTC, and notice period.
//           </p>
//           <p className="text-xs text-slate-400 mt-1">
//             This helps recruiters find you faster.
//           </p>
//         </div>
//       ) : (
//         // 🔵 Filled state (card view)
//         <div className="space-y-4">
//           {/* Preferred Roles */}
//           <div className="flex gap-3 items-start">
//             <span className="w-9 h-9 bg-blue-50 text-blue-500 flex items-center justify-center rounded-xl text-lg">
//               💡
//             </span>
//             <div>
//               <p className="text-xs text-slate-400 uppercase mb-1">
//                 PREFERRED ROLE
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {preferences.roles?.map((r, i) => (
//                   <span
//                     key={i}
//                     className="inline-flex items-center bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full"
//                   >
//                     {r}
//                   </span>
//                 )) || (
//                   <p className="text-slate-800 font-medium">
//                     {preferences.role || "Not specified"}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Preferred Location */}
//           <div className="flex gap-3 items-start">
//             <span className="w-9 h-9 bg-green-50 text-green-500 flex items-center justify-center rounded-xl text-lg">
//               📍
//             </span>
//             <div>
//               <p className="text-xs text-slate-400 uppercase mb-1">
//                 PREFERRED LOCATION
//               </p>
//               <p className="text-slate-800 font-medium">
//                 {preferences.location || "Not specified"}
//               </p>
//             </div>
//           </div>

//           {/* Expected CTC */}
//           <div className="flex gap-3 items-start">
//             <span className="w-9 h-9 bg-purple-50 text-purple-500 flex items-center justify-center rounded-xl text-lg">
//               💰
//             </span>
//             <div>
//               <p className="text-xs text-slate-400 uppercase mb-1">
//                 EXPECTED CTC
//               </p>
//               <p className="text-slate-800 font-medium">
//                 {preferences.ctc || "Not specified"}
//               </p>
//             </div>
//           </div>

//           {/* Notice Period */}
//           <div className="flex gap-3 items-start">
//             <span className="w-9 h-9 bg-orange-50 text-orange-500 flex items-center justify-center rounded-xl text-lg">
//               🕒
//             </span>
//             <div>
//               <p className="text-xs text-slate-400 uppercase mb-1">
//                 NOTICE PERIOD
//               </p>
//               <p className="text-slate-800 font-medium">
//                 {preferences.noticePeriod || "Not specified"}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React from "react";
// import { FaEdit } from "react-icons/fa";
import { BiEdit } from 'react-icons/bi';

export function CareerPreferencesCard({
  preferences = null,
  onAdd = () => {},
  onEdit = () => {},
}) {
  console.log('pre',preferences);
  const isEmpty =
    !preferences ||
    !preferences.roles ||
    preferences.roles.length === 0 ||
    !preferences.location;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm w-full transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
          Career Preferences
        </h3>

        {isEmpty ? (
          <button
            onClick={onAdd}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-500 text-white text-xs font-medium hover:bg-blue-600"
          >
            + Add
          </button>
        ) : (
          <button
            onClick={onEdit}
            className="cursor-pointer text-slate-700 text-lg"
          >
            <BiEdit></BiEdit>
          </button>
        )}
      </div>

      {/* EMPTY STATE */}
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-10 h-10 bg-yellow-50 flex items-center justify-center rounded-full text-yellow-500 text-xl mb-2">
            💡
          </div>
          <p className="text-sm text-slate-700 font-medium">
            Set your preferred job role, location, expected CTC, and notice
            period.
          </p>
          <p className="text-xs text-slate-400 mt-1">
            This helps recruiters find you faster.
          </p>
        </div>
      ) : (
        <>
          {/* FILLED VIEW */}
          <div className="space-y-4">
            {/* Roles */}
            <div className="flex gap-3 items-start">
              <span className="w-9 h-9 bg-blue-50 text-blue-500 flex items-center justify-center rounded-xl text-lg">
                💡
              </span>
              <div>
                <p className="text-xs text-slate-400 uppercase mb-1">
                  Preferred Roles
                </p>

                <div className="flex flex-wrap gap-2">
                  {preferences.roles?.map((role, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-3 items-start">
              <span className="w-9 h-9 bg-green-50 text-green-500 flex items-center justify-center rounded-xl text-lg">
                📍
              </span>
              <div>
                <p className="text-xs text-slate-400 uppercase mb-1">
                  Preferred Location
                </p>
                <p className="text-slate-800 font-medium">
                  {preferences.location}
                </p>
              </div>
            </div>

            {/* CTC */}
            <div className="flex gap-3 items-start">
              <span className="w-9 h-9 bg-purple-50 text-purple-500 flex items-center justify-center rounded-xl text-lg">
                💰
              </span>
              <div>
                <p className="text-xs text-slate-400 uppercase mb-1">
                  Expected CTC (LPA)
                </p>
                <p className="text-slate-800 font-medium">
                  {preferences.minctc} - {preferences.maxctc} LPA
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
