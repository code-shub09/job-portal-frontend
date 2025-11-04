// components/CompanyCard.jsx
export default function CompanyCard({job}) {
    const company=job.postedBy;
   
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-slate-200 overflow-hidden flex items-center justify-center text-slate-600">
          {company?.logo ? (
            <img src={company.logo} alt={company.companyName} className="w-full h-full object-cover" />
          ) : (
            <span className="text-sm font-medium">{(company.companyName || "TC").slice(0, 2)}</span>
          )}
        </div>
        <div>
          <h2 className="font-medium text-slate-900">{company.companyName|| "TechCorp Inc."}</h2>
          <div className="text-xs text-slate-500 flex flex-wrap gap-1">
            <span>{company?.size || "1,000–5,000 employees"}</span>
            <span>•</span>
            <span>{company.industry || "Technology & Software"}</span>
          </div>
        </div>
      </div>
      <button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
        
        <a href={company.companyWebsite}> Visit Website</a>
      </button>
    </div>
  );
}
