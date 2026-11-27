import { ColorInput, FieldGroup } from "../fields";

export const GlobalEditor = ({ config, updateConfig }) => (
  <div className="space-y-8">
    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl mb-6">
      <p className="text-blue-200 text-xs font-medium leading-relaxed">
        <strong>Tip:</strong> These colors control the overall theme of your
        website. Grouping them helps you identify exactly which element you are
        changing.
      </p>
    </div>
    <FieldGroup title="Global Identity">
      <ColorInput
        label="Coverage emerald accent"
        value={config.global.emeraldGreen}
        onChange={(value) => updateConfig("global.emeraldGreen", value)}
      />
      <ColorInput
        label="Coverage gold accent"
        value={config.global.goldAccent}
        onChange={(value) => updateConfig("global.goldAccent", value)}
      />
      <ColorInput
        label="Brand Primary"
        value={config.global.primaryBlue}
        onChange={(s) => updateConfig("global.primaryBlue", s)}
      />
      <ColorInput
        label="Brand Secondary (Deep)"
        value={config.global.deepBlue}
        onChange={(s) => updateConfig("global.deepBlue", s)}
      />
      <ColorInput
        label="Accent (Green)"
        value={config.global.accentGreen}
        onChange={(s) => updateConfig("global.accentGreen", s)}
      />
    </FieldGroup>
    <FieldGroup title="Other Pages Hero Colors">
      <ColorInput
        label="Hero Heading Color"
        value={config.global.design.hero?.heading}
        onChange={(s) => updateConfig("global.design.hero.heading", s)}
      />
      <ColorInput
        label="Hero Subheading Color"
        value={config.global.design.hero?.subheading}
        onChange={(s) => updateConfig("global.design.hero.subheading", s)}
      />
    </FieldGroup>
    <FieldGroup title="Text Colors">
      <ColorInput
        label="Headings on dark surfaces"
        value={config.global.design?.text?.heading}
        onChange={(s) => updateConfig("global.design.text.heading", s)}
      />
      <ColorInput
        label="Subheadings & Highlights"
        value={config.global.design?.text?.subheading}
        onChange={(s) => updateConfig("global.design.text.subheading", s)}
      />
      <ColorInput
        label="Paragraphs on dark surfaces"
        value={config.global.design?.text?.paragraph}
        onChange={(s) => updateConfig("global.design.text.paragraph", s)}
      />
      <ColorInput
        label="Muted/Secondary Text"
        value={config.global.design?.text?.muted}
        onChange={(s) => updateConfig("global.design.text.muted", s)}
      />
    </FieldGroup>
    <FieldGroup title="Buttons & Actions">
      <ColorInput
        label="Primary Button Background"
        value={config.global.design?.buttons?.primaryBg}
        onChange={(s) => updateConfig("global.design.buttons.primaryBg", s)}
      />
      <ColorInput
        label="Primary Button Text"
        value={config.global.design?.buttons?.primaryText}
        onChange={(s) => updateConfig("global.design.buttons.primaryText", s)}
      />
      <ColorInput
        label="Secondary Button Border"
        value={config.global.design?.buttons?.secondaryBorder}
        onChange={(s) =>
          updateConfig("global.design.buttons.secondaryBorder", s)
        }
      />
      <ColorInput
        label="Secondary Button Text"
        value={config.global.design?.buttons?.secondaryText}
        onChange={(s) => updateConfig("global.design.buttons.secondaryText", s)}
      />
    </FieldGroup>
    <FieldGroup title="Icons & Accents">
      <ColorInput
        label="Icon Fill/Stroke"
        value={config.global.design?.icons?.color}
        onChange={(s) => updateConfig("global.design.icons.color", s)}
      />
      <ColorInput
        label="Icon Background Circle"
        value={config.global.design?.icons?.bg}
        onChange={(s) => updateConfig("global.design.icons.bg", s)}
      />
    </FieldGroup>
    <FieldGroup title="Backgrounds & Overlays">
      <ColorInput
        label="Dark Section Background"
        value={config.global.design?.backgrounds?.sectionDark}
        onChange={(s) =>
          updateConfig("global.design.backgrounds.sectionDark", s)
        }
      />
      <ColorInput
        label="Light Section Background"
        value={config.global.design?.backgrounds?.sectionLight}
        onChange={(s) =>
          updateConfig("global.design.backgrounds.sectionLight", s)
        }
      />
      <ColorInput
        label="Hero Overlay Tint"
        value={config.global.design?.backgrounds?.heroOverlay}
        onChange={(s) =>
          updateConfig("global.design.backgrounds.heroOverlay", s)
        }
      />
    </FieldGroup>
  </div>
);
