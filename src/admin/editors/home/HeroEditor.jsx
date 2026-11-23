import { ColorInput, ImageUpload, TextInput } from "../../fields";

export const HeroEditor = ({ config, updateConfig }) => (
  <div>
    <ColorInput
      label="Side tab background"
      value={config.home.hero.sideTabBg}
      onChange={(value) => updateConfig("home.hero.sideTabBg", value)}
    />
    <ImageUpload
      label="Background Image"
      value={config.home.hero.bgImage}
      onChange={(s) => updateConfig("home.hero.bgImage", s)}
      bucketName="images"
    />
    <ColorInput
      label="Overlay Color"
      value={config.home.hero.overlayColor}
      onChange={(s) => updateConfig("home.hero.overlayColor", s)}
    />
    <ColorInput
      label="Overlay Gradient End"
      value={config.home.hero.overlayToColor}
      onChange={(s) => updateConfig("home.hero.overlayToColor", s)}
    />
    <TextInput
      label="Heading"
      value={config.home.hero.heading}
      onChange={(s) => updateConfig("home.hero.heading", s)}
      multiline
    />
    <ColorInput
      label="Heading Color"
      value={config.home.hero.headingColor}
      onChange={(s) => updateConfig("home.hero.headingColor", s)}
    />
    <TextInput
      label="Subtext"
      value={config.home.hero.subtext}
      onChange={(s) => updateConfig("home.hero.subtext", s)}
      multiline
    />
    <ColorInput
      label="Subtext Color"
      value={config.home.hero.subtextColor}
      onChange={(s) => updateConfig("home.hero.subtextColor", s)}
    />
    <TextInput
      label="Button 1 Text"
      value={config.home.hero.button1Text}
      onChange={(s) => updateConfig("home.hero.button1Text", s)}
    />
    <ColorInput
      label="Button 1 BG"
      value={config.home.hero.button1Bg}
      onChange={(s) => updateConfig("home.hero.button1Bg", s)}
    />
    <TextInput
      label="Button 2 Text"
      value={config.home.hero.button2Text}
      onChange={(s) => updateConfig("home.hero.button2Text", s)}
    />
    <ColorInput
      label="Button 2 Border"
      value={config.home.hero.button2Border}
      onChange={(s) => updateConfig("home.hero.button2Border", s)}
    />
    <TextInput
      label="Popup Title"
      value={config.home.hero.popupTitle}
      onChange={(s) => updateConfig("home.hero.popupTitle", s)}
    />
    <TextInput
      label="Popup Text"
      value={config.home.hero.popupText}
      onChange={(s) => updateConfig("home.hero.popupText", s)}
      multiline
    />
    <TextInput
      label="Side Tab Text"
      value={config.home.hero.sideTabText}
      onChange={(s) => updateConfig("home.hero.sideTabText", s)}
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-6 mb-3">
      Stats
    </h4>
    {config.home.hero.stats.map((s, i) => (
      <div key={i} className="grid grid-cols-3 gap-2 mb-2">
        <input
          type="number"
          value={s.number}
          onChange={(c) => {
            const u = [...config.home.hero.stats];
            u[i] = {
              ...u[i],
              number: parseInt(c.target.value) || 0,
            };
            updateConfig("home.hero.stats", u);
          }}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
          placeholder="Number"
        />
        <input
          type="text"
          value={s.suffix}
          onChange={(c) => {
            const u = [...config.home.hero.stats];
            u[i] = {
              ...u[i],
              suffix: c.target.value,
            };
            updateConfig("home.hero.stats", u);
          }}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
          placeholder="Suffix"
        />
        <input
          type="text"
          value={s.label}
          onChange={(c) => {
            const u = [...config.home.hero.stats];
            u[i] = {
              ...u[i],
              label: c.target.value,
            };
            updateConfig("home.hero.stats", u);
          }}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
          placeholder="Label"
        />
      </div>
    ))}
  </div>
);
