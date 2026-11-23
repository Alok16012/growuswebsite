import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { AboutHero } from "../components/about/AboutHero";
import { OurStory } from "../components/about/OurStory";
import { DnaValues } from "../components/about/DnaValues";
import { Ecosystem } from "../components/about/Ecosystem";
import { Team } from "../components/about/Team";
import { Footer } from "../components/Footer";
import { JoinProgramModal } from "../components/about/JoinProgramModal";

export const AboutPage = ({ setCurrentPage }) => {
  const [e, setE] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white selection:bg-primary-blue selection:text-white">
      <Navbar currentPage="about" setCurrentPage={setCurrentPage} />
      <AboutHero />
      <OurStory />
      <DnaValues />
      <Ecosystem onJoinClick={() => setE(true)} />
      <Team />
      <Footer setCurrentPage={setCurrentPage} />
      <JoinProgramModal isOpen={e} onClose={() => setE(false)} />
    </div>
  );
};
