import { FaDownload } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineWork, MdOutlineCalendarMonth } from "react-icons/md";

export default function ApplicantCard({
  applicant = {},
  onViewProfile,
  onViewApplication,
  onShortlist,
  onReject,
}) {
  const {
    name,
    profilePic,
    location,
    currentTitle,
    experience,
    noticePeriod,
    currentCTC,
    skills = [],
    resume = {},
    status,
    appliedAt,
  } = applicant;

  // Show first 4 skills only
  const visibleSkills = skills.slice(0, 4);
  const extraSkills = skills.length - 4;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 shadow-sm hover:shadow-md transition">
      {/* LEFT: PROFILE PIC */}
      <div className="flex-shrink-0">
        {profilePic ? (
          <img
            src={profilePic}
            alt="profile"
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <FaUserCircle className="w-14 h-14 text-gray-400" />
        )}
      </div>

      {/* MIDDLE CONTENT */}
      <div className="flex-1 flex flex-col gap-2">
        {/* NAME + ROLE */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">
            {currentTitle || "Fresher / Entry-Level Applicant"}{" "}
            {location && <span className="text-gray-400">• {location}</span>}
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
            <MdOutlineWork size={16} />{" "}
            {experience?.isFresher ? "Fresher" : `${experience?.totalExperienceYears} yrs`}
          </span>

          <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
            <MdOutlineCalendarMonth size={16} />{" "}
            {experience?.noticePeriodDays ? `${experience.noticePeriodDays} Days` : "Immediate"}
          </span>

          {!experience?.isFresher && (
            <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
              💰 {currentCTC ? `${currentCTC} LPA` : "—"}
            </span>
          )}
        </div>

        {/* SKILLS PREVIEW */}
        <div className="flex flex-wrap gap-2 text-xs mt-1">
          {visibleSkills.map((s, idx) => (
            <span
              key={idx}
              className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-medium"
            >
              {s}
            </span>
          ))}

          {extraSkills > 0 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
              +{extraSkills} more
            </span>
          )}
        </div>

        {/* RESUME PREVIEW */}
        <div className="flex items-center gap-2 mt-2">
          <FaDownload className="text-gray-500" />
          <a
            href={resume?.url}
            target="_blank"
            className="text-sm text-blue-600 underline"
          >
            {resume?.fileName || "Resume.pdf"}
          </a>
          <span className="text-xs text-gray-500">
            ({Math.round((resume?.fileSize || 0) / 1024)} KB)
          </span>
        </div>

        {/* META INFO */}
        <div className="flex items-center justify-between mt-2">
          <span
            className={`px-2 py-1 rounded-md text-xs font-semibold 
              ${
                status === "applied"
                  ? "bg-gray-200 text-gray-700"
                  : status === "viewed"
                  ? "bg-blue-100 text-blue-700"
                  : status === "shortlisted"
                  ? "bg-green-100 text-green-700"
                  : status === "rejected"
                  ? "bg-red-100 text-red-700"
                  : status === "hired"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-gray-100 text-gray-600"
              }
            `}
          >
            {status}
          </span>

          <span className="text-xs text-gray-400">
            {new Date(appliedAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex flex-col justify-between items-end gap-3">
        <button
          onClick={onViewProfile}
          className="text-sm text-blue-600 font-medium hover:underline"
        >
          View Profile
        </button>

        <button
          onClick={onViewApplication}
          className="text-sm text-gray-700 font-medium hover:underline flex items-center gap-1"
        >
          <IoEye /> View Application
        </button>

        <div className="flex gap-2 mt-4">
          <button
            onClick={onShortlist}
            className="px-3 py-1 bg-green-600 text-white rounded-md text-xs hover:bg-green-700"
          >
            Shortlist
          </button>

          <button
            onClick={onReject}
            className="px-3 py-1 bg-red-500 text-white rounded-md text-xs hover:bg-red-600"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
