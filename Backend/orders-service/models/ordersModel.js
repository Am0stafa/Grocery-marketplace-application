const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    itemCount: {
        type: Number,
        required: true
    }
}, {  _id: false })

const orderSchema = new mongoose.Schema({
    orderStatus:{
        type: String,
        required: true, 
        default: "CREATED"
    },
    name:{
        type: String,
        required:[true,"A product must have a name"]
    },
    description:{
        type: String,
        required:[true,"A product must have a description"]
    },
    quantity:{
        type: Number,
        required:[true,"A product must have a quantity"]
    },
    price:{
        type: Number,
        required:[true,"A product must have a price"]
    }
}
);

//! add validators
const order = mongoose.model('orders' , orderSchema);

//? export model

module.exports = order;