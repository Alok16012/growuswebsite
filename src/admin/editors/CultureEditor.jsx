import {
  CollapsibleSection,
  ImageUpload,
  ImageUrlInput,
  TextInput,
} from "../fields";

export const CultureEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Hero Title"
      value={config.culture.heroTitle}
      onChange={(s) => updateConfig("culture.heroTitle", s)}
    />
    <TextInput
      label="Hero Highlight"
      value={config.culture.heroTitleHighlight}
      onChange={(s) => updateConfig("culture.heroTitleHighlight", s)}
    />
    <TextInput
      label="Hero Subtitle"
      value={config.culture.heroSubtitle}
      onChange={(s) => updateConfig("culture.heroSubtitle", s)}
    />
    <TextInput
      label="Hero Description"
      value={config.culture.heroDescription}
      onChange={(s) => updateConfig("culture.heroDescription", s)}
      multiline
    />
    <ImageUpload
      label="Hero BG"
      value={config.culture.heroBg}
      onChange={(s) => updateConfig("culture.heroBg", s)}
      bucketName="images"
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-8 mb-4">
      DNA Values
    </h4>
    <TextInput
      label="DNA Title"
      value={config.culture.dnaTitle}
      onChange={(s) => updateConfig("culture.dnaTitle", s)}
    />
    {config.culture.dnaValues.map((s, i) => (
      <CollapsibleSection key={i} title={s.title}>
        <TextInput
          label="Icon"
          value={s.icon}
          onChange={(c) => {
            const u = [...config.culture.dnaValues];
            u[i] = {
              ...u[i],
              icon: c,
            };
            updateConfig("culture.dnaValues", u);
          }}
        />
        <TextInput
          label="Title"
          value={s.title}
          onChange={(c) => {
            const u = [...config.culture.dnaValues];
            u[i] = {
              ...u[i],
              title: c,
            };
            updateConfig("culture.dnaValues", u);
          }}
        />
        <TextInput
          label="Description"
          value={s.desc}
          onChange={(c) => {
            const u = [...config.culture.dnaValues];
            u[i] = {
              ...u[i],
              desc: c,
            };
            updateConfig("culture.dnaValues", u);
          }}
          multiline
        />
      </CollapsibleSection>
    ))}
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-8 mb-4">
      Culture Perks
    </h4>
    <TextInput
      label="Perks Title"
      value={config.culture.perksTitle}
      onChange={(s) => updateConfig("culture.perksTitle", s)}
    />
    <TextInput
      label="Perks Description"
      value={config.culture.perksDescription}
      onChange={(s) => updateConfig("culture.perksDescription", s)}
      multiline
    />
    {config.culture.perksList.map((s, i) => (
      <div
        key={i}
        className="mb-4 bg-white/5 p-4 rounded-xl border border-white/10"
      >
        <TextInput
          label={`Perk ${i + 1} Title`}
          value={s.title}
          onChange={(c) => {
            const u = [...config.culture.perksList];
            u[i] = {
              ...u[i],
              title: c,
            };
            updateConfig("culture.perksList", u);
          }}
        />
        <TextInput
          label={`Perk ${i + 1} Desc`}
          value={s.desc}
          onChange={(c) => {
            const u = [...config.culture.perksList];
            u[i] = {
              ...u[i],
              desc: c,
            };
            updateConfig("culture.perksList", u);
          }}
        />
      </div>
    ))}
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-8 mb-4">
      Stats & Workspaces
    </h4>
    <TextInput
      label="Stats Count"
      value={config.culture.statsCount}
      onChange={(s) => updateConfig("culture.statsCount", s)}
    />
    <TextInput
      label="Stats Label"
      value={config.culture.statsLabel}
      onChange={(s) => updateConfig("culture.statsLabel", s)}
    />
    {config.culture.workspaces.map((s, i) => (
      <CollapsibleSection key={i} title={`Workspace ${i + 1}`}>
        <TextInput
          label="Label"
          value={s.label}
          onChange={(c) => {
            const u = [...config.culture.workspaces];
            u[i] = {
              ...u[i],
              label: c,
            };
            updateConfig("culture.workspaces", u);
          }}
        />
        <ImageUrlInput
          label="Image"
          value={s.img}
          onChange={(c) => {
            const u = [...config.culture.workspaces];
            u[i] = {
              ...u[i],
              img: c,
            };
            updateConfig("culture.workspaces", u);
          }}
        />
      </CollapsibleSection>
    ))}
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-8 mb-4">
      Join CTA
    </h4>
    <TextInput
      label="CTA Title"
      value={config.culture.ctaTitle}
      onChange={(s) => updateConfig("culture.ctaTitle", s)}
    />
    <TextInput
      label="CTA Description"
      value={config.culture.ctaDescription}
      onChange={(s) => updateConfig("culture.ctaDescription", s)}
      multiline
    />
    <TextInput
      label="CTA Button"
      value={config.culture.ctaButtonText}
      onChange={(s) => updateConfig("culture.ctaButtonText", s)}
    />
  </div>
);
