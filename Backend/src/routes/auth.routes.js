const express = require('express');
const authController = require("../controllers/auth.controller")





const router = express.Router();
 router.post("/Signup",authController.registerUser)

 router.post('/login',authController.loginUser)
   // router.get('/profile',authController.profileUser)


module.exports = router;
