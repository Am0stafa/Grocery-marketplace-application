//! name , description , quantity , price , image
const mongoose = require('mongoose');


//? create schema
const productsSchema = new mongoose.Schema({
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
    },
    image:{
        type: String
    },
    isOutOfStock:{
        type: Boolean,
        default : false
    }
})

//? middleware

productsSchema.pre('save', function(next){
    if(this.quantity <= 0)
        this.isOutOfStock = true;
        
    next()
})


//? create model
const products = mongoose.model('products',productsSchema);

//? export model

module.exports = products