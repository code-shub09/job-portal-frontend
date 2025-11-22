import React from 'react'
import ApplicationTimeline from '../../components/JobSeekar.jsx/SingleApplication/ApplicationTimeline'
import ApplicationHeroCard from '../../components/JobSeekar.jsx/SingleApplication/ApplicationHeroCard'
import ApplicationSubmissionDetails from '../../components/JobSeekar.jsx/SingleApplication/ApplicationSubmissionDetails'
import ApplicationPersonalInfo from '../../components/JobSeekar.jsx/SingleApplication/ApplicationPersonalInfo'
import RecommendedJobsSection from '../../components/JobSeekar.jsx/RecommendedJobsSection'
const jobsData = [
  {
    _id: 1,
    title: "Senior Product Designer",
    companyName: "NovaWorks Labs",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    location: "Bengaluru, India",
    salaryRange: "₹18–24 LPA",
    skills: ["Figma", "User Research", "Design Systems"]
  },
   {
    _id: 2,
    title: "Senior Product Designer",
    companyName: "NovaWorks Labs",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    location: "Bengaluru, India",
    salaryRange: "₹18–24 LPA",
    skills: ["Figma", "User Research", "Design Systems"]
  },
   {
    _id: 3,
    title: "Senior Product Designer",
    companyName: "NovaWorks Labs",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    location: "Bengaluru, India",
    salaryRange: "₹18–24 LPA",
    skills: ["Figma", "User Research", "Design Systems"]
  },
   {
    _id: 4,
    title: "Senior Product Designer",
    companyName: "NovaWorks Labs",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    location: "Bengaluru, India",
    salaryRange: "₹18–24 LPA",
    skills: ["Figma", "User Research", "Design Systems"]
  },
   {
    _id: 5,
    title: "Senior Product Designer",
    companyName: "NovaWorks Labs",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    location: "Bengaluru, India",
    salaryRange: "₹18–24 LPA",
    skills: ["Figma", "User Research", "Design Systems"]
  },
];

const SingleApplicationDetails = () => {
  return (
    <div className='w-[90%] m-auto flex flex-col gap-6'>
        <ApplicationHeroCard></ApplicationHeroCard>
        <div className='flex justify-between'>

           <div className='w-[65%]'> <ApplicationTimeline></ApplicationTimeline></div>
           <div className='w-[30%] flex flex-col gap-6'>
             <ApplicationSubmissionDetails></ApplicationSubmissionDetails> 
             <ApplicationPersonalInfo></ApplicationPersonalInfo>
           </div>

           
           
        </div>
       <RecommendedJobsSection jobs={jobsData}></RecommendedJobsSection>

        
      
    </div>
  )
}

export default SingleApplicationDetails
