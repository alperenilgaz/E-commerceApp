const mongoose = require("mongoose")

const AboutSchema = mongoose.Schema(
    {
        img:{type:String,required:true}
    },
    {timestamps:true}
)

const About = mongoose.model("About",AboutSchema)
module.exports = About