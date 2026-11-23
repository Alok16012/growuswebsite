import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactForm } from "../components/contact/ContactForm";
import { Footer } from "../components/Footer";

export const ContactPage = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white selection:bg-primary-blue selection:text-white">
      <Navbar currentPage="contact" setCurrentPage={setCurrentPage} />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};
