import { pageCopySections } from "../../config/pageCopy";
import { CollapsibleSection, TextInput } from "../fields";

const sectionTitles = {
  navbar: "Navigation labels",
  footer: "Footer headings",
  homeHero: "Hero popup",
  homeServices: "Service cards",
  homeClients: "Client statistics",
  coverage: "Coverage map",
  services: "Service cards",
  serviceDetails: "Service detail pages",
  aboutStory: "Story image caption",
  joinProgram: "Join program messages",
  gallery: "Gallery tabs",
  careersHero: "Careers hero",
  jobList: "Job search",
  jobCard: "Job cards",
  resume: "Resume invitation",
  jobApplication: "Application form",
  contactForm: "Map caption and form messages",
  quote: "Quote form",
  brochure: "Brochure dialog",
};

export function PageCopyEditor({ tab, config, updateConfig }) {
  return Object.entries(pageCopySections)
    .filter(([, section]) => section.tab === tab)
    .map(([group, { fields }]) => (
      <CollapsibleSection key={group} title={sectionTitles[group]}>
        {Object.entries(fields).map(([key, fallback]) => (
          <TextInput
            key={key}
            label={key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (letter) => letter.toUpperCase())}
            value={config.pageCopy[group][key]}
            onChange={(value) =>
              updateConfig(`pageCopy.${group}.${key}`, value)
            }
            multiline={fallback.length > 65}
          />
        ))}
      </CollapsibleSection>
    ));
}
