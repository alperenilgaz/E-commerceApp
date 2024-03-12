const express = require("express")
const router = express.Router()

// Diğer rota dosyalarını içe aktar

const categoriesRoute = require("./categories.jsx")
const authRoute = require("./auth.jsx")
const productRoute = require("./product.jsx")
const couponRoute = require("./coupon.jsx")
const usersRoute = require("./users.jsx")
// Her ilgili rotayı yol altında kullan

router.use("/categories",categoriesRoute)
router.use("/auth",authRoute)
router.use("/product",productRoute)
router.use("/coupon",couponRoute)
router.use("/users",usersRoute)


module.exports  = router