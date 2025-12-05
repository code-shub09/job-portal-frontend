import React from "react";



// const stages = [
//   {
//     id: 1,
//     title: "Application Submitted",
//     date: "Mar 15, 2024 - 10:30 AM",
//     desc: "Your application has been successfully submitted and is under review.",
//     status: "completed",
//     icon: <FaCheck />,
//   },
//   {
//     id: 2,
//     title: "Viewed by Recruiter",
//     date: "Mar 16, 2024 - 2:15 PM",
//     desc: "Sarah Johnson from HR team has reviewed your application.",
//     extra: {
//       type: "note",
//       text: "Impressive portfolio! Moving forward to next stage.",
//     },
//     status: "completed",
//     icon: <IoEye />,
//   },
//   {
//     id: 3,
//     title: "Shortlisted",
//     date: "Current Stage",
//     desc: "Congratulations! You've been shortlisted for the interview round.",
//     status: "current",
//     icon: <TiStarOutline />,
//   },
//   {
//     id: 4,
//     title: "Interview Scheduled",
//     date: "Pending",
//     desc: "Awaiting interview schedule from the hiring team.",
//     status: "pending",
//     icon: <AiFillSchedule />,
//   },
//   {
//     id: 5,
//     title: "Final Decision",
//     date: "Pending",
//     desc: "Final hiring decision will be communicated after interviews.",
//     status: "pending",
//     icon: <FaTrophy></FaTrophy>,
//   },
// ];

// import { GoGraph } from "react-icons/go";
// import { FaTrophy } from "react-icons/fa";
// import { AiFillSchedule } from "react-icons/ai";
// import { TiStarOutline } from "react-icons/ti";
// import { IoEye } from "react-icons/io5";
// import { FaCheck } from "react-icons/fa";

// const ICONS = {
//     check: <FaCheck />,
//     eye: <IoEye />,
//     star: <TiStarOutline />,
//     calendar: <AiFillSchedule />,
//     trophy: <FaTrophy />
// };

// export default function ApplicationTimeline({timeline}) {
//   return (
//     <>
//       <div className="pl-8 shadow-lg">
//         <div className="flex gap-6 mb-8 -ml-5">
//           <span>
//             <GoGraph size={42} className="text-blue-500 font-bold"></GoGraph>
//           </span>
//           <span className="text-2xl font-bold">Application Timeline</span>
//         </div>
//         <div className="timeline flex flex-col border-l-4 border-gray-300">
//           {timeline.map((stage, index) => {
//             return (
//               <>
//                 {stage.status === "completed" ? (
//                   <div className="step completed border-l-4 border-green-500 px-12 pb-8">
//                     <div class="dot bg-green-500 flex items-center justify-around">
//                       {/* <span className="text-white">{stage.icon}</span> */}
//                        <span className="text-white">{ICONS[stage.icon]}</span>
//                     </div>
//                     <div class="content rounded-lg shadow-lg p-4   bg-gray-100">
//                       <div className="flex justify-between mb-4">
//                         <p className="text-lg font-bold">{stage.title}</p>
//                         <div className="px-1 bg-white text-center rounded-lg">
//                           <span className="text-gray-500 text-xs">
//                             {stage.date}
//                           </span>
//                         </div>
//                       </div>
//                       <p>{stage.desc}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   <div>
//                     {stage.status === "current" ? (
//                       <div className="step current border-l-4 border-green-500 px-12 pb-8">
//                         <div class="dot bg-blue-500 flex items-center justify-around">
//                           <span className="text-white">{ICONS[stage.icon]}</span>
//                         </div>
//                         <div class="content rounded-lg shadow-lg p-4   bg-gray-100">
//                           <div className="flex justify-between mb-4">
//                             <p className="text-lg font-bold">{stage.title}</p>
//                             <div className="px-4 bg-white text-center rounded-lg">
//                               <span className="text-blue-500 text-xs font-medium">
//                                 {stage.date}
//                               </span>
//                             </div>
//                           </div>
//                           <p>{stage.desc}</p>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="step pending  px-12 pb-8">
//                         <div class="dot bg-gray-300 flex items-center justify-around">
//                           <span className="text-white">{ICONS[stage.icon]}</span>
//                         </div>
//                         <div class="content rounded-lg shadow-lg p-4   bg-gray-100">
                          
