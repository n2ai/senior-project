import mongoose from "mongoose";

const regionsSchema = mongoose.Schema({
    regionId:String,
    regionCities:[],
})

export const Regions = mongoose.model("Regions", regionsSchema, "regions")
