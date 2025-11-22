


import React, { useState, useEffect } from "react";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const years = Array.from({ length: 50 }, (_, i) => 1980 + i);

export default function ExperienceDateRange({ value = {}, onChange, isChecked }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showPicker, setShowPicker] = useState(null); // 'start' | 'end' | null
  const [tempMonth, setTempMonth] = useState(months[0]);
  const [tempYear, setTempYear] = useState(years[0]);

  const [start, setStart] = useState(value.workFrom || { month: "", year: "" });
  const [end, setEnd] = useState(value.workTill || { month: "", year: "" });

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedStart = { ...start };
    let updatedEnd = { ...end };

    if (name === "fromMonth") updatedStart.month = value;
    if (name === "fromYear") updatedStart.year = parseInt(value);
    if (name === "toMonth") updatedEnd.month = value;
    if (name === "toYear") updatedEnd.year = parseInt(value);

    setStart(updatedStart);
    setEnd(updatedEnd);
    onChange({ workFrom: updatedStart, workTill: updatedEnd });
  };

  // for mobile picker
  const openPicker = (type) => {
    setShowPicker(type);
    const dateObj = type === "start" ? start : end;
    if (dateObj?.month) setTempMonth(dateObj.month);
    if (dateObj?.year) setTempYear(dateObj.year);
  };

  const handleDone = () => {
    const picked = { month: tempMonth, year: tempYear };
    if (showPicker === "start") {
      setStart(picked);
      onChange({ workFrom: picked, workTill: end });
    } else {
      setEnd(picked);
      onChange({ workFrom: start, workTill: picked });
    }
    setShowPicker(null);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Duration <span className="text-red-500">*</span>
      </label>

      {/* ✅ MOBILE (bottom sheet) */}
      {isMobile ? (
        <>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openPicker("start")}
              className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-left text-slate-700 hover:border-blue-400 focus:ring-2 focus:ring-blue-100"
            >
              {start.month && start.year
                ? `${start.month} ${start.year}`
                : "Start Date"}
            </button>

            <span className="text-slate-400">—</span>

            {!isChecked ? (
              <button
                type="button"
                onClick={() => openPicker("end")}
                className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-left text-slate-700 hover:border-blue-400 focus:ring-2 focus:ring-blue-100"
              >
                {end.month && end.year ? `${end.month} ${end.year}` : "End Date"}
              </button>
            ) : (
              <div className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-left text-slate-700">
                Present
              </div>
            )}
          </div>

          {/* Bottom Sheet Picker */}
          {showPicker && (
            <div className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center">
              <div className="w-full bg-white rounded-t-3xl p-5 shadow-2xl animate-slide-up">
                <h3 className="text-center text-slate-900 font-semibold mb-4">
                  {showPicker === "start" ? "Select Start Date" : "Select End Date"}
                </h3>

                <div className="flex justify-center items-center gap-10 mb-6">
                  <select
                    value={tempMonth}
                    onChange={(e) => setTempMonth(e.target.value)}
                    className="text-lg font-medium text-slate-800 bg-transparent focus:outline-none"
                  >
                    {months.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>

                  <select
                    value={tempYear}
                    onChange={(e) => setTempYear(parseInt(e.target.value))}
                    className="text-lg font-medium text-slate-800 bg-transparent focus:outline-none"
                  >
                    {years.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-between px-2">
                  <button
                    onClick={() => setShowPicker(null)}
                    className="px-5 py-2 rounded-full border border-slate-200 text-slate-700 font-medium hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDone}
                    className="px-5 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        // ✅ DESKTOP (simple dropdowns)
        <div className="flex gap-3 items-center">
          {/* From */}
          <select
            name="fromMonth"
            value={start.month}
            onChange={handleChange}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
          >
            <option value="">Month</option>
            {months.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <select
            name="fromYear"
            value={start.year}
            onChange={handleChange}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
          >
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>

          <span className="text-slate-600 font-medium mx-2">to</span>

          {!isChecked ? (
            <>
              <select
                name="toMonth"
                value={end.month}
                onChange={handleChange}
                className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
              >
                <option value="">Month</option>
                {months.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>

              <select
                name="toYear"
                value={end.year}
                onChange={handleChange}
                className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
              >
                <option value="">Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </>
          ) : (
            <div className="w-40 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700">
              Present
            </div>
          )}
        </div>
      )}
    </div>
  );
}
