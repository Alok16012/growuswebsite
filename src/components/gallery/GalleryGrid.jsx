import { useState } from "react";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const GalleryGrid = () => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.gallery;
  const { gallery, global } = config;
  const [i, setI] = useState("events");
  const [u, setU] = useState(null);
  const m = i === "events" ? gallery.events : gallery.activities;
  return (
    <section
      className="site-section border-t border-black/5"
      style={{
        backgroundColor: global.design?.backgrounds?.sectionLight || "#ffffff",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="bg-slate-50 rounded-full p-2 inline-flex border border-black/5 shadow-inner">
            <button
              onClick={() => setI("events")}
              className={`px-4 py-3 sm:px-8 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-500 ${i === "events" ? "text-white shadow-xl scale-105" : "text-gray-500"}`}
              style={{
                backgroundColor:
                  i === "events"
                    ? global.design?.text?.subheading || global.primaryBlue
                    : "transparent",
                color:
                  i === "events"
                    ? global.design?.buttons?.primaryText || "#ffffff"
                    : "var(--growus-copy)",
              }}
            >
              {pageCopy.events}
            </button>
            <button
              onClick={() => setI("activities")}
              className={`px-4 py-3 sm:px-8 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-500 ${i === "activities" ? "text-white shadow-xl scale-105" : "text-gray-500"}`}
              style={{
                backgroundColor:
                  i === "activities"
                    ? global.design?.text?.subheading || global.primaryBlue
                    : "transparent",
                color:
                  i === "activities"
                    ? global.design?.buttons?.primaryText || "#ffffff"
                    : "var(--growus-copy)",
              }}
            >
              {pageCopy.activities}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {m.map((p, g) => (
            <div
              key={`${i}-${g}`}
              className="group relative h-[350px] rounded-3xl overflow-hidden cursor-pointer border border-black/5 transition-all duration-500 shadow-sm hover:shadow-2xl"
              style={{
                backgroundColor:
                  global.design?.backgrounds?.sectionDark || global.deepBlue,
              }}
              onClick={() => setU(p)}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-95 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h4
                  className="font-black text-sm uppercase tracking-tight leading-tight transition-colors"
                  style={{
                    color: "var(--growus-ink)",
                  }}
                >
                  {p.title}
                </h4>
              </div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 shadow-2xl border border-black/5">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{
                    color:
                      global.design?.text?.subheading || global.primaryBlue,
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      {u && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-8"
          onClick={() => setU(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/20"
            onClick={() => setU(null)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(p) => p.stopPropagation()}
          >
            <img
              src={u.img}
              alt={u.title}
              className="w-full max-h-[70vh] object-contain rounded-[24px] shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-black">{u.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
