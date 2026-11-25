import { SiteImage } from "../SiteImage";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useSiteConfig } from "../../context/SiteConfigContext";
import { QuoteModal } from "../QuoteModal";

export const HeroSection = ({ setCurrentPage }) => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.homeHero;
  const hero = config.home.hero;
  const config_global = config.global;
  const [isPromoVisible, setIsPromoVisible] = useState(true);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  return (
    <section className="growus-home-hero relative isolate flex w-full flex-col overflow-hidden">
      <div className="site-container relative z-10 grid items-center gap-7 pb-10 pt-36 sm:gap-10 lg:grid-cols-2 lg:gap-12 lg:pb-16">
        <div className="max-w-2xl">
          <h1
            className="growus-home-title page-title mb-5"
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
              type="button"
              onClick={() => setCurrentPage("services")}
              className="px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl text-center"
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
              type="button"
              onClick={() => setCurrentPage("services")}
              className="px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-white/10 active:scale-95 text-center"
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
        <div className="growus-home-hero-photo">
          <SiteImage
            src={hero.bgImage}
            sizes="(min-width: 1376px) 620px, (min-width: 1024px) 46vw, 93vw"
            alt=""
            loading="eager"
            fetchPriority="high"
            className="block h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="relative z-20 w-full">
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 site-gutter grid grid-cols-2 gap-y-4 py-5 sm:flex sm:justify-around sm:gap-y-0 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          {hero.stats.map((u, d) => (
            <div
              key={d}
              className="flex flex-col items-center flex-1 px-2 sm:px-4 sm:border-r border-gray-200 last:border-0"
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
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wide text-center">
                {u.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block absolute top-[55%] right-0 -translate-y-1/2 z-20">
        <button
          type="button"
          onClick={() => setIsQuoteOpen(true)}
          className="hover:bg-green-600 transition-colors text-white text-sm font-bold py-4 px-3 rounded-l-md shadow-lg uppercase tracking-widest"
          style={{
            backgroundColor: hero.sideTabBg || config_global.accentGreen,
            writingMode: "vertical-rl",
          }}
        >
          {hero.sideTabText}
        </button>
      </div>
      {isPromoVisible && (
        <div className="hidden xl:block absolute bottom-28 right-6 md:right-12 z-30 bg-white/95 backdrop-blur-lg border border-black/10 p-5 rounded-xl shadow-2xl max-w-[260px] md:max-w-[280px]">
          <button
            type="button"
            aria-label="Close automated inspection promotion"
            onClick={() => setIsPromoVisible(false)}
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
          <button
            type="button"
            onClick={() => setCurrentPage("services")}
            className="inline-flex items-center text-[10px] font-bold tracking-widest group transition-all uppercase"
            style={{
              color: config_global.primaryBlue,
            }}
          >
            {pageCopy.clickHere}
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      )}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
};
