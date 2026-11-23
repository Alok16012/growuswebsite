import { useState } from "react";
import { supabase } from "../lib/supabase";

export const ColorInput = ({ label, value, onChange }) => (
  <div className="flex items-center gap-3 mb-3">
    <input
      type="color"
      value={value || "#000000"}
      onChange={(i) => onChange(i.target.value)}
      className="w-10 h-10 rounded-lg border border-white/10 cursor-pointer bg-transparent p-0.5"
    />
    <div className="flex-1">
      <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold block mb-0.5">
        {label}
      </label>
      <input
        type="text"
        value={value || ""}
        onChange={(i) => onChange(i.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm font-mono"
      />
    </div>
  </div>
);

export const TextInput = ({ label, value, onChange, multiline = false }) => (
  <div className="mb-3">
    <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold block mb-1.5">
      {label}
    </label>
    {multiline ? (
      <textarea
        value={value || ""}
        onChange={(c) => onChange(c.target.value)}
        rows={3}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm resize-none focus:outline-none focus:border-blue-500/50 transition-colors"
      />
    ) : (
      <input
        type="text"
        value={value || ""}
        onChange={(c) => onChange(c.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
      />
    )}
  </div>
);

export const ImageUrlInput = ({ label, value, onChange }) => (
  <div className="mb-3">
    <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold block mb-1.5">
      {label}
    </label>
    <input
      type="text"
      value={value || ""}
      onChange={(i) => onChange(i.target.value)}
      placeholder="https://..."
      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors font-mono"
    />
    {value && (
      <img
        src={value}
        alt="Preview"
        className="mt-2 w-full h-32 object-contain bg-white/5 rounded-lg border border-white/10 p-2"
      />
    )}
  </div>
);

export const ImageUpload = ({
  label,
  value,
  onChange,
  bucketName = "images",
  accept = "image/*",
}) => {
  const [u, setU] = useState(false);
  const [m, setM] = useState(null);
  const g = async (b) => {
    try {
      setU(true);
      setM(null);
      const x = b.target.files[0];
      if (!x) {
        return;
      }
      const v = x.name.split(".").pop();
      const S = `${`${Math.random()}.${v}`}`;
      let { error } = await supabase.storage.from(bucketName).upload(S, x);
      if (error) {
        throw error;
      }
      const { data } = supabase.storage.from(bucketName).getPublicUrl(S);
      onChange(data.publicUrl);
    } catch (error) {
      setM(error.message);
    } finally {
      setU(false);
    }
  };
  return (
    <div className="mb-3">
      <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold block mb-1.5">
        {label}
      </label>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={value || ""}
          onChange={(b) => onChange(b.target.value)}
          placeholder="https://..."
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors font-mono"
        />
        <div className="relative">
          <input
            type="file"
            onChange={g}
            disabled={u}
            accept={accept}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />
          <button
            type="button"
            disabled={u}
            className="h-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors"
          >
            {u ? "..." : "Upload"}
          </button>
        </div>
      </div>
      {m && <p className="text-red-400 text-xs mt-1">{m}</p>}
      {value && (
        <img
          src={value}
          alt="Preview"
          className="mt-2 w-full h-32 object-contain bg-white/5 rounded-lg border border-white/10 p-2"
        />
      )}
    </div>
  );
};

export const CollapsibleSection = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [i, setI] = useState(defaultOpen);
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl mb-4 overflow-hidden">
      <button
        onClick={() => setI(!i)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
      >
        <h3 className="text-white font-bold text-sm uppercase tracking-wider">
          {title}
        </h3>
        <svg
          className={`w-5 h-5 text-white/40 transition-transform ${i ? "rotate-180" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {i && (
        <div className="px-6 pb-6 border-t border-white/5 pt-4">{children}</div>
      )}
    </div>
  );
};

export const FieldGroup = ({ title, children }) => (
  <div className="mb-8 last:mb-0">
    <h4 className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-black mb-4 flex items-center gap-3">
      <span className="h-px bg-white/10 flex-grow" />
      {title}
      <span className="h-px bg-white/10 flex-grow" />
    </h4>
    <div className="space-y-3">{children}</div>
  </div>
);
