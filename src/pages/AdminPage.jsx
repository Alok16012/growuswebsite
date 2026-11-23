import { useEffect, useState } from "react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { LeadsInbox } from "../admin/LeadsInbox";
import { GlobalEditor } from "../admin/editors/GlobalEditor";
import { NavbarEditor } from "../admin/editors/NavbarEditor";
import { HeroEditor } from "../admin/editors/home/HeroEditor";
import { ServicesEditor } from "../admin/editors/home/ServicesEditor";
import { TestimonialsEditor } from "../admin/editors/home/TestimonialsEditor";
import { WhyChooseUsEditor } from "../admin/editors/home/WhyChooseUsEditor";
import { IndustriesEditor } from "../admin/editors/home/IndustriesEditor";
import { PanIndiaEditor } from "../admin/editors/home/PanIndiaEditor";
import { ClientsEditor } from "../admin/editors/home/ClientsEditor";
import { ServicePagesEditor } from "../admin/editors/ServicePagesEditor";
import { AboutHeroEditor } from "../admin/editors/about/AboutHeroEditor";
import { AboutStoryEditor } from "../admin/editors/about/AboutStoryEditor";
import { AboutDnaEditor } from "../admin/editors/about/AboutDnaEditor";
import { EcosystemEditor } from "../admin/editors/about/EcosystemEditor";
import { TeamEditor } from "../admin/editors/about/TeamEditor";
import { CultureEditor } from "../admin/editors/CultureEditor";
import { GalleryEditor } from "../admin/editors/GalleryEditor";
import { CareersEditor } from "../admin/editors/CareersEditor";
import { BrochuresEditor } from "../admin/editors/BrochuresEditor";
import { ContactHeroEditor } from "../admin/editors/contact/ContactHeroEditor";
import { ContactInfoEditor } from "../admin/editors/contact/ContactInfoEditor";
import { ContactFormEditor } from "../admin/editors/contact/ContactFormEditor";
import { JoinProgramFormEditor } from "../admin/editors/about/JoinProgramFormEditor";
import { FooterEditor } from "../admin/editors/FooterEditor";
import { PageCopyEditor } from "../admin/editors/PageCopyEditor";
import { CollectionControls } from "../admin/editors/CollectionControls";
import { ADMIN_TABS } from "../admin/tabs";
import { AdminLogin, isAdminUser } from "../admin/AdminLogin";
import { supabase } from "../lib/supabase";

