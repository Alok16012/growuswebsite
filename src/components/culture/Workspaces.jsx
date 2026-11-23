import { useSiteConfig } from "../../context/SiteConfigContext";

export const Workspaces = () => {
  const { config } = useSiteConfig();
  const { culture, global } = config;
  return (
    <section className="py-16 px-8 bg-slate-50 border-y border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-sm font-black tracking-[0.3em] uppercase mb-4"
            style={{
              color: global.primaryBlue,
            }}
          >
            {culture.workspacesSubtitle}
          </h2>
          <h3
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
            style={{
              color: global.deepBlue,
            }}
          >
            {culture.workspacesTitle}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {culture.workspaces.map((i, c) => (
            <div
              key={c}
              className="group relative h-[350px] rounded-2xl overflow-hidden"
            >
              <img
                src={i.img}
                alt={i.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p
                  className="font-black text-xl uppercase tracking-tighter"
                  style={{
                    color: global.deepBlue,
                  }}
                >
                  {i.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
