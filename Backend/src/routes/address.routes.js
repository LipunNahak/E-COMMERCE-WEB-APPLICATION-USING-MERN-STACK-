const express = require('express');
const addressController = require("../controllers/address.controller")





const router = express.Router();
 router.post("/add",addressController.saveAddress);

 router.get('/:userId',addressController.getAddress)
   // router.get('/profile',authController.profileUser)


module.exports = router;