import { SiteImage } from "../SiteImage";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const ServicesPreview = ({ setCurrentPage }) => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.homeServices;
  const services = config.home.services;
  const config_global = config.global;
  return (
    <section
      id="services"
      className="home-services-theme py-12 md:py-16 px-4 md:px-12 lg:px-20 border-t border-black/5"
      style={{
        backgroundColor:
          config_global.design?.backgrounds?.sectionLight || "#f9fafb",
      }}
    >
      <h2
        className="section-title text-center mb-4 uppercase"
        style={{
          color:
            config_global.design?.backgrounds?.sectionLight === "#f9fafb" ||
            !config_global.design?.backgrounds?.sectionLight
              ? config_global.deepBlue
              : config_global.design?.text?.heading,
        }}
      >
        {services.sectionTitle}
      </h2>
      <div
        className="w-24 h-1 mx-auto mb-8 md:mb-12"
        style={{
          backgroundColor:
            config_global.design?.text?.subheading || config_global.primaryBlue,
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-7xl mx-auto">
        {services.items.slice(0, 6).map((u, d) => (
          <article key={d} className="home-services-card group flex flex-col overflow-hidden rounded-2xl">
            <div className="growus-image-surface relative aspect-[16/10] overflow-hidden">
              <SiteImage
                sizes="(min-width: 1280px) 380px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={u.image}
                fallbackSrc={u.category === "RISK" ? "/risk-mitigation.webp" : undefined}
                alt=""
                className="block h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
              />
            </div>
            <div className="home-services-copy flex flex-1 flex-col items-start p-5 md:p-6">
              <p className="home-services-category mb-2 text-xs uppercase">{u.category}</p>
              <h3 className="mb-2 text-xl leading-tight">{u.title}</h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">
                {u.description}
              </p>
              <button
                type="button"
                onClick={() => setCurrentPage("services")}
                className="home-services-link rounded-md px-3 py-2 text-sm transition-colors"
              >
                {pageCopy.viewDetails}
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-8 md:mt-12">
        <button
          onClick={() => setCurrentPage("services")}
          className="hover:bg-blue-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-base font-semibold transition-colors duration-300"
          style={{
            backgroundColor: services.viewAllBg || config_global.primaryBlue,
          }}
        >
          {services.viewAllText}
        </button>
      </div>
    </section>
  );
};
