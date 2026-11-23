import { ImageUpload, TextInput } from "../../fields";

export const AboutStoryEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Subtitle"
      value={config.about.story.subtitle}
      onChange={(s) => updateConfig("about.story.subtitle", s)}
    />
    <TextInput
      label="Heading"
      value={config.about.story.heading}
      onChange={(s) => updateConfig("about.story.heading", s)}
    />
    <TextInput
      label="Paragraph 1"
      value={config.about.story.paragraph1}
      onChange={(s) => updateConfig("about.story.paragraph1", s)}
      multiline
    />
    <TextInput
      label="Paragraph 2"
      value={config.about.story.paragraph2}
      onChange={(s) => updateConfig("about.story.paragraph2", s)}
      multiline
    />
    <ImageUpload
      label="Image"
      value={config.about.story.image}
      onChange={(s) => updateConfig("about.story.image", s)}
      bucketName="images"
    />
    <TextInput
      label="Stat 1 Value"
      value={config.about.story.stat1}
      onChange={(s) => updateConfig("about.story.stat1", s)}
    />
    <TextInput
      label="Stat 1 Label"
      value={config.about.story.stat1Label}
      onChange={(s) => updateConfig("about.story.stat1Label", s)}
    />
    <TextInput
      label="Stat 2 Value"
      value={config.about.story.stat2}
      onChange={(s) => updateConfig("about.story.stat2", s)}
    />
    <TextInput
      label="Stat 2 Label"
      value={config.about.story.stat2Label}
      onChange={(s) => updateConfig("about.story.stat2Label", s)}
    />
  </div>
);
