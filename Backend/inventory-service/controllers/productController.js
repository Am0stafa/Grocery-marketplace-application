const products = require("../models/productsModel");
const APIFeatures = require("../utils/apiFeatures");
const csvtojson = require("csvtojson");
//!=================ADD FULL PATH HERE====================
const csvPath = "C:/Users/hassan/Grocery-marketplace-application/Backend/products-service/Inventory/products.csv";
//!=======================================================
async function insertProductsFromCSV(path) {
  try {
    const objectList = await csvtojson().fromFile(path);
    objectList.forEach((item) => products.create(item));
  } catch (error) {
    console.log(error);
  }
}

exports.getAll = async (req, res) => {
  try {
    const features = new APIFeatures(products.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const allProducts = await features.query;

    res.status(200).json({
      status: "sucess",
      data: {
        allProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await products.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        newProduct,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.deleteProductAll = async (req, res) => {
  try {
    await products.deleteMany();

    res.status(200).json({
      status: "success",
      data: "data deleted successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await products.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await products.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: "data deleted successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const newData = await products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: newData,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.fillInventory = async (req, res) => {
  try {
    await insertProductsFromCSV(csvPath);
    res.status(201).json({
        status:"Inventory updated."
    });
  } catch (error) {
      console.log(error);
      res.status(400).json({
          status:"Bad request"
      });
  }
};
