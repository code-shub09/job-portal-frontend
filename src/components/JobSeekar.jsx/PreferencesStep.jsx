import React, { useState } from "react";
import Select from "react-select";
import { Upload } from "lucide-react";

const PreferencesStep = () => {
  const [roles, setRoles] = useState([]);
  const [skills, setSkills] = useState([]);
  const [resume, setResume] = useState(null);
  const [skillInput, setSkillInput] = useState("");

  // Job role options
  const jobRoleOptions = [
    { value: "frontend", label: "Frontend Developer" },
    { value: "backend", label: "Backend Developer" },
    { value: "fullstack", label: "Full Stack Engineer" },
    { value: "data-analyst", label: "Data Analyst" },
    { value: "designer", label: "UI/UX Designer" },
    { value: "marketing", label: "Digital Marketer" },
  ];

  // Add skill
  const handleAddSkill = () => {
    if (skillInput && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  // Remove skill
  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  // Resume upload
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) setResume(file);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 max-w-3xl mx-auto mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Step 3: Job Preferences
      </h2>

      {/* Preferred Job Roles */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Preferred Job Roles
        </label>
        <Select
          isMulti
          options={jobRoleOptions}
          value={roles}
          onChange={(selected) => setRoles(selected)}
          className="text-gray-700"
          classNamePrefix="select"
          placeholder="Select your preferred roles..."
        />
      </div>

      {/* Skills Input */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Skills
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add a skill..."
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={handleAddSkill}
            type="button"
            className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="text-blue-600 hover:text-red-500"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Resume Upload */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Resume Upload (Optional)
        </label>

        <label
          htmlFor="resume-upload"
          className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 text-gray-500 hover:bg-gray-50 cursor-pointer transition"
        >
          <Upload className="w-6 h-6 mb-2" />
          <span>
            {resume ? resume.name : "Click to upload or drag and drop"}
          </span>
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
            className="hidden"
          />
        </label>

        {resume && (
          <p className="text-sm text-green-600 mt-2">
            ✅ {resume.name} uploaded successfully
          </p>
        )}
      </div>

      <div className="flex justify-end mt-8">
        <button
          type="button"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Save & Finish
        </button>
      </div>
    </div>
  );
};

export default PreferencesStep;
