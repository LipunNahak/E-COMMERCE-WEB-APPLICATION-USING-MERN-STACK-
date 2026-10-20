const express = require('express');
const productController = require("../controllers/product.controller")





const router = express.Router();
 router.post("/add",productController.createProduct)

 router.get('/',productController.getProduct)
   // router.get('/profile',authController.profileUser)

router.put('/update/:id',productController.updateProduct)
router.delete('/delete/:id',productController.deleteProduct)
module.exports = router;