

import React, { useState } from "react";
import ExperienceDateRange from "./ExperienceDateRange";
import axios from "axios";

export default function AddExperienceForm({ onSave = () => {}, onCancel = () => {}, setIsAddExpOpen }) {
  function onClose() {
    setIsAddExpOpen(false);
  }

  const [form, setForm] = useState({
    role: "",
    company: "",
    salary: "",
    responsibilities: "",
    workFrom: { month: "", year: "" },
    workTill: { month: "", year: "" },
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!form.role || !form.company || !form.workFrom.month || !form.workFrom.year)
      return alert("Please fill required fields");

    const payload = {
      ...form,
      currentlyWorking: isChecked,
    };

     const response=await axios.post("https://job-portal-server-lr93.onrender.com/jobseekar/profile/addexperience", payload, {
        withCredentials: true,
        headers: { "Content-Type": "application/json"},
        
      });
      console.log('res add w: ',response);
    
    console.log('pay :',payload)

    onSave(payload);

    setForm({
      role: "",
      company: "",
      salary: "",
      responsibilities: "",
      workFrom: { month: "", year: "" },
      workTill: { month: "", year: "" },
    });
    setIsChecked(false);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full w-full md:h-[90%] md:w-[60%]">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">
          Add Work Experience
        </h3>
        <button
          className="text-slate-500 hover:text-slate-700"
          onClick={onClose}
          aria-label="close"
        >
          ✕
        </button>
      </div>

      <p className="text-sm text-slate-500 mb-5">
        Add dates, company and responsibilities.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 h-3/4 overflow-y-scroll">
        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Job Title / Role <span className="text-red-500">*</span>
          </label>
          <input
            value={form.role}
            onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))}
            type="text"
            placeholder="e.g., React Developer"
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Company / Organization <span className="text-red-500">*</span>
          </label>
          <input
            value={form.company}
            onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
            type="text"
            placeholder="e.g., Global Tech Solutions"
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>

        {/* Date Range */}
        <ExperienceDateRange
          value={{ workFrom: form.workFrom, workTill: form.workTill }}
          onChange={({ workFrom, workTill }) =>
            setForm((p) => ({ ...p, workFrom, workTill }))
          }
          isChecked={isChecked}
        />

        {/* Checkbox */}
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <span>I currently work here</span>
        </div>

        {/* Salary */}
        {isChecked && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              CTC / Stipend
            </label>
            <input
              value={form.salary}
              onChange={(e) => setForm((p) => ({ ...p, salary: e.target.value }))}
              type="text"
              placeholder="e.g., ₹6 LPA / Stipend"
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>
        )}

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Description / Responsibilities
          </label>
          <textarea
            value={form.responsibilities}
            onChange={(e) => setForm((p) => ({ ...p, responsibilities: e.target.value }))}
            rows={3}
            placeholder="e.g., Built UI, integrated APIs, improved performance..."
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 outline-none resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600"
          >
            Save Experience
          </button>
        </div>
      </form>
    </div>
  );
}
