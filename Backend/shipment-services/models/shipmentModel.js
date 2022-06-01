const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
    orderID:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    shipmentStatus:{
        type:String,
        default:"CREATED",
        required: true
    },
    address:{
        type:String,
        required:true
    }
});


const shipment = mongoose.model('shipments',shipmentSchema);

module.exports = shipment;