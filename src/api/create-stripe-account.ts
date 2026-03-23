import { stripe } from "../../lib/stripe";
import { supabaseAdmin } from "../../lib/supabaseAdmin";

export default async function handler(req, res) {
  const { userId, email } = JSON.parse(req.body);

  const account = await stripe.accounts.create({
    type: "express",
    email,
  });

  await supabaseAdmin
    .from("users")
    .update({ stripe_account_id: account.id })
    .eq("id", userId);

  res.json({ accountId: account.id });
}
