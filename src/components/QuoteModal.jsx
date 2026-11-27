import { useState } from "react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { supabase } from "../lib/supabase";

export const QuoteModal = ({ isOpen, onClose }) => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.quote;
  const config_global = config.global;
  const [c, setC] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [d, setD] = useState("idle");
  if (!isOpen) {
    return null;
  }
  const p = async (b) => {
    b.preventDefault();
    setD("submitting");
    try {
      const { error } = await supabase.from("leads").insert([
        {
          name: c.name,
          email: c.email,
          phone: c.phone,
          company: c.company || null,
          service: c.service,
          message: c.message,
          source: "Quote Form",
        },
      ]);
      if (error) {
        throw error;
      }
      setD("success");
      setTimeout(() => {
        onClose();
        setD("idle");
        setC({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setD("error");
      setTimeout(() => setD("idle"), 3000);
    }
  };
  const g = (b) =>
    setC({
      ...c,
      [b.target.name]: b.target.value,
    });
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
            backgroundColor: `${config_global.design?.buttons?.primaryBg || config_global.primaryBlue}33`,
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
              {pageCopy.getAQuote}
            </h3>
            <p className="text-gray-600 font-medium text-sm mt-1">
              {pageCopy.fillOutTheFormBelow}
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
          {d === "success" ? (
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
              <h4
                className="text-2xl font-black mb-2 uppercase tracking-tight"
                style={{
                  color: "var(--growus-ink)",
                }}
              >
                {pageCopy.requestSent}
              </h4>
              <p className="text-gray-600 font-medium">
                {pageCopy.ourTeamWillContactYou}
              </p>
            </div>
          ) : d === "error" ? (
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
              <h4
                className="text-2xl font-black mb-2 uppercase tracking-tight"
                style={{
                  color: "var(--growus-ink)",
                }}
              >
                {pageCopy.somethingWentWrong}
              </h4>
              <p className="text-gray-600 font-medium">
                {pageCopy.pleaseTryAgainLater}
              </p>
            </div>
          ) : (
            <form onSubmit={p} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    className="text-[10px] font-black uppercase tracking-widest pl-1"
                    style={{
                      color:
                        config_global.design?.text?.subheading ||
                        config_global.primaryBlue,
                    }}
                  >
                    {pageCopy.fullName}
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={c.name}
                    onChange={g}
                    className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none transition-all shadow-inner"
                    style={{
                      borderColor:
                        config_global.design?.text?.subheading || "#e2e8f0",
                    }}
                    placeholder={pageCopy.johnDoe}
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    className="text-[10px] font-black uppercase tracking-widest pl-1"
                    style={{
                      color:
                        config_global.design?.text?.subheading ||
                        config_global.primaryBlue,
                    }}
                  >
                    {pageCopy.email}
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={c.email}
                    onChange={g}
                    className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none transition-all shadow-inner"
                    style={{
                      borderColor:
                        config_global.design?.text?.subheading || "#e2e8f0",
                    }}
                    placeholder={pageCopy.johncompanycom}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    className="text-[10px] font-black uppercase tracking-widest pl-1"
                    style={{
                      color:
                        config_global.design?.text?.subheading ||
                        config_global.primaryBlue,
                    }}
                  >
                    {pageCopy.phoneNumber}
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={c.phone}
                    onChange={g}
                    className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none transition-all shadow-inner"
                    style={{
                      borderColor:
                        config_global.design?.text?.subheading || "#e2e8f0",
                    }}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    className="text-[10px] font-black uppercase tracking-widest pl-1"
                    style={{
                      color:
                        config_global.design?.text?.subheading ||
                        config_global.primaryBlue,
                    }}
                  >
                    {pageCopy.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={c.company}
                    onChange={g}
                    className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none transition-all shadow-inner"
                    style={{
                      borderColor:
                        config_global.design?.text?.subheading || "#e2e8f0",
                    }}
                    placeholder={pageCopy.companyName}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label
                  className="text-[10px] font-black uppercase tracking-widest pl-1"
                  style={{
                    color:
                      config_global.design?.text?.subheading ||
                      config_global.primaryBlue,
                  }}
                >
                  {pageCopy.serviceRequired}
                </label>
                <select
                  required
                  name="service"
                  value={c.service}
                  onChange={g}
                  className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue font-medium focus:outline-none transition-all shadow-inner appearance-none"
                  style={{
                    borderColor:
                      config_global.design?.text?.subheading || "#e2e8f0",
                  }}
                >
                  <option value="" disabled className="text-gray-500">
                    {pageCopy.selectAService}
                  </option>
                  <option value="quality-management">
                    Quality Management System
                  </option>
                  <option value="third-party-inspection">
                    Third Party Inspection
                  </option>
                  <option value="engineering-design">
                    Engineering & Design
                  </option>
                  <option value="quality-audits">Global Quality Audits</option>
                  <option value="supplier-development">
                    Supplier Process Development
                  </option>
                  <option value="other">Other / Custom Requirement</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label
                  className="text-[10px] font-black uppercase tracking-widest pl-1"
                  style={{
                    color:
                      config_global.design?.text?.subheading ||
                      config_global.primaryBlue,
                  }}
                >
                  {pageCopy.message}
                </label>
                <textarea
                  name="message"
                  value={c.message}
                  onChange={g}
                  rows="3"
                  className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm font-medium focus:outline-none transition-all shadow-inner resize-none"
                  style={{
                    borderColor:
                      config_global.design?.text?.subheading || "#e2e8f0",
                  }}
                  placeholder={pageCopy.tellUsAboutYourRequirements}
                />
              </div>
              <button
                type="submit"
                disabled={d === "submitting"}
                className="w-full font-black py-4 rounded-xl transition-all duration-300 shadow-lg mt-6 flex items-center justify-center uppercase tracking-widest text-sm disabled:opacity-70"
                style={{
                  backgroundColor:
                    config_global.design?.buttons?.primaryBg ||
                    config_global.primaryBlue,
                  color:
                    config_global.design?.buttons?.primaryText || "#ffffff",
                }}
              >
                {d === "submitting" ? (
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
                  pageCopy.submitButton
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
