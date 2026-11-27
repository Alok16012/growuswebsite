import { useSiteConfig } from "../../context/SiteConfigContext";

export const JobCard = ({ job, onApply }) => {
  const pageCopy = useSiteConfig().config.pageCopy.jobCard;
  return (
  <div className="group bg-white rounded-[24px] border border-black/5 hover:border-primary-blue/30 p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(232,58,58,0.1)] shadow-xl relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-blue/5 rounded-bl-[100px] -z-0 group-hover:bg-primary-blue/10 transition-colors" />
    <div className="relative z-10">
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="bg-primary-blue/10 text-primary-blue text-xs font-black uppercase tracking-wide px-4 py-1.5 rounded-full">
          {job.department}
        </span>
        <span className="bg-gray-50 text-deep-blue/50 text-xs font-black uppercase tracking-wide px-4 py-1.5 rounded-full">
          {job.type}
        </span>
      </div>
      <h3 className="text-deep-blue text-2xl font-black mb-3 uppercase tracking-tight">
        {job.title}
      </h3>
      <div className="flex items-center gap-2 text-gray-600 font-bold text-sm mb-5">
        <svg
          className="w-4 h-4 text-primary-blue"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        <span>{job.location}</span>
      </div>
      <p className="text-[var(--growus-copy)] font-medium text-base leading-relaxed mb-6">
        {job.description}
      </p>
      <div className="mb-8">
        <p className="text-deep-blue/30 text-xs font-black uppercase tracking-wide mb-4">
          {pageCopy.requirements}
        </p>
        <ul className="space-y-3">
          {job.requirements.map((s, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-600 font-medium text-xs"
            >
              <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mt-1.5 flex-shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => onApply(job)}
        className="flex items-center gap-3 text-primary-blue font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-all duration-300"
      >
        {pageCopy.applyNow}
        <div className="w-10 h-10 bg-gray-50 group-hover:bg-primary-blue group-hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  </div>
  );
};
