import { useSiteConfig } from "../../context/SiteConfigContext";

export const ServicesHero = () => {
  const { config } = useSiteConfig();
  const { services, global } = config;
  return (
    <section className="relative flex w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${services.heroBg})`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="page-hero site-container relative z-10 flex flex-col items-center justify-center text-center">
        <p
          className="font-black text-sm tracking-[0.4em] mb-6 animate-fade-in-down uppercase"
          style={{
            color:
              global.design?.hero?.subheading ||
              global.design?.text?.subheading ||
              global.primaryBlue,
          }}
        >
          {services.heroSubtitle}
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
          {services.heroTitle}{" "}
          <span
            style={{
              color:
                global.design?.hero?.subheading ||
                global.design?.text?.subheading ||
                global.primaryBlue,
            }}
          >
            {services.heroTitleHighlight}
          </span>
        </h1>
        <p className="text-gray-100 max-w-2xl text-lg font-medium leading-relaxed">
          {services.heroSubtext}
        </p>
        <div
          className="w-24 h-2 mt-10 rounded-full"
          style={{
            backgroundColor: global.primaryBlue,
          }}
        />
      </div>
    </section>
  );
};
