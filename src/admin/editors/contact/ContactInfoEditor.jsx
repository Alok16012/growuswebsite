import { CollapsibleSection, TextInput } from "../../fields";

export const ContactInfoEditor = ({ config, updateConfig }) => (
  <div>
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mb-3">
      Contact Cards
    </h4>
    {config.contact.info.items.map((s, i) => (
      <CollapsibleSection key={i} title={s.title}>
        <TextInput
          label="Title"
          value={s.title}
          onChange={(c) => {
            const u = [...config.contact.info.items];
            u[i] = {
              ...u[i],
              title: c,
            };
            updateConfig("contact.info.items", u);
          }}
        />
        <h5 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-3 mb-2">
          Details
        </h5>
        {s.details.map((c, u) => (
          <input
            key={u}
            type="text"
            value={c}
            onChange={(d) => {
              const m = [...config.contact.info.items];
              const details = [...m[i].details];
              details[u] = d.target.value;
              m[i] = {
                ...m[i],
                details,
              };
              updateConfig("contact.info.items", m);
            }}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm mb-1.5 focus:outline-none focus:border-blue-500/50"
          />
        ))}
      </CollapsibleSection>
    ))}
  </div>
);
