const axios = require("axios");
const { ORDER_SERVICE_URL } = process.env;
exports.getStatus = async (req, res) => {
  try {
    orderID = req.params.id;
    const orderStatusResponse = await axios.get(
      `${ORDER_SERVICE_URL}/${orderID}/status`
    );
    orderStatus = orderStatusResponse.data.orderStatus.orderStatus ;
    res.status(200).json({
      orderStatus,
    });
  } catch (error) {
    res.status(400).json({ status: "Bad request." });
    console.log(error);
  }
};
