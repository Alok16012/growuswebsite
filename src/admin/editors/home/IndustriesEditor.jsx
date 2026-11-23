import { TextInput } from "../../fields";

export const IndustriesEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Subtitle"
      value={config.home.industries.subtitle}
      onChange={(s) => updateConfig("home.industries.subtitle", s)}
    />
    <TextInput
      label="Title"
      value={config.home.industries.title}
      onChange={(s) => updateConfig("home.industries.title", s)}
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-6 mb-3">
      Items
    </h4>
    {config.home.industries.items.map((s, i) => (
      <div key={i} className="flex gap-2 mb-2">
        <input
          type="text"
          value={s.icon}
          onChange={(c) => {
            const u = [...config.home.industries.items];
            u[i] = {
              ...u[i],
              icon: c.target.value,
            };
            updateConfig("home.industries.items", u);
          }}
          className="w-[60px] bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-lg text-center"
        />
        <input
          type="text"
          value={s.name}
          onChange={(c) => {
            const u = [...config.home.industries.items];
            u[i] = {
              ...u[i],
              name: c.target.value,
            };
            updateConfig("home.industries.items", u);
          }}
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
        />
        <button
          onClick={() => {
            const c = config.home.industries.items.filter((u, d) => d !== i);
            updateConfig("home.industries.items", c);
          }}
          className="bg-red-500/20 hover:bg-red-500/40 text-red-400 p-2 rounded-lg transition-colors flex items-center justify-center"
          title="Delete"
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    ))}
    <button
      onClick={() => {
        const s = [...(config.home.industries.items || [])];
        s.push({
          name: "New Industry",
          icon: "🏭",
        });
        updateConfig("home.industries.items", s);
      }}
      className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-colors uppercase tracking-widest text-xs mt-2"
    >
      + Add New Industry
    </button>
  </div>
);
