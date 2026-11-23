import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/home/HeroSection";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { Testimonials } from "../components/home/Testimonials";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { Industries } from "../components/home/Industries";
import { PanIndiaPresence } from "../components/home/PanIndiaPresence";
import { Clients } from "../components/home/Clients";
import { Footer } from "../components/Footer";

export const HomePage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-white selection:bg-primary-blue selection:text-white">
    <Navbar currentPage="home" setCurrentPage={setCurrentPage} />
    <HeroSection setCurrentPage={setCurrentPage} />
    <ServicesPreview setCurrentPage={setCurrentPage} />
    <Testimonials />
    <WhyChooseUs />
    <Industries />
    <PanIndiaPresence />
    <Clients />
    <Footer setCurrentPage={setCurrentPage} />
  </div>
);
