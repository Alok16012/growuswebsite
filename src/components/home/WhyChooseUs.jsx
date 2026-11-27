import { SiteImage } from "../SiteImage";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const WhyChooseUs = () => {
  const { config } = useSiteConfig();
  const whyChooseUs = config.home.whyChooseUs;
  const config_global = config.global;
  return (
    <section
      className="site-section border-t border-black/5"
      style={{
        backgroundColor:
          config_global.design?.backgrounds?.sectionLight || "#f9fafb",
      }}
    >
      <div className="site-content grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className="section-title mb-8 uppercase"
            style={{
              color: "var(--growus-ink)",
            }}
          >
            {whyChooseUs.heading} <br />{" "}
            <span
              style={{
                color:
                  config_global.design?.text?.subheading ||
                  config_global.primaryBlue,
              }}
            >
              {whyChooseUs.headingHighlight}
            </span>
          </h2>
          <div
            className="w-24 h-2 mb-10 rounded-full"
            style={{
              backgroundColor:
                config_global.design?.text?.subheading ||
                config_global.primaryBlue,
            }}
          />
          <ul className="space-y-6">
            {whyChooseUs.benefits.map((i, c) => (
              <li key={c} className="flex items-center gap-5 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[var(--growus-ink)] text-[var(--growus-coral-light)] shadow-lg">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className="font-black text-lg uppercase tracking-tight transition-colors"
                  style={{
                    color: "var(--growus-ink)",
                  }}
                >
                  {i}
                </span>
              </li>
            ))}
          </ul>
          <button
            className="mt-12 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor:
                config_global.design?.buttons?.primaryBg ||
                config_global.primaryBlue,
              color: config_global.design?.buttons?.primaryText || "#ffffff",
            }}
          >
            {whyChooseUs.buttonText}
          </button>
        </div>
        <div className="relative p-4">
          <div
            className="absolute inset-0 rounded-3xl -rotate-3"
            style={{
              backgroundColor: `${config_global.primaryBlue}10`,
            }}
          />
          <SiteImage
            sizes="(min-width: 1024px) 560px, 100vw"
            src={whyChooseUs.image}
            alt="Quality Control Engineers"
            className="growus-photo growus-photo-frame relative z-10 w-full aspect-[4/3] object-cover lg:h-[500px] lg:aspect-auto"
          />
        </div>
      </div>
    </section>
  );
};
