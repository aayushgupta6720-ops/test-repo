import Stripe from "stripe";
const stripe = new Stripe("sk_test_xxx");

async function charge() {
  await stripe.paymentIntents.create({ amount: 1000, currency: "usd" });
}
