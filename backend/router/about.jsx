const express = require("express")
const router = express.Router()
const About = require("../models/About.jsx")



// yeni bir about oluşturma

router.post("/",async(req,res) => {
    try {
        const {img} = req.body
        const newAbout = new About({img})
        await newAbout.save()
        res.status(201).json(newAbout)
    } catch (error) {
        console.log(error)
    }
})

// tüm about resimlerini getirme

router.get("/",async(req,res) => {
    try {
        const about = await  About.find()
        res.status(200).json(about)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"server error"})
    }
})

// id'ye göre about getirme

router.get("/:aboutId",async(req,res) => {
    try {
        const aboutId = req.params.aboutId
        try {
            const about = await About.findById(aboutId)
            res.status(200).json(about)
        } catch (error) {
            res.status(404).json({error:"About Image not found"})
        }
    } catch (error) {
        res.status(500).json({error:"server error"})
    }
})

 // belirli bir image'yi silme

 router.delete("/:aboutId",async(req,res) => {
    try {
        const aboutId = req.params.aboutId
        const deletedAbout = await About.deleteOne({_id:aboutId})
        if(deletedAbout.deletedCount===0){
            return res.status(404).json({error:"About Image not found"})
        }
        res.status(200).json(deletedAbout)
    } catch (error) {
        res.status(500).json({error:"Server Error"})
    }
 })

// belirli bir aboutu güncelleme

router.put("/:aboutId",async(req,res) => {
    try {
        const aboutId = req.params.aboutId
        const updates = req.body
        
        const existingAbout = await About.findById(aboutId)
        if(!existingAbout){
            return res.status(404).json({error:"server error"})
        }
        const updatesAbout = await About.findByIdAndUpdate(
            aboutId,
            updates,
            {new:true}
        )
        res.status(200).json(updatesAbout)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Server Error"})
        
    }
})

module.exports = router