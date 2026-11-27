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
          <div className="absolute bottom-3 right-3 z-20 flex h-32 w-32 flex-col items-center justify-center rounded-3xl border border-white/15 bg-[var(--growus-ink)] p-4 text-center shadow-2xl sm:h-40 sm:w-40 lg:-bottom-6 lg:right-0">
            <span className="mb-1 text-4xl font-black text-[var(--growus-coral-light)]">
              15+
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              {pageCopy.yearsOf} <br /> {pageCopy.excellence}
            </span>
          </div>
        </div>
        <div>
          <h2
            className="text-sm font-black tracking-wider uppercase mb-4"
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
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {[
              [story.stat1, story.stat1Label],
              [story.stat2, story.stat2Label],
            ].map(([value, label], index) => (
              <div
                key={index}
                className="rounded-2xl border border-t-4 border-black/5 border-t-[var(--growus-coral)] bg-[var(--growus-surface)] p-4 shadow-sm sm:p-6"
              >
                <p className="mb-1 break-words text-3xl font-black text-[var(--growus-accent-text,#a82d4a)]">
                  {value}
                </p>
                <p className="text-xs font-bold uppercase tracking-wide text-[var(--growus-ink)]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
