import { CollapsibleSection, ImageUpload, TextInput } from "../fields";

export const ServicePagesEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Section Title"
      value={config.services.sectionTitle}
      onChange={(s) => updateConfig("services.sectionTitle", s)}
    />
    <TextInput
      label="Hero Subtitle"
      value={config.services.heroSubtitle}
      onChange={(s) => updateConfig("services.heroSubtitle", s)}
    />
    <TextInput
      label="Hero Title"
      value={config.services.heroTitle}
      onChange={(s) => updateConfig("services.heroTitle", s)}
    />
    <TextInput
      label="Hero Title Highlight"
      value={config.services.heroTitleHighlight}
      onChange={(s) => updateConfig("services.heroTitleHighlight", s)}
    />
    <TextInput
      label="Hero Subtext"
      value={config.services.heroSubtext}
      onChange={(s) => updateConfig("services.heroSubtext", s)}
      multiline
    />
    <ImageUpload
      label="Hero BG"
      value={config.services.heroBg}
      onChange={(s) => updateConfig("services.heroBg", s)}
      bucketName="images"
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-8 mb-4">
      Service Details
    </h4>
    {config.services.items.map((s, i) => (
      <CollapsibleSection key={i} title={`${s.title} (${s.slug})`}>
        <div className="flex justify-end mb-2">
          <button
            onClick={() => {
              const c = config.services.items.filter((u, d) => d !== i);
              updateConfig("services.items", c);
            }}
            className="text-red-400 hover:text-red-300 text-[10px] font-bold uppercase tracking-widest"
          >
            Delete Service
          </button>
        </div>
        <TextInput
          label="Title"
          value={s.title}
          onChange={(c) => {
            const u = [...config.services.items];
            u[i] = {
              ...u[i],
              title: c,
            };
            updateConfig("services.items", u);
          }}
        />
        <TextInput
          label="Subtitle"
          value={s.subtitle}
          onChange={(subtitle) => {
            const u = [...config.services.items];
            u[i] = {
              ...u[i],
              subtitle,
            };
            updateConfig("services.items", u);
          }}
        />
        <TextInput
          label="Description (Short)"
          value={s.description}
          onChange={(c) => {
            const u = [...config.services.items];
            u[i] = {
              ...u[i],
              description: c,
            };
            updateConfig("services.items", u);
          }}
          multiline
        />
        <TextInput
          label="Long Description"
          value={s.longDescription}
          onChange={(longDescription) => {
            const u = [...config.services.items];
            u[i] = {
              ...u[i],
              longDescription,
            };
            updateConfig("services.items", u);
          }}
          multiline
        />
        <ImageUpload
          label="Main Image"
          value={s.image}
          onChange={(c) => {
            const u = [...config.services.items];
            u[i] = {
              ...u[i],
              image: c,
            };
            updateConfig("services.items", u);
          }}
          bucketName="images"
        />
        <h5 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-4 mb-2">
          Detailed Features
        </h5>
        {s.features.map((c, u) => (
          <div
            key={u}
            className="bg-white/5 p-3 rounded-lg mb-2 border border-white/10"
          >
            <TextInput
              label={`Feature ${u + 1} Title`}
              value={c.title}
              onChange={(d) => {
                const m = [...config.services.items];
                const p = [...m[i].features];
                p[u] = {
                  ...p[u],
                  title: d,
                };
                m[i] = {
                  ...m[i],
                  features: p,
                };
                updateConfig("services.items", m);
              }}
            />
            <TextInput
              label={`Feature ${u + 1} Desc`}
              value={c.desc}
              onChange={(d) => {
                const m = [...config.services.items];
                const p = [...m[i].features];
                p[u] = {
                  ...p[u],
                  desc: d,
                };
                m[i] = {
                  ...m[i],
                  features: p,
                };
                updateConfig("services.items", m);
              }}
            />
          </div>
        ))}
        <h5 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-4 mb-2">
          Stats
        </h5>
        <div className="grid grid-cols-1 gap-2">
          {s.stats.map((c, u) => (
            <div key={u} className="flex gap-2">
              <input
                type="number"
                value={c.number}
                onChange={(d) => {
                  const m = [...config.services.items];
                  const p = [...m[i].stats];
                  p[u] = {
                    ...p[u],
                    number: parseInt(d.target.value) || 0,
                  };
                  m[i] = {
                    ...m[i],
                    stats: p,
                  };
                  updateConfig("services.items", m);
                }}
                className="w-20 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-white text-xs"
              />
              <input
                type="text"
                value={c.suffix}
                onChange={(d) => {
                  const m = [...config.services.items];
                  const p = [...m[i].stats];
                  p[u] = {
                    ...p[u],
                    suffix: d.target.value,
                  };
                  m[i] = {
                    ...m[i],
                    stats: p,
                  };
                  updateConfig("services.items", m);
                }}
                className="w-12 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-white text-xs"
              />
              <input
                type="text"
                value={c.label}
                onChange={(d) => {
                  const m = [...config.services.items];
                  const p = [...m[i].stats];
                  p[u] = {
                    ...p[u],
                    label: d.target.value,
                  };
                  m[i] = {
                    ...m[i],
                    stats: p,
                  };
                  updateConfig("services.items", m);
                }}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-white text-xs"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 mb-2">
          <h5 className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
            Process Steps
          </h5>
          <button
            onClick={() => {
              const c = [...config.services.items];
              const u = [...(c[i].process || []), "New Step"];
              c[i] = {
                ...c[i],
                process: u,
              };
              updateConfig("services.items", c);
            }}
            className="text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded transition-colors"
          >
            + Add Step
          </button>
        </div>
        {s.process.map((c, u) => (
          <div key={u} className="flex gap-2 mb-1.5">
            <input
              type="text"
              value={c}
              onChange={(d) => {
                const m = [...config.services.items];
                const p = [...m[i].process];
                p[u] = d.target.value;
                m[i] = {
                  ...m[i],
                  process: p,
                };
                updateConfig("services.items", m);
              }}
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-xs"
            />
            <button
              onClick={() => {
                const d = [...config.services.items];
                const m = d[i].process.filter((p, g) => g !== u);
                d[i] = {
                  ...d[i],
                  process: m,
                };
                updateConfig("services.items", d);
              }}
              className="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-3 py-1.5 rounded-lg transition-colors flex items-center justify-center font-bold text-xs"
            >
              ✕
            </button>
          </div>
        ))}
        <h5 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-4 mb-2">
          Industries
        </h5>
        {s.industries.map((c, u) => (
          <input
            key={u}
            type="text"
            value={c}
            onChange={(d) => {
              const m = [...config.services.items];
              const industries = [...m[i].industries];
              industries[u] = d.target.value;
              m[i] = {
                ...m[i],
                industries,
              };
              updateConfig("services.items", m);
            }}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-xs mb-1.5"
          />
        ))}
      </CollapsibleSection>
    ))}
    <button
      onClick={() => {
        const s = [...(config.services.items || [])];
        s.push({
          slug: `new-service-${Date.now()}`,
          category: "NEW",
          title: "New Service",
          subtitle: "Service Subtitle",
          description: "Short desc",
          longDescription: "Long desc",
          image: "",
          features: [
            {
              title: "Feature 1",
              desc: "Desc 1",
            },
          ],
          stats: [
            {
              number: 0,
              suffix: "+",
              label: "Stat 1",
            },
          ],
          process: ["Step 1"],
          industries: ["Industry 1"],
        });
        updateConfig("services.items", s);
      }}
      className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-colors uppercase tracking-widest text-xs mt-2"
    >
      + Add New Service
    </button>
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-8 mb-4">
      CTA Section
    </h4>
    <TextInput
      label="CTA Title"
      value={config.services.ctaTitle}
      onChange={(s) => updateConfig("services.ctaTitle", s)}
    />
    <TextInput
      label="CTA Subtitle"
      value={config.services.ctaSubtitle}
      onChange={(s) => updateConfig("services.ctaSubtitle", s)}
    />
    <TextInput
      label="Button 1 Text"
      value={config.services.ctaButton1Text}
      onChange={(s) => updateConfig("services.ctaButton1Text", s)}
    />
    <TextInput
      label="Button 2 Text"
      value={config.services.ctaButton2Text}
      onChange={(s) => updateConfig("services.ctaButton2Text", s)}
    />
  </div>
);
