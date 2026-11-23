import { useSiteConfig } from "../context/SiteConfigContext";

export const Logo = ({ size = "md", className = "" }) => {
  const { logoUrl, logoText, logoHighlight } = useSiteConfig().config.navbar;
  const s = {
    sm: "h-8",
    md: "h-12",
    lg: "h-20",
  };
  const i = s[size] || s.md;
  return (
    <div className={`flex items-center group ${className}`}>
      <img
        src={logoUrl || "/growus-logo.png"}
        alt={[logoText, logoHighlight].filter(Boolean).join(" ") || "Growus Auto"}
        className={`w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] ${i}`}
        style={{
          backgroundColor: "rgba(255,255,255,0.95)",
          padding: "8px 12px",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};
