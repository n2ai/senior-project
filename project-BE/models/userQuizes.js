import mongoose from "mongoose";

const userQuizesSchema = new mongoose.Schema({
    _id:String,
    userId: { type: String, required: true }, // Store userId as a string
    cityId: { type: String, required: true },
    userAnswers: [{
        questionName: { type: String },
        questionAnswer: { type: String }
    }],
    currentProgress: { type: Number, default: 0 },
    currentQuestion: { type: Number, default: 0 },
})

export const UserQuizes = mongoose.model("UserQuizes", userQuizesSchema, "userQuizes");
