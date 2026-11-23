import { useSiteConfig } from "../../context/SiteConfigContext";

export const QuoteCTA = ({ onQuoteClick }) => {
  const { config } = useSiteConfig();
  const { services, global } = config;
  return (
    <section
      className="py-16 px-8"
      style={{
        background: `linear-gradient(to right, ${global.primaryBlue}, #c0392b)`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          {services.ctaTitle}
        </h2>
        <p className="text-white/80 mb-8">{services.ctaSubtitle}</p>
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
            className="border-2 border-white text-white hover:bg-white font-bold px-8 py-3 rounded-full transition-colors duration-300"
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
