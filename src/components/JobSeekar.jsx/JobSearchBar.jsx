import axios from "axios";
import React, { useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function JobSearchBar() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const navigate=useNavigate();



  const handleSubmit = async(e) => {
    e.preventDefault();
    navigate(`/jobseekar/job-search?title=${jobTitle}&location=${location}`);
    let data={jobTitle:jobTitle,location:location}

    console.log("Searching for:", jobTitle, location);
    try {
        const response=await axios.post('https://job-portal-server-lr93.onrender.com/employer/job-search',data,{withCredentials:true,headers:{"Content-Type":'application/json'}});
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
  };

  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[95%]  bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          Find Your Perfect Job
        </h2>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 mb-5"
        >
          {/* Job Title Input */}
          <div className="flex items-center flex-1 bg-white border border-slate-200 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
            <FiSearch className="text-slate-400 text-lg mr-2" />
            <input
              type="text"
              placeholder="Job title or keywords"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full outline-none text-slate-700 placeholder:text-slate-400"
            />
          </div>

          {/* Location Input */}
          <div className="flex items-center flex-1 bg-white border border-slate-200 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
            <FiMapPin className="text-slate-400 text-lg mr-2" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full outline-none text-slate-700 placeholder:text-slate-400"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium rounded-2xl px-8 py-3 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <FiSearch className="text-lg" />
            Search Jobs
          </button>
        </form>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mt-4">
          {["Remote", "Full-time", "$80k+", "Senior Level"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-slate-700 bg-slate-100 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
