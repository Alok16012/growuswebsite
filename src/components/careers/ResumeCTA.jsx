import { useSiteConfig } from "../../context/SiteConfigContext";

export const ResumeCTA = ({ onApply }) => {
  const { config } = useSiteConfig();
  const { global } = config;
  const pageCopy = config.pageCopy.resume;
  return (
    <section className="site-section bg-white border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        <div
          className="px-5 py-10 sm:p-16 rounded-3xl text-center shadow-2xl"
          style={{ background: `linear-gradient(to right, ${global.primaryBlue}, ${global.deepBlue})` }}
        >
          <h3 className="section-title text-white mb-6">
            {pageCopy.dontSeeYourRole}
          </h3>
          <p className="page-intro text-white/80 mb-10 mx-auto">
            {pageCopy.wereAlwaysLookingForTalented}
          </p>
          <button
            onClick={onApply}
            style={{ color: global.primaryBlue }}
            className="bg-white font-black px-6 py-4 sm:px-10 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            {pageCopy.sendYourResume}
          </button>
        </div>
      </div>
    </section>
  );
};
