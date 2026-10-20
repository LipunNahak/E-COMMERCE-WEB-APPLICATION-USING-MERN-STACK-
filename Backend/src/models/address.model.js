const mongoose=require('mongoose')

const addressSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
     
    fullName:String,
    phone:String,
    addressLine:String,
    city:String,
    state:String,
    pincode:String

});


const addressModel = mongoose.model("address",addressSchema)

module.exports =addressModel;