import { useState } from "react";
import { useSiteConfig } from "../../context/SiteConfigContext";
import { supabase } from "../../lib/supabase";

export const JoinProgramModal = ({ isOpen, onClose }) => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.joinProgram;
  const { joinProgramForm, global } = config;
  const [u, setU] = useState("idle");
  if (!isOpen) {
    return null;
  }
  const m = async (p) => {
    p.preventDefault();
    setU("submitting");
    try {
      const g = new FormData(p.target);
      const b = Object.fromEntries(g.entries());
      const x = ["name", "email", "phone", "company", "service", "message"];
      const v = {
        source: "Join Program Form",
      };
      x.forEach((C) => {
        v[C] = b[C] || null;
      });
      if (!v.company && b.experience) {
        v.company = `${b.experience} Years Exp`;
      }
      if (!v.service && b.expertise) {
        v.service = `Program: ${b.expertise}`;
      }
      let j = `

--- Application Details ---`;
      let S = false;
      Object.keys(b).forEach((C) => {
        if (!x.includes(C)) {
          j += `
${C}: ${b[C]}`;
          S = true;
        }
      });
      if (S) {
        v.message = (v.message || "") + j;
      }
      const { error } = await supabase.from("leads").insert([v]);
      if (error) {
        throw error;
      }
      setU("success");
      setTimeout(() => {
        onClose();
        setU("idle");
        p.target.reset();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setU("error");
      setTimeout(() => setU("idle"), 3000);
    }
  };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-lg rounded-3xl border border-black/5 shadow-2xl overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 blur-[60px] pointer-events-none"
          style={{
            backgroundColor: `${global.design?.buttons?.primaryBg || global.accentGreen}33`,
          }}
        />
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-black/5 relative z-10">
          <div>
            <h3
              className="font-black text-2xl tracking-tighter uppercase"
              style={{
                color: "var(--growus-ink)",
              }}
            >
              {pageCopy.joinTheProgram}
            </h3>
            <p className="text-gray-600 font-medium text-sm mt-1">
              {pageCopy.becomeAPartOfOur}
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
        <div className="p-6 md:p-8 relative z-10">
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
                {pageCopy.applicationSubmitted}
              </h4>
              <p className="text-gray-600 font-medium">
                {pageCopy.wellReviewYourDetailsAnd}
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
                {pageCopy.somethingWentWrong}
              </h4>
              <p className="text-gray-600 font-medium">
                {pageCopy.pleaseTryAgainLater}
              </p>
            </div>
          ) : (
            <form onSubmit={m} className="space-y-4">
              {joinProgramForm.fields?.map((p, g) => (
                <div key={g} className="space-y-1.5">
                  <label
                    className="text-[10px] font-black uppercase tracking-widest pl-1"
                    style={{
                      color:
                        global.design?.text?.subheading || global.primaryBlue,
                    }}
                  >
                    {p.label}
                  </label>
                  {p.type === "textarea" ? (
                    <textarea
                      required={p.required}
                      name={p.name}
                      rows="3"
                      className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none transition-all shadow-inner resize-none"
                      style={{
                        borderColor:
                          global.design?.text?.subheading || "#e2e8f0",
                      }}
                      placeholder={p.placeholder}
                    />
                  ) : p.type === "select" ? (
                    <div className="relative">
                      <select
                        required={p.required}
                        name={p.name}
                        className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue font-medium focus:outline-none transition-all shadow-inner appearance-none text-sm"
                        style={{
                          borderColor:
                            global.design?.text?.subheading || "#e2e8f0",
                        }}
                      >
                        <option value="" disabled selected={!p.value}>
                          {p.placeholder || `Select ${p.label}`}
                        </option>
                        {p.options?.map((b, x) => (
                          <option key={x} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <input
                      required={p.required}
                      type={p.type}
                      name={p.name}
                      className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none transition-all shadow-inner"
                      style={{
                        borderColor:
                          global.design?.text?.subheading || "#e2e8f0",
                      }}
                      placeholder={p.placeholder}
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={u === "submitting"}
                className="w-full font-black py-4 rounded-xl transition-all duration-300 shadow-lg mt-6 flex items-center justify-center uppercase tracking-widest text-sm disabled:opacity-70"
                style={{
                  backgroundColor:
                    joinProgramForm.submitButtonBg ||
                    global.design?.buttons?.primaryBg ||
                    global.accentGreen,
                  color: global.design?.buttons?.primaryText || "#ffffff",
                }}
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
                  joinProgramForm.submitButtonText || "Join Now →"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
