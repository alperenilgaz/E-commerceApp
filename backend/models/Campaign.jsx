const mongoose = require("mongoose")

const CampaignSchema = mongoose.Schema(
    {
        title:{type:String,required:true},
        img:{type:String,required:true},
        strong:{type:String,required:true},
        shop:{type:String,required:true}
        
    },
    {timestamps:true}
)

const Campaign = mongoose.model("Campaign",CampaignSchema)

module.exports = Campaign