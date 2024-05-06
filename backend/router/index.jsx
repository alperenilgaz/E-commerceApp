const express = require("express")
const router = express.Router()

// Diğer rota dosyalarını içe aktar

const categoriesRoute = require("./categories.jsx")
const authRoute = require("./auth.jsx")
const productRoute = require("./product.jsx")
const couponRoute = require("./coupon.jsx")
const usersRoute = require("./users.jsx")
const brandsRoute = require("./brand.jsx")
const aboutsRoute = require("./about.jsx")
const sliderRoute = require("./slider.jsx")
const logoRoute = require("./logo.jsx")
const campaignRouter = require("./campaign.jsx")
// Her ilgili rotayı yol altında kullan

router.use("/categories",categoriesRoute)
router.use("/auth",authRoute)
router.use("/product",productRoute)
router.use("/coupon",couponRoute)
router.use("/users",usersRoute)
router.use("/brands",brandsRoute)
router.use("/about",aboutsRoute)
router.use("/slider",sliderRoute)
router.use("/logo",logoRoute)
router.use("/campaign",campaignRouter)



module.exports  = router