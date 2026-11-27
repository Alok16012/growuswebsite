import { SiteImage } from "../SiteImage";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const Team = () => {
  const { config } = useSiteConfig();
  const team = config.about.team;
  const config_global = config.global;
  return (
    <section
      className="site-section"
      style={{
        backgroundColor:
          config_global.design?.backgrounds?.sectionLight || "#f9fafb",
      }}
    >
      <div className="site-content">
        <div className="text-center mb-12">
          <h2
            className="text-sm font-black tracking-wider uppercase mb-4"
            style={{
              color:
                config_global.design?.text?.subheading ||
                config_global.primaryBlue,
            }}
          >
            {team.subtitle}
          </h2>
          <h3
            className="section-title uppercase"
            style={{
              color: "var(--growus-ink)",
            }}
          >
            {team.heading}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.members.map((i, c) => (
            <div key={c} className="group">
              <div className="growus-photo-frame relative overflow-hidden aspect-[4/5] mb-6">
                <SiteImage
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                  src={i.img}
                  alt={i.name}
                  className="growus-photo w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-110"
                />
                {i.quote && (
                  <div className="absolute inset-x-0 bottom-0 bg-[color-mix(in_srgb,var(--growus-ink)_92%,transparent)] px-4 py-3 text-white sm:px-5 sm:py-4">
                    <p className="border-l-2 border-[var(--growus-coral)] pl-3 text-sm font-medium italic leading-snug">
                      "{i.quote}"
                    </p>
                  </div>
                )}
              </div>
              <h4
                className="font-black text-xl mb-1 uppercase tracking-tight"
                style={{
                  color: "var(--growus-ink)",
                }}
              >
                {i.name}
              </h4>
              <p
                className="text-xs font-black uppercase tracking-[0.2em]"
                style={{
                  color:
                    config_global.design?.text?.subheading ||
                    config_global.primaryBlue,
                }}
              >
                {i.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
