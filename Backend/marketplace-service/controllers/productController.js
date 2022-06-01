const APIFeatures = require("../utils/apiFeatures");
const axios = require('axios')

const { INVENTORY_SERVICE_URL } = process.env;

exports.getAll = async (req, res) => {
  try {
    const inventoryProductsResponse = await axios.get(`${INVENTORY_SERVICE_URL}/products`)
    const products = inventoryProductsResponse.data.data.allProducts;

    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ status: "Bad request." });
  }
};
