import mongoose from "mongoose";

const regionsSchema = mongoose.Schema({
    _id:String,
    regionId:String,
    regionCities:[],
    regionProgress: Number
})

export const Regions = mongoose.model("Regions", regionsSchema, "regions")
