import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project.supabase.co' &&
  supabaseAnonKey !== 'your-anon-publishable-key-here'
);

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

/**
 * Submit message to Supabase contact_messages table
 * with graceful fallback simulation when keys are not yet provided.
 */
export async function sendContactMessage({ name, email, subject, message }) {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, subject, message }])
      .select();

    if (error) {
      console.error('Supabase contact error:', error);
      throw error;
    }
    return { success: true, data };
  } else {
    // Graceful offline / demo simulation
    console.info('Supabase credentials not configured in .env. Message recorded locally:', {
      name, email, subject, message, timestamp: new Date().toISOString()
    });
    // Artificial slight delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, isDemo: true };
  }
}

