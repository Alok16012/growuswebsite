import { useState } from "react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { supabase } from "../lib/supabase";

export const BrochureModal = ({ isOpen, onClose }) => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.brochure;
  const i = config.brochures || [];
  const [c, setC] = useState(1);
  const [d, setD] = useState(null);
  const [p, setP] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [b, setB] = useState(false);
  const [v, setV] = useState(false);
  if (!isOpen) {
    return null;
  }
  const S = (E) => {
    setD(E);
    setC(2);
  };
  const _ = async (E) => {
    E.preventDefault();
    if (!(!p.name || !p.email || !p.mobile)) {
      setB(true);
      try {
        const { error } = await supabase.from("leads").insert([
          {
            name: p.name,
            email: p.email,
            phone: p.mobile,
            company: null,
            service: `Brochure Download: ${d?.title}`,
            message: null,
            source: "Brochure Form",
          },
        ]);
        setB(false);
        setV(true);
        if (d?.url && d.url !== "#") {
          const A = document.createElement("a");
          A.href = d.url;
          A.target = "_blank";
          A.download = `Growus_Auto_${d.title.replace(/\s+/g, "_")}.pdf`;
          document.body.appendChild(A);
          A.click();
          document.body.removeChild(A);
        }
        setTimeout(() => {
          setV(false);
          setC(1);
          setD(null);
          setP({
            name: "",
            email: "",
            mobile: "",
          });
          onClose();
        }, 2000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setB(false);
        alert("Something went wrong. Please try again.");
      }
    }
  };
  const C = () => {
    setC(1);
    setD(null);
    setP({
      name: "",
      email: "",
      mobile: "",
    });
    setB(false);
    setV(false);
    onClose();
  };
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={C}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-black/5 grid grid-cols-1 md:grid-cols-2"
        onClick={(E) => E.stopPropagation()}
        style={{
          animation: "scaleIn 0.3s ease-out",
        }}
      >
        <div className="bg-gradient-to-br from-primary-blue to-[#c0392b] p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-white fill-none stroke-current"
                style={{
                  strokeWidth: "6",
                }}
              >
                <rect x="8" y="8" width="84" height="84" strokeWidth="6" />
                <path
                  d="M75 28 H28 V72 H75 V50 H52"
                  strokeWidth="14"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </svg>
            </div>
            <span className="text-white/80 font-bold text-sm">growus auto</span>
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-black leading-tight mb-2 uppercase tracking-tighter">
            {pageCopy.getOurLatest}
          </h2>
          <h2 className="text-white text-2xl md:text-3xl font-black leading-tight mb-6 uppercase tracking-tighter">
            <span className="text-deep-blue font-black">{pageCopy.corporate}</span>
            <br />
            <span className="text-deep-blue font-black">{pageCopy.brochures}</span>
          </h2>
          <p className="text-white/80 text-sm leading-relaxed mb-8">
            {pageCopy.takeADeepDiveInto}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white text-xs font-black uppercase tracking-widest">
                {pageCopy.instantAccess}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white text-xs font-black uppercase tracking-widest">
                {pageCopy.globalStandards}
              </span>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 relative">
          <button
            onClick={C}
            className="absolute top-4 right-4 w-8 h-8 bg-slate-50 hover:bg-gray-200 rounded-full flex items-center justify-center text-deep-blue transition-all duration-300"
          >
            <svg
              className="w-4 h-4"
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
          {c === 1 && (
            <div>
              <p className="text-primary-blue text-xs font-black tracking-wider uppercase mb-2">
                {pageCopy.step1Of2}
              </p>
              <h3 className="text-deep-blue text-xl font-black mb-6 uppercase tracking-tighter">
                {pageCopy.selectABrochure}
              </h3>
              <div className="space-y-3">
                {i.map((E) => (
                  <button
                    key={E.id}
                    onClick={() => S(E)}
                    className="w-full flex items-center gap-4 p-4 bg-slate-50 border border-black/5 rounded-2xl hover:border-primary-blue/30 hover:bg-white transition-all duration-300 group text-left shadow-sm"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400 group-hover:text-primary-blue group-hover:bg-primary-blue/10 transition-all flex-shrink-0 shadow-sm">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-deep-blue text-xs font-black uppercase tracking-widest group-hover:text-primary-blue transition-colors">
                        {E.title}
                      </p>
                      <p className="text-gray-600 font-bold text-xs mt-0.5 tracking-tight">
                        {E.desc}
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-primary-blue ml-auto flex-shrink-0 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}
          {c === 2 && !v && (
            <div>
              <button
                onClick={() => setC(1)}
                className="flex items-center gap-1 text-gray-500 hover:text-primary-blue text-xs font-bold uppercase tracking-widest mb-3 transition-colors"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {pageCopy.back}
              </button>
              <p className="text-primary-blue text-xs font-black tracking-wider uppercase mb-2">
                {pageCopy.step2Of2}
              </p>
              <h3 className="text-deep-blue text-xl font-black mb-1 uppercase tracking-tighter">
                {pageCopy.fillYourDetails}
              </h3>
              <p className="text-gray-600 text-xs mb-5 font-medium">
                For:{" "}
                <span className="text-primary-blue font-black uppercase">
                  {d?.title}
                </span>
              </p>
              <form onSubmit={_} className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder={pageCopy.yourName}
                    value={p.name}
                    onChange={(E) =>
                      setP({
                        ...p,
                        name: E.target.value,
                      })
                    }
                    required
                    className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm placeholder-gray-400 focus:outline-none focus:border-primary-blue/50 transition-all shadow-inner"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={pageCopy.emailAddress}
                    value={p.email}
                    onChange={(E) =>
                      setP({
                        ...p,
                        email: E.target.value,
                      })
                    }
                    required
                    className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm placeholder-gray-400 focus:outline-none focus:border-primary-blue/50 transition-all shadow-inner"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder={pageCopy.mobileNumber}
                    value={p.mobile}
                    onChange={(E) =>
                      setP({
                        ...p,
                        mobile: E.target.value,
                      })
                    }
                    required
                    className="w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-deep-blue text-sm placeholder-gray-400 focus:outline-none focus:border-primary-blue/50 transition-all shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  disabled={b}
                  className="w-full bg-primary-blue hover:bg-blue-600 text-white font-black py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
                >
                  {b ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      PROCESSING...
                    </>
                  ) : (
                    <>
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
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      {pageCopy.downloadBrochure}
                    </>
                  )}
                </button>
              </form>
              <p className="text-gray-600 text-xs text-center mt-3">
                {pageCopy.byDownloadingYouAgreeTo}
              </p>
            </div>
          )}
          {v && (
            <div className="flex flex-col items-center justify-center h-full py-10">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-deep-blue text-lg font-black mb-2 uppercase tracking-tighter">
                {pageCopy.downloadStarted}
              </h3>
              <p className="text-gray-600 text-sm text-center font-medium">
                {pageCopy.thankYouYourBrochureIs}
              </p>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
