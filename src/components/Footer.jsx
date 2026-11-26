import { useSiteConfig } from "../context/SiteConfigContext";
import { Logo } from "./Logo";
import { readFooterLink } from "../config/footerLinks";

export const Footer = ({ setCurrentPage }) => {
  const { config } = useSiteConfig();
  const pageCopy = config.pageCopy.footer;
  const { footer, global } = config;
  return (
    <footer
      className="growus-footer site-section border-t border-white/10"
      style={{
        backgroundColor:
          global.design?.backgrounds?.sectionDark || global.deepBlue,
      }}
    >
      <div className="site-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="mb-6">
            <Logo size="md" />
          </div>
          <p
            className="text-sm mb-6 font-medium leading-relaxed"
            style={{
              color: global.design?.text?.paragraph || "#94a3b8",
            }}
          >
            {footer.description}
          </p>
          <div className="hidden" aria-hidden="true">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg group"
              style={{
                "--hover-bg": global.primaryBlue,
              }}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4
            className="font-black mb-6 uppercase tracking-wide text-xs"
            style={{
              color: global.design?.text?.subheading || global.primaryBlue,
            }}
          >
            {pageCopy.quickLinks}
          </h4>
          <ul className="space-y-3">
            {footer.quickLinks.map(readFooterLink).map(({ label, page }, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className="hover:text-white text-sm font-medium transition-colors duration-300 flex items-center gap-2 group"
                  style={{
                    color: global.design?.text?.paragraph || "#94a3b8",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      backgroundColor:
                        global.design?.text?.subheading || global.primaryBlue,
                    }}
                  />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4
            className="font-black mb-6 uppercase tracking-wide text-xs"
            style={{
              color: global.design?.text?.subheading || global.primaryBlue,
            }}
          >
            {pageCopy.ourServices}
          </h4>
          <ul className="space-y-3">
            {footer.servicesList.map((i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setCurrentPage("services")}
                  className="hover:text-white text-sm font-medium transition-colors duration-300 flex items-center gap-2 group"
                  style={{
                    color: global.design?.text?.paragraph || "#94a3b8",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      backgroundColor:
                        global.design?.text?.subheading || global.primaryBlue,
                    }}
                  />
                  {i}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4
            className="font-black mb-6 uppercase tracking-wide text-xs"
            style={{
              color: global.design?.text?.subheading || global.primaryBlue,
            }}
          >
            {pageCopy.contactInfo}
          </h4>
          <ul className="space-y-4">
            <li
              className="flex items-center gap-4 text-sm font-medium group"
              style={{
                color: global.design?.text?.paragraph || "#94a3b8",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors"
                style={{
                  color: global.design?.icons?.color || global.primaryBlue,
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <a href={`tel:${footer.phone.replace(/\s/g, "")}`}>{footer.phone}</a>
            </li>
            <li
              className="flex items-center gap-4 text-sm font-medium group"
              style={{
                color: global.design?.text?.paragraph || "#94a3b8",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors"
                style={{
                  color: global.design?.icons?.color || global.primaryBlue,
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <a href={`mailto:${footer.email}`}>{footer.email}</a>
            </li>
            <li
              className="flex items-start gap-4 text-sm font-medium group"
              style={{
                color: global.design?.text?.paragraph || "#94a3b8",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors mt-0.5"
                style={{
                  color: global.design?.icons?.color || global.primaryBlue,
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <span>{footer.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-content mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p className="text-slate-300 text-xs font-medium uppercase tracking-widest">
            {footer.copyright}
          </p>
          <span className="hidden md:block text-gray-700">|</span>
          <p className="text-slate-300 text-xs font-medium uppercase tracking-widest">
            Developed by{" "}
            <a
              href="https://blinks-ai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              style={{
                color: global.design?.text?.subheading || global.primaryBlue,
              }}
            >
              Blinks AI
            </a>
          </p>
        </div>
        <div className="text-xs text-gray-400 font-black uppercase tracking-widest">
          <button
            type="button"
            onClick={() => setCurrentPage("contact")}
            className="hover:text-primary-blue transition-colors"
          >
            Privacy & terms: contact us
          </button>
        </div>
      </div>
    </footer>
  );
};
