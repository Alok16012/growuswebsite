import { useSiteConfig } from "../../context/SiteConfigContext";

export const CultureHero = () => {
  const { config } = useSiteConfig();
  const { culture, global } = config;
  return (
    <section className="relative flex w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${culture.heroBg})`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="page-hero site-container relative z-10 flex flex-col items-start justify-end">
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
        <p className="text-gray-100 max-w-2xl text-lg leading-relaxed font-medium">
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
