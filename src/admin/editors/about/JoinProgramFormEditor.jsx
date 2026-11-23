import { ColorInput, TextInput } from "../../fields";
import { FormFieldsEditor } from "../FormFieldsEditor";

export const JoinProgramFormEditor = ({ config, updateConfig }) => (
  <div>
    <TextInput
      label="Subtitle"
      value={config.joinProgramForm.subtitle}
      onChange={(s) => updateConfig("joinProgramForm.subtitle", s)}
    />
    <TextInput
      label="Heading"
      value={config.joinProgramForm.heading}
      onChange={(s) => updateConfig("joinProgramForm.heading", s)}
    />
    <TextInput
      label="Description"
      value={config.joinProgramForm.description}
      onChange={(s) => updateConfig("joinProgramForm.description", s)}
      multiline
    />
    <TextInput
      label="Submit Button Text"
      value={config.joinProgramForm.submitButtonText}
      onChange={(s) => updateConfig("joinProgramForm.submitButtonText", s)}
    />
    <ColorInput
      label="Submit Button BG"
      value={config.joinProgramForm.submitButtonBg}
      onChange={(s) => updateConfig("joinProgramForm.submitButtonBg", s)}
    />
    <FormFieldsEditor
      fields={config.joinProgramForm.fields}
      onUpdate={(s) => updateConfig("joinProgramForm.fields", s)}
    />
  </div>
);
