import { SiteImage } from "../SiteImage";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const ServicesPreview = ({ setCurrentPage }) => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.homeServices;
  const services = config.home.services;
  const config_global = config.global;
  const c = [
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>,
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    </svg>,
  ];
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
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
        {services.items.slice(0, 6).map((u, d) => (
          <div
            key={d}
            className="home-services-card group relative h-[280px] md:h-[420px] rounded-[16px] md:rounded-[20px] overflow-hidden cursor-pointer border border-black/10 transition-all duration-300 shadow-xl"
            style={{
              borderColor:
                config_global.design?.text?.subheading ||
                config_global.primaryBlue,
            }}
          >
            <div className="growus-image-surface absolute inset-0 h-1/2 overflow-hidden">
              <SiteImage
                sizes="(min-width: 1024px) 33vw, 50vw"
                src={u.image}
                alt={u.title}
                className="growus-photo w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-colors duration-500" />
            </div>
            <div
              className="absolute top-[calc(50%-16px)] md:top-[calc(50%-20px)] left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-white z-10 shadow-lg"
              style={{
                backgroundColor:
                  config_global.design?.icons?.color ||
                  config_global.primaryBlue,
                color: config_global.design?.buttons?.primaryText || "#ffffff",
              }}
            >
              {c[d] || c[0]}
            </div>
            <div
              className="home-services-copy absolute bottom-0 w-full h-1/2 p-3 md:p-6 flex flex-col border-t border-white/10"
              style={{
                backgroundColor:
                  config_global.design?.backgrounds?.sectionDark ||
                  config_global.deepBlue,
              }}
            >
              <p
                className="home-services-category text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1 md:mb-2"
                style={{
                  color:
                    config_global.design?.text?.subheading ||
                    config_global.primaryBlue,
                }}
              >
                {u.category}
              </p>
              <h3
                className="font-black text-xs md:text-lg mb-1 md:mb-3 line-clamp-2 uppercase tracking-tight"
                style={{
                  color: config_global.design?.text?.heading || "#ffffff",
                }}
              >
                {u.title}
              </h3>
              <p
                className="text-[10px] md:text-sm leading-relaxed flex-grow line-clamp-2 md:line-clamp-3 font-medium"
                style={{
                  color: config_global.design?.text?.paragraph || "#cbd5e1",
                }}
              >
                {u.description}
              </p>
              <button
                onClick={() => setCurrentPage("services")}
                className="mt-3 md:mt-4 w-max text-white text-[9px] md:text-[11px] font-black px-4 md:px-6 py-1.5 md:py-2 rounded-full transition-all duration-300 uppercase tracking-widest shadow-lg active:scale-95"
                style={{
                  backgroundColor:
                    config_global.design?.buttons?.primaryBg ||
                    config_global.primaryBlue,
                  color:
                    config_global.design?.buttons?.primaryText || "#ffffff",
                }}
              >
                {pageCopy.viewDetails}
              </button>
            </div>
          </div>
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
