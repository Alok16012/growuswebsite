import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://rfpcfjfkhvwbfikiakfv.supabase.co";

export const SUPABASE_KEY = "sb_publishable_0C9_K-4KgFOHjc6luAAXBg_Kv3LWLyW";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
