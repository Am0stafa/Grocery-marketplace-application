const { findById } = require("../models/ordersModel");
const orders = require("../models/ordersModel");
const APIFeatures = require("../utils/apiFeatures");
const Email = require("../utils/email")
exports.getAll = async (req, res) => {
  try {
    const features = new APIFeatures(orders.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const allOrders = await features.query;

    res.status(200).json({
      status: "success",
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

exports.provideEmailAndName = async (req, res) => {
try {
  const { email, name } = req.body;
        // TODO: will we implement the frontend to provide the path
  await new Email(email,name, '/').sendWelcome();

  res.status(200).json({ status: 'success' }); 
  
  
}  catch (error) {
  res.status(404).json({
    status: "failed",
    message: err.message,
  });
}

}


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

  try {
  
    const cancelledOrder = await orders.findById(req.params.id);
    
    if (!cancelledOrder) throw new Error('no order with this id')
    
    
    cancelledOrder.orderStatus = "cancelled";
    
    await orders.save();
    
    res.status(200).json({
      status: "Successfully cancelled order",
      data: {
        cancelledOrder,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
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
