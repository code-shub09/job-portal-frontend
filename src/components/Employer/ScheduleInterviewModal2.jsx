import React from "react";
import { Calendar, CheckCircle, XCircle, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ScheduleInterviewModal2({handleSchInterview}) {
    const navigate=useNavigate();
    function handleContinueSched(){
        navigate('/jobs/schedule-interview');
    }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative animate-fadeIn">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="text-blue-600" size={18} />
              <h2 className="text-lg font-semibold text-gray-800">
                Schedule Interviews for Shortlisted Candidates
              </h2>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              You currently have <span className="font-medium text-gray-700">10 shortlisted candidates</span> for this position.
              Would you like to review your shortlist before scheduling interviews, or continue with them?
            </p>
          </div>
          <button
            className="text-gray-400 hover:text-gray-600 transition cursor-pointer"
            aria-label="Close"
            onClick={handleSchInterview}
          >
            <XCircle size={20} />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t my-4" />

        {/* Candidate Overview */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-600">
              CANDIDATE OVERVIEW
            </h3>
            <p className="text-xs text-gray-400">Last updated 2 days ago</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Users className="text-blue-600" size={16} />
                <span className="text-gray-700 text-sm">Shortlisted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">10</span>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={16} />
                <span className="text-gray-700 text-sm">Interview Scheduled</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">2</span>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                  In Progress
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <XCircle className="text-red-500" size={16} />
                <span className="text-gray-700 text-sm">Rejected</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">4</span>
                <span className="text-xs text-red-500 bg-red-100 px-2 py-0.5 rounded-full">
                  Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Avatars */}
        <div className="flex items-center gap-2 mt-5">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://i.pravatar.cc/40?img=${i + 10}`}
              alt="Candidate"
              className="w-8 h-8 rounded-full border border-white shadow-sm"
            />
          ))}
          <div className="w-8 h-8 flex items-center justify-center text-sm bg-gray-100 text-gray-600 rounded-full border">
            +6
          </div>
          <p className="text-sm text-gray-500 ml-1">
            Shortlisted candidates ready for interview
          </p>
        </div>

        {/* Notice */}
        <div className="mt-6 border border-blue-100 bg-blue-50 p-3 rounded-lg">
          <p className="text-xs text-blue-700 leading-relaxed">
            Only shortlisted candidates will be included in the interview scheduling process. 
            You can modify your shortlist anytime from the Applications section.
          </p>
        </div>

        {/* Progress Section */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>INTERVIEW SETUP PROGRESS</span>
            <span>Step 1 of 3</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div className="h-2 w-1/3 bg-blue-600 rounded-full transition-all"></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span className="text-blue-600 font-medium">Confirm Shortlist</span>
            <span>Create Slots</span>
            <span>Send Invites</span>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button className="px-4 py-2 text-gray-700 text-sm border rounded-lg hover:bg-gray-100 transition">
            Review Shortlist
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={handleContinueSched}>
            Continue Scheduling
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
