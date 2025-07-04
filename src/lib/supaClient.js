import { createClient } from "@supabase/supabase-js";
import { supabaseUrl, supabaseKey } from "@/constant";

export const supabase = createClient(supabaseUrl, supabaseKey);
