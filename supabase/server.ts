// This server helper used next/headers which breaks in environments without App Router server context.
// Replace usage sites with the client helper or migrate to per-route server handlers.
export const createClient = async () => {
  throw new Error(
    "Server-side Supabase helper is disabled in this environment. Use supabase/client in client components or rewrite the server action to pass cookies explicitly.",
  );
};
