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
            className="text-sm font-black tracking-[0.3em] uppercase mb-4"
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
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p
                    className="text-xs italic font-black leading-relaxed"
                    style={{
                      color: "var(--growus-ink)",
                    }}
                  >
                    "{i.quote}"
                  </p>
                </div>
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
                className="text-[11px] font-black uppercase tracking-[0.2em]"
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
