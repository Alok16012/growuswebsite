import { ACTIVE_STATES, INDIA_STATES } from "../data/indiaMap";

const activeStateIds = new Set(ACTIVE_STATES.map(({ id }) => id));

export function IndiaMap({ selectedState, onStateSelect }) {
  return (
    <svg
      viewBox="0 0 612 696"
      className="mx-auto block h-auto max-h-[35rem] w-full"
      aria-hidden="true"
    >
      {INDIA_STATES.map(({ id, name, path }) => {
        const active = activeStateIds.has(id);
        const selected = selectedState === id;
        return (
          <path
            key={id}
            d={path}
            fill={selected ? "#ff687e" : active ? "#84abc9" : "#2b4865"}
            stroke={selected ? "#fff" : "#102640"}
            strokeWidth={selected ? 2 : 1}
            strokeLinejoin="round"
            className={active ? "cursor-pointer transition-colors hover:fill-[#ff9dac]" : undefined}
            onClick={active ? () => onStateSelect(id) : undefined}
          >
            <title>{name}</title>
          </path>
        );
      })}
    </svg>
  );
}
