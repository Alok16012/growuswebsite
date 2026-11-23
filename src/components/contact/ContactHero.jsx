import { useSiteConfig } from "../../context/SiteConfigContext";

export const ContactHero = () => {
  const { config } = useSiteConfig();
  const hero = config.contact.hero;
  const config_global = config.global;
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero.bgImage})`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center pt-28 md:pt-32">
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
          className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-tight"
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
