// components/JobDetails.jsx
export default function JobDetails({job}) {
    
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-6">
      {/* Job Description */}
      <section>
        <h3 className="text-base font-semibold text-slate-900 mb-2">Job Description</h3>
         <div
          className="job-description text-gray-800"
          dangerouslySetInnerHTML={{
            __html:job.description || "<p>We are seeking a highly skilled Senior Software Engineer to join our dynamic engineering team. In this role, you will design, develop, and maintain scalable web applications that serve millions of users worldwide</p>",
          }}
        />
        
      </section>

      
    </div>
  );
}
