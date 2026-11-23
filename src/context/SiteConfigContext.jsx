import { createContext, useContext, useEffect, useState } from "react";
import { defaultConfig } from "../config/defaultConfig";
import { supabase } from "../lib/supabase";

export const SiteConfigContext = createContext();

export const SiteConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(defaultConfig);
  const [i, setI] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase
          .from("site_settings")
          .select("config_data")
          .eq("id", 1)
          .single();
        if (data && data.config_data) {
          setConfig(
            deepMerge(
              JSON.parse(JSON.stringify(defaultConfig)),
              data.config_data,
            ),
          );
        }
      } catch (error) {
        console.error("Error fetching site config from Supabase:", error);
      } finally {
        setI(false);
      }
    })();
  }, []);
  useEffect(() => {
    const m = supabase
      .channel("site_settings_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "site_settings",
        },
        (p) => {
          if (p.new && p.new.config_data) {
            try {
              setConfig(
                deepMerge(
                  JSON.parse(JSON.stringify(defaultConfig)),
                  p.new.config_data,
                ),
              );
            } catch (error) {
              console.warn("Failed to merge remote config:", error);
            }
          }
        },
      )
      .subscribe();
    return () => supabase.removeChannel(m);
  }, []);
  const updateConfig = (m, p) => {
    setConfig((g) => {
      const b = JSON.parse(JSON.stringify(g));
      const x = m.split(".");
      let v = b;
      for (let j = 0; j < x.length - 1; j++) {
        if (v[x[j]] === undefined) {
          v[x[j]] = {};
        }
        v = v[x[j]];
      }
      v[x[x.length - 1]] = p;
      supabase
        .from("site_settings")
        .upsert({
          id: 1,
          config_data: b,
        })
        .then(({ error }) => {
          if (error) {
            console.error("Error saving config to Supabase:", error);
          }
        });
      return b;
    });
  };
  const resetConfig = () => {
    const m = JSON.parse(JSON.stringify(defaultConfig));
    setConfig(m);
    supabase
      .from("site_settings")
      .upsert({
        id: 1,
        config_data: m,
      })
      .then(({ error }) => {
        if (error) {
          console.error("Error resetting config to Supabase:", error);
        }
      });
  };
  if (i) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0a3663",
          color: "white",
          fontSize: "1.5rem",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Loading...
      </div>
    );
  }
  return (
    <SiteConfigContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        defaultConfig: defaultConfig,
      }}
    >
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = () => {
  const n = useContext(SiteConfigContext);
  if (!n) {
    throw new Error("useSiteConfig must be used within SiteConfigProvider");
  }
  return n;
};

export function deepMerge(n, e) {
  const s = {
    ...n,
  };
  for (const i of Object.keys(e)) {
    if (
      e[i] &&
      typeof e[i] === "object" &&
      !Array.isArray(e[i]) &&
      n[i] &&
      typeof n[i] === "object" &&
      !Array.isArray(n[i])
    ) {
      s[i] = deepMerge(n[i], e[i]);
    } else {
      s[i] = e[i];
    }
  }
  return s;
}
