import { useSiteConfig } from "../../context/SiteConfigContext";

export const ContactHero = () => {
  const { config } = useSiteConfig();
  const hero = config.contact.hero;
  const config_global = config.global;
  return (
    <section className="relative flex w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero.bgImage})`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="page-hero site-container relative z-10 flex flex-col items-center justify-center text-center">
        <p
          className="font-black text-sm tracking-[0.4em] mb-6 animate-fade-in-down uppercase"
          style={{
            color:
              config_global.design?.hero?.subheading ||
              config_global.design?.text?.subheading ||
              config_global.primaryBlue,
          }}
        >
          {hero.subtitle}
        </p>
        <h1
          className="page-title mb-6 uppercase"
          style={{
            color:
              config_global.design?.hero?.heading ||
              config_global.design?.text?.heading ||
              "#ffffff",
          }}
        >
          {hero.heading} <br />{" "}
          <span
            style={{
              color:
                config_global.design?.hero?.subheading ||
                config_global.design?.text?.subheading ||
                config_global.primaryBlue,
            }}
          >
            {hero.headingHighlight}
          </span>
        </h1>
        <div
          className="w-24 h-1.5 mt-10 rounded-full"
          style={{
            backgroundColor:
              config_global.design?.hero?.subheading ||
              config_global.design?.text?.subheading ||
              config_global.primaryBlue,
          }}
        />
      </div>
    </section>
  );
};
