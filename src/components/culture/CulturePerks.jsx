import { useSiteConfig } from "../../context/SiteConfigContext";

export const CulturePerks = () => {
  const { config } = useSiteConfig();
  const { culture, global } = config;
  const i = [
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>,
  ];
  return (
    <section className="site-section bg-white">
      <div className="site-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="text-sm font-black tracking-[0.3em] uppercase mb-4"
              style={{
                color: global.primaryBlue,
              }}
            >
              {culture.perksSubtitle}
            </h2>
            <h3
              className="section-title mb-8 uppercase"
              style={{
                color: global.deepBlue,
              }}
            >
              {culture.perksTitle}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium">
              {culture.perksDescription}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {culture.perksList.map((c, u) => (
                <div key={u} className="flex items-start gap-4 group">
                  <div
                    className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-2xl flex-shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300 shadow-sm"
                    style={{
                      color: global.primaryBlue,
                    }}
                  >
                    {i[u] || i[0]}
                  </div>
                  <div>
                    <h4
                      className="font-black text-sm uppercase tracking-widest mb-1"
                      style={{
                        color: global.deepBlue,
                      }}
                    >
                      {c.title}
                    </h4>
                    <p className="text-gray-600 font-medium text-xs leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div
              className="absolute -inset-8 bg-gray-50 rounded-[60px]"
              style={{
                backgroundColor: `${global.primaryBlue}0d`,
              }}
            />
            <div
              className="relative rounded-3xl p-16 text-center shadow-2xl transition-transform hover:scale-105 duration-500"
              style={{
                backgroundColor: global.primaryBlue,
              }}
            >
              <p className="text-white text-7xl font-black mb-2">
                {culture.statsCount}
              </p>
              <p className="text-white/80 text-xs font-bold uppercase tracking-[0.3em]">
                {culture.statsLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
