import { ColorInput, ImageUpload, TextInput } from "../../fields";

const HeroToggle = ({ label, checked, onChange }) => (
  <label className="mb-3 flex items-center gap-2 text-sm text-white">
    <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
    {label}
  </label>
);

const HeroDestination = ({ label, field, config, updateConfig }) => (
  <label className="mb-3 block text-sm text-white">
    {label}
    <select
      className="mt-1 block w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white"
      value={config.home.hero[field]}
      onChange={(event) => updateConfig(`home.hero.${field}`, event.target.value)}
    >
      <option value="services">Services overview</option>
      <option value="contact">Contact page</option>
      <option value="quote">Quote form</option>
      {config.services.items.filter((service) => service.slug).map((service) => (
        <option key={service.slug} value={`service-${service.slug}`}>{service.title}</option>
      ))}
    </select>
  </label>
);

export const HeroEditor = ({ config, updateConfig }) => (
  <div>
    <ColorInput
      label="Side tab background"
      value={config.home.hero.sideTabBg}
      onChange={(value) => updateConfig("home.hero.sideTabBg", value)}
    />
    <ImageUpload
      label="Background image and video fallback"
      value={config.home.hero.bgImage}
      onChange={(s) => updateConfig("home.hero.bgImage", s)}
      bucketName="images"
    />
    <TextInput
      label="Background video URL (clear for image only)"
      value={config.home.hero.bgVideo}
      onChange={(value) => updateConfig("home.hero.bgVideo", value)}
    />
    <HeroToggle
      label="Autoplay background video"
      checked={config.home.hero.videoAutoplay}
      onChange={(value) => updateConfig("home.hero.videoAutoplay", value)}
    />
    <HeroToggle
      label="Loop background video"
      checked={config.home.hero.videoLoop}
      onChange={(value) => updateConfig("home.hero.videoLoop", value)}
    />
    <HeroToggle
      label="Use custom overlay colors"
      checked={config.home.hero.useCustomOverlay}
      onChange={(value) => updateConfig("home.hero.useCustomOverlay", value)}
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
    <ColorInput
      label="Button 1 Text Color"
      value={config.home.hero.button1TextColor}
      onChange={(value) => updateConfig("home.hero.button1TextColor", value)}
    />
    <HeroDestination label="Button 1 Destination" field="button1Destination" config={config} updateConfig={updateConfig} />
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
    <ColorInput
      label="Button 2 Text Color"
      value={config.home.hero.button2TextColor}
      onChange={(value) => updateConfig("home.hero.button2TextColor", value)}
    />
    <HeroDestination label="Button 2 Destination" field="button2Destination" config={config} updateConfig={updateConfig} />
    <HeroToggle
      label="Show hero promotion"
      checked={config.home.hero.showPromo}
      onChange={(value) => updateConfig("home.hero.showPromo", value)}
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
    <HeroDestination label="Promotion Destination" field="promoDestination" config={config} updateConfig={updateConfig} />
    <TextInput
      label="Side Tab Text"
      value={config.home.hero.sideTabText}
      onChange={(s) => updateConfig("home.hero.sideTabText", s)}
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-6 mb-3">
      Stats
    </h4>
    <HeroToggle
      label="Show hero statistics"
      checked={config.home.hero.showStats}
      onChange={(value) => updateConfig("home.hero.showStats", value)}
    />
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
