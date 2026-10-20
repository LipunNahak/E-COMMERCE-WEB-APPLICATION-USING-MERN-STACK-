

const addressModel = require("../models/address.model");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs");

const saveAddress = async (req,res)=>{
    try{
        const address=await addressModel.create(req.body);
        res.json({message:"address saved successfully",address})

    }catch(error){
        res.status(500).json({message:"error saving address",error});
    }

};

const getAddress=async (req,res)=>{
    try{
        const addresses=await addressModel.find({
            userId:req.params.userId
        })
        res.json(addresses);
    }catch(error){
        res.status(500).json({message:"error fetching address",error});

    }
}


module.exports = {saveAddress,getAddress};