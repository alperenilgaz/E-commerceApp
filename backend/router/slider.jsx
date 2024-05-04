const express = require("express")
const router = express.Router()
const Slider = require("../models/Slider.jsx")

//  slider oluşturma 
router.post("/",async(req,res) => {
    try {
        const {img} = req.body
        const newSlider = new Slider({img})
        await newSlider.save()
        res.status(201).json(newSlider)
    } catch (error) {
        console.log(error);
    }
})
// tüm sliderları getirme

router.get("/",async(req,res) => {
    try {
        const slider = await Slider.find()
        res.status(200).json(slider)
    } catch (error) {
        console.log("error");
        res.status(500).json({error:"Server Error"})
    }
})

// belirli bir slider'ı getirme

router.get("/:sliderId",async(req,res) => {
    try {
        const sliderId = req.params.sliderId
        try {
            const slider = await Slider.findById(sliderId)
            res.status(200).json(slider)
        } catch (error) {
            res.status(404).json({error:"Slider Not Found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server Error"})
    }
 

})

  // slider Güncelleme
  router.put("/:sliderId",async(req,res) => {
    try {
        const sliderId = req.params.sliderId
        const updates = req.body
        
        const existingSlider = await Slider.findById(sliderId)
        if(!existingSlider){
            return res.status(404).json({error:"Slider Not Found"})
        }
        const updateSlider = await Slider.findByIdAndUpdate(
            sliderId,
            updates,
            {new:true}
        )
        res.status(200).json(updateSlider)
    } catch (error) {
        console.log("error");
        res.status(500).json({error:"Server Error"})
    }
})

// slider Silme

router.delete("/:sliderId",async(req,res) => {
  try {
    const sliderId = req.params.sliderId
    const deletedSlider = await Slider.deleteOne({_id:sliderId})
    if(deletedSlider.deleteCount===0){
        res.status(404).json({error:"Slider Not Found"})
    }
    res.status(200).json(deletedSlider)
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"Server Error"})
  }
})
module.exports = router