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
    items: {
        type: [orderItemSchema],
        required: true
    }
}
);

const order = mongoose.model('orders' , orderSchema);

//? export model

module.exports = order;