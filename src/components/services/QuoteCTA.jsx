import { useSiteConfig } from "../../context/SiteConfigContext";

export const QuoteCTA = ({ onQuoteClick }) => {
  const { config } = useSiteConfig();
  const { services, global } = config;
  return (
    <section
      className="site-section"
      style={{
        background: `linear-gradient(to right, ${global.primaryBlue}, ${global.deepBlue})`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title text-white mb-4">
          {services.ctaTitle}
        </h2>
        <p className="page-intro text-white/80 mb-8 mx-auto">{services.ctaSubtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onQuoteClick}
            className="bg-white hover:bg-gray-100 font-bold px-8 py-3 rounded-full transition-colors duration-300"
            style={{
              color: global.primaryBlue,
            }}
          >
            {services.ctaButton1Text}
          </button>
          <button
            className="border-2 border-white text-white hover:bg-white hover:text-[var(--hover-color)] font-bold px-8 py-3 rounded-full transition-colors duration-300"
            style={{
              "--hover-color": global.primaryBlue,
            }}
          >
            {services.ctaButton2Text}
          </button>
        </div>
      </div>
    </section>
  );
};
