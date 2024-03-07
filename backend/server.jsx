const express  = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const mainRouter = require("./router/index.jsx")
const logger = require("morgan")
const app = express()
const port =5000
dotenv.config()

const MongoConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connect to mongodb")
    } catch (error) {
        throw(error)
    }
}
// Middlewares

app.use(express.json())

app.use(logger("dev"))

app.use("/api",mainRouter)

app.listen(5000,() => {
    MongoConnect()
    console.log(`Sunucu ${port} portyunda çalışıyor`);
})