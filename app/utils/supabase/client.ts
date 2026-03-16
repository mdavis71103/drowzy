import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and key are required.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

async function testSupabaseConnection() {
  try {
    // Attempt a simple query
    const { data, error } = await supabase
      .from("GarminSleepData")
      .select("*")
      .limit(1);

    if (error) {
      throw new Error(`Database query failed: ${error.message}`);
    }

    console.log("Supabase connection successful! Data returned:", data);
    return true;
  } catch (error) {
    console.error("Failed to connect to Supabase:", error.message);
    return false;
  }
}

testSupabaseConnection();
