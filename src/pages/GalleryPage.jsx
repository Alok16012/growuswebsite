import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { GalleryHero } from "../components/gallery/GalleryHero";
import { GalleryGrid } from "../components/gallery/GalleryGrid";
import { Footer } from "../components/Footer";

export const GalleryPage = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="gallery" setCurrentPage={setCurrentPage} />
      <GalleryHero />
      <GalleryGrid />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};
