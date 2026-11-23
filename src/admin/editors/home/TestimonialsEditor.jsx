import { CollapsibleSection, TextInput } from "../../fields";

export const TestimonialsEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Section Title"
      value={config.home.testimonials.sectionTitle}
      onChange={(s) => updateConfig("home.testimonials.sectionTitle", s)}
    />
    <TextInput
      label="Highlight Text"
      value={config.home.testimonials.sectionTitleHighlight}
      onChange={(s) =>
        updateConfig("home.testimonials.sectionTitleHighlight", s)
      }
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-6 mb-3">
      Testimonials
    </h4>
    {config.home.testimonials.items.map((s, i) => (
      <CollapsibleSection key={i} title={`${s.name}`}>
        <div className="flex justify-end mb-2">
          <button
            onClick={() => {
              const c = config.home.testimonials.items.filter(
                (u, d) => d !== i,
              );
              updateConfig("home.testimonials.items", c);
            }}
            className="text-red-400 hover:text-red-300 text-[10px] font-bold uppercase tracking-widest"
          >
            Delete Testimonial
          </button>
        </div>
        <TextInput
          label="Quote"
          value={s.text}
          onChange={(text) => {
            const u = [...config.home.testimonials.items];
            u[i] = {
              ...u[i],
              text,
            };
            updateConfig("home.testimonials.items", u);
          }}
          multiline
        />
        <TextInput
          label="Name"
          value={s.name}
          onChange={(c) => {
            const u = [...config.home.testimonials.items];
            u[i] = {
              ...u[i],
              name: c,
            };
            updateConfig("home.testimonials.items", u);
          }}
        />
        <TextInput
          label="Company"
          value={s.company}
          onChange={(company) => {
            const u = [...config.home.testimonials.items];
            u[i] = {
              ...u[i],
              company,
            };
            updateConfig("home.testimonials.items", u);
          }}
        />
      </CollapsibleSection>
    ))}
    <button
      onClick={() => {
        const s = [...(config.home.testimonials.items || [])];
        s.push({
          text: "New Testimonial Quote",
          name: "New Client Name",
          company: "Company Name",
        });
        updateConfig("home.testimonials.items", s);
      }}
      className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-colors uppercase tracking-widest text-xs mt-2"
    >
      + Add New Testimonial
    </button>
  </div>
);
