const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    items:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'product'
            },
            quantity:Number,
            price:Number

            
        }


    ],

    address:{
        fullName:String,
        phone:String,
        address:String,
        city:String,
        state:String,
        pincode:String
    },
    totalAmount:Number,
    paymentMethod:{
        type:String,
        default:'COD'
    },
    status:{
        type:String,
        default:'placed'
    }
   



});

const orderModel = mongoose.model("order",orderSchema)

module.exports = orderModel;