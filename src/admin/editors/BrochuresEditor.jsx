import { CollapsibleSection, ImageUpload, TextInput } from "../fields";

export const BrochuresEditor = ({ config, updateConfig }) => (
  <div>
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mb-4">
      Manage Brochures
    </h4>
    {(config.brochures || []).map((s, i) => (
      <CollapsibleSection key={i} title={s.title || `Brochure ${i + 1}`}>
        <div className="flex justify-end mb-2">
          <button
            onClick={() => {
              const c = config.brochures.filter((u, d) => d !== i);
              updateConfig("brochures", c);
            }}
            className="text-red-400 hover:text-red-300 text-[10px] font-bold uppercase tracking-widest"
          >
            Delete Brochure
          </button>
        </div>
        <TextInput
          label="Title"
          value={s.title}
          onChange={(c) => {
            const u = [...config.brochures];
            u[i] = {
              ...u[i],
              title: c,
            };
            updateConfig("brochures", u);
          }}
        />
        <TextInput
          label="Description"
          value={s.desc}
          onChange={(c) => {
            const u = [...config.brochures];
            u[i] = {
              ...u[i],
              desc: c,
            };
            updateConfig("brochures", u);
          }}
          multiline
        />
        <ImageUpload
          label="File (PDF Preferred)"
          value={s.url}
          onChange={(url) => {
            const u = [...config.brochures];
            u[i] = {
              ...u[i],
              url,
            };
            updateConfig("brochures", u);
          }}
          bucketName="brochures"
          accept=".pdf,.doc,.docx,image/*"
        />
      </CollapsibleSection>
    ))}
    <button
      onClick={() => {
        const s = [...(config.brochures || [])];
        s.push({
          id: Date.now().toString(),
          title: "New Brochure",
          desc: "Description here",
          url: "#",
        });
        updateConfig("brochures", s);
      }}
      className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-colors uppercase tracking-widest text-xs mt-2"
    >
      + Add New Brochure
    </button>
  </div>
);
