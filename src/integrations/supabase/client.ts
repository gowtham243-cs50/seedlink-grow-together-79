// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xfcpertlvvlqsfbwtmkm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmY3BlcnRsdnZscXNmYnd0bWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NTkwMTEsImV4cCI6MjA2MDAzNTAxMX0.e_W0ytYVrrWqQaN9VIJ4_bKh9j8M7UFOrhIoyzoqJmE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);