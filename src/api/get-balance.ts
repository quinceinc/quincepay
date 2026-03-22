import { getUser } from "../../lib/auth";
import { supabaseAdmin } from "../../lib/supabaseAdmin";

export default async function handler(req, res) {
  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  const { data } = await supabaseAdmin
    .from("transactions")
    .select("amount")
    .eq("user_id", user.id);

  const balance =
    data?.reduce((sum, t) => sum + Number(t.amount), 0) || 0;

  res.json({ balance });
}
