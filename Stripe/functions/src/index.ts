import functions = require("firebase-functions");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require("stripe")("YOUR_SECRET_KEY");


// eslint-disable-next-line max-len, @typescript-eslint/no-explicit-any
exports.createPaymentIntent = functions.https.onRequest(async (req:any, res:any) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Amount in cents
      currency: "usd",
    });
    res.status(200).send({clientSecret: paymentIntent.client_secret});
  } catch (error) {
    res.status(500).send(error);
  }
});


