import { CollapsibleSection, ImageUpload, TextInput } from "../fields";

export const GalleryEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Hero Title"
      value={config.gallery.heroTitle}
      onChange={(s) => updateConfig("gallery.heroTitle", s)}
    />
    <TextInput
      label="Hero Subtitle"
      value={config.gallery.heroSubtitle}
      onChange={(s) => updateConfig("gallery.heroSubtitle", s)}
    />
    <TextInput
      label="Hero Description"
      value={config.gallery.heroDescription}
      onChange={(s) => updateConfig("gallery.heroDescription", s)}
      multiline
    />
    <ImageUpload
      label="Hero BG"
      value={config.gallery.heroBg}
      onChange={(s) => updateConfig("gallery.heroBg", s)}
      bucketName="images"
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-8 mb-4">
      Events
    </h4>
    {config.gallery.events.map((s, i) => (
      <CollapsibleSection key={i} title={s.title}>
        <div className="flex justify-end mb-2">
          <button
            onClick={() => {
              const c = config.gallery.events.filter((u, d) => d !== i);
              updateConfig("gallery.events", c);
            }}
            className="text-red-400 hover:text-red-300 text-[10px] font-bold uppercase tracking-widest"
          >
            Delete Event
          </button>
        </div>
        <TextInput
          label="Title"
          value={s.title}
          onChange={(c) => {
            const u = [...config.gallery.events];
            u[i] = {
              ...u[i],
              title: c,
            };
            updateConfig("gallery.events", u);
          }}
        />
        <ImageUpload
          label="Image"
          value={s.img}
          onChange={(c) => {
            const u = [...config.gallery.events];
            u[i] = {
              ...u[i],
              img: c,
            };
            updateConfig("gallery.events", u);
          }}
          bucketName="images"
        />
      </CollapsibleSection>
    ))}
    <button
      onClick={() => {
        const s = [...(config.gallery.events || [])];
        s.push({
          title: "New Event",
          img: "",
        });
        updateConfig("gallery.events", s);
      }}
      className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-colors uppercase tracking-widest text-xs mt-2"
    >
      + Add New Event
    </button>
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-8 mb-4">
      Activities
    </h4>
    {config.gallery.activities.map((s, i) => (
      <CollapsibleSection key={i} title={s.title}>
        <div className="flex justify-end mb-2">
          <button
            onClick={() => {
              const c = config.gallery.activities.filter((u, d) => d !== i);
              updateConfig("gallery.activities", c);
            }}
            className="text-red-400 hover:text-red-300 text-[10px] font-bold uppercase tracking-widest"
          >
            Delete Activity
          </button>
        </div>
        <TextInput
          label="Title"
          value={s.title}
          onChange={(c) => {
            const u = [...config.gallery.activities];
            u[i] = {
              ...u[i],
              title: c,
            };
            updateConfig("gallery.activities", u);
          }}
        />
        <ImageUpload
          label="Image"
          value={s.img}
          onChange={(c) => {
            const u = [...config.gallery.activities];
            u[i] = {
              ...u[i],
              img: c,
            };
            updateConfig("gallery.activities", u);
          }}
          bucketName="images"
        />
      </CollapsibleSection>
    ))}
    <button
      onClick={() => {
        const s = [...(config.gallery.activities || [])];
        s.push({
          title: "New Activity",
          img: "",
        });
        updateConfig("gallery.activities", s);
      }}
      className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-colors uppercase tracking-widest text-xs mt-2"
    >
      + Add New Activity
    </button>
  </div>
);
