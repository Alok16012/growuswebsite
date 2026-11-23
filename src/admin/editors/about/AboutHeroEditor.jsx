import { ImageUpload, TextInput } from "../../fields";

export const AboutHeroEditor = ({ config, updateConfig }) => (
  <div>
    <ImageUpload
      label="Background Image"
      value={config.about.hero.bgImage}
      onChange={(s) => updateConfig("about.hero.bgImage", s)}
      bucketName="images"
    />
    <TextInput
      label="Subtitle"
      value={config.about.hero.subtitle}
      onChange={(s) => updateConfig("about.hero.subtitle", s)}
    />
    <TextInput
      label="Heading"
      value={config.about.hero.heading}
      onChange={(s) => updateConfig("about.hero.heading", s)}
    />
    <TextInput
      label="Heading Highlight"
      value={config.about.hero.headingHighlight}
      onChange={(s) => updateConfig("about.hero.headingHighlight", s)}
    />
    <TextInput
      label="Subtext"
      value={config.about.hero.subtext}
      onChange={(s) => updateConfig("about.hero.subtext", s)}
      multiline
    />
  </div>
);
