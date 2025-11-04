import React, { useState } from "react";

const PRIMARY_ROLES = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Analyst",
  "Data Scientist",
  "UI/UX Designer",
  "Product Manager",
  "DevOps Engineer",
  "QA Engineer",
  "Marketing Manager",  "Sales",
  "Data Entry",
  "Digital Marketing",
  "Web Development",
  "Graphic Design",
  "Marketing",
  "Human Resources (HR)",
  "General Management",
  "Social Media Marketing",
  "Finance",
  "Software Development",
  "Telecalling",
  "Market/Business Research",
  "Content Writing",
  "Accounts",
  "Project Management",
  "Operations",
  "Client Servicing",
  "Programming",
  "Teaching",
  "Data Science",
  "Video Making/Editing",
  "Interior Design",
  "Python/Django Development",
  "UI/UX Design",
  "Software Testing",
];

// extra from second image
const EXTRA_ROLES = [
  "Sales",
  "Data Entry",
  "Digital Marketing",
  "Web Development",
  "Graphic Design",
  "Marketing",
  "Human Resources (HR)",
  "General Management",
  "Social Media Marketing",
  "Finance",
  "Software Development",
  "Telecalling",
  "Market/Business Research",
  "Content Writing",
  "Accounts",
  "Project Management",
  "Operations",
  "Client Servicing",
  "Programming",
  "Teaching",
  "Data Science",
  "Video Making/Editing",
  "Interior Design",
  "Python/Django Development",
  "UI/UX Design",
  "Software Testing",
];

export default function JobPreferencesStep({
  onBack = () => {},
  onComplete = () => {},
}) {
  // store selected roles
  const [selectedRoles, setSelectedRoles] = useState([
    "Frontend Developer",
    "Backend Developer",
  ]);

  // skills
  const [skills, setSkills] = useState(["css"]);
  const [skillInput, setSkillInput] = useState("");

  // resume (UI only)
  const [resumeName, setResumeName] = useState("");

  const toggleRole = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role)
        ? prev.filter((r) => r !== role)
        : [...prev, role]
    );
  };

  const handleAddSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed) return;
    if (!skills.includes(trimmed)) {
      setSkills((prev) => [...prev, trimmed]);
    }
    setSkillInput("");
  };

  const handleSkillKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete({
      preferredRoles: selectedRoles,
      skills,
      resume: resumeName || null,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-sm w-full"
    >
      {/* heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Job Preferences
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Tell us about your ideal job to get better recommendations.
        </p>
      </div>

      {/* preferred roles */}
      <div className="mb-6">
        <p className="text-sm font-medium text-slate-900 mb-1">
          Preferred Job Roles
        </p>
        <p className="text-xs text-slate-400 mb-3">
          Select all roles that interest you
        </p>
        <div className="flex flex-wrap gap-3">
          {PRIMARY_ROLES.map((role) => {
            const active = selectedRoles.includes(role);
            return (
              <button
                key={role}
                type="button"
                onClick={() => toggleRole(role)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition
                  ${
                    active
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                  }
                `}
              >
                {role}
              </button>
            );
          })}
        </div>
      </div>

    


      {/* skills */}
      <div className="mb-6">
        <p className="text-sm font-medium text-slate-900 mb-1">Skills</p>
        <p className="text-xs text-slate-400 mb-3">
          Add your key skills and technologies
        </p>
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={handleSkillKey}
            placeholder="Type a skill (e.g., JavaScript, Python)"
            className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-200 outline-none"
          />
          <button
            type="button"
            onClick={handleAddSkill}
            className="px-4 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium"
            >
              {skill}
              <button
                type="button"
                onClick={() =>
                  setSkills((prev) => prev.filter((s) => s !== skill))
                }
                className="text-xs text-blue-700"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* resume */}
      <div className="mb-8">
        <p className="text-sm font-medium text-slate-900 mb-2">
          Resume Upload <span className="text-slate-400 text-xs">(Optional)</span>
        </p>
        <label
          htmlFor="resume"
          className="block border-2 border-dashed border-slate-200 rounded-2xl py-8 px-4 text-center cursor-pointer hover:border-blue-200 transition bg-slate-50/40"
        >
          <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mx-auto mb-2 text-xl">
            ⬆
          </div>
          <p className="text-sm text-slate-700 mb-1">
            {resumeName ? (
              <span className="font-medium">{resumeName}</span>
            ) : (
              "Drop your resume here, or browse"
            )}
          </p>
          {!resumeName && (
            <p className="text-xs text-slate-400">
              Supports PDF, DOC, DOCX (Max 5MB)
            </p>
          )}
          <input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleResumeChange}
          />
        </label>
      </div>

      {/* footer buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2.5 border border-slate-200 rounded-lg text-slate-700 text-sm font-medium hover:bg-slate-50"
        >
          ← Back
        </button>
        <button
          type="submit"
          className="flex-1 px-5 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition"
        >
          Complete Registration →
        </button>
      </div>
    </form>
  );
}
