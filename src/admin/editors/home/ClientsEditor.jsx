import { CollapsibleSection, ImageUpload, TextInput } from "../../fields";

export const ClientsEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Subtitle"
      value={config.home.clients.subtitle}
      onChange={(s) => updateConfig("home.clients.subtitle", s)}
    />
    <TextInput
      label="Title"
      value={config.home.clients.title}
      onChange={(s) => updateConfig("home.clients.title", s)}
    />
    <TextInput
      label="Domestic Count"
      value={config.home.clients.domesticCount}
      onChange={(s) => updateConfig("home.clients.domesticCount", s)}
    />
    <TextInput
      label="Overseas Count"
      value={config.home.clients.overseasCount}
      onChange={(s) => updateConfig("home.clients.overseasCount", s)}
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-8 mb-4">
      Row 1 Clients
    </h4>
    {config.home.clients.row1.map((s, i) => (
      <CollapsibleSection key={`r1-${i}`} title={s.name || `Client ${i + 1}`}>
        <TextInput
          label="Client Name"
          value={s.name}
          onChange={(c) => {
            const u = [...config.home.clients.row1];
            u[i] = {
              ...u[i],
              name: c,
            };
            updateConfig("home.clients.row1", u);
          }}
        />
        <ImageUpload
          label="Client Logo"
          value={s.logo}
          onChange={(c) => {
            const u = [...config.home.clients.row1];
            u[i] = {
              ...u[i],
              logo: c,
            };
            updateConfig("home.clients.row1", u);
          }}
          bucketName="images"
        />
      </CollapsibleSection>
    ))}
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-8 mb-4">
      Row 2 Clients
    </h4>
    {config.home.clients.row2.map((s, i) => (
      <CollapsibleSection key={`r2-${i}`} title={s.name || `Client ${i + 1}`}>
        <TextInput
          label="Client Name"
          value={s.name}
          onChange={(c) => {
            const u = [...config.home.clients.row2];
            u[i] = {
              ...u[i],
              name: c,
            };
            updateConfig("home.clients.row2", u);
          }}
        />
        <ImageUpload
          label="Client Logo"
          value={s.logo}
          onChange={(c) => {
            const u = [...config.home.clients.row2];
            u[i] = {
              ...u[i],
              logo: c,
            };
            updateConfig("home.clients.row2", u);
          }}
          bucketName="images"
        />
      </CollapsibleSection>
    ))}
  </div>
);
