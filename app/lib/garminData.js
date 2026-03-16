import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sbbtihasjwuakznfooso.supabase.com";
const supabaseKey = "sb_publishable_ci0sOb_ylP2w013opQKhnw_CwFyVlUp";

export const garminData = createClient(supabaseUrl, supabaseKey);
