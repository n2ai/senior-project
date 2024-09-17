import mongoose from "mongoose";
const cityRequirementsSchema = mongoose.Schema({
    _id:String,
    cityId:String,
    requirements:[]
})

export const CityRequirements = mongoose.model("CityRequirements",cityRequirementsSchema,"cityRequirements");
