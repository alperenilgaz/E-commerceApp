const express = require("express")
const router = express.Router()
const Logo = require("../models/Logo.jsx")


// logo oluşturma

router.post("/",async(req,res) => {
    try {
        const {img} = req.body
        const newLogo = new Logo({img})
        await newLogo.save()
        res.status(201).json(newLogo)
    } catch (error) {
        console.log(error);
    }
})

// tüm logoları getirme

router.get("/",async(req,res) => {
    try {
        const logo = await Logo.find()
        res.status(200).json(logo)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server Error"})
    }
})

// belirli bir logoyu getirme

router.get("/:logoId",async(req,res) => {
    try {
        const logoId = req.params.logoId
        try {
            const logo = await Logo.findById(logoId)
            res.status(200).json(logo)
        } catch (error) {
            res.status(404).json({error:"Logo Not Found"})
        }
    } catch (error) {
        res.status(500).json({error:"Server Error"})
    }
})
 // logo güncelleme

 router.put("/:logoId",async(req,res) => {
    try {
        const logoId = req.params.logoId
        const updates = req.body
        const existingLogo = await Logo.findById(logoId)
        if(!existingLogo){
            return res.status(404).json("Logo is not found")
        }
        const updatesLogo = await Logo.findByIdAndUpdate(
            logoId,
            updates,
            {new:true}
        )
        res.status(200).json(updatesLogo)

    } catch (error) {
        res.status(500).json({error:"Server Error"})
    }
 })


module.exports = router