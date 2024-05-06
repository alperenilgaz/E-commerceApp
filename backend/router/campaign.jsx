const express = require("express")
const router = express.Router()
const Campaign = require("../models/Campaign.jsx")

// Campaign oluşturma
router.post("/",async(req,res) => {
    try {
        const {shop,strong,title,img} = req.body
        const newCampaign = new Campaign({shop,strong,title,img})
        await newCampaign.save()
        res.status(201).json(newCampaign)
    } catch (error) {
        console.log(error);
    }
})

// get all Campaign
router.get("/",async(req,res) => {
    try {
        const campaign = await Campaign.find()
        res.status(200).json(campaign)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server Error"})
    }
})

// get single campaign

router.get("/:campaignId",async(req,res) => {
    try {
        const campaignId = req.params.campaignId
        try {
            const campaign = await Campaign.findById(campaignId)
            res.status(200).json(campaign)
        } catch (error) {
            res.status(404).json({error:"Campaign Not Found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server Error"})
    }
})

// update campaign

router.put("/:campaignId",async(req,res) => {
    try {
        const campaignId = req.params.campaignId
        const updates = req.body
        const existingCampaign = await Campaign.findById(campaignId)
        if(!existingCampaign){
            return res.status(404).json({error:"Campaign not found"})
        }
        const updatesCampaign = await Campaign.findByIdAndUpdate(
            campaignId,
            updates,
            {new:true}
        )
        res.status(200).json(updatesCampaign)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server Error"})
    }
})


module.exports = router