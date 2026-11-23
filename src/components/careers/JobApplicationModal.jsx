import { useState } from "react";
import { supabase } from "../../lib/supabase";

export const JobApplicationModal = ({
  isOpen,
  onClose,
  selectedPosition = "",
}) => {
  const [i, setI] = useState({
    name: "",
    email: "",
    phone: "",
    position: selectedPosition || "",
    experience: "",
    portfolio: "",
  });
  const [u, setU] = useState("idle");
  const [m, setM] = useState(null);
  if (!isOpen) {
    return null;
  }
  const g = async (x) => {
    x.preventDefault();
    setU("submitting");
    try {
      const { error } = await supabase.from("leads").insert([
        {
          name: i.name,
          email: i.email,
          phone: i.phone,
          company: `${i.experience} Years Experience`,
          service: `Job Application: ${i.position}`,
          message: `LinkedIn/Portfolio: ${i.portfolio || "N/A"}`,
          source: "Careers Form",
        },
      ]);
      if (error) {
        throw error;
      }
      setU("success");
      setTimeout(() => {
        onClose();
        setU("idle");
        setI({
          name: "",
          email: "",
          phone: "",
          position: selectedPosition,
          experience: "",
          portfolio: "",
        });
        setM(null);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setU("error");
      setTimeout(() => setU("idle"), 3000);
    }
  };
  const b = (x) =>
    setI({
      ...i,
      [x.target.name]: x.target.value,
    });
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-lg rounded-3xl border border-black/5 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-primary-blue/20 blur-[60px] pointer-events-none" />
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-black/5 relative z-10">
          <div>
            <h3 className="text-deep-blue font-black text-2xl tracking-tighter uppercase">
              Apply Now
            </h3>
            <p className="text-gray-600 font-medium text-sm mt-1">
              Join our team of quality control experts.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-slate-50 hover:bg-gray-200 rounded-full flex items-center justify-center text-deep-blue transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 md:p-8 overflow-y-auto max-h-[70vh] relative z-10">
          {u === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="text-deep-blue text-2xl font-black mb-2 uppercase tracking-tight">
                Application Sent!
              </h4>
              <p className="text-gray-600 font-medium">
                Our HR team will review your profile.
              </p>
            </div>
          ) : u === "error" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h4 className="text-deep-blue text-2xl font-black mb-2 uppercase tracking-tight">
                Submission failed
              </h4>
              <p className="text-gray-600 font-medium">
                Please try again later.
              </p>
            </div>
          ) : (
            <form onSubmit={g} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] text-primary-blue font-black uppercase tracking-widest pl-1">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={i.name}
                    onChange={b}
                    className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none focus:border-primary-blue transition-all shadow-inner"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] text-primary-blue font-black uppercase tracking-widest pl-1">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={i.email}
                    onChange={b}
                    className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none focus:border-primary-blue transition-all shadow-inner"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] text-primary-blue font-black uppercase tracking-widest pl-1">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={i.phone}
                    onChange={b}
                    className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none focus:border-primary-blue transition-all shadow-inner"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] text-primary-blue font-black uppercase tracking-widest pl-1">
                    Experience (Years)
                  </label>
                  <input
                    required
                    type="number"
                    name="experience"
                    value={i.experience}
                    onChange={b}
                    className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none focus:border-primary-blue transition-all shadow-inner"
                    placeholder="e.g. 3"
                    min="0"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] text-primary-blue font-black uppercase tracking-widest pl-1">
                  Position Applying For
                </label>
                <input
                  required
                  type="text"
                  name="position"
                  value={i.position}
                  onChange={b}
                  className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none focus:border-primary-blue transition-all shadow-inner"
                  placeholder="Senior Quality Engineer"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] text-primary-blue font-black uppercase tracking-widest pl-1">
                  LinkedIn Profile (Optional)
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={i.portfolio}
                  onChange={b}
                  className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none focus:border-primary-blue transition-all shadow-inner"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
              <div className="space-y-1.5 mt-2">
                <label className="text-[10px] text-primary-blue font-black uppercase tracking-widest pl-1">
                  Upload Resume (PDF/DOCX)
                </label>
                <div className="w-full bg-slate-50 border border-dashed border-black/20 rounded-xl px-4 py-6 flex flex-col items-center justify-center cursor-pointer hover:border-primary-blue/50 transition-colors group relative overflow-hidden shadow-inner">
                  <input
                    type="file"
                    onChange={(x) => setM(x.target.files[0])}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5 text-primary-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  </div>
                  {m ? (
                    <span className="text-deep-blue text-sm font-black uppercase tracking-tight">
                      {m.name}
                    </span>
                  ) : (
                    <>
                      <span className="text-deep-blue font-black text-sm uppercase tracking-tight">
                        Click to upload or drag and drop
                      </span>
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">
                        Max file size: 5MB
                      </span>
                    </>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={u === "submitting"}
                className="w-full bg-accent-green hover:bg-green-600 text-white font-black py-4 rounded-xl transition-all duration-300 shadow-lg shadow-primary-blue/30 mt-6 flex items-center justify-center uppercase tracking-widest text-sm disabled:opacity-70"
              >
                {u === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Application →"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
