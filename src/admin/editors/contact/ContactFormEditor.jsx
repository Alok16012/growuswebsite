import { ColorInput, TextInput } from "../../fields";
import { FormFieldsEditor } from "../FormFieldsEditor";

export const ContactFormEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Google Maps embed URL"
      value={config.contact.form.mapUrl}
      onChange={(value) => updateConfig("contact.form.mapUrl", value)}
    />
    <TextInput
      label="Subtitle"
      value={config.contact.form.subtitle}
      onChange={(s) => updateConfig("contact.form.subtitle", s)}
    />
    <TextInput
      label="Heading"
      value={config.contact.form.heading}
      onChange={(s) => updateConfig("contact.form.heading", s)}
    />
    <TextInput
      label="Description"
      value={config.contact.form.description}
      onChange={(s) => updateConfig("contact.form.description", s)}
      multiline
    />
    <TextInput
      label="Support Text"
      value={config.contact.form.supportText}
      onChange={(s) => updateConfig("contact.form.supportText", s)}
    />
    <TextInput
      label="Submit Button Text"
      value={config.contact.form.submitButtonText}
      onChange={(s) => updateConfig("contact.form.submitButtonText", s)}
    />
    <ColorInput
      label="Submit Button BG"
      value={config.contact.form.submitButtonBg}
      onChange={(s) => updateConfig("contact.form.submitButtonBg", s)}
    />
    <FormFieldsEditor
      fields={config.contact.form.fields}
      onUpdate={(s) => updateConfig("contact.form.fields", s)}
    />
  </div>
);
