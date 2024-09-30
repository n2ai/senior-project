import mongoose from "mongoose";

const userQuizesSchema = new mongoose.Schema({
    _id:String,
    cityId:String,
    userAnswers:[],
    currentProgress:Number,
    currentQuestion:Number
})

export const UserQuizes = mongoose.model("UserQuizes", userQuizesSchema, "userQuizes");
