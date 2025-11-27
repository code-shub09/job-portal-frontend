import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Calendar,
  Users,
  Edit,
} from "lucide-react";
import { useParams } from "react-router-dom";
import UseSIngleJobPost from "../../hooks/UseSIngleJobPost";

const JobDetails = () => {
  console.log('job deatils new')
  const [activeTab, setActiveTab] = useState("details");

  const { jobId } = useParams();
  console.log("jobId,", jobId);

  const { data: job, isLoading } = UseSIngleJobPost(jobId);

  console.log("job", job);

  const applicants = [
    { name: "Sarah Johnson", email: "sarah@email.com", status: "Reviewing" },
    { name: "Michael Chen", email: "mchen@email.com", status: "Interview" },
    { name: "Priya Singh", email: "priya@email.com", status: "Hired" },
  ];

  return (
    <>
      {isLoading ? (
        <div>loading ---</div>
      ) : (
        <div className="p-8 bg-gray-50 min-h-screen">
          {/* Back button */}
          <div className="flex items-center gap-2 text-gray-600 mb-4 cursor-pointer hover:text-blue-600">
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to all jobs</span>
          </div>

          {/* Job Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900 mb-3">
                {job.title}
              </h1>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                  {job.status}
                </span>
                <span className="border border-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                  {job.department}
                </span>
                <span className="border border-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                  {job.jobType}
                </span>
              </div>

              <div className="flex flex-wrap items-center text-gray-600 text-sm gap-5">
                <div className="flex items-center gap-1">
                  <MapPin size={16} /> San Francisco, CA
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase size={16} />
                  {job.salaryRange.min} -{job.salaryRange.max}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} /> Posted 10/1/2025
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} /> {job.stats.totalApplications}
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <Edit size={16} /> Edit Job
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab("details")}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "details"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Job Details
            </button>
            <button
              onClick={() => setActiveTab("applicants")}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "applicants"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Applicants ({job.stats.totalApplications})
            </button>
          </div>

          {/* Content */}
          {activeTab === "details" ? (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Job Description
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {job.description}
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Requirements
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Proficient in React.js, Tailwind CSS, and REST APIs</li>
                <li>Strong understanding of UI/UX design principles</li>
                <li>Minimum 3 years of experience in frontend development</li>
              </ul>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {/* Applicants ({applicants.length}) */}
              </h2>
              <p className="text-gray-500 mb-6">
                Review and manage candidate applications for this position.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {/* {applicants.map((applicant, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {applicant.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{applicant.email}</p>
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    applicant.status === "Interview"
                      ? "bg-green-100 text-green-700"
                      : applicant.status === "Reviewing"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {applicant.status}
                </span>
              </div>
            ))} */}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default JobDetails;
