import React, { useState } from "react";
import ScheduleInterviewModal2 from "./ScheduleInterviewModal2";
// Tailwind should be configured globally in your project.
// If you're importing a local Tailwind file, uncomment the next line.
// import "./tailwind.css";

export default function JobDetailsPage1() {
  const summaryTop = [
    { icon: "fas fa-briefcase", label: "Job Type", value: "Full-Time", color: "bg-blue-100 text-blue-600" },
    { icon: "fas fa-user-tie", label: "Experience", value: "2-4 Years", color: "bg-teal-100 text-teal-600" },
    { icon: "fas fa-map-marker-alt", label: "Location", value: "New York, NY", color: "bg-purple-100 text-purple-600" },
    { icon: "fas fa-dollar-sign", label: "Salary Range", value: "$45K - $55K", color: "bg-green-100 text-green-600" },
  ];

  const summaryBottom = [
    { icon: "fas fa-calendar", label: "Posted Date", value: "March 15, 2024", color: "bg-orange-100 text-orange-600" },
    { icon: "fas fa-users", label: "Vacancies", value: "3 Positions", color: "bg-indigo-100 text-indigo-600" },
  ];

  const appStats = [
    { icon: "fas fa-file-alt", value: 500, label: "Total Applications", color: "text-blue-600" },
    { icon: "fas fa-star", value: 150, label: "Shortlisted", color: "text-yellow-500" },
    { icon: "fas fa-times-circle", value: 280, label: "Rejected", color: "text-red-500" },
    { icon: "fas fa-calendar-check", value: 45, label: "Interview Scheduled", color: "text-purple-600" },
    { icon: "fas fa-check-circle", value: 8, label: "Hired", color: "text-green-600" },
  ];

  const responsibilities = [
    "Respond to customer inquiries via phone, email, and chat",
    "Resolve customer issues and complaints in a timely manner",
    "Maintain accurate customer records and documentation",
    "Collaborate with team members to improve processes",
  ];

  const qualifications = [
    { icon: "fas fa-graduation-cap", text: "Bachelor's degree or equivalent experience" },
    { icon: "fas fa-clock", text: "2-4 years of customer service experience" },
    { icon: "fas fa-comments", text: "Excellent verbal and written communication skills" },
    { icon: "fas fa-laptop", text: "Proficiency in CRM software and Microsoft Office" },
    { icon: "fas fa-puzzle-piece", text: "Strong problem-solving and analytical skills" },
    { icon: "fas fa-users", text: "Ability to work in a team environment" },
  ];

  const applicants = [
    { initials: "JS", color: "bg-blue-100 text-blue-600", name: "John Smith", email: "john.smith@email.com", exp: "3 Years", status: { label: "Shortlisted", bg: "bg-yellow-100", text: "text-yellow-800" } },
    { initials: "AD", color: "bg-purple-100 text-purple-600", name: "Alice Davis", email: "alice.davis@email.com", exp: "4 Years", status: { label: "Applied", bg: "bg-blue-100", text: "text-blue-800" } },
    { initials: "MJ", color: "bg-green-100 text-green-600", name: "Michael Johnson", email: "michael.j@email.com", exp: "2 Years", status: { label: "Rejected", bg: "bg-red-100", text: "text-red-800" } },
    { initials: "SW", color: "bg-teal-100 text-teal-600", name: "Sarah Wilson", email: "sarah.wilson@email.com", exp: "5 Years", status: { label: "Shortlisted", bg: "bg-yellow-100", text: "text-yellow-800" } },
  ];

  const interviewSummary = [
    { icon: "fas fa-users", title: "Group Session", date: "March 25, 2024", info: "15 candidates confirmed", bg: "bg-blue-50", color: "text-blue-600" },
    { icon: "fas fa-user", title: "One-to-One", date: "March 26–28, 2024", info: "20 candidates scheduled", bg: "bg-purple-50", color: "text-purple-600" },
    { icon: "fas fa-clock", title: "Time Slots", date: "March 29, 2024", info: "10 candidates scheduled", bg: "bg-teal-50", color: "text-teal-600" },
  ];
   const [IsSehButtonClick,setIsSehButtonClick]=useState(false);
  function handleSchInterview(){
    if (IsSehButtonClick) {
      setIsSehButtonClick(false);
      return;
    }
    setIsSehButtonClick(true);

  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header (no sidebar) */}
      <header className="sticky top-0 bg-white shadow-sm border-b border-gray-200 z-20">
        <div className="px-6 md:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-800">Job Details – Customer Support Associate</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <i className="fas fa-circle text-green-500 text-xs mr-2" />
              Active
            </span>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
              <i className="fas fa-edit mr-2" />
              Edit Job
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">
              <i className="fas fa-times mr-2" />
              Close Job Posting
            </button>
          </div>
        </div>
      </header>

      {/* Page container */}
      <main className="px-6 md:px-8 py-8 space-y-8">
        {/* Job Summary */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Job Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {summaryTop.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color}`}>
                  <i className={item.icon} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium text-gray-800">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200">
            {summaryBottom.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color}`}>
                  <i className={item.icon} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium text-gray-800">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Overview */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Application Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
            {appStats.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <i className={`${item.icon} ${item.color} mr-2`} />
                  <span className="text-2xl font-bold text-gray-800">{item.value}</span>
                </div>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              <i className="fas fa-eye mr-2" />
              View All Applications
            </button>
            <button className="flex-1 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium" onClick={handleSchInterview}>
              <i className="fas fa-calendar-plus mr-2" />
              Schedule Interview
            </button>
          </div>
        </section>

        {/* Description & Requirements */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Description */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Job Description</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We are seeking a dedicated Customer Support Associate to join our growing team. You will be responsible for providing exceptional
                customer service and support to our clients.
              </p>
              <h4 className="font-medium text-gray-800">Key Responsibilities:</h4>
              <ul className="space-y-2 ml-4">
                {responsibilities.map((text, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3 text-sm" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Requirements</h2>
            <div className="space-y-4 text-gray-600">
              <h4 className="font-medium text-gray-800">Required Qualifications:</h4>
              <ul className="space-y-2 ml-4">
                {qualifications.map((q, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className={`${q.icon} text-blue-500 mt-1 mr-3 text-sm`} />
                    <span>{q.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Latest Applicants */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Latest Applicants</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium">View All 500 Applications →</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Candidate Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Experience</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((a, idx) => (
                  <tr key={idx} className={`hover:bg-gray-50 ${idx !== applicants.length - 1 ? "border-b border-gray-100" : ""}`}>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${a.color} rounded-full flex items-center justify-center`}>
                          <span className="font-medium">{a.initials}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{a.name}</p>
                          <p className="text-sm text-gray-500">{a.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{a.exp}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${a.status.bg} ${a.status.text}`}>
                        {a.status.label}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-blue-600 hover:text-blue-700 font-medium">View Profile</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Interview Summary */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Interview Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interviewSummary.map((item, idx) => (
              <div key={idx} className={`${item.bg} rounded-lg p-4`}>
                <div className="flex items-center space-x-3 mb-2">
                  <i className={`${item.icon} ${item.color}`} />
                  <span className="font-medium text-gray-800">{item.title}</span>
                </div>
                <p className="text-sm text-gray-600">{item.date}</p>
                <p className="text-sm text-gray-600">{item.info}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              <i className="fas fa-calendar-alt mr-2" />
              View Interview Sessions
            </button>
          </div>
        </section>
      </main>
      {IsSehButtonClick &&(<div className="fixed inset-0 bg-black/50 z-40">

          <ScheduleInterviewModal2 handleSchInterview={handleSchInterview}></ScheduleInterviewModal2>
      </div>)}
    </div>
  );
}
