import { ImageUpload, TextInput } from "../../fields";

export const ContactHeroEditor = ({ config, updateConfig }) => (
  <div>
    <ImageUpload
      label="Background Image"
      value={config.contact.hero.bgImage}
      onChange={(s) => updateConfig("contact.hero.bgImage", s)}
      bucketName="images"
    />
    <TextInput
      label="Subtitle"
      value={config.contact.hero.subtitle}
      onChange={(s) => updateConfig("contact.hero.subtitle", s)}
    />
    <TextInput
      label="Heading"
      value={config.contact.hero.heading}
      onChange={(s) => updateConfig("contact.hero.heading", s)}
    />
    <TextInput
      label="Heading Highlight"
      value={config.contact.hero.headingHighlight}
      onChange={(s) => updateConfig("contact.hero.headingHighlight", s)}
    />
  </div>
);
