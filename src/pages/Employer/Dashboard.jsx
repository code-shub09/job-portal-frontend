import React from "react";
import { Briefcase, Users, CalendarCheck, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Jobs",
      value: 12,
      change: "+3 this month",
      icon: <Briefcase className="text-blue-600 w-6 h-6" />,
    },
    {
      title: "Total Applicants",
      value: 284,
      change: "+48 this week",
      icon: <Users className="text-blue-600 w-6 h-6" />,
    },
    {
      title: "Interviews Scheduled",
      value: 16,
      change: "4 today",
      icon: <CalendarCheck className="text-blue-600 w-6 h-6" />,
    },
    {
      title: "Positions Filled",
      value: 8,
      change: "+2 this month",
      icon: <TrendingUp className="text-blue-600 w-6 h-6" />,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">
            Welcome back! Here’s your recruitment overview.
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm">
          View Analytics
        </button>
      </div>

      {/* Stats Cards (Flex layout) */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition w-full md:w-[22%]"
          >
            <div>
              <p className="text-sm text-gray-600 font-medium">{item.title}</p>
              <h2 className="text-3xl font-bold text-gray-800">{item.value}</h2>
              <p className="text-green-600 text-sm font-medium mt-1">
                {item.change}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Recent Job Postings */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Job Postings
        </h3>

        <div className="divide-y divide-gray-100">
          {[
            {
              title: "Senior React Developer",
              applicants: 45,
              status: "Active",
              date: "3 days ago",
            },
            {
              title: "UI/UX Designer",
              applicants: 22,
              status: "Closed",
              date: "1 week ago",
            },
            {
              title: "Backend Engineer (Node.js)",
              applicants: 38,
              status: "Active",
              date: "5 days ago",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 hover:bg-gray-50 transition"
            >
              <div>
                <h4 className="font-medium text-gray-800">{job.title}</h4>
                <p className="text-sm text-gray-500">
                  {job.applicants} Applicants · {job.date}
                </p>
              </div>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  job.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {job.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
