

const express = require('express');
const router = express.Router();
const {registerUser , loginUser,logoutUser,authMiddleware} = require('../../Controllers/Auth/authControllers')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/logout',logoutUser)
router.post('/checkauth',authMiddleware,(req , res)=>{
    const user = req.user;
    res.status(200).json({
        success: true,
        message: 'Authenticated user!',
        user,

    })
})
module.exports = router;