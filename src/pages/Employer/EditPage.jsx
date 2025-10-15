import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    employmentType: "",
    location: "",
    salary: "",
    description: "",
    requirements: "",
  });

  // Mock fetch job details (replace with API call later)
  useEffect(() => {
    // Simulate API data
    const mockJob = {
      title: "Senior Frontend Developer",
      department: "Engineering",
      employmentType: "Full-time",
      location: "San Francisco, CA",
      salary: "$120k - $180k",
      description:
        "We're looking for an experienced Frontend Developer to join our growing team. You'll be responsible for building beautiful, responsive user interfaces using modern web technologies.",
      requirements: `5+ years of experience with React and TypeScript
Strong understanding of modern CSS and responsive design
Experience with state management libraries (Redux, Zustand, etc.)
Excellent communication skills
Bachelor's degree in Computer Science or equivalent experience`,
    };

    setFormData(mockJob);
  }, [jobId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Job Data:", formData);

    // TODO: Replace with axios.put(`/api/jobs/${jobId}`, formData)
    alert("✅ Job updated successfully!");
    navigate("/jobs/manage");
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Job</h1>
      <p className="text-gray-600 mb-8">Update your job listing details.</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-4xl"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Job Details
        </h2>

        {/* Job Title */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Senior React Developer"
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Department and Employment Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select...</option>
              <option value="Engineering">Engineering</option>
              <option value="Product">Product</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Employment Type
            </label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        {/* Location and Salary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Remote or New York, NY"
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Salary Range
            </label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="e.g. $80,000 - $120,000"
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Job Description */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Job Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Requirements
          </label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Update Job
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-100 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
