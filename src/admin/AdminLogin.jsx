import { useState } from "react";

export const AdminLogin = ({ onLogin }) => {
  const [e, setE] = useState("");
  const [i, setI] = useState("");
  const [u, setU] = useState("");
  const m = (p) => {
    p.preventDefault();
    if (e === "growusdata@gmail.com" && i === "admin123") {
      onLogin();
    } else {
      setU("Invalid credentials. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-[#0A0F1A] flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-blue-600 rounded-[30px] flex items-center justify-center text-white font-black text-4xl mx-auto mb-6 shadow-2xl shadow-blue-600/20">
            G
          </div>
          <h1 className="text-white text-3xl font-black mb-2">GROWUS ADMIN</h1>
          <p className="text-white/40 text-sm tracking-widest uppercase font-bold">
            Content Management System
          </p>
        </div>
        <form
          onSubmit={m}
          className="bg-[#0D1321] border border-white/10 rounded-3xl p-10 shadow-2xl"
        >
          <div className="mb-6">
            <label className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-black block mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={e}
              onChange={(p) => setE(p.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-all font-medium"
              placeholder="admin@growus.com"
            />
          </div>
          <div className="mb-8">
            <label className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-black block mb-2">
              Password
            </label>
            <input
              type="password"
              value={i}
              onChange={(p) => setI(p.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-all font-medium"
              placeholder="••••••••"
            />
          </div>
          {u && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold p-4 rounded-xl mb-6 text-center animate-shake">
              {u}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl transition-all uppercase tracking-widest shadow-xl shadow-blue-600/20 active:scale-95"
          >
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};
