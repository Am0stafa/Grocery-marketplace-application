const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

router
  .route("/")
  .get(orderController.getAll)
  .post(orderController.createOrder);

router.route("/:id").get(orderController.getOrder).patch(orderController.updateOrder);

router.route("/:id/cancel", orderController.cancelOrder);
router.route("/:id/status").get(orderController.getOrderStatus);


router.get('/checkout-session/:orderId', orderController.checkoutSession)


module.exports = router;
