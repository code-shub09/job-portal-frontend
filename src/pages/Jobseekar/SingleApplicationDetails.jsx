// import React from 'react'
// import ApplicationTimeline from '../../components/JobSeekar.jsx/SingleApplication/ApplicationTimeline'
// import ApplicationHeroCard from '../../components/JobSeekar.jsx/SingleApplication/ApplicationHeroCard'
// import ApplicationSubmissionDetails from '../../components/JobSeekar.jsx/SingleApplication/ApplicationSubmissionDetails'
// import ApplicationPersonalInfo from '../../components/JobSeekar.jsx/SingleApplication/ApplicationPersonalInfo'
// import RecommendedJobsSection from '../../components/JobSeekar.jsx/RecommendedJobsSection'
// import { useParams } from 'react-router-dom'
// const jobsData = [
//   {
//     _id: 1,
//     title: "Senior Product Designer",
//     companyName: "NovaWorks Labs",
//     companyLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
//     location: "Bengaluru, India",
//     salaryRange: "₹18–24 LPA",
//     skills: ["Figma", "User Research", "Design Systems"]
//   },
//    {
//     _id: 2,
//     title: "Senior Product Designer",
//     companyName: "NovaWorks Labs",
//     companyLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
//     location: "Bengaluru, India",
//     salaryRange: "₹18–24 LPA",
//     skills: ["Figma", "User Research", "Design Systems"]
//   },
//    {
//     _id: 3,
//     title: "Senior Product Designer",
//     companyName: "NovaWorks Labs",
//     companyLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
//     location: "Bengaluru, India",
//     salaryRange: "₹18–24 LPA",
//     skills: ["Figma", "User Research", "Design Systems"]
//   },
//    {
//     _id: 4,
//     title: "Senior Product Designer",
//     companyName: "NovaWorks Labs",
//     companyLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
//     location: "Bengaluru, India",
//     salaryRange: "₹18–24 LPA",
//     skills: ["Figma", "User Research", "Design Systems"]
//   },
//    {
//     _id: 5,
//     title: "Senior Product Designer",
//     companyName: "NovaWorks Labs",
//     companyLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
//     location: "Bengaluru, India",
//     salaryRange: "₹18–24 LPA",
//     skills: ["Figma", "User Research", "Design Systems"]
//   },
// ];

// const SingleApplicationDetails = () => {
//   const {appId}=useParams();
//   return (
//     <div className='w-[90%] m-auto flex flex-col gap-6'>
//         <ApplicationHeroCard></ApplicationHeroCard>
//         <div className='flex justify-between'>

//            <div className='w-[65%]'> <ApplicationTimeline></ApplicationTimeline></div>
//            <div className='w-[30%] flex flex-col gap-6'>
//              <ApplicationSubmissionDetails></ApplicationSubmissionDetails> 
//              <ApplicationPersonalInfo></ApplicationPersonalInfo>
//            </div>

           
           
//         </div>
//        <RecommendedJobsSection jobs={jobsData}></RecommendedJobsSection>

        
      
//     </div>
//   )
// }

// export default SingleApplicationDetails



// import React from 'react';
// import { useParams } from 'react-router-dom';


// import ApplicationTimeline from '../../components/JobSeekar.jsx/SingleApplication/ApplicationTimeline';
// import ApplicationHeroCard from '../../components/JobSeekar.jsx/SingleApplication/ApplicationHeroCard';
// import ApplicationSubmissionDetails from '../../components/JobSeekar.jsx/SingleApplication/ApplicationSubmissionDetails';
// import ApplicationPersonalInfo from '../../components/JobSeekar.jsx/SingleApplication/ApplicationPersonalInfo';
// import RecommendedJobsSection from '../../components/JobSeekar.jsx/RecommendedJobsSection';
// import { useApplication } from '../../hooks/useApplication';

// export default function SingleApplicationDetails() {
//   const { appId } = useParams();
//   const { data: application, isLoading, error } = useApplication(appId);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Failed to load application.</p>;

//   const job = application.job;

//   return (
//     <div className="w-[90%] m-auto flex flex-col gap-6">

//       {/* HEADER CARD */}
//       <ApplicationHeroCard
//         title={job.title}
//         company={job.companyName}
//         location={job.location}
//         type={job.type}
//         salary={job.salaryRange}
//         appliedDate={application.appliedAt}
//         logo={job.logo}
//       />

//       <div className="flex justify-between">
        
//         {/* TIMELINE - using backend stages */}
//         <div className="w-[65%]">
//           <ApplicationTimeline timeLine={application.timeline} />
//         </div>

//         {/* RIGHT SIDE DETAILS */}
//         <div className="w-[30%] flex flex-col gap-6">
//           <ApplicationSubmissionDetails
//             resumeUrl={application.resumeUrl}
//             coverLetter={application.coverLetter}
//           />

//           <ApplicationPersonalInfo
//             info={application.personalInfo}
//           />
//         </div>
//       </div>

//       {/* Recommended Jobs */}
//       <RecommendedJobsSection jobs={application.recommendedJobs || []} />
//     </div>
//   );
// }

import React from "react";
import { useParams } from "react-router-dom";
// import { useApplication } from "../../hooks/useApplication";

import ApplicationHeroCard from "../../components/JobSeekar.jsx/SingleApplication/ApplicationHeroCard";
import ApplicationTimeline from "../../components/JobSeekar.jsx/SingleApplication/ApplicationTimeline";
import ApplicationSubmissionDetails from "../../components/JobSeekar.jsx/SingleApplication/ApplicationSubmissionDetails";
import ApplicationPersonalInfo from "../../components/JobSeekar.jsx/SingleApplication/ApplicationPersonalInfo";
import RecommendedJobsSection from "../../components/JobSeekar.jsx/RecommendedJobsSection";
import { useApplication } from "../../hooks/useApplication";
import logo1 from "../../assets/defaultCompanyLogo/logo1.jpg";
const SingleApplicationDetails = () => {
  const { appId } = useParams();
  const { data, isLoading, error } = useApplication(appId);

  if (isLoading) return <p className="p-10">Loading...</p>;
  if (error) return <p>Error loading application</p>;
  
  const app = data;

  return (
    <div className="w-[90%] m-auto flex flex-col gap-6">

      <ApplicationHeroCard
        title={app.job.title}
        company={app.job.companyName}
        location={app.job.location}
        salary={app.job.salaryRange}
        type={app.job.type}
        appliedDate={new Date(app.appliedAt).toDateString()}
        logo={logo1}
      />

      <div className="flex justify-between">
        <div className="w-[65%]">
          <ApplicationTimeline timeLine={app.timeline} />
        </div>

        <div className="w-[30%] flex flex-col gap-6">
          <ApplicationSubmissionDetails resume={app.resume} coverLetter={app.coverLetter} />
          <ApplicationPersonalInfo info={app.personalInfo} />
        </div>
      </div>

      <RecommendedJobsSection jobs={app.recommendedJobs} />
    </div>
  );
};

export default SingleApplicationDetails;
