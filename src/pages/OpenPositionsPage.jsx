import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { CareersHero } from "../components/careers/CareersHero";
import { JobList } from "../components/careers/JobList";
import { ResumeCTA } from "../components/careers/ResumeCTA";
import { Footer } from "../components/Footer";
import { JobApplicationModal } from "../components/careers/JobApplicationModal";

export const OpenPositionsPage = ({ setCurrentPage }) => {
  const [e, setE] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onApply = (d) => {
    setSelectedPosition(d ? d.title : "");
    setE(true);
  };
  return (
    <div className="min-h-screen bg-white selection:bg-primary-blue selection:text-white">
      <Navbar currentPage="open-positions" setCurrentPage={setCurrentPage} />
      <CareersHero />
      <JobList onApply={onApply} />
      <ResumeCTA onApply={() => onApply(null)} />
      <Footer setCurrentPage={setCurrentPage} />
      <JobApplicationModal
        isOpen={e}
        onClose={() => {
          setE(false);
          setSelectedPosition("");
        }}
        selectedPosition={selectedPosition}
      />
    </div>
  );
};
