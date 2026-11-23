import { useSiteConfig } from "../../context/SiteConfigContext";

export const Clients = () => {
  const { config } = useSiteConfig();
  const clients = config.home.clients;
  const config_global = config.global;
  const IComponent = ({ clients, reverse = false }) => (
    <div className="flex overflow-hidden py-4 select-none">
      <div
        className={`flex gap-6 whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee-slow"}`}
      >
        {[...clients, ...clients, ...clients].map((d, m) => (
          <div
            key={m}
            className="w-56 h-32 rounded-2xl flex items-center justify-center p-8 bg-white border border-black/5 hover:border-primary-blue/30 transition-all duration-500 group shadow-lg hover:shadow-2xl overflow-hidden"
          >
            {d.logo ? (
              <img
                src={d.logo}
                alt={d.name}
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            ) : (
              <span
                className="font-black text-center text-sm leading-tight transition-colors uppercase tracking-widest px-2"
                style={{
                  color: config_global.deepBlue,
                }}
              >
                {d.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <section
      className="py-16 px-4 md:px-8 overflow-hidden relative border-t border-black/5"
      style={{
        backgroundColor:
          config_global.design?.backgrounds?.sectionLight || "#f9fafb",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-10">
          <div className="text-center lg:text-left">
            <h2
              className="text-xs md:text-sm font-black tracking-[0.4em] uppercase mb-4"
              style={{
                color:
                  config_global.design?.text?.subheading ||
                  config_global.primaryBlue,
              }}
            >
              {clients.subtitle}
            </h2>
            <h3
              className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
              style={{
                color:
                  config_global.design?.backgrounds?.sectionLight ===
                    "#f9fafb" ||
                  !config_global.design?.backgrounds?.sectionLight
                    ? config_global.deepBlue
                    : config_global.design?.text?.heading,
              }}
            >
              {clients.title}
            </h3>
            <div
              className="w-24 h-2 mx-auto lg:mx-0 mb-8 rounded-full"
              style={{
                backgroundColor:
                  config_global.design?.text?.subheading ||
                  config_global.primaryBlue,
              }}
            />
          </div>
          <div className="flex gap-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-2xl">
            <div className="text-center">
              <div
                className="text-4xl md:text-6xl font-black mb-2"
                style={{
                  color:
                    config_global.design?.backgrounds?.sectionLight ===
                      "#f9fafb" ||
                    !config_global.design?.backgrounds?.sectionLight
                      ? config_global.deepBlue
                      : config_global.design?.text?.heading,
                }}
              >
                {clients.domesticCount}
              </div>
              <div
                className="text-[10px] font-black uppercase tracking-[0.3em]"
                style={{
                  color:
                    config_global.design?.text?.subheading ||
                    config_global.primaryBlue,
                }}
              >
                Domestic
              </div>
            </div>
            <div className="h-16 w-px bg-gray-200 self-center" />
            <div className="text-center">
              <div
                className="text-4xl md:text-6xl font-black mb-2"
                style={{
                  color:
                    config_global.design?.backgrounds?.sectionLight ===
                      "#f9fafb" ||
                    !config_global.design?.backgrounds?.sectionLight
                      ? config_global.deepBlue
                      : config_global.design?.text?.heading,
                }}
              >
                {clients.overseasCount}
              </div>
              <div
                className="text-[10px] font-black uppercase tracking-[0.3em]"
                style={{
                  color:
                    config_global.design?.text?.subheading ||
                    config_global.primaryBlue,
                }}
              >
                Overseas
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <IComponent clients={clients.row1} />
          <IComponent clients={clients.row2} reverse />
        </div>
      </div>
      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 50s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 55s linear infinite;
        }
        .animate-marquee-slow:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
