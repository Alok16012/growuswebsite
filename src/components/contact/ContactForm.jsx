import { SiteImage } from "../SiteImage";
import { useState } from "react";
import { useSiteConfig } from "../../context/SiteConfigContext";
import { supabase } from "../../lib/supabase";

export const ContactForm = () => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.contactForm;
  const form_1 = config.contact.form;
  const config_global = config.global;
  const [i, setI] = useState("idle");
  const u = async (d) => {
    d.preventDefault();
    setI("submitting");
    try {
      const m = new FormData(d.target);
      const p = Object.fromEntries(m.entries());
      const g = ["name", "email", "phone", "company", "service", "message"];
      const b = {
        source: "Contact Us Form",
      };
      g.forEach((S) => {
        b[S] = p[S] || null;
      });
      let x = `

--- Form Details ---`;
      let v = false;
      Object.keys(p).forEach((S) => {
        if (!g.includes(S)) {
          x += `
${S}: ${p[S]}`;
          v = true;
        }
      });
      if (v) {
        b.message = (b.message || "") + x;
      }
      const { error } = await supabase.from("leads").insert([b]);
      if (error) {
        throw error;
      }
      setI("success");
      setTimeout(() => {
        setI("idle");
        d.target.reset();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setI("error");
      setTimeout(() => setI("idle"), 3000);
    }
  };
  return (
    <section className="site-section bg-gray-50 border-t border-black/5">
      <div className="site-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2
                className="text-sm font-black tracking-wide uppercase mb-4"
                style={{
                  color:
                    config_global.design?.text?.subheading ||
                    config_global.primaryBlue,
                }}
              >
                {form_1.subtitle}
              </h2>
              <h3
                className="section-title mb-8 uppercase"
                style={{
                  color:
                    config_global.design?.backgrounds?.sectionLight ===
                      "#f9fafb" ||
                    !config_global.design?.backgrounds?.sectionLight
                      ? config_global.deepBlue
                      : config_global.design?.text?.heading,
                }}
              >
                {form_1.heading}
              </h3>
              <p
                className="text-lg leading-relaxed mb-8 font-medium"
                style={{
                  color: "#334155",
                }}
              >
                {form_1.description}
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((d) => (
                    <div
                      key={d}
                      className="w-12 h-12 rounded-full border-4 border-white growus-image-surface overflow-hidden shadow-sm"
                    >
                      <SiteImage
                        src={`https://i.pravatar.cc/100?img=${d + 10}`}
                        alt=""
                        className="growus-photo w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p
                  className="font-black uppercase tracking-tight text-xs"
                  style={{
                    color:
                      config_global.design?.backgrounds?.sectionLight ===
                        "#f9fafb" ||
                      !config_global.design?.backgrounds?.sectionLight
                        ? config_global.deepBlue
                        : config_global.design?.text?.heading,
                  }}
                >
                  {form_1.supportText}
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[350px] w-full group overflow-hidden rounded-3xl border border-black/5 shadow-2xl">
              <div
                className="absolute top-6 left-6 z-10 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl"
                style={{
                  backgroundColor: `${config_global.deepBlue}f2`,
                }}
              >
                <p
                  className="font-black text-xs tracking-wide uppercase mb-1"
                  style={{
                    color: config_global.primaryBlue,
                  }}
                >
                  {pageCopy.visitOurHeadquarters}
                </p>
                <h4 className="text-white text-sm font-black uppercase leading-tight tracking-tight">
                  {pageCopy.jaiGaneshVision} <br /> {pageCopy.akurdiPune}
                </h4>
              </div>
              <iframe
                src={/^https:\/\/www\.google\.com\/maps\/embed(?:[?/]|$)/i.test(form_1.mapUrl) ? form_1.mapUrl : undefined}
                className="w-full h-full contrast-125 transition-all duration-1000"
                loading="lazy"
              />
            </div>
          </div>
          <div
            className="min-w-0 p-5 sm:p-8 lg:p-10 rounded-[48px] border border-white/5 shadow-2xl"
            style={{
              backgroundColor: config_global.deepBlue,
            }}
          >
            {i === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
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
                <h4 className="text-white text-2xl font-black mb-2 uppercase tracking-tight">
                  {pageCopy.inquiryReceived}
                </h4>
                <p className="text-slate-300 font-medium text-sm">
                  {pageCopy.ourEngineersWillRespondWithin}
                </p>
              </div>
            ) : i === "error" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">
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
                <h4 className="text-white text-2xl font-black mb-2 uppercase tracking-tight">
                  {pageCopy.somethingWentWrong}
                </h4>
                <p className="text-slate-300 font-medium text-sm">
                  {pageCopy.pleaseTryAgainLater}
                </p>
              </div>
            ) : (
              <form onSubmit={u} className="space-y-6">
                {config.contact.form.fields?.map((d, m) => (
                  <div key={m}>
                    <label className="block text-white/80 text-sm font-bold tracking-wide uppercase mb-2 ml-1">
                      {d.label}
                    </label>
                    {d.type === "textarea" ? (
                      <textarea
                        required={d.required}
                        name={d.name}
                        placeholder={d.placeholder}
                        rows="4"
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white font-medium placeholder:text-white/50 focus:outline-none focus:border-primary-blue transition-all shadow-inner resize-none"
                      />
                    ) : d.type === "select" ? (
                      <div className="relative">
                        <select
                          required={d.required}
                          name={d.name}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-medium appearance-none focus:outline-none focus:border-primary-blue transition-all shadow-inner"
                          style={{
                            backgroundColor: config_global.deepBlue,
                          }}
                        >
                          <option
                            value=""
                            style={{
                              backgroundColor: config_global.deepBlue,
                            }}
                          >
                            Select {d.label}
                          </option>
                          {d.options?.map((p, g) => (
                            <option
                              key={g}
                              value={p}
                              style={{
                                backgroundColor: config_global.deepBlue,
                              }}
                            >
                              {p}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
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
                        required={d.required}
                        name={d.name}
                        type={d.type}
                        placeholder={d.placeholder}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white font-medium placeholder:text-white/50 focus:outline-none focus:border-primary-blue transition-all shadow-inner"
                      />
                    )}
                  </div>
                ))}
                <button
                  disabled={i === "submitting"}
                  type="submit"
                  className="w-full text-white font-black py-5 rounded-2xl shadow-xl hover:shadow-2xl active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group uppercase tracking-wide text-xs"
                  style={{
                    backgroundColor:
                      config.contact.form.submitButtonBg ||
                      config_global.accentGreen,
                  }}
                >
                  {i === "submitting" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
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
                      SENDING...
                    </>
                  ) : i === "success" ? (
                    "MESSAGE SENT!"
                  ) : i === "error" ? (
                    "FAILED! TRY AGAIN"
                  ) : (
                    <>
                      {config.contact.form.submitButtonText || "SEND INQUIRY →"}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
