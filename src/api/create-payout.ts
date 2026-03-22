import { getUser } from "../../lib/auth";
import { supabaseAdmin } from "../../lib/supabaseAdmin";
import { stripe } from "../../lib/stripe";

export default async function handler(req, res) {
  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  const { data } = await supabaseAdmin
    .from("users")
    .select("stripe_account_id")
    .eq("id", user.id)
    .single();

  const { data: tx } = await supabaseAdmin
    .from("transactions")
    .select("amount")
    .eq("user_id", user.id);

  const amount =
    tx?.reduce((sum, t) => sum + Number(t.amount), 0) || 0;

  const transfer = await stripe.transfers.create({
    amount: Math.floor(amount * 100),
    currency: "usd",
    destination: data.stripe_account_id,
  });

  await supabaseAdmin.from("transactions").insert({
    user_id: user.id,
    amount,
    status: "pending",
    stripe_id: transfer.id,
  });

  res.json({ success: true });
}
