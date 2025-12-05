import React, { useState } from "react";
import JobsSearchList from "../../components/JobSeekar.jsx/JobsSearchList";
import JobFilterSidebar from "../../components/JobSeekar.jsx/JobFilterSidebar";
import useJobSearch from "../../hooks/useJobSearch";
import { useParams } from "react-router-dom";

import { useSearchParams } from "react-router-dom";
import JobCardSkeleton from "../../components/JobSeekar.jsx/JobCardSkeleton";

const JobSearch = () => {
  const [params] = useSearchParams();

  const title = params.get("title") || "";
  const location = params.get("location") || "";

const [filters, setFilters] = useState({
    jobTitle: title,         // job title
    location: location,    // job location
    jobType: "",
    minSalary: 0,
    experience: "",
    page: 1,
    limit: 10,
  });
  console.log(filters);
  const { data: jobList, isLoading, isError } = useJobSearch(filters);
  console.log("jobsearch-", jobList);

  

  return (
    <>
      {isLoading ? (
        <JobCardSkeleton></JobCardSkeleton>
      ) : (
        <div className="w-full min-h-screen bg-gray-200">
          <div className="flex ml-4 justify-around  py-8">
            <div className="w-[20%] ">
              <JobFilterSidebar filters={filters} setFilters={setFilters}></JobFilterSidebar>
            </div>
            <div className="w-[60%]">
              <JobsSearchList jobs={jobList.jobs}></JobsSearchList>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobSearch;
