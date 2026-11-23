import { useSiteConfig } from "../../context/SiteConfigContext";

export const OurStory = () => {
  const { config } = useSiteConfig();
  const story = config.about.story;
  const config_global = config.global;
  return (
    <section
      className="py-16 px-8"
      style={{
        backgroundColor:
          config_global.design?.backgrounds?.sectionLight || "#ffffff",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative group">
          <div
            className="absolute -inset-4 rounded-2xl blur-2xl transition-all duration-700"
            style={{
              backgroundColor: `${config_global.design?.text?.subheading || config_global.primaryBlue}33`,
            }}
          />
          <img
            src={story.image}
            alt="Modern Factory"
            className="relative z-10 rounded-[24px] shadow-2xl border border-black/5 w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/80 backdrop-blur-3xl rounded-3xl border border-black/5 shadow-2xl z-20 flex flex-col items-center justify-center text-center p-4">
            <span
              className="text-4xl font-black mb-1"
              style={{
                color:
                  config_global.design?.text?.subheading ||
                  config_global.primaryBlue,
              }}
            >
              15+
            </span>
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{
                color: config_global.deepBlue,
              }}
            >
              Years of <br /> Excellence
            </span>
          </div>
        </div>
        <div>
          <h2
            className="text-sm font-black tracking-[0.3em] uppercase mb-4"
            style={{
              color:
                config_global.design?.text?.subheading ||
                config_global.primaryBlue,
            }}
          >
            {story.subtitle}
          </h2>
          <h3
            className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tight"
            style={{
              color:
                config_global.design?.backgrounds?.sectionLight === "#ffffff" ||
                !config_global.design?.backgrounds?.sectionLight
                  ? config_global.deepBlue
                  : config_global.design?.text?.heading,
            }}
          >
            {story.heading}
          </h3>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{
              color: config_global.design?.text?.paragraph || "#64748b",
            }}
          >
            {story.paragraph1}
          </p>
          <p
            className="text-lg leading-relaxed mb-10"
            style={{
              color: config_global.design?.text?.paragraph || "#64748b",
            }}
          >
            {story.paragraph2}
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div
              className="p-6 rounded-2xl border border-black/5 shadow-sm"
              style={{
                backgroundColor:
                  config_global.design?.backgrounds?.sectionLight ===
                    "#ffffff" ||
                  !config_global.design?.backgrounds?.sectionLight
                    ? "#f9fafb"
                    : "rgba(255,255,255,0.05)",
              }}
            >
              <h4
                className="font-black text-3xl mb-1"
                style={{
                  color:
                    config_global.design?.backgrounds?.sectionLight ===
                      "#ffffff" ||
                    !config_global.design?.backgrounds?.sectionLight
                      ? config_global.deepBlue
                      : config_global.design?.text?.heading,
                }}
              >
                {story.stat1}
              </h4>
              <p
                className="text-[10px] font-black uppercase tracking-widest"
                style={{
                  color:
                    config_global.design?.text?.subheading ||
                    config_global.primaryBlue,
                }}
              >
                {story.stat1Label}
              </p>
            </div>
            <div
              className="p-6 rounded-2xl border border-black/5 shadow-sm"
              style={{
                backgroundColor:
                  config_global.design?.backgrounds?.sectionLight ===
                    "#ffffff" ||
                  !config_global.design?.backgrounds?.sectionLight
                    ? "#f9fafb"
                    : "rgba(255,255,255,0.05)",
              }}
            >
              <h4
                className="font-black text-3xl mb-1"
                style={{
                  color:
                    config_global.design?.backgrounds?.sectionLight ===
                      "#ffffff" ||
                    !config_global.design?.backgrounds?.sectionLight
                      ? config_global.deepBlue
                      : config_global.design?.text?.heading,
                }}
              >
                {story.stat2}
              </h4>
              <p
                className="text-[10px] font-black uppercase tracking-widest"
                style={{
                  color:
                    config_global.design?.text?.subheading ||
                    config_global.primaryBlue,
                }}
              >
                {story.stat2Label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
