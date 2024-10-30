import mongoose from "mongoose";

const resetPasswordStorageModel = new mongoose.Schema({
    _id:String,
    passwordResetToken:String,
    passwordResetExpires: Date 
})

export const ResetPasswordStorage = mongoose.model("ResetPasswordStorage", resetPasswordStorageModel, "resetPasswordStorage");
