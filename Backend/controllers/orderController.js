const orders = require("../models/ordersModel");
const APIFeatures = require("../utils/apiFeatures");

exports.getAll = async (req, res) => {
  try {
    const features = new APIFeatures(orders.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const allOrders = await features.query;

    res.status(200).json({
      status: "sucess",
      data: {
        allOrders,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};
