import { SiteImage } from "../SiteImage";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const Workspaces = () => {
  const { config } = useSiteConfig();
  const { culture, global } = config;
  return (
    <section className="site-section bg-slate-50 border-y border-black/5">
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
            className="section-title uppercase"
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
              className="growus-photo-frame group relative aspect-[4/3] overflow-hidden md:aspect-[4/5]"
            >
              <SiteImage
                sizes="(min-width: 768px) 33vw, 100vw"
                src={i.img}
                alt={i.label}
                className="growus-photo w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
