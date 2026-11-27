import { useSiteConfig } from "../../context/SiteConfigContext";

export const CultureDna = () => {
  const { config } = useSiteConfig();
  const { culture, global } = config;
  return (
    <section className="site-section bg-gray-50 border-t border-black/5">
      <div className="site-content">
        <div className="text-center mb-12">
          <h2
            className="text-sm font-black tracking-[0.3em] uppercase mb-4"
            style={{
              color: global.primaryBlue,
            }}
          >
            {culture.dnaSubtitle}
          </h2>
          <h3
            className="section-title uppercase"
            style={{
              color: global.deepBlue,
            }}
          >
            {culture.dnaTitle}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culture.dnaValues.map((i, c) => (
            <div
              key={c}
              className="bg-deep-blue p-10 rounded-3xl border border-white/5 hover:border-primary-blue/30 transition-all duration-500 group shadow-xl hover:shadow-2xl"
              style={{
                backgroundColor: global.deepBlue,
              }}
            >
              <div
                className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300 shadow-inner text-2xl"
                style={{
                  color: global.primaryBlue,
                }}
              >
                {i.icon}
              </div>
              <h4 className="text-white font-black text-xl mb-4 uppercase tracking-tight">
                {i.title}
              </h4>
              <p className="text-slate-300 font-medium text-sm leading-relaxed">
                {i.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
