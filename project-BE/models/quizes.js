import mongoose from "mongoose";

const quizesSchema = mongoose.Schema({
    _id:String,
    cityId:String,
    question:String,
    questioName:String,
    options: [],
    correctAnswer:String
})

export const Quizes = mongoose.model("Quizes", quizesSchema, "quizes");
