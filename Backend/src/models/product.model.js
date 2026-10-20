const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
      
    },
    description:{
        type:String,
        
    },
   price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
    },
    image:{
        type:String,
    },
    stock:{
        type:Number,
        default:0,
    }

})

const productModel = mongoose.model("product",productSchema)

module.exports = productModel;