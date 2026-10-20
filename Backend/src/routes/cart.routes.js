const express = require('express');
const cartController = require("../controllers/cart.controller")





const router = express.Router();
 router.post("/add",cartController.addToCart)

 router.post('/remove',cartController.removeItem)
   // router.get('/profile',authController.profileUser)


 router.post('/update',cartController.updateQuantity)



 router.get('/:userId',cartController.getCart)

module.exports = router;