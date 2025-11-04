import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiMapPin, FiClock, FiHome, FiHeart } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { FaMoneyBill } from 'react-icons/fa';
const JobsSearchList = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
   
  const query = useQuery();
  const [jobs, setJobs] = useState([]);
  const jobTitle = query.get("title") || "";
  const location = query.get("location") || "";
  const navigate=useNavigate();
  function singleJobHandler(id){
    console.log('id::',id);

    navigate(`/jobseekar/job-search/${id}`);

  }

    useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.post(
          "https://job-portal-server-lr93.onrender.com/employer/job-search",
          { jobTitle, location },
          { withCredentials: true }
        );
        setJobs(response.data.jobs || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [jobTitle, location]);

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          Recommended Jobs
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex flex-col overflow-x-auto gap-5 scrollbar-hide pb-2">
          {jobs.map((job,index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white border border-slate-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex flex-row justify-between items-start">
                  <div className="w-[75%]">
                    <div className="flex  gap-x-2">
                      {/* Job Info */}
                      <div className="flex gap-x-2">
                        <div className="flex justify-between items-start mb-3">
                          <img
                            src={job.logo}
                            alt={job.company}
                            className="w-6 h-6 rounded-lg object-contain"
                          />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                            {job.title}
                          </h3>
                          <p className="text-slate-500 text-sm mb-2">
                            {job.company}
                          </p>
                        </div>
                      </div>

                      {/* Top Row: Logo + Save Icon */}
                    </div>

                    {/* Meta */}
                    <div className="flex  flex-wrap gap-1 text-sm gap-x-4 text-slate-600 mb-3">
                      <span className="flex items-center gap-1">
                        <FiMapPin /> {job.location}
                      </span>

                      <span className="flex items-center gap-1">
                        <FiHome /> {job.remote}
                      </span>
                      <span className=" font-normal flex  item-center gap-2">
                       <FaMoneyBill></FaMoneyBill> <span className="text-green-600 text-sm/3">{job.salaryRange.min}-{job.salaryRange.max}</span>
                      </span>
                    </div>
                    <hr className="border-t border-slate-300" />
                    {/* Description */}
                    <p className="text-slate-600 text-sm mb-3 line-clamp-3">
                      {job.description}
                    </p>
                    {/* skills */}
                    <div className="flex gap-x-5">
                      {job.skillsRequired.map(
                        (skill, index) => {
                          return (
                            <div className="text-sm font-normal text-slate-500 ">
                              {skill}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button className="  text-blue-500 cursor-pointer text-basic font-medium" onClick={()=>{singleJobHandler(job._id)}}>
                      <span>View Details </span>
                      <MdKeyboardArrowRight
                        size={26}
                        className="inline"
                      ></MdKeyboardArrowRight>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSearchList;
