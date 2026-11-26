import { useState } from "react";
import { useSiteConfig } from "../../context/SiteConfigContext";
import { getClientLogoArtwork } from "./clientLogoArtwork";

function ClientLogo({ name, logo, onImageError }) {
  const [artwork, setArtwork] = useState(null);
  return (
    <li className="flex h-24 min-w-0 items-center justify-center px-2 sm:h-28 sm:px-3">
      <img
        src={artwork || logo}
        alt={name || ""}
        loading="lazy"
        decoding="async"
        onLoad={() => {
          if (artwork === null) getClientLogoArtwork(logo).then(setArtwork);
        }}
        onError={() => {
          if (artwork && artwork !== logo) setArtwork(logo);
          else onImageError(logo);
        }}
        className="block h-[4.5rem] w-full max-w-44 object-contain sm:h-20"
      />
    </li>
  );
}

export function Clients() {
  const { config } = useSiteConfig();
  const [paused, setPaused] = useState(false);
  const [failedLogos, setFailedLogos] = useState(() => new Set());
  const { homeClients: copy } = config.pageCopy;
  const { clients } = config.home;
  const groups = [
    { id: "domestic", label: copy.domestic, count: clients.domesticCount, entries: clients.row1 },
    { id: "overseas", label: copy.overseas, count: clients.overseasCount, entries: clients.row2 },
  ].map((group) => ({
    ...group,
    entries: group.entries.filter(({ logo }) => logo && !failedLogos.has(logo)),
  })).filter(({ entries }) => entries.length > 0);

  function hideFailedLogo(logo) {
    setFailedLogos((current) => current.has(logo) ? current : new Set([...current, logo]));
  }

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
                        <ClientLogo key={index + ":" + logo} name={name} logo={logo} onImageError={hideFailedLogo} />
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
