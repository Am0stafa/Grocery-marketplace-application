const express = require("express");

const shipmentController = require("../controllers/shipmentController");

const router = express.Router();

router
  .route("/")
  .get(shipmentController.getAll)
  .post(shipmentController.createShipment); // should be called automatically when an order is ready 

router.route("/:id/delete").delete(shipmentController.deleteShipment);
module.exports = router;