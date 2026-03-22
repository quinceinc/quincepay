import { supabaseAdmin } from "./supabaseAdmin";

export async function getUser(req: any) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) return null;

  const {
    data: { user },
  } = await supabaseAdmin.auth.getUser(token);

  return user || null;
}
