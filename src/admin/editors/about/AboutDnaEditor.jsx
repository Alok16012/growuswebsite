import { CollapsibleSection, TextInput } from "../../fields";

export const AboutDnaEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Subtitle"
      value={config.about.dna.subtitle}
      onChange={(s) => updateConfig("about.dna.subtitle", s)}
    />
    <TextInput
      label="Heading"
      value={config.about.dna.heading}
      onChange={(s) => updateConfig("about.dna.heading", s)}
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-6 mb-3">
      Values
    </h4>
    {config.about.dna.values.map((s, i) => (
      <CollapsibleSection key={i} title={s.title}>
        <TextInput
          label="Icon (Emoji)"
          value={s.icon}
          onChange={(c) => {
            const u = [...config.about.dna.values];
            u[i] = {
              ...u[i],
              icon: c,
            };
            updateConfig("about.dna.values", u);
          }}
        />
        <TextInput
          label="Title"
          value={s.title}
          onChange={(c) => {
            const u = [...config.about.dna.values];
            u[i] = {
              ...u[i],
              title: c,
            };
            updateConfig("about.dna.values", u);
          }}
        />
        <TextInput
          label="Description"
          value={s.desc}
          onChange={(c) => {
            const u = [...config.about.dna.values];
            u[i] = {
              ...u[i],
              desc: c,
            };
            updateConfig("about.dna.values", u);
          }}
          multiline
        />
      </CollapsibleSection>
    ))}
  </div>
);
