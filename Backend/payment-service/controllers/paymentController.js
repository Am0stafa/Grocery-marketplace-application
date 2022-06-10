const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.createPayment = async (req, res) => {
  // faking a successful payment for now
  return res.status(200).send();

  // try {
  //   const session = await stripe.checkout.session.create({
  //     payment_method_types: ["card"],
  //     success_url: `http://localhost:3000/myorder`,
  //     cancel_url: `http://localhost:3000/`,

  //     client_reference_id: req.params.orderId,
  //     line_items: [
  //       {
  //         name: `${order._id}`,
  //         amount: 800,
  //         currency: "usd",
  //         quantity: `${totalCount}`,
  //       },
  //     ],
  //   });

  //   res.status(200).json({
  //     status: "success",
  //     session,
  //   });
  // } catch (error) {
  //   res.status(404).json({
  //     status: "failed",
  //     message: err.message,
  //   });
  // }
};
