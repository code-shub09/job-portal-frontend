import React, { useMemo, useState } from "react";
import axios from "axios";
import { BiEdit } from 'react-icons/bi';

const GRAD_OPTIONS = [
  "B.Tech/B.E.",
  "B.Sc",
  "B.Com",
  "BBA",
  "BA",
  "BCA",
  "B.Des",
  "B.Pharm",
  "Other",
];

const PG_OPTIONS = [
  "M.Tech/M.E.",
  "M.Sc",
  "M.Com",
  "MBA",
  "MA",
  "MCA",
  "M.Des",
  "Other",
];

const DIPLOMA_OPTIONS = [
  "Polytechnic",
  "Web Design",
  "Diploma (Engg)",
  "Other",
];

const years = (() => {
  const y = new Date().getFullYear();
  const arr = [];
  for (let i = y - 30; i <= y + 1; i++) arr.push(i);
  return arr;
})();

export default function EducationModal({ isOpen, onClose, onSave }) {
  const [qualification, setQualification] = useState("Graduation"); // Graduation | Diploma | Post Graduation
  const [course, setCourse] = useState("");
  const [college, setCollege] = useState("");
  const [grading, setGrading] = useState("scale10"); // scale10, scale4, percent
  const [score, setScore] = useState(""); // CGPA or percent
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [courseType, setCourseType] = useState("Full Time"); // Full Time | Part Time | Correspondence
  const [errors, setErrors] = useState({});

  // pick shortcut options list depends on qualification
  const shortcutOptions = useMemo(() => {
    if (qualification === "Graduation") return GRAD_OPTIONS;
    if (qualification === "Post Graduation") return PG_OPTIONS;
    return DIPLOMA_OPTIONS;
  }, [qualification]);

  const resetErrors = () => setErrors({});

  function validate() {
    const e = {};
    if (!qualification) e.qualification = "Select qualification";
    if (!course) e.course = "Select or type course";
    if (!college?.trim()) e.college = "Enter college/institute name";
    if (!grading) e.grading = "Choose grading system";
    if (!score?.toString().trim()) e.score = "Enter your CGPA/Percentage";
    if (!startYear) e.startYear = "Select starting year";
    if (!endYear) e.endYear = "Select ending year";
    if (startYear && endYear && Number(startYear) > Number(endYear))
      e.year = "Start year cannot be after end year";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSave(e) {
    e?.preventDefault();
    resetErrors();
    if (!validate()) return;

    const payload = {
      qualification, // Graduation|Diploma|Post Graduation
      course,
      college,
      grading,
      score,
      startYear,
      endYear,
      courseType,
    };

    try {
      // If parent provided onSave, call it and let parent update UI / API
      if (typeof onSave === "function") {
        await onSave(payload);
      } else {
        // otherwise post to default endpoint (adjust url as you need)
        await axios.post("/api/jobseeker/education", payload, {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });
      }
      // reset and close
      setCourse("");
      setCollege("");
      setScore("");
      setStartYear("");
      setEndYear("");
      setCourseType("Full Time");
      onClose?.();
    } catch (err) {
      console.error("Save education error:", err);
      setErrors({ api: err.response?.data?.message || "Save failed" });
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center lg:p-6 ">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* modal */}
      <div className="relative z-10 w-full max-w-3xl bg-white rounded-xl shadow-2xl p-6 md:h-[99%] ">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Education</h2>
            <p className="text-sm text-slate-500 mt-1">
              Adding your educational details help recruiters know your value
              as a potential candidate
            </p>
          </div>
          <button
            className="text-slate-500 hover:text-slate-700"
            onClick={onClose}
            aria-label="close"
          >
            ✕
          </button>
        </div>

       <div className="h-[80%] overflow-y-scroll">
         <form onSubmit={handleSave} className="mt-6 space-y-6">
          {/* qualification pills */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Qualification / Degree
            </label>
            <div className="flex gap-3 mt-3">
              {["Graduation", "Diploma", "Post Graduation"].map((q) => (
                <button
                  type="button"
                  key={q}
                  onClick={() => setQualification(q)}
                  className={`px-4 py-2 rounded-full border transition ${
                    qualification === q
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
            {errors.qualification && (
              <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>
            )}
          </div>

          {/* Course name (dropdown + pill shortcuts) */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Course name</label>

            <div className="mt-2">
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select course from the list</option>
                {shortcutOptions.map((opt) => (
                  <option value={opt} key={opt}>
                    {opt}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>

            {/* pills for quick selection */}
            <div className="flex gap-3 mt-3 flex-wrap">
              {shortcutOptions.slice(0, 5).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setCourse(opt)}
                  className={`px-3 py-1 rounded-full border ${
                    course === opt
                      ? "bg-slate-100 text-slate-900 border-slate-300"
                      : "bg-white text-slate-600 border-slate-200"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
          </div>

          {/* college */}
          <div>
            <label className="block text-sm font-medium text-slate-700">College name</label>
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="Enter the name of your college"
              className="w-full border rounded-lg px-3 py-2 mt-2"
            />
            {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
          </div>

          {/* grading system pills */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Grading system</label>
            <div className="flex gap-3 mt-3">
              <button
                type="button"
                onClick={() => setGrading("scale10")}
                className={`px-3 py-1 rounded-full border ${
                  grading === "scale10" ? "bg-slate-100 border-slate-300" : "bg-white border-slate-200"
                }`}
              >
                Scale 10 Grading System
              </button>
              <button
                type="button"
                onClick={() => setGrading("scale4")}
                className={`px-3 py-1 rounded-full border ${
                  grading === "scale4" ? "bg-slate-100 border-slate-300" : "bg-white border-slate-200"
                }`}
              >
                Scale 4 Grading System
              </button>
              <button
                type="button"
                onClick={() => setGrading("percent")}
                className={`px-3 py-1 rounded-full border ${
                  grading === "percent" ? "bg-slate-100 border-slate-300" : "bg-white border-slate-200"
                }`}
              >
                % Marks of 100 Maximum
              </button>
            </div>
          </div>

          {/* CGPA / Percentage input */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              {grading === "percent" ? "Percentage (%)" : grading === "scale4" ? "CGPA (out of 4)" : "CGPA (out of 10)"}
            </label>
            <input
              type="text"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              placeholder={grading === "percent" ? "e.g., 78" : grading === "scale4" ? "e.g., 3.5" : "e.g., 8.5"}
              className="w-full border rounded-lg px-3 py-2 mt-2"
            />
            {errors.score && <p className="text-red-500 text-sm mt-1">{errors.score}</p>}
          </div>

          {/* course duration */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700">Course duration (start)</label>
              <select
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 mt-2"
              >
                <option value="">Starting year</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              {errors.startYear && <p className="text-red-500 text-sm mt-1">{errors.startYear}</p>}
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700">Course duration (end)</label>
              <select
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 mt-2"
              >
                <option value="">Ending year</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              {errors.endYear && <p className="text-red-500 text-sm mt-1">{errors.endYear}</p>}
              {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
            </div>
          </div>

          {/* course type pills */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Course type</label>
            <div className="flex gap-3 mt-3">
              {["Full Time", "Part Time", "Correspondence"].map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setCourseType(t)}
                  className={`px-3 py-1 rounded-full border ${
                    courseType === t ? "bg-slate-100 border-slate-300" : "bg-white border-slate-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* API / validation error */}
          {errors.api && <p className="text-red-500 text-sm">{errors.api}</p>}

          {/* footer buttons */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-blue-600 hover:underline"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
       </div>
      </div>
    </div>
  );
}
