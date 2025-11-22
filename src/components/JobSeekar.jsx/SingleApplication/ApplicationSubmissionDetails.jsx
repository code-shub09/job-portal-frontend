import React from "react";

export default function ApplicationSubmissionDetails() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 animate-fade-slide border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <i className="fas fa-file-upload text-blue-600"></i> Submission Details
      </h3>

      <div className="space-y-4">
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Resume</span>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
              <i className="fas fa-download mr-1"></i> Download
            </button>
          </div>
          <div className="flex items-center gap-3">
            <i className="fas fa-file-pdf text-red-500 text-2xl"></i>
            <div>
              <p className="text-sm font-medium text-gray-900">John_Doe_Resume.pdf</p>
              <p className="text-xs text-gray-500">2.4 MB</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <span className="text-sm font-semibold text-gray-700 block mb-2">Cover Letter</span>
          <div className="bg-white rounded-lg p-3 text-xs text-gray-700 max-h-32 overflow-y-auto border border-gray-200">
            I am excited to apply for the Senior Product Designer position at TechCorp Solutions. With over 6 years of experience... (truncated)
          </div>
        </div>
      </div>
    </div>
  );
}