//                           <div className="flex justify-between mb-4">
//                             <p className="text-lg font-bold">{stage.title}</p>
//                             <div className="px-1 bg-gray-200 text-center rounded-lg">
//                               <span className="text-gray-400 text-xs">
//                                 {stage.date}...
//                               </span>
//                             </div>
//                           </div>
//                           <p>{stage.desc}</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }




// export default function ApplicationTimeline({ timeline }) {
//   return (
//     <div className="shadow p-6 border rounded-xl">
//       <h2 className="text-2xl font-bold mb-6">Application Timeline</h2>

//       <div className="border-l-4 border-gray-300 pl-6 space-y-8">
//         {timeline.map((step, index) => (
//           <div key={index} className="relative">

//             {/* Dot */}
//             <div
//               className={`w-10 h-10 rounded-full flex justify-center items-center absolute -left-6 top-1
//                 ${step.status === "completed" ? "bg-green-500" :
//                   step.status === "current" ? "bg-blue-500" :
//                   "bg-gray-300"}
//               `}
//             >
//               <span className="text-white">{ICONS[step.icon]}</span>
//             </div>

//             {/* Card */}
//             <div className="bg-gray-50 p-4 rounded-lg shadow">
//               <div className="flex justify-between">
//                 <h3 className="font-bold">{step.title}</h3>

//                 <span className="text-sm text-gray-500">
//                   {step.date ? new Date(step.date).toLocaleString() : "Pending"}
//                 </span>
//               </div>

//               <p className="text-gray-600 text-sm mt-1">
//                 {step.desc || "No additional info"}
//               </p>
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { GoGraph } from "react-icons/go";
import { FaTrophy, FaCheck } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { TiStarOutline } from "react-icons/ti";
import { IoEye } from "react-icons/io5";

const ICONS = {
  check: <FaCheck />,
  eye: <IoEye />,
  star: <TiStarOutline />,
  calendar: <AiFillSchedule />,
  trophy: <FaTrophy />,
};

export default function ApplicationTimeline({ timeline }) {

  // FIND current stage index
  const currentIndex = timeline.findIndex(t => t.status === "current");

  // DECORATE timeline
  const decorated = timeline.map((item, index) => {
    let uiStatus = "pending";

    if (index < currentIndex) uiStatus = "completed";
    else if (index === currentIndex) uiStatus = "current";

    return { ...item, uiStatus };
  });

  return (
    <div className="pl-8 shadow-lg">
      <div className="flex gap-6 mb-8 -ml-5">
        <GoGraph size={42} className="text-blue-500 font-bold" />
        <span className="text-2xl font-bold">Application Timeline</span>
      </div>

      <div className="timeline flex flex-col border-l-4 border-gray-300">
        {decorated.map((stage, index) => (
          <div
            key={index}
            className={`step px-12 pb-8 ${
              stage.uiStatus === "completed"
                ? "border-l-4 border-green-500"
                : stage.uiStatus === "current"
                ? "border-l-4 border-blue-500"
                : "border-l-4 border-gray-300"
            }`}
          >
            {/* DOT */}
            <div
              className={`dot w-8 h-8 rounded-full flex items-center justify-center mb-3 ${
                stage.uiStatus === "completed"
                  ? "bg-green-500"
                  : stage.uiStatus === "current"
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
            >
              <span className="text-white">{ICONS[stage.icon]}</span>
            </div>

            {/* CARD */}
            <div className="content rounded-lg shadow-lg p-4 bg-gray-100">
              <div className="flex justify-between mb-4">
                <p className="text-lg font-bold">{stage.title}</p>
                <div className="px-2 bg-white text-center rounded-lg">
                  <span className="text-gray-500 text-xs">
                    {stage.date ? new Date(stage.date).toLocaleString() : "Pending"}
                  </span>
                </div>
              </div>
              <p>{stage.desc || "No description available"}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
