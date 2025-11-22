import React from "react";

export default function ApplicationPersonalInfo() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 animate-fade-slide border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <i className="fas fa-user-circle text-blue-600"></i> Personal Info
      </h3>

      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <i className="fas fa-phone text-gray-400 w-5"></i>
          <span className="text-gray-600">Phone:</span>
          <span className="font-medium text-gray-900">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <i className="fas fa-briefcase text-gray-400 w-5"></i>
          <span className="text-gray-600">Experience:</span>
          <span className="font-medium text-gray-900">6 years</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <i className="fas fa-dollar-sign text-gray-400 w-5"></i>
          <span className="text-gray-600">Current CTC:</span>
          <span className="font-medium text-gray-900">$95,000</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <i className="fas fa-money-bill-wave text-gray-400 w-5"></i>
          <span className="text-gray-600">Expected CTC:</span>
          <span className="font-medium text-gray-900">$130,000</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <i className="fas fa-bell text-gray-400 w-5"></i>
          <span className="text-gray-600">Notice Period:</span>
          <span className="font-medium text-gray-900">30 days</span>
        </div>
      </div>
    </div>
  );
}
