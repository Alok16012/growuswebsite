import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useSiteConfig } from "../context/SiteConfigContext";
import { Navbar } from "../components/Navbar";
import { QuoteModal } from "../components/QuoteModal";
import { Footer } from "../components/Footer";

export const ServiceDetailPage = ({ serviceSlug, setCurrentPage }) => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.serviceDetails;
  const config_global = config.global;
  const items = config.services.items;
  const [u, setU] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);
  const m = items.find((v) => v.slug === serviceSlug);
  if (!m) {
    return null;
  }
  const p = items.map((v) => v.slug);
  const g = p.indexOf(serviceSlug);
  const b = g > 0 ? p[g - 1] : null;
  const x = g < p.length - 1 ? p[g + 1] : null;
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="services" setCurrentPage={setCurrentPage} />
      <section className="relative flex min-h-[26rem] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${m.image})`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="site-container relative z-10 flex flex-col justify-end pb-10 pt-36">
          <p
            className="text-[10px] font-black tracking-[0.4em] uppercase mb-2"
            style={{
              color:
                config_global.design?.hero?.subheading ||
                config_global.design?.text?.subheading ||
                config_global.primaryBlue,
            }}
          >
            {pageCopy.globalService}
          </p>
          <h1
            className="page-title mb-3 uppercase"
            style={{
              color:
                config_global.design?.hero?.heading ||
                config_global.design?.text?.heading ||
                "#ffffff",
            }}
          >
            {m.title}
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl leading-relaxed font-medium"
            style={{
              color: config_global.design?.text?.paragraph || "#f1f5f9",
            }}
          >
            {m.subtitle}
          </p>
        </div>
      </section>
      <section className="bg-gray-50 py-8 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-8">
          {m.stats.map((v, j) => (
            <div
              key={j}
              className="flex flex-col items-center min-w-[120px] group"
            >
              <div className="flex items-baseline gap-1">
                <span
                  className="text-3xl md:text-5xl font-black transition-colors duration-500 group-hover:color-primary"
                  style={{
                    color: config_global.deepBlue,
                  }}
                >
                  <CountUp
                    end={parseInt(v.number)}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>
                <span
                  className="text-lg font-black"
                  style={{
                    color: config_global.primaryBlue,
                  }}
                >
                  {v.suffix}
                </span>
              </div>
              <p
                className="text-[10px] font-black uppercase tracking-[0.3em] mt-2 opacity-40"
                style={{
                  color: config_global.deepBlue,
                }}
              >
                {v.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-14 site-gutter">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h2
              className="section-title mb-4 uppercase"
              style={{
                color: config_global.deepBlue,
              }}
            >
              {pageCopy.aboutThisService}
            </h2>
            <div
              className="w-16 h-1.5 mb-6 rounded-full"
              style={{
                backgroundColor: config_global.primaryBlue,
              }}
            />
            <p className="text-gray-600 font-medium text-sm leading-relaxed mb-4">
              {m.description}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              {m.longDescription}
            </p>
            <button
              onClick={() => setCurrentPage("contact")}
              className="mt-6 text-white font-black px-8 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-blue/20"
              style={{
                backgroundColor: config_global.primaryBlue,
              }}
            >
              {pageCopy.requestThisService}
            </button>
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {m.features.map((v, j) => (
                <motion.div
                  key={j}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: j * 0.08,
                    duration: 0.4,
                  }}
                  className="bg-gray-50 border border-black/5 rounded-2xl p-5 transition-all duration-300 group shadow-sm hover:shadow-xl hover:bg-white"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary-blue transition-colors duration-300"
                      style={{
                        backgroundColor: `${config_global.primaryBlue}1a`,
                      }}
                    >
                      <svg
                        className="w-4 h-4 transition-colors group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{
                          color: config_global.primaryBlue,
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4
                        className="font-black text-sm mb-1 group-hover:text-primary-blue transition-colors uppercase tracking-tight"
                        style={{
                          color: config_global.deepBlue,
                        }}
                      >
                        {v.title}
                      </h4>
                      <p className="text-gray-600 font-medium text-xs leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 site-gutter overflow-hidden relative border-y border-black/5">
        <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
          <div className="text-center mb-8">
            <h2
              className="section-title uppercase mb-3"
              style={{
                color: config_global.deepBlue,
              }}
            >
              {pageCopy.ourProcess}
            </h2>
            <p className="text-gray-500 font-medium text-sm md:text-base mb-4">
              {pageCopy.tracingOurSuccessStepBy}
            </p>
            <div
              className="w-20 h-1.5 mx-auto rounded-full"
              style={{
                backgroundColor: config_global.primaryBlue,
              }}
            />
          </div>
          <div className="hidden lg:block relative w-full h-[140px] mt-24 mb-24 mx-auto">
            <svg
              className="absolute inset-0 w-full h-full opacity-80"
              preserveAspectRatio="none"
              viewBox="0 0 1000 100"
            >
              <path
                d="M0,50 C100,50 150,20 250,20 C350,20 400,80 500,80 C600,80 650,30 750,30 C850,30 900,60 1000,60"
                fill="none"
                stroke="#5d4037"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
            {(() => {
              const v = [
                config_global.primaryBlue,
                "#10b981",
                "#f59e0b",
                "#8b5cf6",
                "#ef4444",
                "#06b6d4",
              ];
              const j = [
                {
                  x: 5,
                  y: 50,
                  cardPos: "top",
                },
                {
                  x: 23,
                  y: 22,
                  cardPos: "bottom",
                },
                {
                  x: 41,
                  y: 78,
                  cardPos: "top",
                },
                {
                  x: 59,
                  y: 78,
                  cardPos: "bottom",
                },
                {
                  x: 77,
                  y: 32,
                  cardPos: "top",
                },
                {
                  x: 95,
                  y: 58,
                  cardPos: "bottom",
                },
              ];
              return m.process.map((S, _) => {
                const C = j[_ % j.length];
                const E = v[_ % v.length];
                return (
                  <div
                    key={_}
                    className="absolute flex flex-col items-center z-10 group"
                    style={{
                      left: `${C.x}%`,
                      top: `${C.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {C.cardPos === "top" && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: _ * 0.1,
                        }}
                        className="absolute bottom-full mb-6 w-[160px] bg-white border border-gray-100 p-4 rounded-xl text-center shadow-lg transition-transform duration-300 group-hover:-translate-y-1"
                      >
                        <span
                          className="text-xs font-black tracking-widest uppercase block mb-1"
                          style={{
                            color: config_global.primaryBlue,
                          }}
                        >
                          Phase 0{_ + 1}
                        </span>
                        <h4 className="text-deep-blue text-sm font-bold leading-snug">
                          {S}
                        </h4>
                      </motion.div>
                    )}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center relative z-20 transition-transform duration-300 group-hover:scale-110 cursor-default shadow-md"
                      style={{
                        backgroundColor: E,
                      }}
                    >
                      <span className="text-white font-black text-xs">
                        {_ + 1}
                      </span>
                    </div>
                    {C.cardPos === "bottom" && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: _ * 0.1,
                        }}
                        className="absolute top-full mt-6 w-[160px] bg-white border border-gray-100 p-4 rounded-xl text-center shadow-lg transition-transform duration-300 group-hover:translate-y-1"
                      >
                        <span
                          className="text-xs font-black tracking-widest uppercase block mb-1"
                          style={{
                            color: config_global.primaryBlue,
                          }}
                        >
                          Phase 0{_ + 1}
                        </span>
                        <h4 className="text-deep-blue text-sm font-bold leading-snug">
                          {S}
                        </h4>
                      </motion.div>
                    )}
                  </div>
                );
              });
            })()}
          </div>
          <div className="lg:hidden relative w-full mt-8 max-w-md mx-auto">
            <div className="absolute left-[31px] top-6 bottom-6 w-1 rounded-full bg-gray-200 opacity-30" />
            <div className="flex flex-col gap-6 relative z-10 w-full">
              {m.process.map((v, j) => {
                const S = [
                  config_global.primaryBlue,
                  "#10b981",
                  "#f59e0b",
                  "#8b5cf6",
                  "#ef4444",
                  "#06b6d4",
                ];
                const _ = S[j % S.length];
                return (
                  <motion.div
                    key={j}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: j * 0.1,
                    }}
                    className="flex items-center gap-5 group cursor-default"
                  >
                    <div
                      className="w-16 h-16 flex-shrink-0 rounded-full border-4 border-white flex items-center justify-center text-white font-black text-xl z-20 shadow-md transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: _,
                      }}
                    >
                      {String(j + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 bg-white border border-gray-100 p-5 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300">
                      <span
                        className="text-[10px] font-black tracking-widest uppercase mb-1 block"
                        style={{
                          color: config_global.primaryBlue,
                        }}
                      >
                        Phase {String(j + 1).padStart(2, "0")}
                      </span>
                      <h4 className="text-deep-blue text-sm font-bold leading-snug">
                        {v}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 site-gutter">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-lg font-black uppercase tracking-tighter"
              style={{
                color: config_global.deepBlue,
              }}
            >
              {pageCopy.industriesWeServe}
            </h3>
            <p className="text-gray-500 text-xs font-bold">
              {pageCopy.thisServiceIsTailoredFor}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {m.industries.map((v, j) => (
              <span
                key={j}
                className="bg-white text-gray-600 text-[10px] font-black uppercase tracking-widest border border-black/10 rounded-full px-4 py-2 hover:border-primary-blue hover:text-white hover:bg-primary-blue transition-all cursor-default shadow-sm group"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-black/5 py-10 site-gutter bg-gray-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-center">
          {b ? (
            <button
              onClick={() => {
                setCurrentPage(`service-${b}`);
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-3 text-gray-400 hover:text-primary-blue transition-all group"
            >
              <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-all">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">
                {pageCopy.previous}
              </span>
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={() => setCurrentPage("services")}
            className="text-[10px] font-black uppercase tracking-widest hover:text-white transition-all border border-black/10 px-10 py-4 rounded-full bg-white shadow-sm"
            style={{
              color: config_global.deepBlue,
            }}
          >
            {pageCopy.viewAll}
          </button>
          {x ? (
            <button
              onClick={() => {
                setCurrentPage(`service-${x}`);
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-3 text-gray-400 hover:text-primary-blue transition-all group"
            >
              <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">
                {pageCopy.next}
              </span>
              <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-all">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          ) : (
            <div />
          )}
        </div>
      </section>
      <section
        className="py-10 px-6"
        style={{
          background: `linear-gradient(to right, ${config_global.primaryBlue}, #c0392b)`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-xl md:text-2xl font-black mb-3">
            {pageCopy.readyToGetStartedWith} {m.title}?
          </h2>
          <p className="text-white/80 text-sm mb-6">
            {pageCopy.getInTouchWithOur}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setU(true)}
              className="bg-white hover:bg-gray-100 font-black px-7 py-3 rounded-full text-xs uppercase tracking-widest transition-colors"
              style={{
                color: config_global.primaryBlue,
              }}
            >
              {pageCopy.getAFreeQuote}
            </button>
            <a
              href={`tel:${config.footer.phone}`}
              className="border-2 border-white text-white hover:bg-white font-black px-7 py-3 rounded-full text-xs uppercase tracking-widest transition-all"
            >
              {pageCopy.callUsNow}
            </a>
          </div>
        </div>
      </section>
      <QuoteModal isOpen={u} onClose={() => setU(false)} />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};
