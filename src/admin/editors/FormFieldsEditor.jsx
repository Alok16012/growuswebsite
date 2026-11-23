import { TextInput } from "../fields";

export const FormFieldsEditor = ({ fields, onUpdate }) => (
  <div>
    <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mt-8 mb-4">
      Form Fields
    </h4>
    {(fields || []).map((s, i) => (
      <div
        key={i}
        className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4"
      >
        <div className="flex justify-between mb-2">
          <h5 className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
            Field {i + 1}: {s.label}
          </h5>
          <div className="flex gap-3">
            {i > 0 && (
              <button
                onClick={() => {
                  const c = [...fields];
                  [c[i - 1], c[i]] = [c[i], c[i - 1]];
                  onUpdate(c);
                }}
                className="text-blue-400 hover:text-blue-300 text-[10px] font-bold uppercase tracking-widest"
              >
                Move Up
              </button>
            )}
            <button
              onClick={() => {
                const c = fields.filter((u, d) => d !== i);
                onUpdate(c);
              }}
              className="text-red-400 hover:text-red-300 text-[10px] font-bold uppercase tracking-widest"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Label"
            value={s.label}
            onChange={(c) => {
              const u = [...fields];
              u[i] = {
                ...u[i],
                label: c,
              };
              onUpdate(u);
            }}
          />
          <TextInput
            label="Name (Internal)"
            value={s.name}
            onChange={(c) => {
              const u = [...fields];
              u[i] = {
                ...u[i],
                name: c,
              };
              onUpdate(u);
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Placeholder"
            value={s.placeholder}
            onChange={(placeholder) => {
              const u = [...fields];
              u[i] = {
                ...u[i],
                placeholder,
              };
              onUpdate(u);
            }}
          />
          <div className="mb-3">
            <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold block mb-1.5">
              Type
            </label>
            <select
              value={s.type || "text"}
              onChange={(c) => {
                const u = [...fields];
                u[i] = {
                  ...u[i],
                  type: c.target.value,
                };
                onUpdate(u);
              }}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
            >
              <option value="text" className="bg-slate-900">
                Text
              </option>
              <option value="email" className="bg-slate-900">
                Email
              </option>
              <option value="tel" className="bg-slate-900">
                Phone
              </option>
              <option value="textarea" className="bg-slate-900">
                Textarea
              </option>
              <option value="select" className="bg-slate-900">
                Select/Dropdown
              </option>
            </select>
          </div>
        </div>
        {s.type === "select" && (
          <div className="mb-4">
            <label className="text-white/50 text-[10px] uppercase tracking-widest font-bold block mb-1.5">
              Options (comma separated)
            </label>
            <textarea
              value={(s.options || []).join(", ")}
              onChange={(c) => {
                const options = c.target.value
                  .split(",")
                  .map((m) => m.trim())
                  .filter(Boolean);
                const d = [...fields];
                d[i] = {
                  ...d[i],
                  options,
                };
                onUpdate(d);
              }}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none h-20"
              placeholder="Option 1, Option 2, Option 3"
            />
          </div>
        )}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={s.required}
            onChange={(c) => {
              const u = [...fields];
              u[i] = {
                ...u[i],
                required: c.target.checked,
              };
              onUpdate(u);
            }}
            id={`req-${s.name}-${i}`}
          />
          <label
            htmlFor={`req-${s.name}-${i}`}
            className="text-white/60 text-xs cursor-pointer"
          >
            Required Field
          </label>
        </div>
      </div>
    ))}
    <button
      onClick={() => {
        const s = [...(fields || [])];
        s.push({
          label: "New Field",
          name: `new_field_${Date.now()}`,
          placeholder: "Enter value",
          type: "text",
          required: false,
        });
        onUpdate(s);
      }}
      className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-colors uppercase tracking-widest text-xs mt-2"
    >
      + Add New Field
    </button>
  </div>
);
