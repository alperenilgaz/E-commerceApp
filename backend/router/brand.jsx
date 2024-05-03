const express = require("express")
const router = express.Router()
const Brand = require("../models/Brand.jsx")

// yeni marka ekleme (create-brands)
router.post("/",async(req,res) => {
    try {
        const {name,img} = req.body
        const newBrands = new Brand({name,img})
        await newBrands.save()
        res.status(201).json(newBrands)
    } catch (error) {
        console.log(error);
    }
})

// tüm markaları getirme(get-all-brands)
router.get("/",async(req,res) => {
    try {
        const brands = await Brand.find()
        res.status(200).json(brands)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Server Error"})
    }
})

// İd ye göre marka getirme (get-brands-byID)

router.get("/:brandId",async(req,res) => {
    try {
        const brandId = req.params.brandId
    try {
        const brand = await Brand.findById(brandId)
        res.status(200).json(brand)
    } catch (error) {
        console.log(error)
        res.status(404).json({error:"Brand Not Found"})
    }
    } catch (error) {
        console.log("error")
        res.status(500).json({error:"Server Error"})
    }
})

// belirli bir markayı silme (delete-brand)

router.delete("/:brandId",async(req,res) => {
    try {
        const brandId = req.params.brandId
        const deleteBrand = await Brand.deleteOne({_id:brandId})

        if(deleteBrand.deletedCount===0){
            return res.status(404).json({error:"Brand not found"})
        }
        res.status(200).json(deleteBrand)
    
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." });
    }

})

// bir markayı güncelleme (update-brand)
router.put("/:brandId",async(req,res) => {
 try {
    const brandId = req.params.brandId
    const updates = req.body

    const existingBrand = await Brand.findById(brandId)
    if(!existingBrand){
          return res.status(404).json({error:"Server Error"})
    }
    const updateBrand = await Brand.findByIdAndUpdate(
        brandId,
        updates,
        {new:true}
    )
    res.status(200).json(updateBrand)
 } catch (error) {
    console.log(error)
    res.status(500).json({error:"Server Error!"})
    
 }
})
module.exports = router