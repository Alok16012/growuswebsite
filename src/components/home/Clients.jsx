import { useState } from "react";
import { useSiteConfig } from "../../context/SiteConfigContext";

function ClientLogo({ name, logo }) {
  const [failedLogo, setFailedLogo] = useState(null);
  const showLogo = Boolean(logo) && failedLogo !== logo;

  return (
    <li className="growus-logo-tile flex min-h-36 min-w-0 flex-col items-center justify-center gap-3 rounded-xl bg-white px-3 py-4 text-center sm:px-5">
      {showLogo && (
        <div className="flex h-16 w-full items-center justify-center">
          <img
            src={logo}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setFailedLogo(logo)}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
      <span className={showLogo ? "break-words text-sm font-medium text-slate-600" : "break-words text-base font-bold text-slate-900"}>
        {name}
      </span>
    </li>
  );
}

export function Clients() {
  const { config } = useSiteConfig();
  const [paused, setPaused] = useState(false);
  const { homeClients: copy } = config.pageCopy;
  const { clients } = config.home;
  const groups = [
    { id: "domestic", label: copy.domestic, count: clients.domesticCount, entries: clients.row1 },
    { id: "overseas", label: copy.overseas, count: clients.overseasCount, entries: clients.row2 },
  ];

  return (
    <section id="clients" aria-labelledby="clients-title" className="growus-clients site-section scroll-mt-32 border-t border-slate-200">
      <div className="site-content">
        <header className="mb-8 text-center md:mb-10">
          <p className="growus-client-eyebrow mb-3 text-sm font-semibold uppercase tracking-widest">
            {clients.subtitle}
          </p>
          <h2 id="clients-title" className="section-title mb-4 uppercase">
            {clients.title}
          </h2>
          <div aria-hidden="true" className="growus-section-rule" />
          <button
            type="button"
            className="growus-client-motion-toggle mt-4 min-h-11 rounded-lg border border-slate-300 px-4 text-sm font-semibold hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            onClick={() => setPaused((current) => !current)}
          >
            {paused ? "Play logo animation" : "Pause logo animation"}
          </button>
        </header>
        <div className="space-y-8">
          {groups.map(({ id, label, count, entries }) => (
            <section key={id} aria-labelledby={`clients-${id}-title`}>
              <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-slate-200 pb-3">
                <h3 id={`clients-${id}-title`} className="text-lg font-bold">{label}</h3>
                <span className="text-sm font-semibold tabular-nums text-slate-600">{count}</span>
              </div>
              <div className="growus-client-marquee" data-paused={paused} data-direction={id}>
                <div className="growus-client-track">
                  {[false, true].map((duplicate) => (
                    <ul
                      key={String(duplicate)}
                      className="growus-client-list"
                      data-duplicate={duplicate}
                      aria-hidden={duplicate || undefined}
                    >
                      {entries.map(({ name, logo }, index) => (
                        <ClientLogo key={index + ":" + name} name={name} logo={logo} />
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
