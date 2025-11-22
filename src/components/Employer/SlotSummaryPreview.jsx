import React from "react";
import { Users, CircleDot, AlertTriangle, Calendar } from "lucide-react";

export default function SlotSummaryPreview({
  shortlisted = 50,
  capacity = 37,
  data = [
    {
      date: "15 Nov 2025",
      slots: [
        { time: "11:00 AM", capacity: 10 },
        { time: "03:00 PM", capacity: 15 },
      ],
    },
    {
      date: "18 Nov 2025",
      slots: [
        { time: "10:00 AM", capacity: 12 },
      ],
    },
  ],
}) {
  const remaining = shortlisted - capacity;
  const insufficient = remaining > 0;

  return (
    <div className="space-y-6">

      {/* ✅ SLOT SUMMARY CARD */}
      <div className="bg-white border rounded-xl p-5 shadow-sm space-y-4">

        <h3 className="text-lg font-semibold text-gray-900">Slot Summary</h3>

        {/* Shortlisted */}
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-2">
            <Users className="text-blue-500" size={18} />
            <span className="text-gray-700">Shortlisted Candidates</span>
          </div>
          <span className="font-semibold text-gray-900">{shortlisted}</span>
        </div>

        <hr />

        {/* Total Capacity */}
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-2">
            <CircleDot className="text-green-500" size={18} />
            <span className="text-gray-700">Total Slot Capacity</span>
          </div>
          <span className="font-semibold text-gray-900">{capacity}</span>
        </div>

        {/* Remaining */}
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-2">
            <CircleDot className="text-orange-500" size={18} />
            <span className="text-gray-700">Remaining Candidates</span>
          </div>
          <span className="font-semibold text-gray-900">{remaining}</span>
        </div>

        {/* Warning */}
        {insufficient && (
          <div className="bg-orange-50 border border-orange-300 rounded-lg p-3 flex items-start gap-2 text-orange-700 text-sm">
            <AlertTriangle size={18} className="mt-0.5" />
            <div>
              <strong className="block">Insufficient Capacity</strong>
              Add more slots to accommodate all candidates.
            </div>
          </div>
        )}

        {/* Capacity Progress */}
        <div>
          <p className="text-xs font-medium text-gray-600 mb-1">
            Capacity Progress
          </p>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500"
              style={{ width: `${(capacity / shortlisted) * 100}%` }}
            ></div>
          </div>

          <p className="text-xs text-right font-medium text-gray-700 mt-1">
            {capacity} / {shortlisted}
          </p>
        </div>
      </div>

      {/* ✅ SCHEDULE PREVIEW CARD */}
      <div className="bg-white border rounded-xl p-5 shadow-sm space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Schedule Preview</h3>

        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 border rounded-xl p-4 space-y-3 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{item.date}</p>
              </div>

              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  item.slots.length > 1
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {item.slots.length} {item.slots.length === 1 ? "slot" : "slots"}
              </span>
            </div>

            {/* Slots */}
            {item.slots.map((slot, sIdx) => (
              <div
                key={sIdx}
                className="flex items-center justify-between bg-white border rounded-lg px-4 py-2 shadow-sm"
              >
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar size={16} className="text-gray-400" />
                  <span>{slot.time}</span>
                </div>

                <span className="text-gray-900 font-medium">
                  {slot.capacity} candidates
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
