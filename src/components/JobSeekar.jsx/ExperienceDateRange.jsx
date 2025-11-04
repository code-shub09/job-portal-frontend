import React, { useState, useEffect } from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const years = Array.from({ length: 50 }, (_, i) => 1980 + i); // 1980–2029

export default function ExperienceDateRange({
  value = {},
  onChange,
  isChecked,
}) {
  const [showPicker, setShowPicker] = useState(null); // 'start' | 'end' | null
  const [tempMonth, setTempMonth] = useState(new Date().getMonth());
  const [tempYear, setTempYear] = useState(new Date().getFullYear());
  const [start, setStart] = useState(value.startDate || "");
  const [end, setEnd] = useState(value.endDate || "");
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openPicker = (type) => {
    setShowPicker(type);
    const date = type === "start" ? start : end;
    if (date) {
      const d = new Date(date);
      setTempMonth(d.getMonth());
      setTempYear(d.getFullYear());
    }
  };

  const handleDone = () => {
    const dateValue = new Date(tempYear, tempMonth, 1);
    const iso = dateValue.toISOString();
    if (showPicker === "start") {
      setStart(iso);
      onChange({ startDate: iso, endDate: end });
    } else {
      setEnd(iso);
      onChange({ startDate: start, endDate: iso });
    }
    setShowPicker(null);
  };

  // For desktop select dropdowns
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { startDate: start, endDate: end };
    if (name === "fromMonth" || name === "fromYear") {
      const newMonth =
        name === "fromMonth"
          ? months.indexOf(value)
          : new Date(start).getMonth();
      const newYear =
        name === "fromYear" ? parseInt(value) : new Date(start).getFullYear();
      if (!isNaN(newYear) && newMonth >= 0) {
        const dateValue = new Date(newYear, newMonth, 1).toISOString();
        setStart(dateValue);
        updated.startDate = dateValue;
      }
    } else if (name === "toMonth" || name === "toYear") {
      const newMonth =
        name === "toMonth" ? months.indexOf(value) : new Date(end).getMonth();
      const newYear =
        name === "toYear" ? parseInt(value) : new Date(end).getFullYear();
      if (!isNaN(newYear) && newMonth >= 0) {
        const dateValue = new Date(newYear, newMonth, 1).toISOString();
        setEnd(dateValue);
        updated.endDate = dateValue;
      }
    }
    onChange(updated);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Duration <span className="text-red-500">*</span>
      </label>

      {/* ✅ Mobile bottom-sheet version */}
      {isMobile ? (
        <>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openPicker("start")}
              className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-left text-slate-700 hover:border-blue-400 focus:ring-2 focus:ring-blue-100"
            >
              {start
                ? new Date(start).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })
                : "Start Date"}
            </button>

            <span className="text-slate-400">—</span>

            
            {!isChecked ? ( <button
              type="button"
              onClick={() => openPicker("end")}
              className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-left text-slate-700 hover:border-blue-400 focus:ring-2 focus:ring-blue-100"
            >
              {end
                ? new Date(end).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })
                : "End Date"}
            </button>):(<div  className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-left text-slate-700 hover:border-blue-400 focus:ring-2 focus:ring-blue-100">Present</div>)}
          </div>

          {/* bottom-sheet picker */}
          {showPicker && (
            <div className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center">
              <div className="w-full bg-white rounded-t-3xl p-5 shadow-2xl animate-slide-up">
                <h3 className="text-center text-slate-900 font-semibold mb-4">
                  {showPicker === "start"
                    ? "Select Start Date"
                    : "Select End Date"}
                </h3>

                <div className="flex justify-center items-center gap-10 mb-6">
                  <select
                    value={tempMonth}
                    onChange={(e) => setTempMonth(parseInt(e.target.value))}
                    className="text-lg font-medium text-slate-800 bg-transparent focus:outline-none"
                  >
                    {months.map((m, i) => (
                      <option key={i} value={i}>
                        {m}
                      </option>
                    ))}
                  </select>

                  <select
                    value={tempYear}
                    onChange={(e) => setTempYear(parseInt(e.target.value))}
                    className="text-lg font-medium text-slate-800 bg-transparent focus:outline-none"
                  >
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
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
        // ✅ Desktop dropdown version
        <div className="flex  gap-3 items-center">
          <select
            name="fromMonth"
            value={start ? months[new Date(start).getMonth()] : ""}
            onChange={handleChange}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
            required
          >
            <option value="">Month</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <select
            name="fromYear"
            value={start ? new Date(start).getFullYear() : ""}
            onChange={handleChange}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
            required
          >
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <span className="text-slate-600 font-medium mx-2">to</span>
          {!isChecked ? (<>
            <select
              name="toMonth"
              value={end ? months[new Date(end).getMonth()] : ""}
              onChange={handleChange}
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
            >
              <option value="">Month</option>
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <select
              name="toYear"
              value={end ? new Date(end).getFullYear() : ""}
              onChange={handleChange}
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
            >
              <option value="">Year</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </>):(<div className="w-40  shrink-0 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none">Present</div>)}
          
        </div>
      )}
    </div>
  );
}
