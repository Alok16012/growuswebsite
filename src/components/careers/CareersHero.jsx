import { HeroImage } from "../SiteImage";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const CareersHero = () => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.careersHero;
  const config_global = config.global;
  return (
    <section className="relative flex w-full overflow-hidden">
      <HeroImage themed src={config.careers.heroImage} />
      <div className="absolute inset-0 bg-black/40" />
      <div className="page-hero site-container relative z-10 flex flex-col items-start justify-end">
        <p
          className="text-white/70 text-sm font-black tracking-[0.4em] mb-6 cursor-pointer hover:text-primary-blue transition-colors uppercase"
          onClick={() => (window.location.href = "/")}
        >
          {pageCopy.backToHome}
        </p>
        <h1
          className="page-title mb-6 uppercase"
          style={{
            color: config_global.design?.hero?.heading || "#ffffff",
          }}
        >
          {pageCopy.open}{" "}
          <span
            style={{
              color:
                config_global.design?.hero?.subheading ||
                config_global.primaryBlue,
            }}
          >
            {pageCopy.positions}
          </span>
          <br />
          {pageCopy.atGrowus}
        </h1>
        <p className="page-intro text-gray-100 font-medium">
          {pageCopy.joinOurTeamOf700}
        </p>
        <div
          className="w-24 h-1.5 mt-10 rounded-full"
          style={{
            backgroundColor:
              config_global.design?.hero?.subheading ||
              config_global.primaryBlue,
          }}
        />
      </div>
    </section>
  );
};
