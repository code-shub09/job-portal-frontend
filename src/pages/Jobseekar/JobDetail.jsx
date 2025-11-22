import React, { useEffect, useState } from "react";
import JobHeader from "../../components/JobSeekar.jsx/JobHeader";
import JobDetails from "../../components/JobSeekar.jsx/JobDetails";
import JobOverview from "../../components/JobSeekar.jsx/JobOverview";
import CompanyCard from "../../components/JobSeekar.jsx/CompanyCard";
import RecommendedJobs from "../../components/JobSeekar.jsx/RecommendedJobs";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaArrowLeftLong } from "react-icons/fa6";
import SkillsRequired from "../../components/JobSeekar.jsx/SkillsRequired";
import AboutCompany from "../../components/JobSeekar.jsx/AboutCompany";
import ApplyJobModal from "../../components/JobSeekar.jsx/ApplyJobModal";
import { useProfile } from "../../hooks/useProfile";
const JobDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { data: profileData, isLoading } = useProfile();
  if (!isLoading) {
    console.log("profile shubham", profileData.profile);
  }
  // console.log("profile apply", profileData);
  // if profile is fetched or profile object is there , if fetching is not done than assign empty array
  // tanstack query are hooks , they triger re-render
  const resumeList = profileData?.profile?.resumeFile
    ? {
        name: profileData.profile.resumeFile.fileName,
        size: profileData.profile.resumeFile.fileSize,
        url: profileData.profile.resumeFile.url,
        uploadedAt: profileData.profile.resumeFile.uploadedAt,
      }
    : null;

  const [Job, setJob] = useState(null);
  console.log("single details search ....");
  const [skillsRequired, setskillsRequired] = useState([]);
  const [IsApplyClicked, setIsApplyClicked] = useState(false);
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

        const skillz = response.data.job.skillsRequired;
        setskillsRequired(skillz);
        console.log("skillllll", skillsRequired);
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
          <div>
            {" "}
            <button className="flex gap-x-4">
              {" "}
              <FaArrowLeftLong className="text-slate-600"></FaArrowLeftLong>{" "}
              <span className="text-base/3 text-slate-500 font-semibold">
                Back to Jobs
              </span>{" "}
            </button>
          </div>
          <JobHeader job={Job}></JobHeader>
          <CompanyCard job={Job}></CompanyCard>
          <div className="flex justify-between">
            <div className="w-[60%]">
              <JobDetails job={Job}></JobDetails>
              <SkillsRequired skills={Job.skillsRequired}></SkillsRequired>
              <AboutCompany
                companyDescription={Job.postedBy.companyDescription}
              ></AboutCompany>
            </div>
            <div className="w-[25%]">
              <JobOverview setIsApplyClicked={setIsApplyClicked}></JobOverview>
            </div>
          </div>

          <RecommendedJobs></RecommendedJobs>
        </div>
      ) : (
        <div>loading...</div>
      )}

      {IsApplyClicked && (
        <>
          {isLoading ? (
            // show small loading modal
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 text-white text-lg">
              Loading your profile…
            </div>
          ) : (
            <div className="fixed inset-0 z-50 bg-black/35">
              <ApplyJobModal
                setIsApplyClicked={setIsApplyClicked}
                resumePdf={resumeList}
                job={Job}
              ></ApplyJobModal>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default JobDetail;
