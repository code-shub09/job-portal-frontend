import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";

export default function StyledReactDatePicker({
  onDateSelected,
  showPicker,
  setShowPicker,
}) {
  const [tempDate, setTempDate] = useState(null);
  const [finalDate, setFinalDate] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-xs relative">
      {/* Trigger Box */}
      <button
        onClick={() => setShowPicker(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2"
      >
        <Calendar size={18} />
        Add Date
      </button>

      {/* ✅ Inline calendar dropdown (NOT popper) */}
      {showPicker && (
        <div className="absolute z-50 mt-2 rounded-xl border shadow-lg bg-white">
          {/* ✅ Blue Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-blue-600 text-white">
            <span>Select Date</span>
          </div>

          {/* ✅ Inline Calendar (no popper) */}
          <DatePicker
            selected={tempDate}
            onChange={(d) => setTempDate(d)}
            inline
          />

          {/* ✅ Footer */}
          <div className="flex justify-end gap-3 px-4 py-3 border-t bg-gray-50">
            <button
              onClick={() => {
                setTempDate(finalDate);
                setOpen(false);
              }}
              className="px-4 py-1.5 border rounded-md"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                setFinalDate(tempDate);
                onDateSelected?.(tempDate);
                setShowPicker(false);
              }}
              className="px-4 py-1.5 bg-blue-600 text-white rounded-md"
            >
              Set
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
