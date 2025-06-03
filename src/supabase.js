import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lgjishgylxoltopzcoev.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnamlzaGd5bHhvbHRvcHpjb2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2OTQ3MTYsImV4cCI6MjA2NDI3MDcxNn0.uv-mJ6K4pwkh-zOO5DcvyRir34rjDr09jD8ZpATJCUo";
export const supabase = createClient(supabaseUrl, supabaseKey);
