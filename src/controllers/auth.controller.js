const userModel = require("../models/user.model");


async function registerUser(req,res){
    const { username,email,password,role="user"} = req.body;


     const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({message:"user already exists"})
    }


    const user = await userModel.create({
        username,email,password,role
    })


    res.status(201).json({
        message:"user registered successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
        }

   
    })

    
}


async function loginUser(req,res){
    const { username,email,password} = req.body;

    res.status(200).json({
            message:"user logged in successfully",
            user:{
                id:user._id,
                username:user.username,
                email:user.email,
                role:user.role,
            }
         })

}

// async function profileUser(req,res){
//     res.status(200).json({
//         user:{
//             id:user._id,
//             username:user.username,
//             email:user.email,
//             role:user.role,

//         }

//     })

// }

module.exports = {registerUser,loginUser}