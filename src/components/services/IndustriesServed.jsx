import { useSiteConfig } from "../../context/SiteConfigContext";

export const IndustriesServed = () => {
  const { config } = useSiteConfig();
  const industries = config.home.industries;
  const config_global = config.global;
  return (
    <section className="bg-gray-50 py-16 px-8 overflow-hidden border-y border-black/5">
      <h2
        className="text-3xl md:text-4xl font-black text-center mb-4 uppercase tracking-tighter"
        style={{
          color: config_global.deepBlue,
        }}
      >
        {industries.title}
      </h2>
      <div
        className="w-24 h-1.5 mx-auto mb-12 rounded-full"
        style={{
          backgroundColor: config_global.primaryBlue,
        }}
      />
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...industries.items, ...industries.items].map((i, c) => (
            <div
              key={c}
              className="inline-flex items-center gap-4 mx-6 px-8 py-5 bg-white rounded-2xl border border-black/5 hover:border-primary-blue transition-all duration-300 shadow-sm"
            >
              <span className="text-3xl">{i.icon}</span>
              <span
                className="font-black tracking-tight uppercase text-sm"
                style={{
                  color: config_global.deepBlue,
                }}
              >
                {i.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};
