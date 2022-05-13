const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    // id's are created automatically by mongo 
    title : {
        type: String,
        
    },
    price : {
        type: Number,

    },
    description : {
        type : String
    }
    
},
{
    timestamps : true
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product

