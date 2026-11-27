import { SiteImage } from "../SiteImage";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const Ecosystem = ({ onJoinClick }) => {
  const { config } = useSiteConfig();
  const ecosystem = config.about.ecosystem;
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2
              className="text-sm font-black tracking-[0.3em] uppercase mb-4"
              style={{
                color:
                  config_global.design?.text?.subheading ||
                  config_global.primaryBlue,
              }}
            >
              {ecosystem.subtitle}
            </h2>
            <h3
              className="section-title uppercase"
              style={{
                color:
                  ["#f9fafb", "#edf3f9", "#f8fafc"].includes(
                    config_global.design?.backgrounds?.sectionLight || "#f9fafb",
                  )
                    ? config_global.deepBlue
                    : config_global.design?.text?.heading,
              }}
            >
              {ecosystem.heading}
            </h3>
          </div>
          <p
            className="max-w-md text-sm leading-relaxed font-medium"
            style={{
              color: "#334155",
            }}
          >
            {ecosystem.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {ecosystem.companies.map((c, u) => (
            <div
              key={u}
              className="group relative overflow-hidden rounded-3xl border border-white/5 transition-all duration-500 shadow-xl"
              style={{
                backgroundColor:
                  config_global.design?.backgrounds?.sectionDark ||
                  config_global.deepBlue,
              }}
            >
              <div className="growus-image-surface h-64 overflow-hidden relative">
                <SiteImage
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src={c.image}
                  alt={c.name}
                  className="growus-photo w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)] via-[var(--deep-blue-20)] to-transparent"
                  style={{
                    "--deep-blue":
                      config_global.design?.backgrounds?.sectionDark ||
                      config_global.deepBlue,
                    "--deep-blue-20": `${config_global.design?.backgrounds?.sectionDark || config_global.deepBlue}33`,
                  }}
                />
                <div className="absolute bottom-6 left-8">
                  <h4
                    className="text-white font-black text-2xl tracking-tight drop-shadow-lg group-hover:text-primary-blue transition-colors uppercase"
                    style={{
                      color: config_global.design?.text?.heading || "#ffffff",
                    }}
                  >
                    {c.name}
                  </h4>
                </div>
              </div>
              <div className="p-10 pt-4">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {c.services.map((d, m) => (
                    <li
                      key={m}
                      className="flex items-start gap-2 text-sm group-hover:text-white transition-colors font-medium"
                      style={{
                        color:
                          config_global.design?.text?.paragraph || "#cbd5e1",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 group-hover:scale-125 transition-all"
                        style={{
                          backgroundColor:
                            config_global.design?.text?.subheading ||
                            `${config_global.primaryBlue}66`,
                        }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-12 p-12 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-10"
          style={{
            background: `linear-gradient(to right, ${config_global.design?.text?.subheading || config_global.primaryBlue}, #2563eb)`,
          }}
        >
          <div className="text-center lg:text-left">
            <h4 className="text-white font-black text-3xl mb-4">
              {ecosystem.napsTitle}
            </h4>
            <p className="text-white/80 max-w-xl">
              {ecosystem.napsDescription}
            </p>
          </div>
          <button
            onClick={onJoinClick}
            className="font-black px-10 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            style={{
              color:
                config_global.design?.text?.subheading ||
                config_global.primaryBlue,
              backgroundColor:
                config_global.design?.buttons?.primaryText || "#ffffff",
            }}
          >
            {ecosystem.napsButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};
