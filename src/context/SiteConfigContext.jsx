import { createContext, useContext, useEffect, useState } from "react";
import { defaultConfig, legacyGlobalColors } from "../config/defaultConfig";
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
          setConfig(mergePublishedConfig(data.config_data));
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
              setConfig(mergePublishedConfig(p.new.config_data));
            } catch (error) {
              console.warn("Failed to merge remote config:", error);
            }
          }
        },
      )
      .subscribe();
    return () => supabase.removeChannel(m);
  }, []);
  const saveConfig = async (nextConfig) => {
    const { data, error } = await supabase
      .from("site_settings")
      .upsert({ id: 1, config_data: nextConfig })
      .select("id")
      .single();
    if (error || !data) {
      throw error || new Error("The settings update was not confirmed.");
    }
    setConfig(nextConfig);
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
        saveConfig,
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

function matchesLegacyColors(value, legacy) {
  if (value === legacy) return true;
  if (!value || typeof value !== "object" || typeof legacy !== "object") return false;
  const keys = Object.keys(legacy);
  return Object.keys(value).length === keys.length &&
    keys.every((key) => matchesLegacyColors(value[key], legacy[key]));
}

export function mergePublishedConfig(savedConfig) {
  const config = matchesLegacyColors(savedConfig.global, legacyGlobalColors)
    ? { ...savedConfig, global: defaultConfig.global }
    : savedConfig;
  return deepMerge(structuredClone(defaultConfig), config);
}
