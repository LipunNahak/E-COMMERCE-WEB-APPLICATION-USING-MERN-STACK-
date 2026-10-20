const productModel = require("../models/product.model");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs");

const createProduct=async (req,res) =>{
    try{
        const products = await productModel.create(req.body);
        res.json({
            message:'product created successfully',
            products,

        })
    }
    catch(error){
        res.status(500).json({message:'server error',error:error.message});
    }
};


const getProduct=async (req,res) =>{
    try{

        const {search,category}=req.query;
        let filter={};
        if(search){
            filter.title={$regex:search,$options:'i'};

        }
        if(category){
            filter.category=category;
        }




        const products = await productModel.find(filter).sort({createdAt:-1});
        res.json(products);
           
    }
    catch(error){
        res.status(500).json({message:'server error',error:error.message});
    }
};


const updateProduct=async (req,res)=>{
    try{
        const updated = await productModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.json({
            message:'product updated successfully',
            updated,
        })
    }
    catch(error){
        res.status(500).json({message:'server error',error:error.message});
    }
};


const deleteProduct=async (req,res)=>{
    try{
        await productModel.findByIdAndDelete(req.params.id);
        res.json({
            message:'product deleted successfully'
           

        })
    }
    catch(error){
        res.status(500).json({message:'server error',error:error.message});
    }
};





module.exports = {createProduct,getProduct,updateProduct,deleteProduct};