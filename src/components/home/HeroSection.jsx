import { SiteImage } from "../SiteImage";
import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import CountUp from "react-countup";
import { useSiteConfig } from "../../context/SiteConfigContext";
import { QuoteModal } from "../QuoteModal";

export const HeroSection = ({ setCurrentPage }) => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.homeHero;
  const hero = config.home.hero;
  const config_global = config.global;
  const reducedMotion = useReducedMotion();
  const videoRef = useRef(null);
  const [videoHasPlayed, setVideoHasPlayed] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isPromoVisible, setIsPromoVisible] = useState(true);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  return (
    <section className="growus-home-hero relative isolate flex w-full flex-col overflow-hidden">
      <div className="site-container growus-hero-shell">
        <div className="growus-hero-layout grid">
          <div className="growus-hero-copy min-w-0">
            <h1
              className="page-title mb-4"
              style={{ color: hero.headingColor || "#ffffff" }}
            >
              {hero.heading}
            </h1>
            <p
              className="page-intro mb-6 font-normal"
              style={{ color: hero.subtextColor || "rgba(255,255,255,0.85)" }}
            >
              {hero.subtext}
            </p>
            <div className="growus-hero-actions grid max-w-lg grid-cols-1 gap-3 min-[480px]:grid-cols-2">
              <button
                type="button"
                onClick={() => setCurrentPage("services")}
                className="growus-hero-button rounded-xl px-4 py-3 text-sm font-semibold shadow-lg hover:brightness-110"
                style={{
                  backgroundColor:
                    hero.button1Bg ||
                    config_global.design?.buttons?.primaryBg ||
                    "rgba(255,255,255,0.95)",
                  color:
                    hero.button1TextColor || config_global.deepBlue || "#0d1f35",
                }}
              >
                {hero.button1Text}
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage("services")}
                className="growus-hero-button rounded-xl px-4 py-3 text-sm font-semibold hover:bg-white/10"
                style={{
                  border: `2px solid ${hero.button2Border || "rgba(255,255,255,0.7)"}`,
                  color:
                    config_global.design?.buttons?.secondaryText || "#ffffff",
                }}
              >
                {hero.button2Text}
              </button>
            </div>
            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="growus-hero-quote mt-4 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-[#ffd0d7] underline-offset-4 hover:underline"
            >
              <span aria-hidden="true" className="size-2 rounded-full" style={{ backgroundColor: hero.sideTabBg || "#ff687e" }} />
              {hero.sideTabText}
            </button>
          </div>
          <div className="growus-home-hero-photo" aria-hidden="true">
            <SiteImage
              src={hero.bgImage}
              sizes="(min-width: 1376px) 1312px, 95vw"
              alt=""
              loading="eager"
              fetchPriority="high"
              className="block h-full w-full object-cover"
            />
            {!reducedMotion && (
              <video
                ref={videoRef}
                className={`absolute inset-0 h-full w-full object-cover object-[70%_center] ${videoHasPlayed ? "" : "opacity-0"}`}
                src="/growus-inspection-background.mp4"
                autoPlay
                muted
                loop
                playsInline
                onPlaying={() => {
                  setVideoHasPlayed(true);
                  setIsVideoPlaying(true);
                }}
                onPause={() => setIsVideoPlaying(false)}
                onError={() => {
                  setVideoHasPlayed(false);
                  setIsVideoPlaying(false);
                }}
              />
            )}
          </div>
          {!reducedMotion && videoHasPlayed && (
            <button
              type="button"
              className="absolute bottom-3 right-3 rounded-md bg-slate-950/80 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-950"
              onClick={() => {
                const video = videoRef.current;
                if (video.paused) {
                  video.play().catch(() => setIsVideoPlaying(false));
                } else {
                  video.pause();
                }
              }}
            >
              {isVideoPlaying ? "Pause video" : "Play video"}
            </button>
          )}
        </div>
        {isPromoVisible && (
          <div className="growus-hero-promo relative mt-3 hidden flex-wrap items-center gap-x-4 gap-y-2 rounded-xl px-5 py-3 pr-12 text-white md:flex">
            <button
              type="button"
              aria-label="Close automated inspection promotion"
              onClick={() => setIsPromoVisible(false)}
              className="absolute right-2 top-2 grid size-8 place-items-center rounded-md text-white/70 hover:bg-white/10 hover:text-white"
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
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold">{hero.popupTitle}</h3>
              <p className="mt-1 text-sm leading-snug text-slate-200">{hero.popupText}</p>
            </div>
            <button
              type="button"
              onClick={() => setCurrentPage("services")}
              className="shrink-0 rounded text-sm font-semibold text-[#ffd0d7] underline-offset-4 hover:underline"
            >
              {pageCopy.clickHere}
            </button>
          </div>
        )}
      </div>
      <div className="growus-hero-stats">
        <div className="site-container grid grid-cols-2 gap-y-5 py-5 sm:flex sm:justify-around">
          {hero.stats.map((u, d) => (
            <div
              key={d}
              className="flex flex-col items-center flex-1 px-2 sm:px-4 sm:border-r border-white/15 last:border-0"
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className="text-2xl font-bold tabular-nums text-white md:text-4xl"
                >
                  {reducedMotion ? u.number : (
                    <CountUp end={u.number} duration={1.2} enableScrollSpy scrollSpyOnce />
                  )}
                </span>
                <span
                  className="text-sm font-bold text-[#ffd0d7] md:text-xl"
                >
                  {u.suffix}
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-200 uppercase tracking-wide text-center">
                {u.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
};
