import mongoose from "mongoose";

const unlockCities = mongoose.Schema({
    cityId:String,
    unlockCities: []
});

export const UnlockCities = mongoose.model("UnlockCities", unlockCities, "unlockCities"); 
