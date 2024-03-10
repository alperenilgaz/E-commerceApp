const express = require("express")
const router = express.Router()
const Category = require("../models/Category.jsx")
// Yeni bir kategori oluşturma (Create)
router.post("/", async (req, res) => {
    try {
        const { name, img } = req.body

        const NewCategory = new Category({ name, img })
        await NewCategory.save()

        res.status(201).json(NewCategory)
        
    } catch (error) {
        console.log(error)
    }
})
// Tüm kategorileri getirme ("Read all")

router.get("/", async(req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (error) {
        console.log("error")
        res.status(500).json({error:"Server Error"})
    }
})

// Belirli bir kategoriyi getirme

router.get("/:categoryId",async(req,res) => {
    try {
        const categoryId=req.params.categoryId
      
        try {
            const category =  await Category.findById(categoryId)
            res.status(200).json(category)
        } catch (error) {
            console.log(error)
             res.status(404).json({error:"Category not found"})
            
        }
     
      
    } catch (error) {
        console.log("error")
        res.status(500).json({error:"Server Error"})
        
    }
    
    
})
// Belirli bir kategoriyi Güncelle

router.put("/:categoryId", async(req,res) => {
        try {
            const categoryId = req.params.categoryId
            const updates = req.body

            const existingCategory = await Category.findById(categoryId)
            if(!existingCategory){
              return  res.status(404).json({error:"Server Error"})
        
            }

            const updatedCategory = await Category.findByIdAndUpdate(
                categoryId,
                updates,
                {new:true}
                )
            res.status(200).json(updatedCategory)
        } catch (error) {
            console.log("error")
            res.status(500).json({error:"Server Error"})    
        }
})

// Belirli bir kategoriyi silme

router.delete("/:categoryId", async (req,res) => {
    try {
      const categoryId = req.params.categoryId;
  
      const deletedCategory = await Category.deleteOne({ _id: categoryId })
  
      if (deletedCategory.deletedCount===0) {
        return res.status(404).json({ error: "Category not found." });
      }
  
      res.status(200).json(deletedCategory);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });

module.exports = router