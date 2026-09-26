import Stripe from "stripe";
const stripe = new Stripe("sk_test_xxx");

// When a customer's BLIK mandate stops being usable, or null if it doesn't expire.
async function blikMandateExpiry(mandateId) {
  const mandate = await stripe.mandates.retrieve(mandateId);
  // TODO(api-dependabot): mandate.payment_method_details.blik.expires_after was removed in v22.7.0-alpha.4 and this code can no longer determine mandate expiry.
  const expiresAfter = mandate.payment_method_details.blik.expires_after;
  return expiresAfter ? new Date(expiresAfter * 1000) : null;
}
