# Marketplace
- Get all orders -> calls **`inventory service`** DONE
- Get order status -> calls **`shipment service`**
- Submit order -> calls **`orders service`**

# Orders
- `POST /orders` -> create payment **`through payment service`**

# Payment
- `POST /payment`

# Products/Inventory
- `GET /products`

# Shipment
- `GET /shipments/:orderId`

# Notifications
