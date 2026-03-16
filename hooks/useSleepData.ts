import { useState, useEffect } from "react";
import { supabase } from "@/app/utils/supabase/client";
import { SleepSession } from "@/types/sleep";

export function useSleepData() {
  const [sleepData, setSleepData] = useState<SleepSession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSleepData() {
      const { data, error } = await supabase.from("GarminSleepData").select();

      if (!error) {
        setSleepData(data);
      }

      setLoading(false);
    }

    fetchSleepData();
  }, []);

  return { sleepData, loading };
}
