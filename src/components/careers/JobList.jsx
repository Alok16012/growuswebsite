import { useState } from "react";
import { useSiteConfig } from "../../context/SiteConfigContext";
import { JobCard } from "./JobCard";

export const JobList = ({ onApply }) => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.jobList;
  const s = config?.careers?.jobs || [];
  const [i, setI] = useState("");
  const [u, setU] = useState("All");
  const m = ["All", ...new Set(s.map((g) => g.department))];
  const p = s.filter((g) => {
    const b =
      g.title.toLowerCase().includes(i.toLowerCase()) ||
      g.department.toLowerCase().includes(i.toLowerCase());
    const x = u === "All" || g.department === u;
    return b && x;
  });
  return (
    <section className="bg-gray-50 site-section border-y border-black/5">
      <div className="site-content">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-primary-blue text-sm font-black tracking-wide uppercase mb-4">
              {pageCopy.currentVacancies}
            </h2>
            <h3 className="section-title text-deep-blue uppercase">
              {pageCopy.browseOpenRoles}
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-full sm:w-80">
              <svg
                className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder={pageCopy.searchByTitleOrDepartment}
                value={i}
                onChange={(g) => setI(g.target.value)}
                className="bg-white border border-black/10 rounded-full pl-10 pr-6 py-3 text-deep-blue text-sm font-medium placeholder:text-deep-blue/50 focus:outline-none focus:border-primary-blue transition-colors w-full shadow-inner"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 mb-10 flex-wrap">
          {m.map((g) => (
            <button
              key={g}
              onClick={() => setU(g)}
              className={`text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm ${u === g ? "bg-primary-blue text-white" : "bg-white text-deep-blue hover:bg-gray-50 border border-black/5"}`}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {p.map((job, b) => (
            <JobCard key={b} job={job} onApply={onApply} />
          ))}
        </div>
        {p.length === 0 && (
          <div className="text-center py-16">
            <p className="text-deep-blue/40 text-lg font-black uppercase tracking-widest">
              {pageCopy.noPositionsFoundMatchingYour}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
