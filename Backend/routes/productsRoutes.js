const express = require('express');
const productController = require('../controllers/productController')

const router = express.Router();


router
    .route('/')
    .get(productController.getAll)
    .post(productController.createProduct)
    .delete(productController.deleteProductAll)
    
router
    .route('/:id')
    .get(productController.getProduct)
    .delete(productController.deleteProduct)
    .patch(productController.updateProduct)








module.exports = router;