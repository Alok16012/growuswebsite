import { CollapsibleSection, ImageUrlInput, TextInput } from "../../fields";

export const EcosystemEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Subtitle"
      value={config.about.ecosystem.subtitle}
      onChange={(s) => updateConfig("about.ecosystem.subtitle", s)}
    />
    <TextInput
      label="Heading"
      value={config.about.ecosystem.heading}
      onChange={(s) => updateConfig("about.ecosystem.heading", s)}
    />
    <TextInput
      label="Description"
      value={config.about.ecosystem.description}
      onChange={(s) => updateConfig("about.ecosystem.description", s)}
      multiline
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-6 mb-3">
      Companies
    </h4>
    {config.about.ecosystem.companies.map((s, i) => (
      <CollapsibleSection key={i} title={s.name}>
        <TextInput
          label="Name"
          value={s.name}
          onChange={(c) => {
            const u = [...config.about.ecosystem.companies];
            u[i] = {
              ...u[i],
              name: c,
            };
            updateConfig("about.ecosystem.companies", u);
          }}
        />
        <ImageUrlInput
          label="Image"
          value={s.image}
          onChange={(c) => {
            const u = [...config.about.ecosystem.companies];
            u[i] = {
              ...u[i],
              image: c,
            };
            updateConfig("about.ecosystem.companies", u);
          }}
        />
        <h5 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-3 mb-2">
          Services
        </h5>
        {s.services.map((c, u) => (
          <input
            key={u}
            type="text"
            value={c}
            onChange={(d) => {
              const m = [...config.about.ecosystem.companies];
              const services = [...m[i].services];
              services[u] = d.target.value;
              m[i] = {
                ...m[i],
                services,
              };
              updateConfig("about.ecosystem.companies", m);
            }}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm mb-1.5 focus:outline-none focus:border-blue-500/50"
          />
        ))}
      </CollapsibleSection>
    ))}
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-6 mb-3">
      NAPS Section
    </h4>
    <TextInput
      label="Title"
      value={config.about.ecosystem.napsTitle}
      onChange={(s) => updateConfig("about.ecosystem.napsTitle", s)}
    />
    <TextInput
      label="Description"
      value={config.about.ecosystem.napsDescription}
      onChange={(s) => updateConfig("about.ecosystem.napsDescription", s)}
      multiline
    />
    <TextInput
      label="Button Text"
      value={config.about.ecosystem.napsButtonText}
      onChange={(s) => updateConfig("about.ecosystem.napsButtonText", s)}
    />
  </div>
);
