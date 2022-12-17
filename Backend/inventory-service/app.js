//! security routes middlewares
const express = require("express");
const productsRoute = require("./routes/productsRoutes");
const app = express();
//! 1)security

//! 2) middlewares
//? body paser, for reading data from the body
app.use(express.json());
//? to pass data coming from URL encoded form
app.use(express.urlencoded({ extended: true }));

//! 3) routes
app.use("/api/v1/products", productsRoute);

module.exports = app;
