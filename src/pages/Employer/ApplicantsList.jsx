import React, { useState } from "react";
import { Calendar, Eye } from "lucide-react";
import ScheduleInterviewModal from "../../components/Employer/ScheduleInterviewModal";

const ApplicantsList = () => {
  const applicants = [
    {
      name: "John Smith",
      email: "john@example.com",
      experience: "6 years",
      appliedDate: "2024-01-10",
      status: "Under Review",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      experience: "8 years",
      appliedDate: "2024-01-09",
      status: "Interview Scheduled",
    },
    {
      name: "Mike Chen",
      email: "mike@example.com",
      experience: "5 years",
      appliedDate: "2024-01-08",
      status: "Under Review",
    },
  ];
  const [IsScheduleButClicked, SetIsScheduleButClicked] = useState(false);
  // status badge colors
  const getStatusClass = (status) => {
    switch (status) {
      case "Interview Scheduled":
        return "bg-purple-100 text-purple-700";
      case "Under Review":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <>
      <div className="bg-white w-full rounded-xl shadow-sm  p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Applicants ({applicants.length})
        </h2>

        {/* Table */}
        <div className="overflow-x-auto scrollbar-hide pl-6">
          <table className="w-[80%] text-sm text-left text-gray-600  ">
            <thead className="bg-gray-50 text-gray-700 text-sm border-b">
              <tr>
                <th className="px-4 py-3 font-medium text-nowrap">Name </th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Experience</th>
                <th className="px-4 py-3 font-medium text-nowrap">
                  Applied Date
                </th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {applicants.map((applicant, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="px-4 text-nowrap py-3 font-medium text-gray-900">
                    {applicant.name} 
                  </td>
                  <td className="px-4 py-3">{applicant.email}</td>
                  <td className="px-4 py-3">{applicant.experience}</td>
                  <td className="px-4 py-3">{applicant.appliedDate}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full text-nowrap font-medium ${getStatusClass(
                        applicant.status
                      )}`}
                    >
                      {applicant.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="flex  text-nowrap items-center gap-1 border border-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-100 transition text-sm">
                        <Eye size={14} /> View Details
                      </button>
                      <button
                        className="flex items-center text-nowrap gap-1 border border-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-100 transition text-sm"
                        onClick={() => {
                          SetIsScheduleButClicked(true);
                        }}
                      >
                        <Calendar size={14} /> Schedule Interview
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {IsScheduleButClicked && (
        <div>
          <ScheduleInterviewModal
            SetIsScheduleButClicked={SetIsScheduleButClicked}
          />
        </div>
      )}
    </>
  );
};

export default ApplicantsList;
