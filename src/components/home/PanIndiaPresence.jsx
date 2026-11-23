import { useState } from "react";
import { motion } from "framer-motion";
import { useSiteConfig } from "../../context/SiteConfigContext";
import { IndiaMap } from "../IndiaMap";
import { ACTIVE_STATES } from "../../data/indiaMap";

export const PanIndiaPresence = () => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.coverage;
  const panIndia = config.home.panIndia;
  const config_global = config.global;
  const [i, setI] = useState(null);
  return (
    <section
      className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden"
      style={{
        background: "#0D1F35",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #fff 1px, transparent 1px), linear-gradient(-45deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${config_global.emeraldGreen}12 0%, transparent 70%)`,
          transform: "translate(-50%,-50%)",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold tracking-[0.4em] uppercase mb-3"
            style={{
              color: config_global.emeraldGreen,
            }}
          >
            {panIndia.subtitle}
          </p>
          <h2 className="font-sora text-white text-3xl md:text-5xl font-bold mb-4">
            {panIndia.title}{" "}
            <span
              style={{
                color: config_global.emeraldGreen,
              }}
            >
              {panIndia.titleHighlight}
            </span>{" "}
            {panIndia.titleEnd}
          </h2>
          <div
            className="mx-auto w-20 h-1 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${config_global.emeraldGreen}, ${config_global.goldAccent})`,
            }}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative rounded-3xl p-4 overflow-hidden"
            style={{
              background: "rgba(10,22,40,0.6)",
              border: `1px solid ${config_global.emeraldGreen}33`,
              boxShadow: `0 0 60px ${config_global.emeraldGreen}0d, inset 0 1px 0 rgba(255,255,255,0.05)`,
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-white/[0.025] font-sora font-black text-7xl tracking-widest">
                {pageCopy.growus}
              </span>
            </div>
            <IndiaMap externalHovered={i} onStateHover={setI} />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-3 gap-4">
              {panIndia.stats.map((u, d) => (
                <motion.div
                  key={d}
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
                    delay: d * 0.1,
                    duration: 0.5,
                  }}
                  className="rounded-2xl p-4 text-center"
                  style={{
                    background: "rgba(10,22,40,0.7)",
                    border: `1px solid ${config_global.emeraldGreen}26`,
                  }}
                >
                  <div className="text-2xl mb-1">{u.icon}</div>
                  <div
                    className="font-sora font-bold text-2xl"
                    style={{
                      color: config_global.emeraldGreen,
                    }}
                  >
                    {u.value}
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">{u.label}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {panIndia.description}
            </p>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-3 font-semibold">
                {pageCopy.activeStates}
              </p>
              <div className="flex flex-wrap gap-2">
                {ACTIVE_STATES.map((u) => (
                  <motion.button
                    key={u.id}
                    onMouseEnter={() => setI(u.id)}
                    onMouseLeave={() => setI(null)}
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
                    style={{
                      background: i === u.id ? u.color : `${u.color}20`,
                      color: i === u.id ? "#0A1628" : u.color,
                      border: `1px solid ${u.color}60`,
                    }}
                  >
                    {u.label}
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.div
              className="rounded-2xl p-6 flex items-center justify-between gap-4 mt-2"
              style={{
                background: `linear-gradient(135deg, ${config_global.emeraldGreen}1a, ${config_global.goldAccent}0d)`,
                border: `1px solid ${config_global.emeraldGreen}33`,
              }}
            >
              <div>
                <p className="text-white font-sora font-bold text-lg">
                  {panIndia.ctaTitle}
                </p>
                <p className="text-slate-400 text-sm">{panIndia.ctaSubtitle}</p>
              </div>
              <button
                className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${config_global.emeraldGreen}, #059669)`,
                }}
              >
                {panIndia.ctaButtonText}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
