import React from "react";

// const TimelineItem = ({ icon, title, date, children, isComplete, highlight }) => (
//   <div className="mb-10 relative">
//     <div className={`absolute -left-9 top-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${isComplete ? "bg-green-500 text-white" : highlight ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600" }`}>
//       <i className={icon}></i>
//     </div>
//     <div className={`${isComplete ? "bg-gray-50" : highlight ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300" : (highlight === false ? "bg-white" : "bg-white") } rounded-xl p-4 border ${isComplete ? "border-gray-200" : "border-gray-300" } ${!isComplete && !highlight ? "opacity-60" : ""}`}>
//       <div className="flex items-start justify-between mb-2">
//         <h4 className={`font-semibold text-lg ${highlight ? "text-gray-900" : "text-gray-900"}`}>{title}</h4>
//         <span className={`text-xs ${highlight ? "text-blue-700" : "text-gray-500"} bg-white px-2 py-1 rounded-md ${highlight ? "font-medium" : ""}`}>{date}</span>
//       </div>
//       <p className="text-sm text-gray-600">{children}</p>
//     </div>
//   </div>
// );

// export default function ApplicationTimeline() {
//   return (
//     <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-fade-slide border border-gray-100">
//       <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//         <i className="fas fa-chart-line text-blue-600"></i> Application Timeline
//       </h3>

//       <div className="relative pl-12">
//         <div className="timeline-line" style={{"--progress":"60%"}}></div>

//         <TimelineItem icon="fas fa-check" title="Application Submitted" date="Mar 15, 2024 - 10:30 AM" isComplete>
//           Your application has been successfully submitted and is under review.
//         </TimelineItem>

//         <TimelineItem icon="fas fa-eye" title="Viewed by Recruiter" date="Mar 16, 2024 - 2:15 PM" isComplete>
//           Sarah Johnson from HR team has reviewed your application.
//           <div className="mt-3 bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
//             <p className="text-sm text-blue-800"><i className="fas fa-comment-dots mr-2"></i>"Impressive portfolio! Moving forward to next stage."</p>
//           </div>
//         </TimelineItem>

//         <TimelineItem icon="fas fa-star" title="Shortlisted" date="Current Stage" highlight>
//           Congratulations! You've been shortlisted for the interview round.
//         </TimelineItem>

//         <TimelineItem icon="fas fa-calendar-alt" title="Interview Scheduled" date="Pending" isComplete={false}>
//           Awaiting interview schedule from the hiring team.
//         </TimelineItem>

//         <TimelineItem icon="fas fa-trophy" title="Final Decision" date="Pending" isComplete={false}>
//           Final hiring decision will be communicated after interviews.
//         </TimelineItem>
//       </div>
//     </div>
//   );
// }
import { FaTrophy } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { TiStarOutline } from "react-icons/ti";
import { IoEye } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
const stages = [
  {
    id: 1,
    title: "Application Submitted",
    date: "Mar 15, 2024 - 10:30 AM",
    desc: "Your application has been successfully submitted and is under review.",
    status: "completed",
    icon: <FaCheck />,
  },
  {
    id: 2,
    title: "Viewed by Recruiter",
    date: "Mar 16, 2024 - 2:15 PM",
    desc: "Sarah Johnson from HR team has reviewed your application.",
    extra: {
      type: "note",
      text: "Impressive portfolio! Moving forward to next stage.",
    },
    status: "completed",
    icon: <IoEye />,
  },
  {
    id: 3,
    title: "Shortlisted",
    date: "Current Stage",
    desc: "Congratulations! You've been shortlisted for the interview round.",
    status: "current",
    icon: <TiStarOutline />,
  },
  {
    id: 4,
    title: "Interview Scheduled",
    date: "Pending",
    desc: "Awaiting interview schedule from the hiring team.",
    status: "pending",
    icon: <AiFillSchedule />,
  },
  {
    id: 5,
    title: "Final Decision",
    date: "Pending",
    desc: "Final hiring decision will be communicated after interviews.",
    status: "pending",
    icon: <FaTrophy></FaTrophy>,
  },
];

import { GoGraph } from "react-icons/go";

