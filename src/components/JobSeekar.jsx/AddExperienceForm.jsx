import React, { useState } from "react";
import ExperienceDateRange from "./ExperienceDateRange";

export default function AddExperienceForm({
  onSave = () => {},
  onCancel = () => {},
  setIsAddExpOpen
}) {
  function onClose(){
    setIsAddExpOpen(false);
  }
  const [form, setForm] = useState({
    role: "",
    company: "",
    salary: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.role || !form.company || !form.startDate) return;

    // build readable duration for your card
    let duration = "";
    if (form.startDate) {
      const start = new Date(form.startDate);
      const startStr = start.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });

      if (form.endDate) {
        const end = new Date(form.endDate);
        const endStr = end.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });
        duration = `${startStr} – ${endStr}`;
      } else {
        duration = `${startStr} – Present`;
      }
    }

    onSave({
      role: form.role,
      company: form.company,
      duration,
      salary: form.salary,
      responsibilities: form.responsibilities,
      startDate: form.startDate,
      endDate: form.endDate,
    });

    setForm({
      role: "",
      company: "",
      salary: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-[100%] w-[100%] md:h-[90%] md:w-[60%] ">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">
          Add Work Experience
        </h3>
         <button
            className="text-slate-500 hover:text-slate-700 cursor-pointer"
             onClick={onClose}
            aria-label="close"
          >
            ✕
          </button>
      </div>

      <p className="text-sm text-slate-500 mb-5">
        Add dates, company and responsibilities.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 h-3/4 overflow-y-scroll"
      >
        {/* role */}
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
            required
          />
        </div>

        {/* company */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Company / Organization <span className="text-red-500">*</span>
          </label>
          <input
            value={form.company}
            onChange={(e) =>
              setForm((p) => ({ ...p, company: e.target.value }))
            }
            type="text"
            placeholder="e.g., Global Tech Solutions"
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
            required
          />
        </div>

        {/* date range */}
        <ExperienceDateRange
          value={{ startDate: form.startDate, endDate: form.endDate }}
          onChange={({ startDate, endDate }) =>
            setForm((p) => ({ ...p, startDate, endDate }))
          }
          isChecked={isChecked}
        />

        {/* {curently working or not} */}

        <div className="flex gap-3">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <span>I currently work here</span>
        </div>

        {/* salary */}
        {isChecked && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              CTC / Stipend
            </label>
            <input
              value={form.salary}
              onChange={(e) =>
                setForm((p) => ({ ...p, salary: e.target.value }))
              }
              type="text"
              placeholder="e.g., ₹6 LPA / Stipend"
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>
        )}

        {/* responsibilities */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Description / Responsibilities (optional)
          </label>
          <textarea
            value={form.responsibilities}
            onChange={(e) =>
              setForm((p) => ({ ...p, responsibilities: e.target.value }))
            }
            rows={3}
            placeholder="e.g., Built UI, integrated APIs, improved performance..."
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 outline-none resize-none"
          />
        </div>

        {/* buttons */}
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
