const express = require("express")
const router = express.Router()

// Diğer rota dosyalarını içe aktar

const categoriesRoute = require("./categories.jsx")
const authRoute = require("./auth.jsx")
const productRoute = require("./product.jsx")

// Her ilgili rotayı yol altında kullan

router.use("/categories",categoriesRoute)
router.use("/auth",authRoute)
router.use("/product",productRoute)

module.exports  = router