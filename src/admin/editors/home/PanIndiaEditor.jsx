import { TextInput } from "../../fields";

export const PanIndiaEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Subtitle"
      value={config.home.panIndia.subtitle}
      onChange={(s) => updateConfig("home.panIndia.subtitle", s)}
    />
    <TextInput
      label="Title"
      value={config.home.panIndia.title}
      onChange={(s) => updateConfig("home.panIndia.title", s)}
    />
    <TextInput
      label="Title Highlight"
      value={config.home.panIndia.titleHighlight}
      onChange={(s) => updateConfig("home.panIndia.titleHighlight", s)}
    />
    <TextInput
      label="Title End"
      value={config.home.panIndia.titleEnd}
      onChange={(s) => updateConfig("home.panIndia.titleEnd", s)}
    />
    <TextInput
      label="Description"
      value={config.home.panIndia.description}
      onChange={(s) => updateConfig("home.panIndia.description", s)}
      multiline
    />
    <TextInput
      label="CTA Title"
      value={config.home.panIndia.ctaTitle}
      onChange={(s) => updateConfig("home.panIndia.ctaTitle", s)}
    />
    <TextInput
      label="CTA Subtitle"
      value={config.home.panIndia.ctaSubtitle}
      onChange={(s) => updateConfig("home.panIndia.ctaSubtitle", s)}
    />
    <TextInput
      label="CTA Button Text"
      value={config.home.panIndia.ctaButtonText}
      onChange={(s) => updateConfig("home.panIndia.ctaButtonText", s)}
    />
  </div>
);