export const AdminPage = ({ setCurrentPage }) => {
  const { config: publishedConfig, defaultConfig, saveConfig } = useSiteConfig();
  const [draft, setDraft] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const config = draft ?? publishedConfig;
  const [d, setD] = useState("global");
  const [p, setP] = useState(true);
  const [b, setB] = useState(false);
  const [saveStatus, setSaveStatus] = useState("idle");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setAdmin(isAdminUser(session?.user) ? session.user : null);
        setCheckingSession(false);
      },
    );
    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setSaveStatus("logout-error");
      return;
    }
    setDraft(null);
    setSaveStatus("idle");
  };

  const updateConfig = (path, value) => {
    setSaveStatus((status) => status === "saving" ? status : "idle");
    setDraft((previous) => {
      const next = structuredClone(previous ?? publishedConfig);
      const keys = path.split(".");
      let target = next;
      for (const key of keys.slice(0, -1)) {
        target[key] ??= {};
        target = target[key];
      }
      target[keys.at(-1)] = value;
      return next;
    });
  };

  const persist = async (reset = false) => {
    setSaveStatus("saving");
    try {
      await saveConfig(reset ? structuredClone(defaultConfig) : draft);
      setDraft((current) => reset || current === draft ? null : current);
      setB(false);
      setSaveStatus(reset ? "reset" : "saved");
    } catch {
      setSaveStatus("error");
    }
  };
  const saving = saveStatus === "saving";
  const saveMessage = {
    saving: "Saving…",
    saved: "Changes saved.",
    reset: "Content reset.",
    error: "Could not save changes. Please try again.",
    "logout-error": "Could not sign out. Please try again.",
  }[saveStatus];
  const RComponent = () => {
    switch (d) {
      case "leads":
        return <LeadsInbox />;
      case "global":
        return <GlobalEditor config={config} updateConfig={updateConfig} />;
      case "navbar":
        return <NavbarEditor config={config} updateConfig={updateConfig} />;
      case "home-hero":
        return <HeroEditor config={config} updateConfig={updateConfig} />;
      case "home-services":
        return <ServicesEditor config={config} updateConfig={updateConfig} />;
      case "home-testimonials":
        return (
          <TestimonialsEditor config={config} updateConfig={updateConfig} />
        );
      case "home-why":
        return (
          <WhyChooseUsEditor config={config} updateConfig={updateConfig} />
        );
      case "home-industries":
        return <IndustriesEditor config={config} updateConfig={updateConfig} />;
      case "home-panindia":
        return <PanIndiaEditor config={config} updateConfig={updateConfig} />;
      case "home-clients":
        return <ClientsEditor config={config} updateConfig={updateConfig} />;
      case "services":
        return (
          <ServicePagesEditor config={config} updateConfig={updateConfig} />
        );
      case "about-hero":
        return <AboutHeroEditor config={config} updateConfig={updateConfig} />;
      case "about-story":
        return <AboutStoryEditor config={config} updateConfig={updateConfig} />;
      case "about-dna":
        return <AboutDnaEditor config={config} updateConfig={updateConfig} />;
      case "about-ecosystem":
        return <EcosystemEditor config={config} updateConfig={updateConfig} />;
      case "about-team":
        return <TeamEditor config={config} updateConfig={updateConfig} />;
      case "culture":
        return <CultureEditor config={config} updateConfig={updateConfig} />;
      case "gallery":
        return <GalleryEditor config={config} updateConfig={updateConfig} />;
      case "careers":
        return <CareersEditor config={config} updateConfig={updateConfig} />;
      case "brochures":
        return <BrochuresEditor config={config} updateConfig={updateConfig} />;
      case "contact-hero":
        return (
          <ContactHeroEditor config={config} updateConfig={updateConfig} />
        );
      case "contact-info":
        return (
          <ContactInfoEditor config={config} updateConfig={updateConfig} />
        );
      case "contact-form":
        return (
          <ContactFormEditor config={config} updateConfig={updateConfig} />
        );
      case "join-program-form":
        return (
          <JoinProgramFormEditor config={config} updateConfig={updateConfig} />
        );
      case "footer":
        return <FooterEditor config={config} updateConfig={updateConfig} />;
      default:
        return null;
    }
  };
  if (checkingSession) {
    return <p className="p-6" role="status">Checking admin session…</p>;
  }
  if (admin) {
    return (
      <div className="min-h-screen bg-[#0A0F1A] flex">
        <aside
          className={`${p ? "w-64" : "w-0 overflow-hidden"} transition-all duration-300 bg-[#0D1321] border-r border-white/5 flex-shrink-0 flex flex-col`}
        >
          <div className="p-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg">
                G
              </div>
              <div>
                <h1 className="text-white font-bold text-sm">GROWUS Admin</h1>
                <p className="text-white/30 text-[10px] uppercase tracking-widest">
                  Content Manager
                </p>
              </div>
            </div>
          </div>
          <nav className="flex-1 py-3 overflow-y-auto">
            {ADMIN_TABS.map((A) => (
              <button
                key={A.id}
                onClick={() => setD(A.id)}
                className={`w-full text-left px-5 py-3 text-sm font-medium transition-all flex items-center gap-3 ${d === A.id ? "bg-blue-600/20 text-blue-400 border-r-2 border-blue-500" : "text-white/50 hover:text-white hover:bg-white/5"}`}
              >
                <span className="text-lg">{A.icon}</span>
                <span className="text-xs uppercase tracking-wider">
                  {A.label.split(" ").slice(1).join(" ")}
                </span>
              </button>
            ))}
          </nav>
          <div className="p-4 border-t border-white/5 space-y-2">
            <button
              onClick={signOut} disabled={saving}
              className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-400 text-[10px] font-black py-2.5 rounded-xl transition-all uppercase tracking-widest flex items-center justify-center gap-2 border border-red-500/20"
            >
              🔒 Logout Session
            </button>
            <button
              onClick={() => setCurrentPage("home")}
              className="w-full bg-white/5 hover:bg-white/10 text-white/70 text-[10px] font-black py-2.5 rounded-xl transition-all uppercase tracking-widest flex items-center justify-center gap-2"
            >
              ← Back to Website
            </button>
          </div>
        </aside>
        <main className="flex-1 flex flex-col">
          <header className="bg-[#0D1321] border-b border-white/5 px-6 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setP(!p)}
                className="text-white/40 hover:text-white transition-colors"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div>
                <h2 className="text-white font-bold text-lg">
                  {ADMIN_TABS.find((A) => A.id === d)?.label}
                </h2>
                <p className="text-white/30 text-xs font-medium">
                  Logged in as {admin.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {!b && saveMessage && (
                <span role="status" className="text-white text-sm">
                  {saveMessage}
                </span>
              )}
              <button
                disabled={saving}
                onClick={() => setB(true)}
                className="bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold px-5 py-2.5 rounded-xl transition-all uppercase tracking-wider border border-red-500/20"
              >
                Reset All
              </button>
              <button
                onClick={() => persist()}
                disabled={!draft || saving}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all uppercase tracking-wider shadow-lg shadow-blue-600/20 disabled:opacity-50"
              >
                💾 Save Changes
              </button>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-6">
            <fieldset disabled={saving} className="min-w-0 max-w-2xl mx-auto">
              {RComponent()}
              <CollectionControls tab={d} config={config} updateConfig={updateConfig} />
              <PageCopyEditor tab={d} config={config} updateConfig={updateConfig} />
            </fieldset>
          </div>
        </main>
        {b && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="bg-[#0D1321] border border-white/10 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl">
              <h3 className="text-white font-bold text-xl mb-3">
                Reset All Content?
              </h3>
              <p className="text-white/50 text-sm mb-6 font-medium">
                This will reset ALL content, colors, and images back to the
                original defaults. This action cannot be undone.
              </p>
              {saveMessage && <p role="status" className="mb-4 text-white">{saveMessage}</p>}
              <div className="flex gap-3">
                <button
                  disabled={saving}
                  onClick={() => { setB(false); setSaveStatus("idle"); }}
                  className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl text-sm font-bold transition-all uppercase tracking-widest"
                >
                  Cancel
                </button>
                <button
                  disabled={saving}
                  onClick={() => persist(true)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-sm font-bold transition-all uppercase tracking-widest"
                >
                  Reset Everything
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  return <AdminLogin />;
};
