import { CollapsibleSection, ImageUpload, TextInput } from "../../fields";

export const TeamEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Subtitle"
      value={config.about.team.subtitle}
      onChange={(s) => updateConfig("about.team.subtitle", s)}
    />
    <TextInput
      label="Heading"
      value={config.about.team.heading}
      onChange={(s) => updateConfig("about.team.heading", s)}
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-6 mb-3">
      Team Members
    </h4>
    {config.about.team.members.map((s, i) => (
      <CollapsibleSection key={i} title={s.name}>
        <div className="flex justify-end mb-2">
          <button
            onClick={() => {
              const c = config.about.team.members.filter((u, d) => d !== i);
              updateConfig("about.team.members", c);
            }}
            className="text-red-400 hover:text-red-300 text-[10px] font-bold uppercase tracking-widest"
          >
            Delete Member
          </button>
        </div>
        <TextInput
          label="Name"
          value={s.name}
          onChange={(c) => {
            const u = [...config.about.team.members];
            u[i] = {
              ...u[i],
              name: c,
            };
            updateConfig("about.team.members", u);
          }}
        />
        <TextInput
          label="Role"
          value={s.role}
          onChange={(role) => {
            const u = [...config.about.team.members];
            u[i] = {
              ...u[i],
              role,
            };
            updateConfig("about.team.members", u);
          }}
        />
        <TextInput
          label="Quote"
          value={s.quote}
          onChange={(quote) => {
            const u = [...config.about.team.members];
            u[i] = {
              ...u[i],
              quote,
            };
            updateConfig("about.team.members", u);
          }}
        />
        <ImageUpload
          label="Photo"
          value={s.img}
          onChange={(c) => {
            const u = [...config.about.team.members];
            u[i] = {
              ...u[i],
              img: c,
            };
            updateConfig("about.team.members", u);
          }}
          bucketName="images"
        />
      </CollapsibleSection>
    ))}
    <button
      onClick={() => {
        const s = [...(config.about.team.members || [])];
        s.push({
          name: "New Member",
          role: "Role",
          quote: "Quote here",
          img: "",
        });
        updateConfig("about.team.members", s);
      }}
      className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-colors uppercase tracking-widest text-xs mt-2"
    >
      + Add New Member
    </button>
  </div>
);
