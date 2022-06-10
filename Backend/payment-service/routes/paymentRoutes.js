const express = require("express");
const paymentController = require("../controllers/paymentController");

const router = express.Router();

router.route("/").post(paymentController.createPayment);

module.exports = router;
