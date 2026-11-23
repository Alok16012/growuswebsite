import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  INDIA_STATES,
  MAP_FILL,
  MAP_FILL_DIM,
  MAP_HOVER,
  STATE_COLORS,
} from "../data/indiaMap";

export const IndiaMap = ({ externalHovered, onStateHover }) => {
  const [s, setS] = useState(null);
  const [c, setC] = useState({
    visible: false,
    x: 0,
    y: 0,
    name: "",
    color: "",
  });
  const dRef = useRef(null);
  const m = externalHovered || s;
  const p = (x, v) => {
    const j = STATE_COLORS[v.id];
    const S = dRef.current?.getBoundingClientRect();
    if (S) {
      setC({
        visible: true,
        x: x.clientX - S.left,
        y: x.clientY - S.top,
        name: v.name,
        color: j?.color || "#64748b",
        hasPresence: !!j,
      });
    }
    setS(v.id);
    if (onStateHover) {
      onStateHover(v.id);
    }
  };
  const onMouseMove = (x) => {
    const v = dRef.current?.getBoundingClientRect();
    if (v && c.visible) {
      setC((j) => ({
        ...j,
        x: x.clientX - v.left,
        y: x.clientY - v.top,
      }));
    }
  };
  const onMouseLeave = () => {
    setC((x) => ({
      ...x,
      visible: false,
    }));
    setS(null);
    if (onStateHover) {
      onStateHover(null);
    }
  };
  return (
    <div className="relative w-full" ref={dRef}>
      <svg
        viewBox="0 0 612 696"
        className="w-full h-full"
        style={{
          filter: "drop-shadow(0 25px 60px rgba(0,0,0,0.6))",
        }}
        onMouseMove={onMouseMove}
      >
        <defs>
          {Object.entries(STATE_COLORS).map(([x, { color }]) => (
            <filter
              key={x}
              id={`glow-${x}`}
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feFlood floodColor={color} floodOpacity="0.6" result="color" />
              <feComposite
                in="color"
                in2="blur"
                operator="in"
                result="shadow"
              />
              <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}
        </defs>
        <g>
          {INDIA_STATES.map((x) => {
            const v = STATE_COLORS[x.id];
            const j = m === x.id;
            const S = !!v;
            return (
              <motion.path
                key={x.id}
                d={x.path}
                fill={j ? (S ? v.color : MAP_FILL_DIM) : S ? v.color : MAP_FILL}
                stroke={
                  j
                    ? S
                      ? "#fff"
                      : "#3B82F6"
                    : S
                      ? "rgba(255,255,255,0.3)"
                      : MAP_HOVER
                }
                strokeWidth={j ? 1.5 : 0.7}
                style={{
                  filter: S && j ? `url(#glow-${x.id})` : undefined,
                  cursor: "pointer",
                  transition: "fill 0.2s, stroke 0.2s, filter 0.2s",
                }}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: S ? (j ? 1 : 0.85) : j ? 0.7 : 0.5,
                  scale: j ? 1.01 : 1,
                }}
                transition={{
                  duration: 0.2,
                }}
                onMouseEnter={(_) => p(_, x)}
                onMouseLeave={onMouseLeave}
              />
            );
          })}
        </g>
      </svg>
      <AnimatePresence>
        {c.visible && (
          <motion.div
            key="tooltip"
            className="absolute z-50 pointer-events-none"
            style={{
              left: c.x + 12,
              top: c.y - 36,
            }}
            initial={{
              opacity: 0,
              y: 4,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 4,
            }}
            transition={{
              duration: 0.15,
            }}
          >
            <div
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-xl border"
              style={{
                background: c.hasPresence
                  ? `linear-gradient(135deg, ${c.color}cc, ${c.color}88)`
                  : "rgba(10,22,40,0.92)",
                borderColor: c.hasPresence ? c.color : "rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div>{c.name}</div>
              {c.hasPresence && (
                <div className="text-white/80 font-normal text-[10px] mt-0.5">
                  ✓ Active Presence
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
