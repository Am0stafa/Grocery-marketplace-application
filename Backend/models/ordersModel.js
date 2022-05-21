const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderStatus:{
        type: String,
        required: true, 
        default: "CREATED"
    },
    items: [{
        itemId: mongoose.Types.ObjectId,
        itemCount: Number
    }]
    
}
);

const order = mongoose.model('orders' , orderSchema);

//? export model

module.exports = order;