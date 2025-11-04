import React, { useState } from "react";

export default function JobFilterSidebar() {
  const [datePosted, setDatePosted] = useState("All");
  const [distance, setDistance] = useState("All");
  const [salary, setSalary] = useState(0);
  const [experience, setExperience] = useState("All");
  const [location, setLocation] = useState("All");
  const [workMode, setWorkMode] = useState("All");

  return (
    <aside className="w-full max-w-xs bg-white border border-slate-200 rounded-xl p-6 text-slate-800 shadow-sm">
      {/* ===== Date Posted ===== */}
      <div className="mb-6">
        <h3 className="font-semibold text-slate-900 mb-3">Date posted</h3>
        <div className="space-y-2 pl-1">
          {["All", "Last 24 hours", "Last 3 days", "Last 7 days"].map((item) => (
            <RadioOption
              key={item}
              name="date"
              value={item}
              selected={datePosted}
              setSelected={setDatePosted}
            />
          ))}
        </div>
      </div>

      <Divider />

      {/* ===== Distance ===== */}
      <div className="mb-6">
        <h3 className="font-semibold text-slate-900 mb-3">Distance</h3>
        <div className="space-y-2 pl-1">
          {["All", "Within 5 km", "Within 10 km", "Within 20 km", "Within 50 km"].map(
            (item) => (
              <RadioOption
                key={item}
                name="distance"
                value={item}
                selected={distance}
                setSelected={setDistance}
              />
            )
          )}
        </div>
      </div>

      <Divider />

      {/* ===== Salary ===== */}
      <div className="mb-6">
        <h3 className="font-semibold text-slate-900 mb-3">Salary</h3>
        <p className="text-slate-500 text-sm mb-2">Minimum monthly salary</p>
        <div className="relative flex items-center">
          <span className="absolute -left-2 bg-green-800 text-white text-xs font-medium px-2 py-1 rounded-full -top-6">
            ₹{salary.toLocaleString()}
          </span>
          <input
            type="range"
            min="0"
            max="150000"
            step="1000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full accent-green-700 bg-green-100 h-2 rounded-lg cursor-pointer"
          />
        </div>
        <div className="flex justify-between text-xs text-slate-500 mt-2">
          <span>0</span>
          <span>1.5 Lakhs</span>
        </div>
      </div>

      <Divider />

      {/* ===== Experience ===== */}
      <div className="mb-6">
        <h3 className="font-semibold text-slate-900 mb-3">Experience</h3>
        <div className="space-y-2 pl-1">
          {["All", "0-1 year", "1-3 years", "3-5 years", "5+ years"].map((item) => (
            <RadioOption
              key={item}
              name="experience"
              value={item}
              selected={experience}
              setSelected={setExperience}
            />
          ))}
        </div>
      </div>

      <Divider />

      {/* ===== Location ===== */}
      <div className="mb-6">
        <h3 className="font-semibold text-slate-900 mb-3">Location</h3>
        <div className="space-y-2 pl-1">
          {["All", "Delhi", "Bengaluru", "Mumbai", "Hyderabad", "Remote"].map((item) => (
            <RadioOption
              key={item}
              name="location"
              value={item}
              selected={location}
              setSelected={setLocation}
            />
          ))}
        </div>
      </div>

      <Divider />

      {/* ===== Work Mode ===== */}
      <div className="mb-6">
        <h3 className="font-semibold text-slate-900 mb-3">Work mode</h3>
        <div className="space-y-2 pl-1">
          {["All", "Remote", "Hybrid", "On-site"].map((item) => (
            <RadioOption
              key={item}
              name="workMode"
              value={item}
              selected={workMode}
              setSelected={setWorkMode}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

/* -----------------------------
   Reusable Subcomponents
-------------------------------- */

// Radio option
function RadioOption({ name, value, selected, setSelected }) {
  return (
    <label className="flex items-center gap-2 text-slate-700 text-sm cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={(e) => setSelected(e.target.value)}
        className="accent-green-700"
      />
      {value}
    </label>
  );
}

// Divider line
function Divider() {
  return <hr className="border-t border-slate-200 my-4" />;
}
