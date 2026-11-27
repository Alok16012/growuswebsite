import { useSiteConfig } from "../../context/SiteConfigContext";

export const Industries = () => {
  const { config } = useSiteConfig();
  const industries = config.home.industries;
  const config_global = config.global;
  return (
    <section
      className="site-section overflow-hidden border-t border-black/5"
      style={{
        backgroundColor:
          config_global.design?.backgrounds?.sectionLight || "#f9fafb",
      }}
    >
      <div className="site-content mb-12 text-center">
        <h2
          className="text-sm font-black tracking-[0.4em] uppercase mb-4"
          style={{
            color:
              config_global.design?.text?.subheading ||
              config_global.primaryBlue,
          }}
        >
          {industries.subtitle}
        </h2>
        <h3
          className="section-title uppercase"
          style={{
            color: "var(--growus-ink)",
          }}
        >
          {industries.title}
        </h3>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...industries.items, ...industries.items, ...industries.items].map(
            (i, c) => (
              <div
                key={c}
                className="inline-flex items-center gap-6 mx-4 px-10 py-6 rounded-[24px] border border-white/5 hover:border-primary-blue/30 transition-all duration-300 shadow-xl group"
                style={{
                  backgroundColor:
                    config_global.design?.backgrounds?.sectionDark ||
                    config_global.deepBlue,
                }}
              >
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {i.icon}
                </span>
                <span
                  className="text-white font-bold uppercase tracking-tight text-lg"
                  style={{
                    color: config_global.design?.text?.heading || "#ffffff",
                  }}
                >
                  {i.name}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
