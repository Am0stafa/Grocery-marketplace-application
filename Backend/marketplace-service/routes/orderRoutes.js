const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

router.route("/").post(orderController.submitOrder);
router.route("/:id").get(orderController.getStatus);

module.exports = router;
