const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderStatus:{
        type: String,
        required: true, 
        default: "CREATED"
    },
    name:{
        type: [String],
        required: true
    },
    quantity:{
        type: [Number],
        required: true
    }
    
}
);

const order = mongoose.model('orders' , orderSchema);

//? export model

module.exports = order;