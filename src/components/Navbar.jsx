import { useEffect, useState } from "react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { Logo } from "./Logo";
import { BrochureModal } from "./BrochureModal";
import { QuoteModal } from "./QuoteModal";

export const Navbar = ({ currentPage, setCurrentPage }) => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.navbar;
  const config_navbar = config.navbar;
  const portalUrl = config_navbar.topBarUrl?.trim() || "";
  const hasPortal = /^(?:https?:\/\/[^/]|\/(?![\/\\]))/i.test(portalUrl);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  const [p, setP] = useState(false);
  const [b, setB] = useState(false);
  const [v, setV] = useState(false);
  useEffect(() => {
    const R = () => {
      setC(window.scrollY > 50);
    };
    window.addEventListener("scroll", R);
    return () => window.removeEventListener("scroll", R);
  }, []);
  useEffect(() => {
    setV(false);
  }, [currentPage]);
  const S = ["HOME", "ABOUT US", "SERVICES", "GALLERY", "CAREERS", "CONTACT"];
  const navLabels = {
    HOME: pageCopy.home,
    "ABOUT US": pageCopy.about,
    SERVICES: pageCopy.services,
    GALLERY: pageCopy.gallery,
    CONTACT: pageCopy.contact,
  };
  const _ = currentPage === "culture" || currentPage === "open-positions";
  const C = (R) => {
    switch (R) {
      case "HOME":
        setCurrentPage("home");
        break;
      case "SERVICES":
        setCurrentPage("services");
        break;
      case "ABOUT US":
        setCurrentPage("about");
        break;
      case "CONTACT":
        setCurrentPage("contact");
        break;
      default:
        if (R === "GALLERY") {
          setCurrentPage("gallery");
        }
    }
    setV(false);
  };
  const E = (R) =>
    (currentPage === "about" && R === "ABOUT US") ||
    (currentPage === "services" && R === "SERVICES") ||
    (currentPage === "contact" && R === "CONTACT") ||
    (currentPage === "home" && R === "HOME") ||
    (currentPage === "gallery" && R === "GALLERY");
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${c ? "backdrop-blur-xl border-white/5 shadow-2xl py-0" : "border-white/10 py-1"}`}
        style={{
          backgroundColor: c
            ? `${config_navbar.backgroundColor || "#0a1a2e"}E6`
            : config_navbar.backgroundColor || "#0a1a2e",
        }}
      >
        <div
          className="text-white/85 text-xs font-bold py-2 px-4 md:px-8 flex justify-between items-center border-b border-white/5"
          style={{
            backgroundColor: c ? "transparent" : "rgba(255,255,255,0.02)",
          }}
        >
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-3 h-3 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>{" "}
              {config.footer?.phone}
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <svg
                className="w-3 h-3 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>{" "}
              {config.footer?.email}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentPage("admin")}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 uppercase tracking-tighter"
              title="Admin Panel"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              {pageCopy.staffPortal}
            </button>
            {hasPortal && (
              <a
                href={portalUrl}
                className="hover:text-emerald-400 transition-colors uppercase tracking-tighter"
              >
                {config_navbar.topBarText}
              </a>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between site-container py-3 md:py-4">
          <div className="flex items-center gap-8 xl:gap-12">
            <div
              className="flex items-center cursor-pointer flex-shrink-0"
              onClick={() => setCurrentPage("home")}
            >
              <Logo size="md" onDark />
            </div>
            <div className="hidden lg:flex items-center gap-3 xl:gap-8">
              {S.map((R) => {
                if (R === "CAREERS") {
                  return (
                    <div
                      key={R}
                      className="relative"
                      onMouseEnter={() => setD(true)}
                      onMouseLeave={() => setD(false)}
                    >
                      <button
                        onClick={() => setCurrentPage("culture")}
                        className={`text-[14px] font-extrabold uppercase tracking-tight transition-all duration-300 flex items-center gap-1.5 py-2 hover:text-[#ff3b5c] ${_ ? "text-[#ff3b5c]" : "text-white/80"}`}
                      >
                        {pageCopy.careers}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${d ? "rotate-180" : ""}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-48 transition-all duration-300 origin-top ${d ? "opacity-100 visible scale-100 translate-y-2" : "opacity-0 invisible scale-95 translate-y-0"}`}
                      >
                        <div className="bg-[#0c1e33] border border-white/10 rounded-2xl shadow-2xl py-3 overflow-hidden backdrop-blur-2xl">
                          <button
                            onClick={() => {
                              setCurrentPage("culture");
                              setD(false);
                            }}
                            className={`w-full text-left px-6 py-3 text-[12px] font-bold uppercase tracking-widest transition-colors duration-300 ${currentPage === "culture" ? "bg-[#ff3b5c]/10 text-[#ff3b5c]" : "text-white/60 hover:text-white hover:bg-white/5"}`}
                          >
                            {pageCopy.culture}
                          </button>
                          <button
                            onClick={() => {
                              setCurrentPage("open-positions");
                              setD(false);
                            }}
                            className={`w-full text-left px-6 py-3 text-[12px] font-bold uppercase tracking-widest transition-colors duration-300 ${currentPage === "open-positions" ? "bg-[#ff3b5c]/10 text-[#ff3b5c]" : "text-white/60 hover:text-white hover:bg-white/5"}`}
                          >
                            {pageCopy.openPositions}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <button
                    key={R}
                    onClick={() => C(R)}
                    className={`text-[14px] font-extrabold uppercase tracking-tight transition-all duration-300 hover:text-[#ff3b5c] relative py-2 ${E(R) ? "text-[#ff3b5c]" : "text-white/80"}`}
                  >
                    {navLabels[R]}
                    {E(R) && (
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ff3b5c] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => setP(true)}
              className="group flex items-center gap-2.5 text-sm font-black px-4 py-2.5 rounded-xl transition-all duration-300 uppercase tracking-widest border border-white/10 hover:border-[#ff3b5c]/30 text-white/70 hover:text-white bg-white/5"
            >
              <svg
                className="w-4 h-4 text-[#ff3b5c] transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {pageCopy.brochures}
            </button>
            <button
              onClick={() => setB(true)}
              className="text-sm font-black px-5 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#ff3b5c]/20 active:scale-95 text-white uppercase tracking-[0.2em] relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #ff3b5c, #e11d48)",
              }}
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]" />
              <span className="relative z-10">
                {config_navbar.quoteButtonText}
              </span>
            </button>
          </div>
          <button
            onClick={() => setV(!v)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 relative z-50 bg-white/5 rounded-xl border border-white/10"
          >
            <span
              className={`block w-5 h-0.5 transition-all duration-300 ${v ? "rotate-45 translate-y-2" : ""}`}
              style={{
                backgroundColor: "#ffffff",
              }}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-300 ${v ? "opacity-0" : ""}`}
              style={{
                backgroundColor: "#ffffff",
              }}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-300 ${v ? "-rotate-45 -translate-y-2" : ""}`}
              style={{
                backgroundColor: "#ffffff",
              }}
            />
          </button>
        </div>
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out border-t border-white/5 ${v ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
          style={{
            backgroundColor: config_navbar.backgroundColor || "#0a1a2e",
          }}
        >
          <div className="py-2 px-6 shadow-inner">
            {S.map((R) => {
              if (R === "CAREERS") {
                return (
                  <div key={R}>
                    <button
                      onClick={() => setD(!d)}
                      className="w-full text-left py-4 text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-between border-b border-white/5"
                      style={{
                        color: _ ? "#ff3b5c" : "#ffffff",
                      }}
                    >
                      {pageCopy.careers}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${d ? "rotate-180" : ""}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${d ? "max-h-32" : "max-h-0"}`}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.02)",
                      }}
                    >
                      <button
                        onClick={() => {
                          setCurrentPage("culture");
                          setV(false);
                        }}
                        className="w-full text-left pl-6 py-3 text-xs font-bold uppercase tracking-widest border-b border-white/5"
                        style={{
                          color:
                            currentPage === "culture" ? "#ff3b5c" : "#94a3b8",
                        }}
                      >
                        {pageCopy.culture}
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage("open-positions");
                          setV(false);
                        }}
                        className="w-full text-left pl-6 py-3 text-xs font-bold uppercase tracking-widest"
                        style={{
                          color:
                            currentPage === "open-positions"
                              ? "#ff3b5c"
                              : "#94a3b8",
                        }}
                      >
                        {pageCopy.openPositions}
                      </button>
                    </div>
                  </div>
                );
              }
              return (
                <button
                  key={R}
                  onClick={() => C(R)}
                  className="w-full text-left py-4 text-sm font-bold uppercase tracking-widest transition-colors border-b border-white/5 last:border-0"
                  style={{
                    color: E(R) ? "#ff3b5c" : "#ffffff",
                  }}
                >
                  {navLabels[R]}
                </button>
              );
            })}
            <div className="flex flex-col gap-3 mt-4 mb-6">
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setP(true);
                    setV(false);
                  }}
                  className="flex-1 border-2 text-sm font-bold px-2 py-2.5 rounded-xl uppercase tracking-widest text-center border-white/10 text-white/70 hover:bg-white/5 transition-colors"
                >
                  {config_navbar.brochureButtonText}
                </button>
                <button
                  onClick={() => {
                    setB(true);
                    setV(false);
                  }}
                  className="flex-1 text-white text-sm font-bold px-2 py-2.5 rounded-xl uppercase tracking-widest text-center shadow-lg active:scale-95 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #ff3b5c, #e11d48)",
                  }}
                >
                  {config_navbar.quoteButtonText} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <BrochureModal isOpen={p} onClose={() => setP(false)} />
      <QuoteModal isOpen={b} onClose={() => setB(false)} />
    </>
  );
};
