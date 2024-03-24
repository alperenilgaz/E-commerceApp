const express = require("express")
const router = express.Router()
const Product = require("../models/Product.jsx")

// Tüm ürünleri getirme ("Read all")
router.get("/", async (req, res)=> {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        console.log("error");
    }
})

//  Ürünleri oluşturma (create product)

router.post("/", async(req,res) => {
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()

        res.status(201).json(newProduct)
    } catch (error) {
        console.log(error)
    }

})

// Belirli bir ürünü getirme ((filter product))

router.get("/:productId",async(req,res) => {
    try {
        const productId = req.params.productId
            const product = await Product.findById(productId)
            if(!product){
               return res.status(404).json({error:"Product not found"})

            }
            res.status(200).json(product)
      
    } catch (error) {
        console.log(error);   
        res.status(500).json({error:"Server Error!"})
    }
})

// Ürün güncelleme (update product)
router.put("/:productId",async(req,res) => {
    try {
        const productId = req.params.productId
        const updated = req.body
        const existingProduct = await Product.findById(productId)
        if(!existingProduct){
          return  res.status(404).json({error:"Server Error"})
        }
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            updated,
            {new:true}
        )
    
        res.status(200).json(updatedProduct)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server Error!"})
    }
})

// Ürün Silme (delete product)

router.delete("/:productId",async(req,res) => {
    try {
        const productId = req.params.productId
        const deleteProduct = await Product.deleteOne({_id:productId})
        if (deleteProduct.deletedCount===0) {
            return res.status(404).json({error:"Product Not found"})
        }
    res.status(200).json(deleteProduct)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server Error!"})
    }
})

// ürünleri isme göre getirme (get-product-by-name)

router.get("/search/:productName",async(req,res) => {
    try {
        const productName = req.params.productName
        const products = await Product.find({
            name:{$regex : productName, $options:"i"}
        })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({error:"Server Error"})    
    }
})
module.exports = router