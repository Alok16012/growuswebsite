import { useSiteConfig } from "../../context/SiteConfigContext";

export const StatsBand = () => {
  const { config } = useSiteConfig();
  const config_global = config.global;
  const stats = config.home.hero.stats;
  return (
    <section className="bg-gray-50 site-section border-y border-black/5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((i, c) => (
          <div key={c} className="group">
            <p
              className="text-5xl md:text-6xl font-black mb-3 group-hover:text-primary-blue transition-colors duration-500"
              style={{
                color: config_global.deepBlue,
              }}
            >
              {i.number}
              {i.suffix}
            </p>
            <p
              className="text-[11px] font-black uppercase tracking-[0.3em]"
              style={{
                color: config_global.primaryBlue,
              }}
            >
              {i.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
