
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../../Models/User')


//signup

const registerUser = async (req , res)=>{
    const {userName , email , password} = req.body;

    try {
       const checkUser = await User.findOne({email})

       if(checkUser){
        return res.json({success:false, message: 'User already exist with same email'})
       }


        //hashed the password 
        const hashPassword = await bcrypt.hash(password,12)
        const newUser = new User({
            userName,
            email,
            password: hashPassword,
        })
        
        await newUser.save()
        res.status(200).json({
            success:true,
            message: 'Registration Successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message:'Internal server error'})
    }
}


//login

const loginUser = async(req , res)=>{
    const {email , password} = req.body;
        
    try {
       const checkUser = await User.findOne({email})

       if(!checkUser)
        return res.json({
        success:false,
        message: 'User does not exists please register first '
       })

       const isPasswordMatch = await bcrypt.compare(password, checkUser.password)
       if(!isPasswordMatch) return res.json({
        success:false,
        message: ' Incorrect Password '
       })

       const token = jwt.sign({
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email
       },'CLIENT_SECRET_KEY',{expiresIn:'7d'}) ////////////////////////


       res.cookie('token',token, {httpOnly: true, secure: false}).json({
        success:true,
        message: 'Logged In Successfully',
        user:{
            email: checkUser.email,
            role:checkUser.role,
            id: checkUser.id
        }
       })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message:'Internal server error'})
    }
}

//logout

const logoutUser = (req, res) => {
  res.clearCookie('token').json({
    success: true,
    message: 'Logged out successfully'
  })
}

//Authmiddleware

const authMiddleware = async(req, res,next) =>{
 const token = req.cookies.token

 if(!token){
    return res.status(401).json({
        success: false,
        message: 'Unauthorized user! '
    })
 }
 try {
    const decoded = jwt.verify(token,'CLIENT_SECRET_KEY' )

    req.user = decoded
    next()
} catch (error) {
    return res.status(401).json({
        success: false,
        message: 'Unauthorized user! '
    })
}
} 
module.exports = {registerUser ,loginUser ,logoutUser , authMiddleware}