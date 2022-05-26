const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
    orderID:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    shipmentStatus:{
        type:String,
        default:"CREATED",
    },
    address:{
        type:String,
        require:true
    }
    
});


const shipment = mongoose.model('shipments',shipmentSchema);

module.exports = shipment;