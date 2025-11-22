import React, { useState } from "react";
import { Trash2, ChevronDown, ChevronUp, Calendar } from "lucide-react";

export function DateCard({
  d,               // { id, date, slots }
  expanded = false,
  onToggle = () => {},
  onDelete = () => {},
  selected = false,
}) {
  if (!d?.date) return null;

  const dateObj = d.date;
  const day = dateObj.getDate();
  const monthShort = dateObj.toLocaleDateString("en-US", { month: "short" });
  const fullDateLabel = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  




  const slotsCount = d.slots?.length || 0;

  return (
    <div
      className={[
        "w-full rounded-xl border transition-all px-4 py-4 flex items-center justify-between gap-3",
        selected
          ? "bg-blue-50 border-blue-300 shadow-[0_0_0_2px_rgba(59,130,246,0.15)]"
          : "bg-white border-gray-200",
      ].join(" ")}
      aria-expanded={expanded}
    >
      {/* ✅ Left Section */}
      <div className="flex items-center gap-4 min-w-0">
        
        {/* ✅ Date badge (month + date) */}
        <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-blue-600 text-white">
          <span className="text-[10px] uppercase opacity-90 leading-none">{monthShort}</span>
          <span className="text-lg font-semibold leading-none">{day}</span>
        </div>

        {/* ✅ Date label + subtext */}
        <div className="min-w-0">
          <p className="font-semibold text-gray-900 truncate flex items-center gap-1">
            <Calendar size={16} className="text-gray-500" />
            {fullDateLabel}
          </p>

          <p className="text-xs text-gray-500 mt-0.5">
            {slotsCount} slot{slotsCount === 1 ? "" : "s"} created
          </p>
        </div>
      </div>

      {/* ✅ Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Toggle */}
        <button
          onClick={onToggle}
          className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-300 bg-white hover:bg-gray-50 text-gray-700"
          aria-label="Expand or collapse date"
        >
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* Delete */}
        <button
          onClick={onDelete}
          className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-red-500 text-white hover:bg-red-600"
          aria-label="Delete date"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
