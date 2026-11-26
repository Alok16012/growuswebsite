import { useEffect, useState } from "react";
import { SiteConfigProvider } from "./context/SiteConfigContext";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CulturePage } from "./pages/CulturePage";
import { OpenPositionsPage } from "./pages/OpenPositionsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AdminPage } from "./pages/AdminPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";

export const App = () => {
  const [n, setN] = useState("home");
  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (n === "home" && ["pan-india-presence", "clients"].includes(sectionId)) {
      document.getElementById(sectionId)?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [n]);
  const serviceSlug = n.startsWith("service-")
    ? n.replace("service-", "")
    : null;
  return (
    <SiteConfigProvider>
      {n === "home" && <HomePage setCurrentPage={setN} />}
      {n === "services" && <ServicesPage setCurrentPage={setN} />}
      {n === "about" && <AboutPage setCurrentPage={setN} />}
      {n === "contact" && <ContactPage setCurrentPage={setN} />}
      {n === "culture" && <CulturePage setCurrentPage={setN} />}
      {n === "open-positions" && <OpenPositionsPage setCurrentPage={setN} />}
      {n === "gallery" && <GalleryPage setCurrentPage={setN} />}
      {n === "admin" && <AdminPage setCurrentPage={setN} />}
      {serviceSlug && (
        <ServiceDetailPage serviceSlug={serviceSlug} setCurrentPage={setN} />
      )}
    </SiteConfigProvider>
  );
};
