import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

import { downloadLeads } from "./downloadLeads";

export const LeadsInbox = () => {
  const [n, setN] = useState([]);
  const [s, setS] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [exportError, setExportError] = useState(false);

  const exportLeads = async () => {
    setExporting(true);
    setExportError(false);
    try {
      await downloadLeads(n);
    } catch {
      setExportError(true);
    } finally {
      setExporting(false);
    }
  };
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", {
          ascending: false,
        });
      if (!error && data) {
        setN(data);
      }
      setS(false);
    })();
  }, []);
  const c = async (u) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) {
      return;
    }
    const { error } = await supabase.from("leads").delete().eq("id", u);
    if (error) {
      alert(`Error deleting lead: ${error.message}`);
    } else {
      setN(n.filter((m) => m.id !== u));
    }
  };
  if (s) {
    return (
      <div className="text-white/50 text-center py-10">Loading leads...</div>
    );
  }
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-white font-bold text-xl">Recent Leads</h2>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-white/60 text-sm font-medium bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            {n.length} total entries
          </span>
          <button
            type="button"
            onClick={exportLeads}
            disabled={n.length === 0 || exporting}
            className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {exporting ? "Preparing Excel…" : "Download Excel"}
          </button>
        </div>
      </div>
      {exportError && (
        <p role="alert" className="mb-4 text-sm text-red-300">
          The Excel download failed. Please try again.
        </p>
      )}
      {n.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center text-white/50">
          No leads found. When users submit forms, they will appear here.
        </div>
      ) : (
        <div className="space-y-4">
          {n.map((u) => (
            <div
              key={u.id}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-colors group relative"
            >
              <button
                onClick={() => c(u.id)}
                className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg border border-red-500/20"
                title="Delete Lead"
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
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 pr-10">
                <div>
                  <h3 className="text-white font-black text-lg mb-1">
                    {u.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                    <a
                      href={`mailto:${u.email}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      {u.email}
                    </a>
                    <span className="text-white/20">•</span>
                    <a
                      href={`tel:${u.phone}`}
                      className="text-emerald-400 hover:text-emerald-300"
                    >
                      {u.phone}
                    </a>
                    {u.company && (
                      <>
                        <span className="text-white/20">•</span>
                        <span className="text-white/60 text-xs px-2 py-0.5 bg-white/5 rounded block">
                          {u.company}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2 border border-white/10">
                    {u.source}
                  </span>
                  <p className="text-white/40 text-xs">
                    {new Date(u.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-black/20 p-4 rounded-xl border border-white/5">
                <div>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">
                    Service / Interest
                  </p>
                  <p className="text-white text-sm font-medium">
                    {u.service || "N/A"}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">
                    Details & Message
                  </p>
                  <p className="text-white/80 text-sm whitespace-pre-wrap leading-relaxed">
                    {u.message || "No message provided"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
