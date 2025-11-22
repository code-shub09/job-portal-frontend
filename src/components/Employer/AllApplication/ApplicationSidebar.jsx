import React from "react";
import { FaFolderOpen, FaStar, FaRegEye, FaCalendarAlt, FaTimesCircle, FaTrophy } from "react-icons/fa";

const ApplicationSidebar = ({ stats = {} }) => {
  const {
    all = 0,
    newApps = 0,
    viewed = 0,
    shortlisted = 0,
    interview = 0,
    rejected = 0,
    hired = 0,
  } = stats;

  return (
    <div className="w-64 bg-white shadow-md rounded-2xl p-5 h-full flex flex-col gap-8">

      {/* ---------- TOP SECTION ---------- */}
      <div>
        <button className="w-full flex items-center justify-between bg-blue-50 text-blue-700 font-semibold py-3 px-4 rounded-xl shadow-sm">
          <span className="flex items-center gap-2">
            <FaFolderOpen />
            All Applications
          </span>
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-lg">{all}</span>
        </button>

        <div className="mt-4 flex flex-col gap-3">

          {/* New */}
          <StatusItem
            icon={<FaStar />}
            label="New"
            count={newApps}
            color="text-blue-500"
          />

          {/* Viewed */}
          <StatusItem
            icon={<FaRegEye />}
            label="Viewed"
            count={viewed}
            color="text-purple-500"
          />

          {/* Shortlisted */}
          <StatusItem
            icon={<FaStar />}
            label="Shortlisted"
            count={shortlisted}
            color="text-yellow-500"
          />

          {/* Interview */}
          <StatusItem
            icon={<FaCalendarAlt />}
            label="Interview"
            count={interview}
            color="text-pink-500"
          />

          {/* Rejected */}
          <StatusItem
            icon={<FaTimesCircle />}
            label="Rejected"
            count={rejected}
            color="text-red-500"
          />

          {/* Hired */}
          <StatusItem
            icon={<FaTrophy />}
            label="Hired"
            count={hired}
            color="text-green-600"
          />
        </div>
      </div>

      {/* ---------- FILTER SECTION ---------- */}
      <div className="pt-6 border-t border-gray-200">
        <p className="font-semibold text-gray-700 mb-4">Filters</p>

        <FilterItem label="Job Roles" />
        <FilterItem label="Experience" />
        <FilterItem label="Date Range" />
      </div>
    </div>
  );
};

/*** STATUS ITEM COMPONENT ***/
const StatusItem = ({ icon, label, count, color }) => (
  <button className="w-full flex items-center justify-between hover:bg-gray-50 px-2 py-2 rounded-lg transition-all">
    <span className={`flex items-center gap-2 ${color} font-medium`}>
      {icon}
      <span className="text-gray-700">{label}</span>
    </span>
    <span className="text-xs bg-gray-100 px-2 py-1 rounded-lg text-gray-600 font-semibold">
      {count}
    </span>
  </button>
);

/*** FILTER ITEM ***/
const FilterItem = ({ label }) => (
  <button className="w-full flex items-center justify-between text-gray-600 hover:text-gray-900 py-2">
    <span>{label}</span>
    <span>›</span>
  </button>
);

export default ApplicationSidebar;
