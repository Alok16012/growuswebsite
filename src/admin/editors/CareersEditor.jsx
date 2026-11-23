import { CollapsibleSection, TextInput } from "../fields";

export const CareersEditor = ({ config, updateConfig }) => (
  <div>
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-4 mb-4">
      Job Openings
    </h4>
    {config?.careers?.jobs?.map((s, i) => (
      <CollapsibleSection key={i} title={`${s.title} | ${s.department}`}>
        <TextInput
          label="Job Title"
          value={s.title}
          onChange={(c) => {
            const u = [...config.careers.jobs];
            u[i] = {
              ...u[i],
              title: c,
            };
            updateConfig("careers.jobs", u);
          }}
        />
        <TextInput
          label="Department"
          value={s.department}
          onChange={(department) => {
            const u = [...config.careers.jobs];
            u[i] = {
              ...u[i],
              department,
            };
            updateConfig("careers.jobs", u);
          }}
        />
        <TextInput
          label="Type (e.g., FULL-TIME)"
          value={s.type}
          onChange={(type) => {
            const u = [...config.careers.jobs];
            u[i] = {
              ...u[i],
              type,
            };
            updateConfig("careers.jobs", u);
          }}
        />
        <TextInput
          label="Location"
          value={s.location}
          onChange={(location) => {
            const u = [...config.careers.jobs];
            u[i] = {
              ...u[i],
              location,
            };
            updateConfig("careers.jobs", u);
          }}
        />
        <TextInput
          label="Description"
          value={s.description}
          onChange={(c) => {
            const u = [...config.careers.jobs];
            u[i] = {
              ...u[i],
              description: c,
            };
            updateConfig("careers.jobs", u);
          }}
          multiline
        />
        <h5 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-4 mb-2">
          Requirements
        </h5>
        {s.requirements.map((c, u) => (
          <input
            key={u}
            type="text"
            value={c}
            onChange={(d) => {
              const m = [...config.careers.jobs];
              const requirements = [...m[i].requirements];
              requirements[u] = d.target.value;
              m[i] = {
                ...m[i],
                requirements,
              };
              updateConfig("careers.jobs", m);
            }}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-xs mb-1.5"
          />
        ))}
      </CollapsibleSection>
    ))}
    <button
      onClick={() => {
        const s = [...(config?.careers?.jobs || [])];
        s.push({
          title: "New Job",
          department: "NEW",
          type: "FULL-TIME",
          location: "Pune, MH",
          description: "Job description here.",
          requirements: ["Requirement 1"],
        });
        updateConfig("careers.jobs", s);
      }}
      className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-colors uppercase tracking-widest text-xs mt-2"
    >
      + Add New Job
    </button>
  </div>
);
