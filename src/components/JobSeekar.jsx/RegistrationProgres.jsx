// components/RegistrationProgress.jsx
import React from "react";

export default function RegistrationProgress({
  currentStep = 2, // 1-based
  completion = 66, // %
}) {
  const steps = [
    {
      id: 1,
      title: "Basic Details",
      subtitle: "Your name, email, and contact information",
    },
    {
      id: 2,
      title: "Profile Type",
      subtitle: "Employers prefer to know your profile type",
    },
    {
      id: 3,
      title: "Final Details",
      subtitle: "Complete your profile for better matches",
    },
  ];

  return (
    <aside className="bg-white rounded-2xl border border-slate-200 p-6 w-full max-w-sm">
      <h2 className="text-lg font-semibold text-slate-900 mb-5">
        Registration Progress
      </h2>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.id} className="flex gap-4">
              {/* left rail */}
              <div className="flex flex-col items-center">
                {/* circle */}
                <div
                    className={
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium " +
                      (isCompleted
                        ? "bg-green-500 text-white"
                        : isActive
                        ? "bg-blue-500 text-white ring-4 ring-blue-100"
                        : "bg-slate-200 text-slate-500")
                    }
                  >
                    {isCompleted ? "✓" : step.id}
                  </div>
                {/* line */}
                {!isLast && (
                  <div
                    className={
                      "w-px flex-1 " +
                      (isCompleted ? "bg-green-200" : "bg-slate-200")
                    }
                  ></div>
                )}
              </div>

              {/* text */}
              <div className="flex-1">
                <p
                  className={
                    "text-sm font-semibold " +
                    (isActive ? "text-slate-900" : "text-slate-500")
                  }
                >
                  {step.title}
                </p>
                <p className="text-xs text-slate-400 leading-snug">
                  {step.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* divider */}
      <div className="h-px bg-slate-100 my-6"></div>

      {/* profile completion */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-slate-700">Profile Completion</p>
        <p className="text-sm font-semibold text-blue-500">
          {completion}%
        </p>
      </div>
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all"
          style={{ width: `${completion}%` }}
        ></div>
      </div>
    </aside>
  );
}
