import React from "react";


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

export default function ApplicationTimeline({timeLine}) {
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
