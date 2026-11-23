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
      <div className="max-w-6xl mx-auto">
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
              color:
                config_global.design?.backgrounds?.sectionLight === "#f9fafb" ||
                !config_global.design?.backgrounds?.sectionLight
                  ? config_global.deepBlue
                  : config_global.design?.text?.heading,
            }}
          >
            {team.heading}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.members.map((i, c) => (
            <div key={c} className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                <img
                  src={i.img}
                  alt={i.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p
                    className="text-xs italic font-black leading-relaxed"
                    style={{
                      color:
                        config_global.design?.text?.heading ||
                        config_global.deepBlue,
                    }}
                  >
                    "{i.quote}"
                  </p>
                </div>
              </div>
              <h4
                className="font-black text-xl mb-1 uppercase tracking-tight"
                style={{
                  color:
                    config_global.design?.backgrounds?.sectionLight ===
                      "#f9fafb" ||
                    !config_global.design?.backgrounds?.sectionLight
                      ? config_global.deepBlue
                      : config_global.design?.text?.heading,
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
