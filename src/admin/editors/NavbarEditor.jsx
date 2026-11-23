import { ImageUpload, ColorInput, TextInput } from "../fields";

export const NavbarEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Portal destination (https:// or site path)"
      value={config.navbar.topBarUrl}
      onChange={(value) => updateConfig("navbar.topBarUrl", value)}
    />
    <ImageUpload
      label="Website logo image"
      value={config.navbar.logoUrl}
      onChange={(value) => updateConfig("navbar.logoUrl", value)}
      bucketName="images"
    />
    <ColorInput
      label="Header Background Color"
      value={config.navbar.backgroundColor}
      onChange={(s) => updateConfig("navbar.backgroundColor", s)}
    />
    <TextInput
      label="Logo Text"
      value={config.navbar.logoText}
      onChange={(s) => updateConfig("navbar.logoText", s)}
    />
    <TextInput
      label="Logo Highlight"
      value={config.navbar.logoHighlight}
      onChange={(s) => updateConfig("navbar.logoHighlight", s)}
    />
    <TextInput
      label="Top Bar Text"
      value={config.navbar.topBarText}
      onChange={(s) => updateConfig("navbar.topBarText", s)}
    />
    <TextInput
      label="Quote Button Text"
      value={config.navbar.quoteButtonText}
      onChange={(s) => updateConfig("navbar.quoteButtonText", s)}
    />
    <ColorInput
      label="Quote Button BG"
      value={config.navbar.quoteButtonBg}
      onChange={(s) => updateConfig("navbar.quoteButtonBg", s)}
    />
    <TextInput
      label="Brochure Button Text"
      value={config.navbar.brochureButtonText}
      onChange={(s) => updateConfig("navbar.brochureButtonText", s)}
    />
    <ColorInput
      label="Brochure Button BG"
      value={config.navbar.brochureButtonBg}
      onChange={(s) => updateConfig("navbar.brochureButtonBg", s)}
    />
    <ColorInput
      label="Brochure Button Text Color"
      value={config.navbar.brochureButtonTextColor}
      onChange={(s) => updateConfig("navbar.brochureButtonTextColor", s)}
    />
  </div>
);
