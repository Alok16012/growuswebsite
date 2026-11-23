import { TextInput } from "../fields";

export const FooterEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Logo Text"
      value={config.footer.logoText}
      onChange={(s) => updateConfig("footer.logoText", s)}
    />
    <TextInput
      label="Logo Highlight"
      value={config.footer.logoHighlight}
      onChange={(s) => updateConfig("footer.logoHighlight", s)}
    />
    <TextInput
      label="Description"
      value={config.footer.description}
      onChange={(s) => updateConfig("footer.description", s)}
      multiline
    />
    <TextInput
      label="Phone"
      value={config.footer.phone}
      onChange={(s) => updateConfig("footer.phone", s)}
    />
    <TextInput
      label="Email"
      value={config.footer.email}
      onChange={(s) => updateConfig("footer.email", s)}
    />
    <TextInput
      label="Address"
      value={config.footer.address}
      onChange={(s) => updateConfig("footer.address", s)}
      multiline
    />
    <TextInput
      label="Copyright"
      value={config.footer.copyright}
      onChange={(s) => updateConfig("footer.copyright", s)}
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-6 mb-3">
      Quick Links
    </h4>
    {config.footer.quickLinks.map((s, i) => (
      <input
        key={i}
        type="text"
        value={s}
        onChange={(c) => {
          const u = [...config.footer.quickLinks];
          u[i] = c.target.value;
          updateConfig("footer.quickLinks", u);
        }}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm mb-2 focus:outline-none focus:border-blue-500/50"
      />
    ))}
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-6 mb-3">
      Services List
    </h4>
    {config.footer.servicesList.map((s, i) => (
      <input
        key={i}
        type="text"
        value={s}
        onChange={(c) => {
          const u = [...config.footer.servicesList];
          u[i] = c.target.value;
          updateConfig("footer.servicesList", u);
        }}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm mb-2 focus:outline-none focus:border-blue-500/50"
      />
    ))}
  </div>
);
