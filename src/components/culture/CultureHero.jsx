import { HeroImage } from "../SiteImage";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const CultureHero = () => {
  const { config } = useSiteConfig();
  const { culture, global } = config;
  return (
    <section className="relative flex w-full overflow-hidden">
      <HeroImage themed src={culture.heroBg} />
      <div className="absolute inset-0 bg-black/40" />
      <div className="page-hero site-container relative z-10 flex flex-col items-center justify-center text-center">
        <p
          className="font-black text-sm tracking-[0.4em] mb-6 uppercase"
          style={{
            color:
              global.design?.hero?.subheading ||
              global.design?.text?.subheading ||
              global.primaryBlue,
          }}
        >
          {culture.heroSubtitle}
        </p>
        <h1
          className="page-title mb-6 uppercase"
          style={{
            color:
              global.design?.hero?.heading ||
              global.design?.text?.heading ||
              "#ffffff",
          }}
        >
          {culture.heroTitle}{" "}
          <span
            style={{
              color:
                global.design?.hero?.subheading ||
                global.design?.text?.subheading ||
                global.primaryBlue,
            }}
          >
            {culture.heroTitleHighlight}
          </span>
        </h1>
        <p
          className="page-intro font-medium"
          style={{ color: global.design?.text?.paragraph || "#f1f5f9" }}
        >
          {culture.heroDescription}
        </p>
        <div
          className="w-24 h-1.5 mt-10 rounded-full"
          style={{
            backgroundColor:
              global.design?.hero?.subheading ||
              global.design?.text?.subheading ||
              global.primaryBlue,
          }}
        />
      </div>
    </section>
  );
};
