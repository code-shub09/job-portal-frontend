import React, { useState } from "react";
import axios from "axios";

const Jobpost = () => {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    jobType: "",
    location: "",
    salaryMin: "",
    salaryMax: "",
    description: "",
    requirements: "",
    qualification: "",
    industryType: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/employer/post-job`,
        formData,
        { withCredentials: true }
      );
      setMessage("✅ Job posted successfully!");
      setFormData({
        title: "",
        department: "",
        jobType: "",
        location: "",
        salaryMin: "",
        salaryMax: "",
        description: "",
        requirements: "",
        qualification: "",
        industryType: "",
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Post New Job</h2>
        <p className="text-gray-500 mb-6">
          Create a new job listing for your organization.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Job Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Senior React Developer"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Department & Job Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select...</option>
                <option>Engineering</option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Human Resources</option>
                <option>Operations</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Employment Type
              </label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select type</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
                <option>Contract</option>
                <option>Remote</option>
              </select>
            </div>
          </div>

          {/* Location & Salary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g. Remote or New York"
                value={formData.location}
                onChange={handleChange}
                className="w-full border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Salary Range
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  name="salaryMin"
                  placeholder="Min"
                  value={formData.salaryMin}
                  onChange={handleChange}
                  className="w-1/2 border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="number"
                  name="salaryMax"
                  placeholder="Max"
                  value={formData.salaryMax}
                  onChange={handleChange}
                  className="w-1/2 border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Qualification & Industry Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Qualification
              </label>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select qualification</option>
                <option>10th Pass</option>
                <option>12th Pass</option>
                <option>Diploma</option>
                <option>Graduate</option>
                <option>Post Graduate</option>
                <option>PhD</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Industry Type
              </label>
              <select
                name="industryType"
                value={formData.industryType}
                onChange={handleChange}
                className="w-full border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select industry</option>
                <option>Information Technology</option>
                <option>Finance & Banking</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>E-commerce</option>
                <option>Hospitality</option>
                <option>Manufacturing</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              name="description"
              placeholder="Describe the role, responsibilities..."
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Requirements
            </label>
            <textarea
              name="requirements"
              placeholder="List required skills, qualifications, and experience..."
              value={formData.requirements}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium transition disabled:opacity-50"
            >
              {loading ? "Posting..." : "Post Job"}
            </button>
            <button
              type="button"
              className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-md hover:bg-gray-100"
            >
              Save as Draft
            </button>
          </div>

          {message && (
            <p
              className={`text-sm font-medium mt-2 ${
                message.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Jobpost;
