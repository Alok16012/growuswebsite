import { ImageUpload, TextInput } from "../../fields";

export const WhyChooseUsEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Heading"
      value={config.home.whyChooseUs.heading}
      onChange={(s) => updateConfig("home.whyChooseUs.heading", s)}
    />
    <TextInput
      label="Heading Highlight"
      value={config.home.whyChooseUs.headingHighlight}
      onChange={(s) => updateConfig("home.whyChooseUs.headingHighlight", s)}
    />
    <TextInput
      label="Button Text"
      value={config.home.whyChooseUs.buttonText}
      onChange={(s) => updateConfig("home.whyChooseUs.buttonText", s)}
    />
    <ImageUpload
      label="Image"
      value={config.home.whyChooseUs.image}
      onChange={(s) => updateConfig("home.whyChooseUs.image", s)}
      bucketName="images"
    />
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-6 mb-3">
      Benefits
    </h4>
    {config.home.whyChooseUs.benefits.map((s, i) => (
      <input
        key={i}
        type="text"
        value={s}
        onChange={(c) => {
          const u = [...config.home.whyChooseUs.benefits];
          u[i] = c.target.value;
          updateConfig("home.whyChooseUs.benefits", u);
        }}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm mb-2 focus:outline-none focus:border-blue-500/50"
      />
    ))}
  </div>
);
