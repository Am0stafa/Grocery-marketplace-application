const express = require("express");

const shipmentController = require("../controllers/shipmentController");

const router = express.Router();

router
  .route("/")
  .get(shipmentController.getAll)
  .post(shipmentController.createShipment)
  .delete(shipmentController.deleteShipment); // should be called automatically when an order is ready

module.exports = router;