import { SiteImage } from "../SiteImage";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const WhyChooseUs = () => {
  const { config } = useSiteConfig();
  const whyChooseUs = config.home.whyChooseUs;
  const config_global = config.global;
  return (
    <section
      className="py-16 md:site-section border-t border-black/5"
      style={{
        backgroundColor:
          config_global.design?.backgrounds?.sectionLight || "#f9fafb",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className="section-title mb-8 uppercase"
            style={{
              color:
                config_global.design?.backgrounds?.sectionLight === "#f9fafb" ||
                !config_global.design?.backgrounds?.sectionLight
                  ? config_global.deepBlue
                  : config_global.design?.text?.heading,
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
                <div
                  className="w-10 h-10 border border-white/10 group-hover:border-primary-blue rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-lg"
                  style={{
                    backgroundColor:
                      config_global.design?.backgrounds?.sectionDark ||
                      config_global.deepBlue,
                  }}
                >
                  <svg
                    className="w-5 h-5 group-hover:text-white transition-colors"
                    style={{
                      color:
                        config_global.design?.text?.subheading ||
                        config_global.primaryBlue,
                    }}
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
                    color:
                      config_global.design?.backgrounds?.sectionLight ===
                        "#f9fafb" ||
                      !config_global.design?.backgrounds?.sectionLight
                        ? config_global.deepBlue
                        : config_global.design?.text?.heading,
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
