// components/JobHeader.jsx
export default function JobHeader({job}) {
    console.log('header:', job);
 

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-start justify-between gap-4">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
          {job.title || "Senior Software Engineer"}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mt-1">
          <span>{job.postedBy.companyName || "TechCorp Inc."}</span>
          <span>•</span>
          <span>{job.location || "San Francisco, CA"}</span>
          {job.jobType && (
            <>
              <span>•</span>
              <span>{job.jobType}</span>
            </>
          )}
          {job.postedAgo && (
            <>
              <span>•</span>
              {/* <span>{job.postedAgo}</span> */}
            </>
          )}
        </div>
      </div>
      <button
        type="button"
        className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100"
        aria-label="Save job"
      >
        ♥
      </button>
    </div>
  );
}
