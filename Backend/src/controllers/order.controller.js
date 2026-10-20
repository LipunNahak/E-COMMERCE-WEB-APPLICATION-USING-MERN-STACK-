const orderModel = require("../models/order.model");
const cartModel = require("../models/cart.model");
const productModel = require("../models/product.model");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs");



const placeOrder=async (req,res) =>{
    try{
        const {userId,address}=req.body;

        const cart=await cartModel.findOne({userId}).populate('items.productId');
     
        if(!cart || cart.items.length === 0){
            return res.status(400).json({message:"cart is empty"});

        }
        const orderItems=cart.items.map(item =>({
            productId:item.productId._id,
            quantity:item.quantity,
            price:item.productId.price,
        }));

        const totalAmount=orderItems.reduce((total,item) => total + (item.price * item.quantity),0);

        for(let item of cart.items){
            await productModel.findByIdAndUpdate(item.productId._id,{$inc :{stock: -item.quantity}});
        }

        const order=await orderModel.create({
            userId,
            items:orderItems,
            address,
            totalAmount,
            paymentMethod:'COD',
        });

        await cartModel.findByIdAndUpdate({userId},{items:[]});

        res.status(201).json({message:"order placed successfully",order})


    }catch(error){
        res.status(500).json({message:"internal server error",error:error.message});
    }
}


module.exports = {placeOrder};
