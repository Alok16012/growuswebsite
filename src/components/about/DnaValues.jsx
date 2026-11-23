import { useSiteConfig } from "../../context/SiteConfigContext";

export const DnaValues = () => {
  const { config } = useSiteConfig();
  const dna = config.about.dna;
  const config_global = config.global;
  return (
    <section
      className="py-16 px-8 border-y border-black/5"
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
            {dna.subtitle}
          </h2>
          <h3
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
            style={{
              color:
                config_global.design?.backgrounds?.sectionLight === "#f9fafb" ||
                !config_global.design?.backgrounds?.sectionLight
                  ? config_global.deepBlue
                  : config_global.design?.text?.heading,
            }}
          >
            {dna.heading}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dna.values.map((i, c) => (
            <div
              key={c}
              className="p-10 rounded-3xl border border-white/5 transition-all duration-500 group cursor-default shadow-xl hover:shadow-2xl hover:bg-black"
              style={{
                backgroundColor:
                  config_global.design?.backgrounds?.sectionDark ||
                  config_global.deepBlue,
              }}
            >
              <div
                className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl transition-all duration-300 shadow-inner"
                style={{
                  color:
                    config_global.design?.icons?.color ||
                    config_global.primaryBlue,
                }}
              >
                {i.icon}
              </div>
              <h4
                className="font-black text-xl mb-4 uppercase tracking-tight"
                style={{
                  color: config_global.design?.text?.heading || "#ffffff",
                }}
              >
                {i.title}
              </h4>
              <p
                className="text-sm leading-relaxed font-medium"
                style={{
                  color: config_global.design?.text?.paragraph || "#cbd5e1",
                }}
              >
                {i.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
