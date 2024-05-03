const express  = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors");
const path = require("path")
const bodyParser = require("body-parser")
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
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors());

app.use(logger("dev"))

app.use("/api",mainRouter)

app.use("/uploads",express.static(path.join(__dirname,"uploads")))


app.listen(5000,() => {
    MongoConnect()
    console.log(`Sunucu ${port} portunda çalışıyor`);
})