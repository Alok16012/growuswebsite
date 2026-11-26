import { SiteImage } from "./SiteImage";
import { useSiteConfig } from "../context/SiteConfigContext";

const defaultLogo = "/growus-logo.png";
const darkBackgroundLogo = "/growus-logo-on-dark.png";

export const Logo = ({ size = "md", className = "", onDark = false }) => {
  const { logoUrl, logoText, logoHighlight } = useSiteConfig().config.navbar;
  const useDarkBackgroundLogo = onDark && (!logoUrl || logoUrl === defaultLogo);
  const s = {
    sm: "h-8",
    md: "h-12",
    lg: "h-20",
  };
  const i = s[size] || s.md;
  return (
    <div className={`flex items-center group ${className}`}>
      <SiteImage
        loading="eager"
        fallbackSrc={useDarkBackgroundLogo ? undefined : defaultLogo}
        src={useDarkBackgroundLogo ? darkBackgroundLogo : logoUrl || defaultLogo}
        alt={[logoText, logoHighlight].filter(Boolean).join(" ") || "Growus Auto"}
        className={`w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] ${i}`}
        style={{
          backgroundColor: useDarkBackgroundLogo ? "transparent" : "rgba(255,255,255,0.95)",
          padding: "8px 12px",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};
