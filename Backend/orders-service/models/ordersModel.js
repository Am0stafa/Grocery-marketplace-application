const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Types.ObjectId,
        ref:'products',
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
});

orderSchema.pre(/^find/, function(next){
    this.populate('items')

    next();
})

//! add validators
const order = mongoose.model('orders' , orderSchema);


module.exports = order;