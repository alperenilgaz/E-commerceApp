const express = require("express")
const router  = express.Router()
const Coupon =  require("../models/Coupon.jsx")

// Tüm kategorileri getirme ("Read all")
router.get("/", async(req, res) => {
    try {
        const coupon = await Coupon.find()
        res.status(200).json(coupon)
    } catch (error) {
        console.log("error")
        res.status(500).json({error:"Server Error"})
    }
})


// Yeni bir kupon oluşturma (create-coupon)

router.post("/",async(req,res) => {
    try {
        const {code} = req.body
        const existingCouponCode = await Coupon.findOne({code})

        if(existingCouponCode){
            return res.status(400).json({error:"This coupon already exists"})
        }

        const newCoupon = new Coupon(req.body)
        newCoupon.save()
        res.status(201).json(newCoupon)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server Error!"})
    }
})

// Belirli bir kuponu getirme (get-single-coupon-by-id)
router.get("/:couponId",async(req,res) => {
    try {
        const couponId = req.params.couponId
        const coupon = await Coupon.findById(couponId)
        if(!coupon){
            return res.status(404).json({error:"Coupon not found"})
        }
        res.status(200).json(coupon)

    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Server Error!"})
    }
})

// Belirli bir kuponu getrime(get-single-coupon-finOne)

router.get("/code/:couponCode",async(req,res) => {
    try {
        const couponCode = req.params.couponCode
        const coupon = await Coupon.findOne({code:couponCode})
        if(!coupon){
            return res.status(404).json({error:"Coupon not found"})
        }
        res.status(200).json(coupon)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Server Error"})
    }
})


// Kupon Güncelleme (update-coupon)
router.put("/:couponId", async(req,res) => {
    try {
        const couponId = req.params.couponId
        const updates = req.body
        const existingCouponCode = await Coupon.findById(couponId)

        if(!existingCouponCode){
            return res.status(404).json({error:"Server Error"})
        }
        const updateCoupon = await Coupon.findByIdAndUpdate(
            couponId,
            updates,
            {new:true}
        )
        res.status(200).json(updateCoupon)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Server Error"})
    }
})

// Kupon Silme (delete-Coupon)

router.delete("/:couponId",async(req,res) => {
  try {
    const couponId = req.params.couponId
    const deleteCoupon = await Coupon.deleteOne({_id:couponId})
    if(deleteCoupon.deletedCount===0){
        res.status(404).json({error:"Category not found"})
    }
    res.status(200).json(deleteCoupon)
  } catch (error) {
    console.log(error)
    res.status(500).json({error:"Server Error"})
  }
})

module.exports = router