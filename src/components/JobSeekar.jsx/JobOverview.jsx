// components/JobOverview.jsx
export default function JobOverview() {
    const job={
      id: 1,
      title: "Senior Product Designer",
      company: "TechFlow Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      remote: "Remote OK",
      salary: "$120K - $160K",
      match: "Great match",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
      <h3 className="text-base font-semibold text-slate-900">Job Overview</h3>

      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Job Type</span>
          <span className="inline-flex items-center rounded-full bg-green-100 text-green-600 px-3 py-1 text-xs font-medium">
            {job.jobType || "Full-time"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500">Posted</span>
          <span className="text-slate-700 text-sm">{job.postedAgo || "3 days ago"}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500">Salary</span>
          <span className="text-slate-700 font-medium">{job.salaryRange || "$120K – $180K"}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500">Experience</span>
          <span className="text-slate-700">{job.experience || "5+ years"}</span>
        </div>

        {job.applicants != null && (
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Applicants</span>
            <span className="text-slate-700">{job.applicants} applied</span>
          </div>
        )}
      </div>

      <button className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500">
        Apply Now
      </button>

      <div className="flex items-center justify-between text-xs text-slate-400">
        <button>Share</button>
        <button>Save</button>
      </div>
    </div>
  );
}