export default function ApplicationTimeline() {
  return (
    <>
      <div className="pl-8 shadow-lg">
        <div className="flex gap-6 mb-8 -ml-5">
          <span>
            <GoGraph size={42} className="text-blue-500 font-bold"></GoGraph>
          </span>
          <span className="text-2xl font-bold">Application Timeline</span>
        </div>
        <div className="timeline flex flex-col border-l-4 border-gray-300">
          {stages.map((stage, index) => {
            return (
              <>
                {stage.status === "completed" ? (
                  <div className="step completed border-l-4 border-green-500 px-12 pb-8">
                    <div class="dot bg-green-500 flex items-center justify-around">
                      <span className="text-white">{stage.icon}</span>
                    </div>
                    <div class="content rounded-lg shadow-lg p-4   bg-gray-100">
                      <div className="flex justify-between mb-4">
                        <p className="text-lg font-bold">{stage.title}</p>
                        <div className="px-1 bg-white text-center rounded-lg">
                          <span className="text-gray-500 text-xs">
                            {stage.date}
                          </span>
                        </div>
                      </div>
                      <p>{stage.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    {stage.status === "current" ? (
                      <div className="step current border-l-4 border-green-500 px-12 pb-8">
                        <div class="dot bg-blue-500 flex items-center justify-around">
                          <span className="text-white">{stage.icon}</span>
                        </div>
                        <div class="content rounded-lg shadow-lg p-4   bg-gray-100">
                          <div className="flex justify-between mb-4">
                            <p className="text-lg font-bold">{stage.title}</p>
                            <div className="px-4 bg-white text-center rounded-lg">
                              <span className="text-blue-500 text-xs font-medium">
                                {stage.date}
                              </span>
                            </div>
                          </div>
                          <p>{stage.desc}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="step pending  px-12 pb-8">
                        <div class="dot bg-gray-300 flex items-center justify-around">
                          <span className="text-gray-600">{stage.icon}</span>
                        </div>
                        <div class="content rounded-lg shadow-lg p-4   bg-gray-100">
                          
                          <div className="flex justify-between mb-4">
                            <p className="text-lg font-bold">{stage.title}</p>
                            <div className="px-1 bg-gray-200 text-center rounded-lg">
                              <span className="text-gray-400 text-xs">
                                {stage.date}...
                              </span>
                            </div>
                          </div>
                          <p>{stage.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

// import { AiFillSchedule } from "react-icons/ai";
// import { TiStarOutline } from "react-icons/ti";
// import { IoEye } from "react-icons/io5";
// export default function ApplicationTimeline() {
//   return (
//     <div>
//       <div class="timeline flex flex-col">
//         <div class="step completed border-l-4 border-red-500 px-12 pb-8">
//           <div class="dot bg-green-500 flex items-center justify-around">
//             <IoEye className="text-white"></IoEye>
//           </div>
//           <div class="content">
//             <h4>Application Submitted</h4>
//             <p>Your application was received.</p>
//           </div>
//         </div>

//         <div class="step completed border-l-4 border-red-500 px-12 pb-8">
//           <div class="dot bg-green-500 flex items-center justify-around">
//             <IoEye className="text-white"></IoEye>
//           </div>
//           <div class="content rounded-lg shadow-lg p-4   bg-gray-100">
//             <h4>Viewed by Recruiter</h4>
//             <p>Recruiter viewed your resume.</p>
//           </div>
//         </div>

//         <div class="step current border-l-4 border-red-500 px-12 pb-8">
//           <div class="dot bg-blue-500 flex items-center justify-around">
//             <TiStarOutline size={20} className="text-white"></TiStarOutline>
//           </div>
//           <div class="content rounded-lg shadow-lg p-4   bg-gray-100">
//             <h4>Shortlisted</h4>
//             <p>You have been shortlisted.</p>
//           </div>
//         </div>

//         <div class="step pending border-l-4 border-red-500 px-12 pb-8">
//           <div class="dot bg-gray-300 flex items-center justify-around">
//             <AiFillSchedule></AiFillSchedule>
//           </div>
//           <div class="content rounded-lg shadow-lg p-4   bg-gray-100">
//             <h4>Interview Scheduled</h4>
//             <p>Awaiting interview schedule.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

{
  /* <div class="timeline flex flex-col">
  <div class="step completed border-l-4 border-red-500 px-12 pb-8">
    <div class="dot bg-green-500 flex items-center justify-around">
      <IoEye className="text-white"></IoEye>
    </div>
    <div class="content">
      <h4>Application Submitted</h4>
      <p>Your application was received.</p>
    </div>
  </div>

  <div class="step completed border-l-4 border-red-500 px-12 pb-8">
    <div class="dot bg-green-500 flex items-center justify-around">
      <IoEye className="text-white"></IoEye>
    </div>
    <div class="content rounded-lg shadow-lg p-4   bg-gray-100">
      <h4>Viewed by Recruiter</h4>
      <p>Recruiter viewed your resume.</p>
    </div>
  </div>

  <div class="step current border-l-4 border-red-500 px-12 pb-8">
    <div class="dot bg-blue-500 flex items-center justify-around">
      <TiStarOutline size={20} className="text-white"></TiStarOutline>
    </div>
    <div class="content rounded-lg shadow-lg p-4   bg-gray-100">
      <h4>Shortlisted</h4>
      <p>You have been shortlisted.</p>
    </div>
  </div>

  <div class="step pending border-l-4 border-red-500 px-12 pb-8">
    <div class="dot bg-gray-300 flex items-center justify-around">
      <AiFillSchedule></AiFillSchedule>
    </div>
    <div class="content rounded-lg shadow-lg p-4   bg-gray-100">
      <h4>Interview Scheduled</h4>
      <p>Awaiting interview schedule.</p>
    </div>
  </div>
</div>; */
}
