import { createClient } from "@supabase/supabase-js";
import { supabaseUrl, supabaseAnonKey, supabaseKey } from "@/constant";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const supabaseAdmin = createClient(supabaseUrl, supabaseKey);

export const adminAuthClient = supabaseAdmin.auth.admin;
