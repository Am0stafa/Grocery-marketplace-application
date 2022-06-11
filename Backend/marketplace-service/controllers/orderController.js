const axios = require("axios");
const { ORDER_SERVICE_URL, PAYMENT_SERVICE_URL } = process.env;

// private

// TODO: from frontend, send the price
const calculatePrice = (products) => {
  let finalPrice = 0;

  products.forEach((product) => {
    finalPrice += product.price * product.quantity;
  });

  return finalPrice;
};

exports.getStatus = async (req, res) => {
  try {
    const orderID = req.params.id;
    const orderStatusResponse = await axios.get(
      `${ORDER_SERVICE_URL}/${orderID}/status`
    );
    const orderStatus = orderStatusResponse.data.orderStatus.orderStatus;
    res.status(200).json({
      orderStatus,
    });
  } catch (error) {
    res.status(400).json({ status: "Bad request." });
    console.log(error);
  }
};

exports.submitOrder = async (req, res) => {
  try {
    const { items, email, shippingAddress, cardNumber } = req.body;

    const totalPrice = calculatePrice(items);

    // TODO: call the payment service
    const paymentStatus = true; //! currently always true, waiting to call payment service.
    const paymentResponse = await axios.post(`${PAYMENT_SERVICE_URL}/`, {
      amount: totalPrice,
    });
    if (paymentStatus) {
      const createdOrder = await axios.post(`${ORDER_SERVICE_URL}/`, {
        orderStatus: "CREATED",
        items: items,
      }
      
      );
      res.status(200).json({});
    } else {
      res.redirect(303, `${ORDER_SERVICE_URL}/`);
    }
  } catch (error) {
    res.status(400).json({ status: "Bad request." });
    console.log(error);
  }
};
