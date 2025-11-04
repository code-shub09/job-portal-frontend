import React from "react";
import { FiMapPin, FiClock, FiHome, FiHeart } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function RecommendedJobs() {
  const jobs = [
    {
      id: 1,
      title: "Senior Product Designer",
      company: "TechFlow Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      remote: "Remote OK",
      salary: "$120K - $160K",
      match: "Great match",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "InnovateX Labs",
      location: "Austin, TX",
      type: "Full-time",
      remote: "Hybrid",
      salary: "$90K - $130K",
      match: "High demand",
      logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "CloudNova",
      location: "Remote",
      type: "Full-time",
      remote: "Remote Only",
      salary: "$100K - $150K",
      match: "Strong match",
      logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "PixelForge",
      location: "Seattle, WA",
      type: "Contract",
      remote: "Remote OK",
      salary: "$80K - $100K",
      match: "New listing",
      logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
    },
    {
      id: 5,
      title: "Project Manager",
      company: "Visionary Corp.",
      location: "New York, NY",
      type: "Full-time",
      remote: "On-site",
      salary: "$110K - $140K",
      match: "Recommended",
      logo: "https://cdn.worldvectorlogo.com/logos/microsoft.svg",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          Recommended Jobs
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-5 scrollbar-hide pb-2">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex-shrink-0 w-72 bg-white border border-slate-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all duration-200"
            >
              <div className="flex  flex-row-reverse gap-x-2">
                {/* Job Info */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                    {job.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-2">{job.company}</p>
                </div>

                {/* Top Row: Logo + Save Icon */}
                <div className="flex justify-between items-start mb-3">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-6 h-6 rounded-lg object-contain"
                  />
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-col flex-wrap gap-1 text-sm justify-between text-slate-600 mb-3">
                <span className="flex items-center gap-1">
                  <FiMapPin /> {job.location}
                </span>

                <span className="flex items-center gap-1">
                  <FiHome /> {job.remote}
                </span>
              </div>
              <hr className="border-t border-slate-300" />
              {/* Description */}
              <p className="text-slate-600 text-sm mb-3 line-clamp-3">
                We're looking for a talented {job.title} to join our team and
                help shape the future of our platform jkjkjkjksdssddsfdsfds...
              </p>

              {/* Salary + Match */}
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-semibold">
                  {job.salary}
                </span>
                <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                  {job.match}
                </span>
              </div>

              <div className="flex">
                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <button className="  text-blue-500   text-basic font-medium">
                    <span>View Details </span>
                    <MdKeyboardArrowRight
                      size={26}
                      className="inline"
                    ></MdKeyboardArrowRight>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
