import { buffer } from "micro";
import { stripe } from "../../../lib/stripe";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  const sig = req.headers["stripe-signature"];
  const buf = await buffer(req);

  const event = stripe.webhooks.constructEvent(
    buf,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET!
  );

  if (event.type === "transfer.created") {
    const transfer = event.data.object;

    await supabaseAdmin
      .from("transactions")
      .update({ status: "completed" })
      .eq("stripe_id", transfer.id);
  }

  res.json({ received: true });
}
