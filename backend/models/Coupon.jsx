const mongoose = require("mongoose")

const CouponSchema = mongoose.Schema(
    {
        code:{type:String,requried:true},
        discountPercent:{type:Number,required:true}
    },
    {timestamps:true}
)

const Coupon = mongoose.model("Coupon",CouponSchema)

module.exports = Coupon