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
const dummyProfile = {
  user: "67a01cbd4f2bcd0012a34f11",
  firstName: "Aarav",
  lastName: "Mehta",

  profilePic: "https://i.pravatar.cc/150?img=56",

  phoneNo: "9876543210",
  isPhoneVerified: true,

  about: "Passionate frontend developer eager to build beautiful and fast user experiences.",

  education: {
    class12th: {
      boardName: "CBSE",
      medium: "English",
      percentage: "89%",
      passingYear: "2020"
    },
    graduation: {
      courseName: "B.Tech",
      specialization: "Computer Science",
      gradeSystem: "cgpa",
      courseDuration: { startYear: 2020, endYear: 2024 },
      courseType: "Full",
      collegeName: "Lovely Professional University"
    },
    postgraduation: {
      courseName: "",
      specailaisation: "",
      gradeSystem: "",
      courseDuration: { startYear: "", endYear: "" },
      courseType: "",
      collegeName: ""
    }
  },

  WorkExperience: [
    {
      companyName: "TechNova Solutions",
      designation: "Frontend Developer",
      workFrom: { month: "June", year: 2022 },
      workTill: { month: "July", year: 2024 },
      currentlyWorking: false,
      currentCTC: "6 LPA",
      description: "Worked on React based dashboards and UI systems."
    }
  ],

  socialLinks: {
    linkedin: "https://linkedin.com/in/aaravmehta",
    github: "https://github.com/AaravTech",
    portfolio: "https://aarav.dev"
  },

  prefferedRoles: ["Frontend Developer", "React Developer"],
  skills: ["React", "JavaScript", "Tailwind", "CSS", "Git"],
  prefferedLocation: ["Bangalore", "Remote"],

  resumeFile: {
    url: "https://example.com/resume.pdf",
    public_id: "resume_aarav",
    fileName: "Aarav_Mehta_Resume.pdf",
    fileSize: 145678,
    uploadedAt: "2024-11-04T10:00:00"
  }
};

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
                profile={dummyProfile}
              ></ApplyJobModal>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default JobDetail;
