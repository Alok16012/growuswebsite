import { useState } from "react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { Navbar } from "../components/Navbar";
import { ServicesHero } from "../components/services/ServicesHero";
import { ServiceCard } from "../components/services/ServiceCard";
import { StatsBand } from "../components/services/StatsBand";
import { QuoteCTA } from "../components/services/QuoteCTA";
import { IndustriesServed } from "../components/services/IndustriesServed";
import { QuoteModal } from "../components/QuoteModal";
import { Footer } from "../components/Footer";

export const ServicesPage = ({ setCurrentPage }) => {
  const { config } = useSiteConfig();
  const { services, global } = config;
  const [c, setC] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="services" setCurrentPage={setCurrentPage} />
      <ServicesHero />
      <section className="bg-gray-50 site-section">
        <h2
          className="section-title text-center mb-4 uppercase"
          style={{
            color: global.deepBlue,
          }}
        >
          {services.sectionTitle}
        </h2>
        <div aria-hidden="true" className="growus-section-rule mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 site-content">
          {services.items.map((service, m) => (
            <ServiceCard
              key={m}
              service={service}
              onClick={() => setCurrentPage(`service-${service.slug}`)}
            />
          ))}
        </div>
      </section>
      <StatsBand />
      <QuoteCTA onQuoteClick={() => setC(true)} />
      <IndustriesServed />
      <QuoteModal isOpen={c} onClose={() => setC(false)} />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};
