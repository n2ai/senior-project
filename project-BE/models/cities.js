import mongoose from "mongoose";

const citiesSchema = new mongoose.Schema({
    _id:String,
    cityId: String,
    cityQuizId:[],
    cityCulture:String,
    cityCuisine:String,
    cityPeople:String,
    cityName:String,
    cityRegion:String,
    cityDescription:String
})

export const Cities = mongoose.model("Cities",citiesSchema, "cities");