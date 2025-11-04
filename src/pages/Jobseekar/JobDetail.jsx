import React, { useEffect, useState } from "react";
import JobHeader from "../../components/JobSeekar.jsx/JobHeader";
import JobDetails from "../../components/JobSeekar.jsx/JobDetails";
import JobOverview from "../../components/JobSeekar.jsx/JobOverview";
import CompanyCard from "../../components/JobSeekar.jsx/CompanyCard";
import RecommendedJobs from "../../components/JobSeekar.jsx/RecommendedJobs";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaArrowLeftLong } from 'react-icons/fa6';
import SkillsRequired from "../../components/JobSeekar.jsx/SkillsRequired";
import AboutCompany from "../../components/JobSeekar.jsx/AboutCompany";
const JobDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [Job, setJob] = useState(null);
  console.log("single details search ....");
  const [skillsRequired,setskillsRequired]=useState([]);

  useEffect(() => {
    console.log("single details search 2....");
    async function FetchJobDetails() {
      try {
        const response = await axios.get(
          `http://localhost:4300/jobseekar/job-search/${id}`,
          { headers: { "Content-Type": "application/json" } }
        );
        console.log("job::---", response.data.job);
        const jobZ = response.data.job;

        setJob(response.data.job);
       
        const skillz=response.data.job.skillsRequired;
        setskillsRequired(skillz)
        console.log('skillllll',skillsRequired);
        setLoading(false);
      } catch (error) {
        console.log("job details error:", error);
      }
    }

    FetchJobDetails();
  }, []);

  return (
    <div>
      {!loading ? (
        <div className="flex flex-col gap-y-4 w-[80%] m-auto mt-4">
            <div> <button className="flex gap-x-4"> <FaArrowLeftLong className="text-slate-600"></FaArrowLeftLong> <span className="text-base/3 text-slate-500 font-semibold">Back to  Jobs</span> </button></div>
          <JobHeader job={Job}></JobHeader>
          <CompanyCard job={Job}></CompanyCard>
          <div className="flex justify-between">
            <div className="w-[60%]">
              <JobDetails job={Job}></JobDetails>
              <SkillsRequired skills={Job.skillsRequired}></SkillsRequired>
              <AboutCompany companyDescription={Job.postedBy.companyDescription}></AboutCompany>

            </div>
            <div className="w-[25%]">
              <JobOverview></JobOverview>
            </div>
          </div>

          <RecommendedJobs></RecommendedJobs>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default JobDetail;
