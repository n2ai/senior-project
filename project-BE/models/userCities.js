import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const userCitiesSchema = new mongoose.Schema({
    _id:String,
    cityId:String,
    finishedQuiz:[],
    finished:Boolean,
})

export const UserCities = mongoose.model("UserCities", userCitiesSchema,"userCities");