import { useSiteConfig } from "../../context/SiteConfigContext";

export const ResumeCTA = ({ onApply }) => {
  const pageCopy = useSiteConfig().config.pageCopy.resume;
  return (
  <section className="site-section bg-white border-t border-black/5">
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-primary-blue to-blue-600 p-16 rounded-3xl text-center">
        <h3 className="section-title text-white mb-6">
          {pageCopy.dontSeeYourRole}
        </h3>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          {pageCopy.wereAlwaysLookingForTalented}
        </p>
        <button
          onClick={onApply}
          className="bg-white text-primary-blue font-black px-10 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          {pageCopy.sendYourResume}
        </button>
      </div>
    </div>
  </section>
  );
};
