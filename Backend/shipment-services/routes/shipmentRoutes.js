const express = require("express");

const shipmentController = require("../controllers/shipmentController");

const router = express.Router();

router
  .route("/")
  .get(shipmentController.getAll)
  .post(shipmentController.createShipment);
  // TODO: crate get by id

router
  .route("/:id")
  .get(shipmentController.getById)
router.route("/:id/delete").delete(shipmentController.deleteShipment);
// TODO: must be 
module.exports = router;