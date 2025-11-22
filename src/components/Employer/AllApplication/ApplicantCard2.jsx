import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
export default function ApplicantCard2({ applicant }) {
  const {
    name,
    avatar,
    isFresher,
    currentTitle,
    experienceYears,
    currentCTC,
    expectedCTC,
    noticePeriod,
    skills = [],
    location,
    summary,
    status,
    education,
    projects,
    internships,
    bookmarked,
  } = applicant;

  const statusColor =
    {
      new: "bg-blue-100 text-blue-700",
      shortlisted: "bg-yellow-200 text-yellow-700",
      viewed: "bg-purple-100 text-purple-700",
    }[status] || "bg-gray-100 text-gray-600";

  // Limit skills display
  const visibleSkills = skills.slice(0, 4);
  const moreSkills = skills.length - visibleSkills.length;

  return (
    <div className="flex w-full flex-col items-start justify-between bg-white border-l-4 border-gray-400 p-2 shadow-sm  transition-all cursor-pointer mb-1 hover:border-blue-600 hover:ml-0.5 hover:bg-blue-100  duration-300">
      {/* Left Section */}

      {/* actions and status */}
      <div className=" w-full flex flex-col gap-2">
        <div className="flex  w-full justify-between ">
          {/* profile and name */}
          <div className=" w-[20%]   flex flex-col">
            <div className="w-fit">
              <img
                src={avatar}
                alt={name}
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
            <div className="mt-2">
              <p className="text-lg/snug font-semibold  ">{name}</p>
              {/* currentTitle */}
              {currentTitle ? (
                <p className="text-gray-600 text-base/4 font-semibold my-1.5">
                  {currentTitle}
                </p>
              ) : (
                <div className="bg-green-200 px-4 rounded-xl text-green-700 w-fit font-normal text-sm ml-1">
                  Fresher
                </div>
              )}

              {location && (
                <p className="flex text-gray-500 text-sm gap-1 w-fit ">
                  <MdLocationOn /> {location}
                </p>
              )}
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-1 w-[62%]  ">
            <p className="px-2 w-fit  bg-purple-600 rounded-3xl text-white text-center">
              {applicant.status}
            </p>
            <div className="">
              {!isFresher && (
                <div>
                  <p className="text-xs text-gray-400 font-normal">
                    Experience snapshot
                  </p>
                  <p className="text-xs text-gray-700 my-2 ml-2">
                    <span className="font-medium  py-1 px-2 rounded-xl bg-gray-500/10">
                      {experienceYears} years exp
                    </span>{" "}
                    •{" "}
                    <span className="font-medium  py-1 px-2 rounded-xl bg-gray-500/10">
                      CTC: {currentCTC} LPA
                    </span>{" "}
                    •{" "}
                    <span className="font-medium  py-1 px-2 rounded-xl bg-gray-500/10">
                      Notice: {noticePeriod} days
                    </span>
                  </p>
                </div>
              )}

              {/* For Fresher */}
              {isFresher && (
                <div className="mt-1 text-sm text-gray-700">
                  <p className="text-xs text-gray-400 font-normal">Education</p>

                  {/* <p>
                Projects: {projects} • Internship: {internships}
              </p> */}
                  <p className="font-medium">{education.courseName}</p>
                  <p className="text-sm text-gray-400 font-medium">
                    <span>{education.collageName} .</span>
                    <span>
                      {education.marksType} : {education.marks}{" "}
                    </span>
                    <span> Graduated {education.graduationYear}</span>
                  </p>
                </div>
              )}

              {/* Skills */}
              <div>
                <p className="text-xs text-gray-400 font-normal">Top Skills</p>
                <div className="flex flex-wrap gap-2 mt-1 ml-2">
                  {visibleSkills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {s}
                    </span>
                  ))}

                  {moreSkills > 0 && (
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                      +{moreSkills} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* actions */}
          <div className="max-w-[18%] w-fit  flex flex-col justify-between">
            <div className="text-end">
              <span className="font-medium text-xs text-gray-400 relative -top-1.5">
                2h ago
              </span>
            </div>

            <div className="flex  items-end gap-3">
              {/* Bookmark Btn */}
              <button className="text-gray-500 hover:text-yellow-500  p-1 rounded-lg bg-gray-500/10">
                {bookmarked ? <FaStar size={20} /> : <FaRegStar size={20} />}
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
      </div>

      {/* Right Actions */}
    </div>
  );
}
