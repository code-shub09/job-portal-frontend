import React from "react";

export default function InterviewStyleSelector({ value, onChange }) {
  const options = [
    {
      id: "fixed",
      title: "One-Time Fixed Interview",
      subtitle: "Set a specific date, time, and mode.",
      icon: "📍",
    },
    {
      id: "window",
      title: "Offer a Date/Time Window",
      subtitle: "Provide available periods; candidate chooses one.",
      icon: "📅",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl border p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        Choose Interview Style
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Select how you want the candidate to schedule this interview.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onChange(opt.id)}
            className={`flex items-start space-x-3 p-4 rounded-xl border text-left transition-all
              ${
                value === opt.id
                  ? "border-blue-500 bg-blue-50 shadow-sm"
                  : "border-gray-200 hover:border-gray-300"
              }
            `}
          >
            <div className="text-2xl">{opt.icon}</div>
            <div>
              <p className="font-medium text-gray-900">{opt.title}</p>
              <p className="text-sm text-gray-600">{opt.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
