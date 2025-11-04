import React, { useState } from "react";
// import { scheduleInterview } from "../api/applicationApi"; // your API call
import { X } from "lucide-react"; // optional close icon

const ScheduleInterviewModal = ({ 
  isOpen, 
  onClose, 
  applicant,   // { name, email, _id }
  token        // employer JWT token
  ,SetIsScheduleButClicked
}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [submitting, setSubmitting] = useState(false);

  // if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Combine date + time to one ISO string for backend
      const interviewDate = new Date(`${date}T${time}`);
      await scheduleInterview(applicant._id, { date: interviewDate }, token);

      alert("Interview scheduled successfully!");
      onClose();
    } catch (err) {
      alert("Failed to schedule interview.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center pl-12 justify-center bg-black/70 ">
      <div className="bg-white rounded-lg shadow-xl w-[420px] p-6 relative">
        {/* Close button */}
        <button
          onClick={()=>{SetIsScheduleButClicked(false)}}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-black-800 mb-1">
          Schedule Interview
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Schedule an interview with <span className="font-medium">{applicant?.name}</span>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Applicant Info */}
          <div>
            <label className="text-sm text-black-200 font-medium">Applicant</label>
            <input
              type="text"
              value={applicant?.name || "John Smith"}
              disabled
              className="mt-1 w-full border border-gray-300 rounded-sm px-3 py-2 bg-white-100 text-gray-700"
            />
          </div>

          <div>
            <label className="text-sm text-black-200 font-medium">Email</label>
            <input
              type="email"
              value={applicant?.email || "john@example.com"}
              disabled
              className="mt-1 w-full border border-gray-300 rounded-sm px-3 py-2 bg-white-100 text-gray-700"
            />
          </div>

          {/* Date Picker */}
          <div>
            <label className="text-sm text-black-200 font-medium">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="mt-1 w-full border border-gray-300 rounded-sm px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Time Picker */}
          <div>
            <label className="text-sm text-black-200 font-medium">Select Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="mt-1 w-full border border-gray-300 rounded-sm px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-sm border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-2 rounded-sm bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:bg-blue-300"
            >
              {submitting ? "Scheduling..." : "Schedule Interview"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleInterviewModal;