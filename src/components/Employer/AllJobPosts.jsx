import React, { useState } from "react";
import { FiSearch, FiEdit2, FiTrash2, FiEye, FiXCircle } from "react-icons/fi";
import JobPostCard from "./JobPostCard";
import { useJobPost } from "../../hooks/UseJobPost";
import { useProfile } from "../../hooks/useProfile";

export default function AllJobPosts() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const { data:jobPosts=[], isLoading } = useJobPost();

  // Dummy Job Post Data
  const jobPost = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      company: "JobZilla Technologies",
      location: "Remote (India)",
      type: "Full-Time",
      salary: "₹22L – ₹28L / year",
      tags: ["React", "TypeScript", "Next.js", "UI Engineering"],
      totalApplications: 124,
      shortlisted: 18,
      interviews: 7,
      status: "active",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "JobZilla Technologies",
      location: "Bengaluru",
      type: "Full-Time",
      salary: "₹16L – ₹20L / year",
      tags: ["Figma", "Design Systems", "User Research"],
      totalApplications: 67,
      shortlisted: 9,
      interviews: 4,
      status: "active",
    },
  ];

//   FILTER LOGIC
  const filteredJobs = jobPosts.filter((job) => (filter === "all" ? true : job.status === filter))
    .filter((job) => job.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      {isLoading ? (
        <div>loading....</div>
      ) : (
        <div className="w-full bg-gray-200 min-h-screen">
          <div className="w-[80%] m-auto">
            <h2 className="text-xl font-semibold mb-4">My Job Posts</h2>

            {/* TOP CONTROLS */}
            <div className="flex items-center justify-between mb-5">
              {/* FILTER TABS */}
              <div className="flex gap-2">
                {["all", "open", "closed", "draft"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`px-4 py-2 rounded-lg text-sm capitalize ${
                      filter === tab
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* SEARCH + SORT */}
              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative">
                  <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
                  <input
                    placeholder="Search by job title"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-lg pl-10 pr-4 py-2"
                  />
                </div>

                {/* Sort */}
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="border rounded-lg px-3 py-2"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>

            {/* JOB LIST */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <JobPostCard key={job.id} job={job}></JobPostCard>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
