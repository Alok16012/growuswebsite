import { SiteImage } from "../SiteImage";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const OurStory = () => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.aboutStory;
  const story = config.about.story;
  const config_global = config.global;
  return (
    <section
      className="site-section"
      style={{
        backgroundColor:
          config_global.design?.backgrounds?.sectionLight || "#ffffff",
      }}
    >
      <div className="site-content grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative group">
          <div
            className="absolute -inset-4 rounded-2xl blur-2xl transition-all duration-700"
            style={{
              backgroundColor: `${config_global.design?.text?.subheading || config_global.primaryBlue}33`,
            }}
          />
          <SiteImage
            sizes="(min-width: 1024px) 560px, 100vw"
            src={story.image}
            alt="Modern Factory"
            className="growus-photo relative z-10 growus-photo-frame w-full aspect-[4/3] object-cover lg:h-[500px] lg:aspect-auto"
          />
          <div className="absolute bottom-3 right-3 w-32 h-32 sm:w-40 sm:h-40 lg:-bottom-6 lg:right-0 bg-white/80 backdrop-blur-3xl rounded-3xl border border-black/5 shadow-2xl z-20 flex flex-col items-center justify-center text-center p-4">
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
              {pageCopy.yearsOf} <br /> {pageCopy.excellence}
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
            className="section-title mb-8 uppercase"
            style={{
              color: "var(--growus-ink)",
            }}
          >
            {story.heading}
          </h3>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{
              color: "var(--growus-copy)",
            }}
          >
            {story.paragraph1}
          </p>
          <p
            className="text-lg leading-relaxed mb-10"
            style={{
              color: "var(--growus-copy)",
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
                  color: "var(--growus-ink)",
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
                  color: "var(--growus-ink)",
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
