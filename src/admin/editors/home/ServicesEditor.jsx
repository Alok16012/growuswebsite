import { CollapsibleSection, ImageUpload, TextInput } from "../../fields";

export const ServicesEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Section Title"
      value={config.home.services.sectionTitle}
      onChange={(s) => updateConfig("home.services.sectionTitle", s)}
    />
    <TextInput
      label="View All Text"
      value={config.home.services.viewAllText}
      onChange={(s) => updateConfig("home.services.viewAllText", s)}
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-6 mb-3">
      Service Cards
    </h4>
    {config.home.services.items.map((s, i) => (
      <CollapsibleSection key={i} title={`Card ${i + 1}: ${s.title}`}>
        <div className="flex justify-end mb-2">
          <button
            onClick={() => {
              const c = config.home.services.items.filter((u, d) => d !== i);
              updateConfig("home.services.items", c);
            }}
            className="text-red-400 hover:text-red-300 text-[10px] font-bold uppercase tracking-widest"
          >
            Delete Service
          </button>
        </div>
        <TextInput
          label="Category"
          value={s.category}
          onChange={(category) => {
            const u = [...config.home.services.items];
            u[i] = {
              ...u[i],
              category,
            };
            updateConfig("home.services.items", u);
          }}
        />
        <TextInput
          label="Title"
          value={s.title}
          onChange={(c) => {
            const u = [...config.home.services.items];
            u[i] = {
              ...u[i],
              title: c,
            };
            updateConfig("home.services.items", u);
          }}
        />
        <TextInput
          label="Description"
          value={s.description}
          onChange={(c) => {
            const u = [...config.home.services.items];
            u[i] = {
              ...u[i],
              description: c,
            };
            updateConfig("home.services.items", u);
          }}
          multiline
        />
        <ImageUpload
          label="Image"
          value={s.image}
          onChange={(c) => {
            const u = [...config.home.services.items];
            u[i] = {
              ...u[i],
              image: c,
            };
            updateConfig("home.services.items", u);
          }}
          bucketName="images"
        />
      </CollapsibleSection>
    ))}
    <button
      onClick={() => {
        const s = [...(config.home.services.items || [])];
        s.push({
          category: "NEW",
          title: "New Service",
          description: "Service description",
          image: "",
        });
        updateConfig("home.services.items", s);
      }}
      className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-colors uppercase tracking-widest text-xs mt-2"
    >
      + Add New Service
    </button>
  </div>
);
