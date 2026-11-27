import { useSiteConfig } from "../../context/SiteConfigContext";

export const Testimonials = () => {
  const { config } = useSiteConfig();
  const testimonials = config.home.testimonials;
  const config_global = config.global;
  return (
    <section
      className="site-section border-t border-black/5"
      style={{
        backgroundColor:
          config_global.design?.backgrounds?.sectionLight || "#f9fafb",
      }}
    >
      <div className="site-content">
        <h2
          className="section-title text-center mb-12 uppercase"
          style={{
            color: "var(--growus-ink)",
          }}
        >
          {testimonials.sectionTitle}{" "}
          <span
            style={{
              color:
                config_global.design?.text?.subheading ||
                config_global.primaryBlue,
            }}
          >
            {testimonials.sectionTitleHighlight}
          </span>
        </h2>
        <div
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.items.map((i, c) => (
            <div
              key={c}
              className="flex-shrink-0 p-10 rounded-3xl max-w-sm border border-white/5 hover:border-primary-blue/30 transition-all duration-500 shadow-xl hover:shadow-2xl group"
              style={{
                backgroundColor:
                  config_global.design?.backgrounds?.sectionDark ||
                  config_global.deepBlue,
              }}
            >
              <div
                className="text-5xl font-black mb-6 opacity-40 group-hover:opacity-100 transition-opacity"
                style={{
                  color:
                    config_global.design?.buttons?.primaryBg ||
                    config_global.accentGreen,
                }}
              >
                "
              </div>
              <p
                className="mb-8 font-medium leading-relaxed"
                style={{
                  color: config_global.design?.text?.paragraph || "#e2e8f0",
                }}
              >
                {i.text}
              </p>
              <div>
                <p
                  className="font-bold uppercase tracking-tight text-lg"
                  style={{
                    color: config_global.design?.text?.heading || "#ffffff",
                  }}
                >
                  {i.name}
                </p>
                <p
                  className="text-xs uppercase font-black tracking-widest mt-1"
                  style={{
                    color:
                      config_global.design?.text?.subheading ||
                      config_global.primaryBlue,
                  }}
                >
                  {i.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
