import React from 'react'
import ApplicationSuccessHeader from '../../components/JobSeekar.jsx/ApplicationSuccessHeade'
import RecommendedJobsSection from '../../components/JobSeekar.jsx/RecommendedJobsSection';

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

const AplplySucess1 = () => {
  return (
    <div className='flex flex-col w-[90%] m-auto mt-6'>
        <ApplicationSuccessHeader></ApplicationSuccessHeader>
        <RecommendedJobsSection jobs={jobsData}></RecommendedJobsSection>
      
    </div>
  )
}

export default AplplySucess1
