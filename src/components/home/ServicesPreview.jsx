import { ServiceCard } from "../services/ServiceCard";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const ServicesPreview = ({ setCurrentPage }) => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.homeServices;
  const services = config.home.services;
  const config_global = config.global;
  return (
    <section
      id="services"
      className="home-services-theme site-section border-t border-black/5"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 site-content">
        {services.items.slice(0, 6).map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            actionLabel={pageCopy.viewDetails}
            imageSizes="(min-width: 1280px) 380px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            onClick={() => setCurrentPage("services")}
          />
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
