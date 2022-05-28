const { findById } = require("../models/ordersModel");
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

exports.createOrder = async (req, res) => {
//won't take status, check that item exists and is in stock in the other service
  try {
    const newOrder = await orders.create(req.body);
    res.status(201).json({
      status: "Successfully created order.",
      data: { newOrder },
    });
  } catch (error) {
    res.status(400).json({
      status: "Bad request.",
      data: {},
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const updateOrder = await orders.findByIdAndUpdate(
      req.params.id,
      req.body,
      { runValidators: true }
    );

    res.status(200).json({
      status: "Successfully updated product.",
      data: { updateOrder },
    });
  } catch (error) {
    res.status(400).json({
      status: "Bad request",
      data: {},
    });
  }
};

exports.cancelOrder = async (req, res) => {
  // TODO: shouldn't take body, should update status to cancelled. If order is shipped it can't be cancelled.
  try {
    const cancelledOrder = await orders.findByIdAndUpdate(
      req.params.id,
      req.body,
      { runValidators: true }
    );
    res.status(200).json({
      status: "Successfully cancelled order",
      data: {
        cancelledOrder,
      },
    });
  } catch (error) {}
};

exports.getOrderStatus = async (req, res) => {
  try {
    const orderStatus = await orders.findById(req.params.id).select("orderStatus");
    res.status(200).json({
      orderStatus
    });
  } catch (error) {
    res.status(400).json({ status: "Bad request." });
  }
};
