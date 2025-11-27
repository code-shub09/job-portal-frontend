import React, { useState } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaFilePdf } from "react-icons/fa6";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ShortlistModal from "./ShortlistModal";
dayjs.extend(relativeTime);

export default function ApplicantCard2({ applicantX ,jobId}) {
  const [open, setOpen] = useState(false);
  console.log(applicantX);
  const {
    applicant,
    name,
    isFresher,
    currentTitle = "devloper",
    experience,
    location = "Delhi",
    resume,
    status,
    dates,
    educationSnapshot,
  } = applicantX;

  const candidate={
    status,
    profilePic:applicant.profilePic,
    firstName:applicant.firstName,
    lastName:applicant.lastName,
    role:'Web Developer'
  }
  const statusColor =
    {
      new: "bg-blue-100 text-blue-700",
      shortlisted: "bg-yellow-200 text-yellow-700",
      viewed: "bg-purple-100 text-purple-700",
    }[status] || "bg-gray-100 text-gray-600";

  // Limit skills display
  //   const visibleSkills = skills.slice(0, 4);
  //   const moreSkills = skills.length - visibleSkills.length;

  return (
    <div className="flex w-full flex-col items-start justify-between bg-white border-l-4 border-gray-400 p-2 shadow-sm  transition-all cursor-pointer mb-1 hover:border-blue-600 hover:ml-0.5 hover:bg-blue-100  duration-300">
      {/* Left Section */}

      {/* actions and status */}
      <div className=" w-full flex flex-col gap-2">
        <div className="flex  w-full justify-between ">
          {/* profile and name */}
          <div className=" w-[20%]   flex flex-col justify-between">
            <div className="w-fit   h-[61%] text-end flex flex-col justify-end">
              <img
                src={applicant.profilePic}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="px-2 w-fit  bg-purple-600 rounded-3xl text-white text-center ">
              {status}
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col gap-1 w-[62%]  ">
            {/* name and role */}
            <div className="">
              <p className="text-lg/snug font-semibold  ">
                {applicant.firstName.charAt(0).toUpperCase() +
                  applicant.firstName.slice(1)}{" "}
                {applicant.lastName.charAt(0).toUpperCase() +
                  applicant.lastName.slice(1)}
              </p>
              {/* currentTitle */}
              {currentTitle ? (
                <p className="text-gray-600 text-base/1 font-semibold my-1.5">
                  {currentTitle}
                </p>
              ) : (
                <div className="bg-green-200 px-4 rounded-xl text-green-700 w-fit font-normal text-sm ml-1">
                  Fresher
                </div>
              )}

              {location && (
                <p className="flex text-gray-500 text-sm gap-1 w-fit -ml-1 mt-2">
                  <MdLocationOn /> {location}
                </p>
              )}
            </div>
            <div className="">
              {!experience.isFresher && (
                <div>
                  <p className="text-xs text-gray-400 font-normal">
                    Experience snapshot
                  </p>
                  <p className="text-xs text-gray-700 mt-3">
                    <span className="font-medium  py-1 px-2 rounded-xl bg-gray-500/10">
                      {experience.totalExperienceYears} years exp
                    </span>{" "}
                    •{" "}
                    <span className="font-medium  py-1 px-2 rounded-xl bg-gray-500/10">
                      CTC: {experience.currentCTC} LPA
                    </span>{" "}
                    •{" "}
                    <span className="font-medium  py-1 px-2 rounded-xl bg-gray-500/10">
                      Notice: {experience.noticePeriodDays} days
                    </span>
                  </p>
                </div>
              )}

              {/* For Fresher */}
              {experience.isFresher && (
                <div className="mt-1 text-sm text-gray-700">
                  <p className="text-xs text-gray-400 font-normal">Education</p>

                  {/* <p>
                Projects: {projects} • Internship: {internships}
              </p> */}
                  <p className="font-medium">
                    {educationSnapshot.courseName}{" "}
                    {educationSnapshot.specialization}
                  </p>
                  <p className="text-sm text-gray-400 font-medium">
                    <span>{educationSnapshot.collageName} </span>
                    {/* <span>
                      {education.marksType} : {education.marks}{" "}
                    </span> */}
                    <span> Graduated {educationSnapshot.graduationYear}</span>
                  </p>
                </div>
              )}

              {/* Skills */}
            </div>
          </div>
          {/* actions */}
          <div className="max-w-[22%] w-fit  flex flex-col justify-between ">
            <div className="text-end">
              <span className="font-medium text-xs text-gray-400 relative -top-1.5">
                {dayjs(dates.appliedAt).format("DD MMM YYYY, hh:mm A")}
              </span>
            </div>

            <div className="flex  items-end gap-3">
              {/* Bookmark Btn */}
              <a href={resume.url}>
                <button className="text-gray-600 hover:text-red-600 p-1 rounded-lg bg-gray-500/10">
                  <FaFilePdf size={20} />
                </button>
              </a>

              <button className="text-gray-500 hover:text-yellow-500  p-1 rounded-lg bg-gray-500/10" onClick={()=>{setOpen(true)}}>
                {<FaStar size={20} />}
              </button>

              {/* Resume Icon */}
              <button className="text-gray-600 hover:text-red-600 p-1 rounded-lg bg-gray-500/10">
                <RxCross2 size={20}></RxCross2>
              </button>

              {/* Open Profile */}
              <button className="text-gray-600 hover:text-blue-600 p-1 rounded-lg bg-gray-500/10">
                <FiExternalLink size={20} />
              </button>
            </div>
          </div>
        </div>
        {open && (
          <div className="fixed inset-0 bg-black/60 flex items-center h-screen w-screen justify-center z-50">
            <ShortlistModal candidate={candidate} applicationId={applicantX._id} jobId={jobId} setOpen={setOpen}></ShortlistModal>
          </div>
        )}
      </div>

      {/* Right Actions */}
    </div>
  );
}
