//! security routes middlewares
const express = require('express');
const shipmentsRoute = require('./routes/shipmentRoutes');
const app = express();
//! 1)security


//! 2) middlewares
//? body paser, for reading data from the body
app.use(express.json());
//? to pass data coming from URL encoded form
app.use(express.urlencoded({extended: true}));

//! 3) routes
// app.use("/api/v1/shipments", shipmentsRoute);

module.exports = app;