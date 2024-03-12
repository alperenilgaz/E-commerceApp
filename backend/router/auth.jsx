const express = require("express")
const router = express.Router()
const User = require("../models/User.jsx")
const bcrypt = require("bcryptjs")

const generateRandomAvatar = () => {
    const randomAvatar = Math.floor(Math.random()*71)
    return  `https://i.pravatar.cc/300?img=${randomAvatar}`
}   
// Kullanıcı kayıtı (register)
router.post("/register",async (req,res) => {
    try {
        const {username,email,password} = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({error:"Email adress is already registed"})
        }
        const defaultAvatar =generateRandomAvatar()
      const newUser =   await new User({
            username,
            email,
            password:hashedPassword,
            avatar:defaultAvatar,
        })
        await newUser.save()
        res.status(201).json(newUser)

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server Error!"})
    }
})

// Kullanıcı Girişi (login)

router.post("/login",async(req,res) => {
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({error:"Invalid email or password"})   
        }
        const isPasswordValid = await bcrypt.compare(password,user.password)
        if(!isPasswordValid){
            return res.status(401).json({error:"Invalid email or password"})
        }
        res.status(200).json({
            id:user._id,
            email:user.email,
            username:user.username,
            role:user.role,
            avatar:user.avatar
        })
    } catch (error) {
        res.status(500).json({error:"Server Error!"})
    }
})



module.exports = router