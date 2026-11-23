import { defaultConfig } from "../../config/defaultConfig";
import { CollapsibleSection } from "../fields";

const collectionsByTab = {
  "home-hero": [["Hero statistics", "home.hero.stats"]],
  "home-why": [["Benefits", "home.whyChooseUs.benefits"]],
  "home-clients": [
    ["Client row 1", "home.clients.row1"],
    ["Client row 2", "home.clients.row2"],
  ],
  "about-dna": [["DNA values", "about.dna.values"]],
  "about-ecosystem": [["Companies", "about.ecosystem.companies"]],
  culture: [
    ["DNA values", "culture.dnaValues"],
    ["Perks", "culture.perksList"],
    ["Workspaces", "culture.workspaces"],
  ],
  "contact-info": [["Contact cards", "contact.info.items"]],
  footer: [["Services list", "footer.servicesList"]],
};

const get = (config, path) =>
  path.split(".").reduce((value, key) => value[key], config);

export function CollectionControls({ tab, config, updateConfig }) {
  const collections = collectionsByTab[tab];
  if (!collections) return null;

  return (
    <CollapsibleSection title="Add or remove entries">
      {collections.map(([label, path]) => {
        const items = get(config, path);
        return (
          <div key={path} className="mb-4 space-y-2">
            <h4 className="text-sm font-semibold text-white">{label}</h4>
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <span className="min-w-0 text-white/80">
                  {(typeof item === "string"
                    ? item
                    : item.label || item.title || item.name) ||
                    `Entry ${index + 1}`}
                </span>
                <button
                  type="button"
                  className="text-red-300"
                  onClick={() =>
                    updateConfig(
                      path,
                      items.filter((_, i) => i !== index),
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="text-sm font-semibold text-blue-300"
              onClick={() =>
                updateConfig(path, [
                  ...items,
                  structuredClone(get(defaultConfig, path)[0]),
                ])
              }
            >
              Add entry
            </button>
          </div>
        );
      })}
    </CollapsibleSection>
  );
}
