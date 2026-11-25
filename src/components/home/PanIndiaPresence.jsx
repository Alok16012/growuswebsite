import { useState } from "react";
import { useSiteConfig } from "../../context/SiteConfigContext";
import { IndiaMap } from "../IndiaMap";
import { ACTIVE_STATES } from "../../data/indiaMap";

export function PanIndiaPresence({ setCurrentPage }) {
  const { config } = useSiteConfig();
  const { activeStates } = config.pageCopy.coverage;
  const coverage = config.home.panIndia;
  const [selectedId, setSelectedId] = useState(null);
  const selectedState = ACTIVE_STATES.find(({ id }) => id === selectedId);
  const description = coverage.description.replace(/\s*Hover over a state to explore our coverage\.?\s*$/i, "");
  const buttonText = coverage.ctaButtonText?.trim() || "Contact our team";
  const contactLabel = /^view network\s*→?$/i.test(buttonText)
    ? "Contact our team"
    : buttonText;

  function selectState(id) {
    setSelectedId((current) => current === id ? null : id);
  }

  return (
    <section
      id="pan-india-presence"
      aria-labelledby="coverage-title"
      className="site-section scroll-mt-32 bg-[#102640] text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl md:mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#ff9dac]">
            {coverage.subtitle}
          </p>
          <h2 id="coverage-title" className="section-title mb-4">
            {coverage.title} <span className="text-[#ff9dac]">{coverage.titleHighlight}</span> {coverage.titleEnd}
          </h2>
          <p className="max-w-2xl leading-relaxed text-slate-200">{description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <figure className="rounded-3xl border border-[#335471] bg-[#183553] p-4 sm:p-6">
            <IndiaMap selectedState={selectedId} onStateSelect={selectState} />
            <figcaption className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2">
                <span className="size-3 rounded-full bg-[#84abc9]" aria-hidden="true" />
                Listed coverage
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-3 rounded-full bg-[#ff687e]" aria-hidden="true" />
                Selected state
              </span>
            </figcaption>
          </figure>

          <div className="min-w-0 space-y-5">
            <dl className="grid grid-cols-3 gap-2 sm:gap-3">
              {coverage.stats.map(({ icon, value, label }, index) => (
                <div key={index} className="rounded-xl border border-[#335471] bg-[#183553] p-2 text-center sm:p-4">
                  <dt className="break-words text-xs text-slate-200 sm:text-sm">
                    {icon && <span className="mr-1" aria-hidden="true">{icon}</span>}
                    {label}
                  </dt>
                  <dd className="mt-1 break-words text-xl font-bold text-white sm:text-3xl">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="rounded-2xl border border-[#335471] bg-[#183553] p-4 sm:p-6">
              <h3 className="text-lg font-bold">{activeStates}</h3>
              <p className="mb-4 mt-1 text-sm text-slate-200">
                Select a state to highlight it on the map.
              </p>
              <div className="flex flex-wrap gap-2">
                {ACTIVE_STATES.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={selectedId === id}
                    onClick={() => selectState(id)}
                    className="min-h-11 rounded-lg border border-[#527491] px-3 text-sm font-semibold text-white transition-colors hover:bg-[#294b70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9dac] aria-pressed:border-[#ff9dac] aria-pressed:bg-[#ff9dac] aria-pressed:text-[#102640] aria-pressed:hover:bg-[#ffc1cb]"
                  >
                    {label}
                  </button>
                ))}
              </div>
              <p role="status" className="mt-4 min-h-6 text-sm font-semibold text-[#ffadb9]">
                {selectedState && <>{selectedState.label} · Active coverage</>}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#335471] bg-[#183553] p-4 sm:p-6">
              <div>
                <h3 className="text-lg font-bold">{coverage.ctaTitle}</h3>
                <p className="mt-1 text-sm text-slate-200">{coverage.ctaSubtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setCurrentPage("contact")}
                className="min-h-11 rounded-lg bg-[#ff9dac] px-4 text-sm font-bold text-[#102640] transition-colors hover:bg-[#ffc1cb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9dac]"
              >
                {contactLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
