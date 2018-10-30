const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


// Model for Adding Products
const productModel = new Schema({
    name : {type: String, required: true},
    brand : String,
    image : String,
    desc : String,
    price : Number,
    pentry : Number,
    category : String
})
//Required is used to make the field mendatory

module.exports = mongoose.model('Products',productModel);