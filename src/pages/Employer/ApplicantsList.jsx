import React from "react";
import { Mail, Phone } from "lucide-react";

const ApplicantsList = () => {
  const applicants = [
    { name: "Sarah Johnson", email: "sarah@email.com", phone: "+1 (555) 123-4567", status: "Reviewing" },
    { name: "Michael Chen", email: "mchen@email.com", phone: "+1 (555) 234-5678", status: "Interview" },
    { name: "Priya Singh", email: "priya@email.com", phone: "+91 98765 43210", status: "Hired" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Applicants ({applicants.length})
      </h2>
      <p className="text-gray-500 mb-6">
        Review and manage candidate applications for this position.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {applicants.map((a, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{a.name}</h3>
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
              <Mail size={14} /> {a.email}
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
              <Phone size={14} /> {a.phone}
            </div>
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                a.status === "Interview"
                  ? "bg-green-100 text-green-700"
                  : a.status === "Reviewing"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantsList;
