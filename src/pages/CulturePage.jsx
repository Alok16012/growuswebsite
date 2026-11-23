import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { CultureHero } from "../components/culture/CultureHero";
import { CultureDna } from "../components/culture/CultureDna";
import { CulturePerks } from "../components/culture/CulturePerks";
import { Workspaces } from "../components/culture/Workspaces";
import { CultureCTA } from "../components/culture/CultureCTA";
import { Footer } from "../components/Footer";

export const CulturePage = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="culture" setCurrentPage={setCurrentPage} />
      <CultureHero />
      <CultureDna />
      <CulturePerks />
      <Workspaces />
      <CultureCTA setCurrentPage={setCurrentPage} />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};
