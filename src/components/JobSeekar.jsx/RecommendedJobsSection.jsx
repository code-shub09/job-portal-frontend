import React from "react";
import { Bookmark } from "lucide-react";

const RecommendedJobsSection = ({ jobs }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl sm:text-xl lg:text-xl font-bold text-gray-900">
          Similar Jobs You May Like
        </h2>

        <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base hidden sm:block">
          View All Jobs →
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Curated based on your skills, experience, and the job you just applied to.
      </p>

      {/* JOBS GRID */}
      <div className="flex flex-wrap gap-10">
        {jobs?.map((job) => (
          <div
            key={job._id}
            className="w-full sm:w-[48%] lg:w-[30%] bg-white border border-gray-200 rounded-xl  px-4 py-2 hover:shadow-xl 
            transition-all duration-300 hover:border-blue-600 cursor-pointer group"
          >
            {/* TOP ROW: LOGO + BOOKMARK */}
            <div className="flex items-start justify-between mb-4">
              <img
                src={job.companyLogo}
                alt={job.companyName}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <Bookmark className="w-5 h-5 text-gray-400 hover:text-blue-600" />
            </div>

            {/* JOB TITLE */}
            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600">
              {job.title}
            </h3>

            <p className="text-gray-600 font-medium">{job.companyName}</p>

            {/* LOCATION */}
            <div className="flex items-center text-sm text-gray-500 mt-2">
              <i className="fa-solid fa-location-dot mr-2 text-gray-400"></i>
              {job.location}
            </div>

            {/* SALARY */}
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <i className="fa-solid fa-indian-rupee-sign mr-2 text-gray-400"></i>
              {job.salaryRange}
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-4 mb-4">
              {job.skills?.slice(0, 3).map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* APPLY BUTTON */}

            <div className="flex justify-end w-full mt-4 mb-6">
                 <button className="w-[33%] bg-blue-600 text-white font-semibold py-2 px-3 rounded-3xl hover:bg-blue-700 transition-colors">
              Apply Now
            </button>

            </div>
           
          </div>
        ))}
      </div>

      {/* MOBILE VIEW ALL BUTTON */}
      <button className="w-full mt-6 text-blue-600 hover:text-blue-700 font-semibold sm:hidden">
        View All Jobs →
      </button>
    </div>
  );
};

export default RecommendedJobsSection;
