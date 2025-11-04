import React from "react";
import { FiShield, FiGitBranch, FiBell, FiLock } from "react-icons/fi";

export default function WhyChooseJobSeeker() {
  const features = [
    {
      icon: <FiShield className="text-blue-600 text-2xl" />,
      title: "Verified Employers",
      desc: "Every company is vetted for authenticity so you apply with confidence.",
    },
    {
      icon: <FiGitBranch className="text-blue-600 text-2xl" />,
      title: "Smart Matching",
      desc: "Our algorithm surfaces roles that fit your skills and goals.",
    },
    {
      icon: <FiBell className="text-blue-600 text-2xl" />,
      title: "Real-time Alerts",
      desc: "Stay informed with instant notifications for new roles and messages.",
    },
    {
      icon: <FiLock className="text-blue-600 text-2xl" />,
      title: "Resume Builder",
      desc: "Create a standout resume with guided templates and tips.",
    },
  ];

  return (
    <section className="bg-blue-50 py-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">
          Why choose <span className="text-blue-600">JobSeeker</span>
        </h2>

        {/* Flex Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start items-start bg-white rounded-2xl p-6 w-full sm:w-[47%] lg:w-[23%] shadow-sm border border-slate-100 hover:shadow-md transition"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {f.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
