import { useSiteConfig } from "../../context/SiteConfigContext";

export const GalleryHero = () => {
  const { config } = useSiteConfig();
  const { gallery, global } = config;
  return (
    <section className="relative flex w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${gallery.heroBg})`,
        }}
      />
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
          {gallery.heroSubtitle}
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
          {gallery.heroTitle}
        </h1>
        <p
          className="max-w-2xl text-lg leading-relaxed font-medium"
          style={{
            color: global.design?.text?.paragraph || "#f1f5f9",
          }}
        >
          {gallery.heroDescription}
        </p>
      </div>
    </section>
  );
};
