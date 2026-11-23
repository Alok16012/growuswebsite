import React, { useState } from "react";
import CountUp from "react-countup";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const HeroSection = () => {
  const { config } = useSiteConfig();
  const hero = config.home.hero;
  const config_global = config.global;
  const [i, setI] = useState(true);
  return (
    <section className="relative h-[100vh] min-h-[700px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: `url(${hero.bgImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-14 lg:px-20 pt-28 md:pt-32 pb-36">
        <div className="max-w-2xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight"
            style={{
              color: hero.headingColor || "#ffffff",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            {hero.heading}
          </h1>
          <p
            className="text-base md:text-lg mb-8 max-w-xl font-normal leading-relaxed"
            style={{
              color: hero.subtextColor || "rgba(255,255,255,0.85)",
              textShadow: "0 1px 8px rgba(0,0,0,0.4)",
            }}
          >
            {hero.subtext}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl text-center"
              style={{
                backgroundColor:
                  hero.button1Bg ||
                  config_global.design?.buttons?.primaryBg ||
                  "rgba(255,255,255,0.95)",
                color:
                  hero.button1TextColor || config_global.deepBlue || "#0d1f35",
              }}
            >
              {(hero.button1Text || "")
                .split(
                  `
`,
                )
                .map((u, d) => (
                  <React.Fragment key={d}>
                    {u}
                    {d === 0 &&
                      hero.button1Text.includes(`
`) && <br />}
                  </React.Fragment>
                ))}
            </button>
            <button
              className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white/10 active:scale-95 text-center"
              style={{
                border: `2px solid ${hero.button2Border || "rgba(255,255,255,0.7)"}`,
                color:
                  config_global.design?.buttons?.secondaryText || "#ffffff",
              }}
            >
              {(hero.button2Text || "")
                .split(
                  `
`,
                )
                .map((u, d) => (
                  <React.Fragment key={d}>
                    {u}
                    {d === 0 &&
                      hero.button2Text.includes(`
`) && <br />}
                  </React.Fragment>
                ))}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 py-5 px-2 md:px-8 flex justify-between md:justify-around items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          {hero.stats.map((u, d) => (
            <div
              key={d}
              className="flex flex-col items-center flex-1 px-1 md:px-4 border-r border-gray-200 last:border-0"
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className="text-2xl md:text-4xl font-bold"
                  style={{
                    color: config_global.deepBlue,
                  }}
                >
                  <CountUp
                    end={u.number}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>
                <span
                  className="text-sm md:text-xl font-bold"
                  style={{
                    color: config_global.primaryBlue,
                  }}
                >
                  {u.suffix}
                </span>
              </div>
              <p className="text-[8px] md:text-xs font-bold text-gray-500 uppercase tracking-widest text-center">
                {u.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block absolute top-[55%] right-0 -translate-y-1/2 z-20">
        <button
          className="hover:bg-green-600 transition-colors text-white text-sm font-bold py-4 px-3 rounded-l-md shadow-lg uppercase tracking-widest"
          style={{
            backgroundColor: hero.sideTabBg || config_global.accentGreen,
            writingMode: "vertical-rl",
          }}
        >
          {hero.sideTabText}
        </button>
      </div>
      {i && (
        <div className="hidden md:block absolute bottom-[110px] right-6 md:right-12 z-30 bg-white/95 backdrop-blur-lg border border-black/10 p-5 rounded-xl shadow-2xl max-w-[260px] md:max-w-[280px]">
          <button
            onClick={() => setI(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-primary-blue transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h3
            className="font-bold text-sm mb-1 uppercase tracking-tight"
            style={{
              color: config_global.deepBlue,
            }}
          >
            {hero.popupTitle}
          </h3>
          <p className="text-gray-600 text-[11px] mb-2 leading-relaxed">
            {hero.popupText}
          </p>
          <a
            href="#"
            className="inline-flex items-center text-[10px] font-bold tracking-widest group transition-all uppercase"
            style={{
              color: config_global.primaryBlue,
            }}
          >
            CLICK HERE
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      )}
    </section>
  );
};
